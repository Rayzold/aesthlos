"""One-off: freeze product + honey page copy into src/content/products.ts (verbatim from Wix,
plus the German Infinity page which Wix never translated)."""
import json, re
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
G = lambda lang, s: json.load(open(ROOT / f"src/content/generated/{lang}/{s}.json"))["blocks"]

WHITE = {"#FFFFFF", "#FFFFFE"}
def clean(runs, accent=None, fix_dark=False):
    out = []
    for r in runs:
        r = dict(r)
        r["text"] = re.sub(r"\n\n+", "\n", r["text"])
        if out and out[-1]["text"].endswith("\n") and r["text"].startswith("\n"):
            r["text"] = r["text"][1:]
        c = r.get("color")
        if c in WHITE:
            r.pop("color")
        elif fix_dark and c == "#2A2A2A":
            r["color"] = accent  # Wix bug: near-black text on black background
        if r["text"]:
            out.append(r)
    return out
txt = lambda b: "".join(r["text"] for r in b["runs"]).strip()

COMPOSITIONS = {
    "copy-of-the-composition-of-earth": ("infinity", "#1CBDBD", "/images/products/infinity.webp"),
    "compositionofearth": ("earth", "#49A94B", "/images/products/earth.webp"),
    "compositionofwater": ("water", "#0081BD", "/images/products/water.webp"),
    "compositionoffire": ("fire", "#E21C21", "/images/products/fire.webp"),
    "compositionofair": ("air", "#9374B4", "/images/products/air.webp"),
    "compositionofaether": ("aether", "#FFC824", "/images/products/aether.webp"),
}
USAGE = {"Οδηγίες Χρήσης", "Anweisungen für den Gebrauch"}
INGR = {"Συστατικά", "Zutaten"}

def composition(lang, slug, accent, image):
    b = G(lang, slug)
    texts = [x for x in b if x["type"] == "text"]
    u = next(i for i, x in enumerate(texts) if txt(x).rstrip(":") in USAGE)
    g = next(i for i, x in enumerate(texts) if txt(x).rstrip(":") in INGR)
    head = texts[:u]
    # benefit line = first all-caps line after the title
    k = next(i for i, x in enumerate(head) if i > 0 and txt(x) == txt(x).upper() and len(txt(x)) < 60 and re.search(r"[A-ZΑ-Ω]", txt(x)))
    fix = lang == "de" and slug == "compositionofaether"
    links = [x for x in b if x["type"] == "link"]
    imgs = [x for x in b if x["type"] == "image"]
    img = image if not (lang == "de" and slug == "compositionofaether") else "/images/products/aether-de.webp"
    return {
        "kind": "composition",
        "accent": accent,
        "title": txt(head[0]),
        "subtitle": [clean(x["runs"], accent, fix) for x in head[1:k]],
        "benefit": txt(head[k]),
        "description": [clean(x["runs"], accent, fix) for x in head[k + 1:]],
        "usageLabel": txt(texts[u]),
        "usage": [clean(x["runs"]) for x in texts[u + 1:g]],
        "ingredientsLabel": txt(texts[g]),
        "ingredients": [clean(x["runs"]) for x in texts[g + 1:]],
        "links": [{"label": l["text"], "href": l["href"].replace("?lang=de", "")} for l in links],
        "images": [{"src": img, "alt": imgs[0]["alt"] if imgs else ""}],
    }

HONEYS = {
    "aesthloswildoakhoney": ["/images/honeys/wild-oak-bees.webp", "/images/honeys/wild-oak-catalog.webp", "/images/honeys/wild-oak-honey.webp"],
    "aesthlosforesthoney": ["/images/honeys/forest-honey.webp"],
}
def honey(lang, slug, images):
    b = G(lang, slug)
    flow = []
    title = txt(b[0]); accent = b[0]["runs"][0].get("color", "#FFC824")
    STUDY = "pdf:21375d_64d52d0eb9de4b8ebb210f34ad4cb305.pdf"
    links = []
    for x in b[1:]:
        if x["type"] == "text":
            rs = clean(x["runs"])
            lead = all(r.get("bold") or r.get("color") for r in rs)
            flow.append({"type": "lead" if lead else "p", "runs": rs})
        elif x["type"] == "link" and x["href"] == STUDY:
            # the antioxidant-study link sits inline, under its heading (as on Wix)
            heading_at = max(i for i, f in enumerate(flow) if f["type"] == "lead")
            flow.insert(heading_at + 1, {"type": "pdf", "label": x["text"], "href": STUDY})
        elif x["type"] == "link":
            links.append({"label": x["text"], "href": x["href"].replace("?lang=de", "")})
    alts = [x["alt"] for x in b if x["type"] == "image"]
    return {"kind": "honey", "accent": accent, "title": title, "flow": flow, "links": links,
            "images": [{"src": s, "alt": alts[i] if i < len(alts) else ""} for i, s in enumerate(images)]}

