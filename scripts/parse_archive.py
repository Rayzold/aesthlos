#!/usr/bin/env python3
"""Parse the downloaded Wix HTML (archive/html/*.html) into a readable archive.

For each page writes archive/pages/<slug>/:
  content.md   - document-order outline: sections, verbatim text blocks, images, links, videos
  meta.json    - title, description, og tags, canonical
  images.json  - every image: wix id, original size, alt, display order, local file name
Also writes archive/images-index.json (all pages).

Usage:  python3 scripts/parse_archive.py [project_root] [lang]   (lang=de parses archive/html/de into archive/pages-de)
"""
import json
import re
import sys
from pathlib import Path

from bs4 import BeautifulSoup, NavigableString, Tag

ROOT = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parent.parent
LANG = sys.argv[2] if len(sys.argv) > 2 else ""
HTML_DIR = ROOT / "archive" / "html" / LANG if LANG else ROOT / "archive" / "html"
OUT_DIR = ROOT / "archive" / (f"pages-{LANG}" if LANG else "pages")
MEDIA_DIR = ROOT / "archive" / "media"

PATHS = {
    "home": "/",
}

WIX_ID = re.compile(r"[0-9a-f]{6}_[0-9a-f]{32}(?:f000|~mv2)?\.(?:png|jpe?g|gif|webp|svg|avif)", re.I)


def block_text(el: Tag) -> str:
    """Text of a block element, keeping <br> as line breaks, collapsing other whitespace."""
    parts = []
    for node in el.descendants:
        if isinstance(node, NavigableString):
            parts.append(str(node))
        elif isinstance(node, Tag) and node.name == "br":
            parts.append("\n")
    text = "".join(parts).replace("​", "")
    lines = [re.sub(r"[ \t ]+", " ", ln).strip() for ln in text.split("\n")]
    return "\n".join(lines).strip()


def meta(soup: BeautifulSoup) -> dict:
    def m(key):
        tag = soup.find("meta", attrs={"name": key}) or soup.find("meta", attrs={"property": key})
        return tag.get("content") if tag else None

    canon = soup.find("link", rel="canonical")
    return {
        "title": soup.title.get_text(strip=True) if soup.title else None,
        "description": m("description"),
        "og:title": m("og:title"),
        "og:description": m("og:description"),
        "og:image": m("og:image"),
        "og:url": m("og:url"),
        "og:type": m("og:type"),
        "twitter:card": m("twitter:card"),
        "google-site-verification": m("google-site-verification"),
        "robots": m("robots"),
        "canonical": canon.get("href") if canon else None,
        "lang": soup.html.get("lang") if soup.html else None,
    }


def image_from(el: Tag):
    info = el.get("data-image-info")
    if info:
        try:
            d = json.loads(info).get("imageData", {})
            return {"id": d.get("uri"), "w": d.get("width"), "h": d.get("height"), "alt": d.get("alt") or ""}
        except json.JSONDecodeError:
            pass
    if el.name == "img":
        src = el.get("src") or el.get("data-src") or ""
        m = WIX_ID.search(src)
        if m:
            return {"id": m.group(0), "w": None, "h": None, "alt": el.get("alt") or ""}
    return None


def walk(page_root: Tag):
    """Yield outline items in document order."""
    seen_imgs = set()
    seen_text = set()
    for el in page_root.descendants:
        if not isinstance(el, Tag):
            continue
        if el.name == "section" and el.get("id"):
            yield {"type": "section", "id": el["id"]}
        elif el.get("data-testid") == "richTextElement":
            for blk in el.find_all(["h1", "h2", "h3", "h4", "h5", "h6", "p", "li"]):
                if blk.find_parent(["p", "li"]) is not None and blk.name in ("p",):
                    continue
                txt = block_text(blk)
                if txt:
                    key = (id(blk), txt)
                    if key in seen_text:
                        continue
                    seen_text.add(key)
                    yield {"type": "text", "tag": blk.name, "text": txt}
        elif el.name in ("wow-image", "img") or el.get("data-image-info"):
            img = image_from(el)
            if img and img["id"] and img["id"] not in seen_imgs:
                seen_imgs.add(img["id"])
                yield {"type": "image", **img}
        elif el.get("data-video-info"):
            try:
                d = json.loads(el["data-video-info"])
                yield {"type": "video", "id": d.get("videoId"), "w": d.get("videoWidth"), "h": d.get("videoHeight")}
            except json.JSONDecodeError:
                pass
        elif el.name == "a" and el.get("href"):
            label = block_text(el) or el.get("aria-label") or ""
            yield {"type": "link", "text": label.replace("\n", " "), "href": el["href"]}


