#!/usr/bin/env python3
"""Extract verbatim page content from the Wix HTML into JSON the Next.js site imports.

Output: src/content/generated/<lang>/<slug>.json with
  meta     - title / description / canonical / og
  blocks   - document-order list of text / image / link / video / gallery blocks.
             Text blocks keep inline styling as "runs" (accent colour, bold, links).
These files are generated - edit copy in src/content/*.ts overrides, not here.

Usage: python3 scripts/extract_content.py <archive_html_dir>   (expects <dir>/*.html and <dir>/de/*.html)
"""
import json
import re
import sys
from pathlib import Path

from bs4 import BeautifulSoup, NavigableString, Tag

ROOT = Path(__file__).resolve().parent.parent
SRC = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "archive" / "html"
OUT = ROOT / "src" / "content" / "generated"

THEME = {}  # color_N -> hex, filled from the HTML theme vars
FONT_COLORS = {}  # font_N class -> hex (Wix text presets carry a default colour)
WIX_ID = re.compile(r"[0-9a-f]{6}_[0-9a-f]{32}(?:f000|~mv2)?\.(?:png|jpe?g|gif|webp|svg|avif)", re.I)


def load_theme(html: str):
    for n, rgb in re.findall(r"--color_(\d+):(\d+,\d+,\d+)", html):
        r, g, b = (int(x) for x in rgb.split(","))
        THEME[f"color_{n}"] = f"#{r:02X}{g:02X}{b:02X}"
    for f, c in re.findall(r"\.font_(\d+)\{[^}]*?color:rgb\(var\(--color_(\d+)\)\)", html):
        FONT_COLORS[f"font_{f}"] = THEME.get(f"color_{c}")


def norm_href(href: str) -> str:
    href = href.strip()
    href = re.sub(r"^https?://(www\.)?aesthlos\.com", "", href) or "/"
    m = re.search(r"/_files/ugd/([0-9a-z_]+\.pdf)", href)
    if m:
        return "wixfile:" + m.group(1)
    return href


def style_of(node, block):
    """Inherited colour / bold / link for a text node, looking up to the block element."""
    color = bold = href = None
    el = node.parent
    while el is not None and el is not block.parent:
        if isinstance(el, Tag):
            st = el.get("style", "") or ""
            if color is None:
                m = re.search(r"color:\s*(#[0-9A-Fa-f]{6})", st)
                if m:
                    color = m.group(1).upper()
                else:
                    for c in el.get("class", []) or []:
                        if c in THEME:
                            color = THEME[c]
                            break
            if bold is None and (el.name in ("strong", "b") or "font-weight:bold" in st.replace(" ", "")):
                bold = True
            if href is None and el.name == "a" and el.get("href"):
                href = norm_href(el["href"])
        el = el.parent
    if color is None:
        for c in block.get("class", []) or []:
            if c in FONT_COLORS and FONT_COLORS[c]:
                color = FONT_COLORS[c]
                break
    return color, bool(bold), href


def runs_of(block: Tag):
    runs = []
    for node in block.descendants:
        if isinstance(node, Tag) and node.name == "br":
            runs.append({"text": "\n"})
            continue
        if not isinstance(node, NavigableString) or isinstance(node, type(block)):
            continue
        text = str(node).replace("​", "").replace(" ", " ")
        if not text:
            continue
        color, bold, href = style_of(node, block)
        run = {"text": text}
        if color:
            run["color"] = color
        if bold:
            run["bold"] = True
        if href:
            run["href"] = href
        if runs and {k: v for k, v in runs[-1].items() if k != "text"} == {k: v for k, v in run.items() if k != "text"}:
            runs[-1]["text"] += text
        else:
            runs.append(run)
    # tidy whitespace at the edges, keep inner spacing verbatim
    while runs and not runs[0]["text"].strip():
        runs.pop(0)
    while runs and not runs[-1]["text"].strip():
        runs.pop()
    if runs:
        runs[0]["text"] = runs[0]["text"].lstrip()
        runs[-1]["text"] = runs[-1]["text"].rstrip()
    return runs


def block_color(block: Tag):
    for el in [block, *block.find_all(True)]:
        st = el.get("style", "") or ""
        m = re.search(r"color:\s*(#[0-9A-Fa-f]{6})", st)
        if m:
            return m.group(1).upper()
        for c in el.get("class", []) or []:
            if c in THEME:
                return THEME[c]
    return None


def image_of(el: Tag):
    info = el.get("data-image-info")
    if info:
        try:
            d = json.loads(info).get("imageData", {})
            return d.get("uri"), d.get("alt") or "", d.get("width"), d.get("height")
        except json.JSONDecodeError:
            return None
    if el.name == "img":
        m = WIX_ID.search(el.get("src") or "")
        if m:
            return m.group(0), el.get("alt") or "", None, None
    return None