data = {"el": {}, "de": {}}
for lang in ("el", "de"):
    for slug, (key, accent, img) in COMPOSITIONS.items():
        data[lang][slug] = composition(lang, slug, accent, img)
    for slug, imgs in HONEYS.items():
        data[lang][slug] = honey(lang, slug, imgs)

# German Infinity: Wix showed the Earth text on this page -> translated from the Greek Infinity page.
A = "#1CBDBD"
data["de"]["copy-of-the-composition-of-earth"].update({
    "translated": True,
    "title": "Die Komposition Infinity",
    "subtitle": [],
    "benefit": "VITALITÄT & WOHLBEFINDEN",
    "description": [[
        {"text": "Botanische Rezeptur auf Basis von Blütenhonig mit "}, {"text": "20 % aktiven Kräutern", "color": A},
        {"text": " und Superfoods. Sie enthält "}, {"text": "Gelée Royale", "color": A}, {"text": " und "},
        {"text": "Ashwagandha", "color": A},
        {"text": ", die zur körperlichen Ausdauer, zum emotionalen Gleichgewicht und zur geistigen Leistungsfähigkeit beitragen. Die Komposition wird durch "},
        {"text": "Rosa canina", "color": A}, {"text": " (Hagebutte) verstärkt und durch die „vermittelnde“ Zutat "},
        {"text": "Zimt", "color": A}, {"text": " ausgeglichen."},
    ], [
        {"text": "Infinity nutzt die Kombination dreier wertvoller Kräuter im Zusammenspiel mit dem natürlichen Superfood Gelée Royale in einer sorgfältig abgestimmten Rezeptur und unterstützt auf völlig natürliche Weise das tägliche Bemühen des menschlichen Körpers, die Gesundheit körperlich, emotional und geistig zu verbessern."},
    ]],
    "usageLabel": "Anweisungen für den Gebrauch",
    "usage": [[{"text": "Einen halben Teelöffel sehr gut zerkauen, vorzugsweise am Morgen."}],
              [{"text": "Eine tägliche Anwendung über einen Zeitraum von 1 bis 3 Monaten wird empfohlen, um die gesundheitsbezogenen Angaben zu ermöglichen."}]],
    "ingredientsLabel": "Zutaten",
    "ingredients": [[{"text": "Blütenhonig, Agavensirup, Ashwagandha - Withania somnifera, Rosa canina, Gelée Royale, Ceylon-Zimt"}]],
})

body = json.dumps(data, ensure_ascii=False, indent=1)
(ROOT / "src/content/products.ts").write_text(f'''import type {{ Lang, Run }} from "./types";

/**
 * Product pages (6 compositions + 2 honeys), verbatim from Wix — frozen by scripts/freeze/phase5.py.
 * German Infinity (`translated: true`) is a new translation: Wix showed the Earth text there.
 * German Aether subtitle: "fünfte Element)" was #2A2A2A (invisible on black) on Wix -> accent colour.
 */
export type ProductLink = {{ label: string; href: string }};
export type ProductImage = {{ src: string; alt: string }};
export type CompositionProduct = {{
  kind: "composition";
  accent: string;
  title: string;
  subtitle: Run[][];
  benefit: string;
  description: Run[][];
  usageLabel: string;
  usage: Run[][];
  ingredientsLabel: string;
  ingredients: Run[][];
  links: ProductLink[];
  images: ProductImage[];
  translated?: boolean;
}};
export type HoneyProduct = {{
  kind: "honey";
  accent: string;
  title: string;
  flow: ({{ type: "p" | "lead"; runs: Run[] }} | {{ type: "pdf"; label: string; href: string }})[];
  links: ProductLink[];
  images: ProductImage[];
}};
export type Product = CompositionProduct | HoneyProduct;

export const PRODUCT_SLUGS = {json.dumps(list(COMPOSITIONS) + list(HONEYS))} as const;
export type ProductSlug = (typeof PRODUCT_SLUGS)[number];

export const products: Record<Lang, Record<ProductSlug, Product>> = {body};
''', encoding="utf-8")
for lang in ("el", "de"):
    for s, p in data[lang].items():
        if p["kind"] == "composition":
            print(lang, s, "|", p["title"], "|", len(p["subtitle"]), p["benefit"], "| desc", len(p["description"]), "usage", len(p["usage"]), "ingr", len(p["ingredients"]), [l["label"] for l in p["links"]])
        else:
            print(lang, s, "|", p["title"], p["accent"], "| flow", len(p["flow"]), [l["label"] for l in p["links"]])
