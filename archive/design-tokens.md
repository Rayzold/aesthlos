# Aesthlos — design tokens (from the live Wix site)

Sources: computed styles read in Chrome on `/`, `/ourphilosophy`, `/compositionofearth`, `/contact` at 1440px+ width, plus the Wix theme variables (`--color_N`, `--font_N`) and inline rich-text colors in the downloaded HTML. Values are exact; where a value is an inference it says so.

## Colors

### Core palette (used everywhere)
| Token | Hex | Where |
|-------|-----|-------|
| `bg` | `#000000` | Page and section backgrounds on every page |
| `text` | `#FFFFFF` | Body copy, nav items, footer |
| `gold` | `#FFC824` (Wix `color_18/41`) | Active nav item, section headings ("Οι Πέντε Βοτανικές Συνθέσεις", "Λίγα λόγια για εμάς..."), Infinity heading, quote, «definitions», element labels, button border, Aether accent |
| `gold-light` | `#FFDE7A` | Wix theme shade (color_17) — not seen in use, available for hover |
| `gold-dark` | `#AA8924` | Wix theme shade (color_19) — not seen in use |
| `grey-line` | `#555555` | 1px borders around the 5 composition cards (home) |
| `grey-dark` | `#2F2E2E` | One background block on /ourphilosophy (exact element not identified) |
| `white-30` | `rgba(255,255,255,.3)` | 1px divider line (home) |

### Product accents (title, section labels, highlighted herb names)
| Product | Hex |
|---------|-----|
| Infinity | `#1CBDBD` (Wix color_43) |
| Γη / Earth | `#49A94B` |
| Νερό / Water | `#0081BD` |
| Φωτιά / Fire | `#E21C21` |
| Αέρας / Air | `#9374B4` |
| Αιθέρας / Aether | `#FFC824` (gold) |
| Μέλι Δάσους / Forest honey | `#108713` (Wix color_42) |
| Μέλι Άγριας Βελανιδιάς / Wild oak | gold/white only (no accent found) |

### Form (contact)
Inputs: white background `#FFFFFF`, black text, 2px solid white bottom/border. Submit "Αποστολή": white background, black text, 2px solid `#2A2A2A` border.

## Fonts

| Family on Wix | Real font | License | Used for |
|---------------|-----------|---------|----------|
| `wfont_21375d_2a288b…` | **PF DinText Pro Regular** (Parachute, Greek foundry) | **Commercial** — "Copyright (c) 2002, 2005 Parachute". The site owner uploaded it to Wix; a web license is needed to self-host. | Nav, hero tagline, body text on most pages, section H6 headings, footer heading |
| `wfont_21375d_84b139…` | **PF DinText Pro Regular** (same font, second upload) | Commercial (as above) | Home "about us" paragraphs, quote |
| `wfont_21375d_9e5d84…` / `a81c39…` | **Aka-Acid-Quinfo Regular** | Free ("All fonts are for free") | Footer credit, element labels (ΓΗ, ΝΕΡΟ…), product titles and section labels, "Therafoods /" heading, button "Δείτε περισσότερα" |
| `questrial` | Questrial (Google Fonts) | OFL | "Αesthlos Infinity" heading (49px), "Λίγα Λόγια για τα μέλια μας..." link |
| `avenir-lt-w01_35-light` | Avenir LT 35 Light (Wix-licensed) | Wix only | Language selector "EL" only — will not be needed |

All four uploaded font files are in `archive/fonts/` (woff2/woff/ttf), all include Greek glyphs.
Fallback if no PF DinText web license: **Fira Sans** or **Roboto Condensed** (Google, Greek support) are the closest free DIN-style matches — to be confirmed visually.

## Type scale (desktop, measured)

| Role | Font | Size / line-height | Weight | Color | Letter-spacing |
|------|------|--------------------|--------|-------|----------------|
| Nav item | PF DinText | 13px / 50px | 400 | white, active gold | normal |
| Hero tagline | PF DinText | 21px / 23.1px | 400 | white | normal |
| Infinity heading | Questrial | 49px / 68.6px | 400 | gold | normal |
| Infinity subheading | PF DinText | 21px / 23.1px | 400 | gold | normal |
| Section heading (H6) | PF DinText | 28px / 39.2px | **700** | gold | normal |
| Gallery caption | PF DinText | 18px / 22px | 400 | white | normal |
| Body (home about) | PF DinText | 18px / 25.2px | 400 | white | normal |
| Body (philosophy) | PF DinText | 16px / 19.2px | 400 | white | normal |
| Body (product pages) | PF DinText | 15px / 18px | 400 | white | normal |
| Quote | PF DinText | 23px / 27.6px | 400 | gold | normal |
| Quote attribution | PF DinText | 16px / 22.4px | 400 | white | normal |
| Element labels (ΓΗ…) | Aka-Acid-Quinfo | 14px / 26.6px | 400 | gold | 0.7px (0.05em) |
| "Therafoods /" H2 | Aka-Acid-Quinfo | 26px / 28.6px | 400 | gold | normal |
| Product title | Aka-Acid-Quinfo | 20px / 26px | 400 | accent | 0.6px (0.03em) |
| Product benefit line (CAPS) | Aka-Acid-Quinfo | 18px / 23.4px | 400 | white | 0.54px (0.03em) |
| Product section labels | Aka-Acid-Quinfo | 18–19px / 1.3 | 400 | accent | 0.03em |
| Ingredients | PF DinText | 13px | 400 | white | normal |
| Button "Δείτε περισσότερα" | Aka-Acid-Quinfo | 13px / 18.2px | 400 | gold | normal |
| Footer credit | Aka-Acid-Quinfo | 11px / 17.6px | 400 | white | 0.66px (0.06em) |
| Footer heading "Next Generation Superfoods..." | PF DinText | 15px / 15px | 400 | white | normal, right-aligned |

## Components

- **Primary button** ("Δείτε περισσότερα"): transparent background, 2px solid gold border, border-radius 20px (pill), gold text 13px.
- **Text link button** ("Λίγα Λόγια για τα μέλια μας..."): Questrial 16px white; a 2px solid gold square-cornered border was also found on a link on the home page (most likely this one — confirm against screenshots).
- **Composition card** (home): product image (transparent png) ~320×320 inside a 1px `#555555` border box, caption below in white 18px; click → product page.
- **Slideshow** (/ourphilosophy): 6 images, prev/next arrows (aria "Προηγούμενο" / "Επόμενο"), counter "1/6", click to zoom.
- **Video background** sections: home Infinity block and /honeycollection (1920×1080 mp4, poster jpg).

## Layout

- Wix site grid width: **980px** (`--site-width`); full-bleed sections stretch to viewport (hero image, video strips).
- Header height ~96px (hero image starts at y=96 at 1692px viewport); nav line-height 50px.
- Home sections at 1692px viewport: hero 785px tall, Infinity strip 429px, compositions row cards 320px at x≈30/358/686/1014/1342 (5 across, ~8px gaps).
- Exact section paddings are not exposed by Wix (absolute positioning); they will be matched visually against screenshots in Phase 3 rather than copied as numbers.

## Not captured yet
- Full-page screenshots at 1440px and 390px: the Chrome screenshot tool timed out on the Wix pages (the background video keeps the page "busy"). To retry during Phase 2 with the video paused, or the owner can provide them.