PAGE_IDS = {}  # wix pageId (#xxxxx) -> url path, filled from site data


def page_id_map(html: str) -> dict:
    """Map Wix internal page ids to URL slugs using the router config embedded in the HTML."""
    out = {}
    for m in re.finditer(r'"pageId":"([a-z0-9]{5})","title":"[^"]*","pageUriSEO":"([^"]*)"', html):
        out["#" + m.group(1)] = "/" + m.group(2)
    for m in re.finditer(r'"([a-z0-9]{5})":\{"pageId":"[^"]*","title":"[^"]*","pageUriSEO":"([^"]*)"', html):
        out.setdefault("#" + m.group(1), "/" + m.group(2))
    return out


def galleries(html: str) -> list:
    """Pro-gallery items (image + caption + link) in display order."""
    result = []
    dec = json.JSONDecoder()
    for m in re.finditer(r'"(comp-[a-z0-9]+)_galleryData":', html):
        try:
            obj, _ = dec.raw_decode(html, m.end())
        except json.JSONDecodeError:
            continue
        items = []
        for it in sorted(obj.get("items", []), key=lambda x: x.get("orderIndex", 0)):
            md = it.get("metaData", {})
            link = md.get("link", {}) or {}
            data = link.get("data", {}) or {}
            target = data.get("pageId") or data.get("url") or None
            items.append({"image": it.get("mediaUrl") or md.get("fileName"), "title": md.get("title") or "",
                          "description": md.get("description") or "", "alt": md.get("alt") or "",
                          "link": PAGE_IDS.get(target, target)})
        result.append({"component": m.group(1), "items": items})
    return result


def local_name(wix_id: str) -> str:
    return wix_id.replace("~", "_")


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    index = {}
    for html_file in sorted(HTML_DIR.glob("*.html")):
        PAGE_IDS.update(page_id_map(html_file.read_text(encoding="utf-8")))
    for html_file in sorted(HTML_DIR.glob("*.html")):
        slug = html_file.stem
        raw = html_file.read_text(encoding="utf-8")
        soup = BeautifulSoup(raw, "lxml")
        root = soup.find(id="SITE_CONTAINER") or soup.body
        items = list(walk(root))

        out = OUT_DIR / slug
        out.mkdir(parents=True, exist_ok=True)
        (out / "meta.json").write_text(json.dumps(meta(soup), ensure_ascii=False, indent=2), encoding="utf-8")

        images = []
        lines = [f"# {slug}  ({PATHS.get(slug, '/' + slug)})", ""]
        order = 0
        for it in items:
            t = it["type"]
            if t == "section":
                lines += ["", f"## [section {it['id']}]", ""]
            elif t == "text":
                prefix = "#" * int(it["tag"][1]) + " " if it["tag"].startswith("h") else ""
                lines += [f"{prefix}{it['text']}", ""] if prefix else [f"<{it['tag']}> {it['text']}", ""]
            elif t == "image":
                order += 1
                fn = local_name(it["id"])
                exists = (MEDIA_DIR / fn).exists()
                images.append({"order": order, "id": it["id"], "file": fn, "downloaded": exists,
                               "width": it["w"], "height": it["h"], "alt": it["alt"]})
                lines += [f"![{it['alt']}](media/{fn}) _#{order} {it['w']}x{it['h']}_", ""]
            elif t == "video":
                lines += [f"[VIDEO {it['id']} {it['w']}x{it['h']}]", ""]
            elif t == "link":
                lines += [f"[LINK] {it['text'] or '(no text)'} -> {it['href']}", ""]
        gals = galleries(raw)
        if gals:
            lines += ["", "## [galleries]", ""]
            for g in gals:
                lines.append(f"### gallery {g['component']} ({len(g['items'])} items, display order)")
                for it in g["items"]:
                    lines.append(f"- {local_name(it['image'] or '')} | title: {it['title']} | alt: {it['alt']} "
                                 f"| link: {it['link']}" + (f" | desc: {it['description']}" if it['description'] else ""))
                lines.append("")
            (out / "galleries.json").write_text(json.dumps(gals, ensure_ascii=False, indent=2), encoding="utf-8")
        (out / "content.md").write_text("\n".join(lines), encoding="utf-8")
        (out / "images.json").write_text(json.dumps(images, ensure_ascii=False, indent=2), encoding="utf-8")
        index[slug] = images
        print(f"{slug:36s} texts={sum(1 for i in items if i['type']=='text'):3d} "
              f"images={len(images):3d} missing={sum(1 for i in images if not i['downloaded'])}")
    (OUT_DIR.parent / ("images-index.json" if not LANG else f"images-index-{LANG}.json")).write_text(json.dumps(index, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
