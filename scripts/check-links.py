#!/usr/bin/env python3
"""Checks every internal link/asset referenced by the static build (out/) resolves to a file.
Usage: python3 scripts/check-links.py [out_dir]"""
import re, sys
from pathlib import Path
from urllib.parse import urlparse, unquote
OUT = Path(sys.argv[1] if len(sys.argv) > 1 else "out")
SITE = "https://www.aesthlos.com"
bad, checked = [], set()
def exists(path):
    path = unquote(path.split("#")[0].split("?")[0])
    if path in ("", "/"): return (OUT / "index.html").exists()
    p = OUT / path.lstrip("/")
    return p.is_file() or p.with_suffix(".html").is_file() or Path(str(p) + ".html").is_file() or (p / "index.html").is_file()
pages = sorted(OUT.rglob("*.html"))
for f in pages:
    html = f.read_text(encoding="utf-8")
    for attr, url in re.findall(r'\b(href|src|content|srcSet|srcset)="([^"]+)"', html):
        for u in ([x.strip().split(" ")[0] for x in url.split(",")] if attr.lower() == "srcset" else [url]):
            if u.startswith(SITE): u = u[len(SITE):] or "/"
            if not u.startswith("/") or u.startswith("//") or u.startswith("/_next/"): continue
            key = u.split("#")[0]
            if key in checked: continue
            checked.add(key)
            if not exists(u): bad.append((f.relative_to(OUT), u))
    if re.search(r"wixstatic|parastorage|wixsite", html): bad.append((f.relative_to(OUT), "WIX REFERENCE"))
    for u in re.findall(r'href="(pdf:[^"]*)"', html): bad.append((f.relative_to(OUT), "UNRESOLVED " + u))
print(f"pages: {len(pages)}, unique internal URLs checked: {len(checked)}")
for b in bad: print("BROKEN", *b)
sys.exit(1 if bad else 0)