def galleries(html: str, page_ids: dict):
    out = {}
    dec = json.JSONDecoder()
    for m in re.finditer(r'"(comp-[a-z0-9]+)_galleryData":', html):
        try:
            obj, _ = dec.raw_decode(html, m.end())
        except json.JSONDecodeError:
            continue
        items = []
        for it in sorted(obj.get("items", []), key=lambda x: x.get("orderIndex", 0)):
            md = it.get("metaData", {})
            data = (md.get("link") or {}).get("data") or {}
            target = data.get("pageId") or data.get("url")
            items.append({"image": it.get("mediaUrl") or md.get("fileName"), "title": md.get("title") or "",
                          "alt": md.get("alt") or "", "href": page_ids.get(target, target)})
        out[m.group(1)] = items
    return out


def page_ids_of(html: str):
    return {"#" + a: "/" + (b if b != "home" else "")
            for a, b in re.findall(r'"pageId":"([a-z0-9]{5})","title":"[^"]*","pageUriSEO":"([^"]*)"', html)}


def extract(path: Path, lang: str):
    raw = path.read_text(encoding="utf-8")
    load_theme(raw)
    pids = page_ids_of(raw)
    soup = BeautifulSoup(raw, "lxml")

    def m(k):
        t = soup.find("meta", attrs={"name": k}) or soup.find("meta", attrs={"property": k})
        return t.get("content") if t else None

    canon = soup.find("link", rel="canonical")
    meta = {"title": soup.title.get_text(strip=True) if soup.title else "", "description": m("description"),
            "ogTitle": m("og:title"), "ogDescription": m("og:description"), "ogImage": m("og:image"),
            "canonical": canon.get("href") if canon else None}

    gals = galleries(raw, pids)
    root = soup.find(id="SITE_PAGES") or soup.find(id="SITE_CONTAINER") or soup.body
    blocks, seen_img, seen_gal = [], set(), set()
    section = None
    for el in root.descendants:
        if not isinstance(el, Tag):
            continue
        if el.name == "section" and el.get("id"):
            section = el["id"]
            continue
        cid = el.get("id") or ""
        if cid in gals and cid not in seen_gal:
            seen_gal.add(cid)
            blocks.append({"type": "gallery", "section": section, "id": cid, "items": gals[cid]})
            continue
        if any(p.get("id") in gals for p in el.parents if isinstance(p, Tag)):
            continue
        if el.get("data-testid") == "richTextElement":
            for blk in el.find_all(["h1", "h2", "h3", "h4", "h5", "h6", "p", "li"]):
                if blk.find_parent(["p", "li", "h1", "h2", "h3", "h4", "h5", "h6"]):
                    continue
                runs = runs_of(blk)
                if not runs:
                    continue
                b = {"type": "text", "section": section, "tag": blk.name, "runs": runs}
                c = block_color(blk)
                if c and c != "#FFFFFF":
                    b["color"] = c
                blocks.append(b)
        elif el.name in ("wow-image", "img") or el.get("data-image-info"):
            img = image_of(el)
            if img and img[0] and img[0] not in seen_img:
                seen_img.add(img[0])
                blocks.append({"type": "image", "section": section, "src": img[0], "alt": img[1],
                               "width": img[2], "height": img[3]})
        elif el.get("data-video-info"):
            try:
                d = json.loads(el["data-video-info"])
                blocks.append({"type": "video", "section": section, "id": d.get("videoId")})
            except json.JSONDecodeError:
                pass
        elif el.name == "a" and el.get("href") and not el.find_parent(attrs={"data-testid": "richTextElement"}):
            text = " ".join(el.get_text(" ", strip=True).split())
            if text and not text.startswith("Section1SlideShow"):
                blocks.append({"type": "link", "section": section, "text": text, "href": norm_href(el["href"])})
    # header/footer chrome lives outside SITE_PAGES; filter only if that container was missing
    chrome = {"Αρχική", "Η Φιλοσοφία μας", "Tα Ελληνικά Μέλια", "Οι Βοτανικές Συνθέσεις", "Οι Συλλογές Μελιών",
              "Επικοινωνία", "More", "Startseite"}
    blocks = [b for b in blocks if not (b["type"] == "link" and root.name == "body" and b["text"] in chrome)]
    blocks = [b for b in blocks if not (b["type"] == "image" and b["src"].startswith("21375d_212d27"))]
    return {"lang": lang, "slug": path.stem, "meta": meta, "blocks": blocks}


def main():
    for lang, d in (("el", SRC), ("de", SRC / "de")):
        (OUT / lang).mkdir(parents=True, exist_ok=True)
        for f in sorted(d.glob("*.html")):
            data = extract(f, lang)
            (OUT / lang / f"{f.stem}.json").write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")
            print(lang, f.stem, len(data["blocks"]))


if __name__ == "__main__":
    main()
