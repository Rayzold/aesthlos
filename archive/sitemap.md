# Aesthlos — sitemap of the live Wix site

Captured 2026-10-17 from https://www.aesthlos.com. Per-page verbatim text, images and links are in
`archive/pages/<slug>/content.md` (+ `meta.json`, `images.json`, `galleries.json`). German versions
(`?lang=de`) are in `archive/pages-de/`. Raw HTML, original images, PDFs, videos and fonts live only
in the local folder (`archive/html`, `archive/media`, `archive/files`, `archive/video`, `archive/fonts`) and are not committed.

## Pages (14 public + 1 hidden)

| # | URL path | Wix page title | Type |
|---|----------|----------------|------|
| 1 | `/` | Aesthlos Therafoods \| A nutritional range of premium herbal honey-based compositions \| Athens, Greece | Home |
| 2 | `/ourphilosophy` | Η Φιλοσοφία μας \| Aesthlos | Content |
| 3 | `/thegreekhoneys` | Tα Ελληνικά Μέλια \| Aesthlos | Editorial (long) |
| 4 | `/thecompositions` | Οι Βοτανικές Συνθέσεις \| Aesthlos | Gallery |
| 5 | `/honeycollection` | Οι Συλλογές Μελιών \| Aesthlos | Video + 2 links |
| 6 | `/contact` | Επικοινωνία \| Aesthlos | Form + company info |
| 7 | `/copy-of-the-composition-of-earth` | The Composition of Infinity \| Aesthlos | Product |
| 8 | `/compositionofearth` | The Composition of Earth \| Aesthlos | Product |
| 9 | `/compositionofwater` | The Composition of Water \| Aesthlos | Product |
| 10 | `/compositionoffire` | The Composition of Fire \| Aesthlos | Product |
| 11 | `/compositionofair` | The Composition of Air \| Aesthlos | Product |
| 12 | `/compositionofaether` | The Composition of  Aether \| Aesthlos (double space in Wix title) | Product |
| 13 | `/aesthloswildoakhoney` | Wild Oak Honey \| Aesthlos | Honey (long) |
| 14 | `/aesthlosforesthoney` | Forest Honey \| Aesthlos | Honey |
| – | `/fullscreen-page` | Fullscreen Page | Hidden, not in sitemap.xml — **owner to confirm if needed** |

Wix also exposes member pages (`/my-account`, `/my-wallet`, `/my-addresses`, `/my-subscriptions`) — Wix system pages, not part of the rebuild.
Every page has a German variant at `<path>?lang=de` (Wix Multilingual; `hreflang` `de-de` + `el-gr`, robots.txt lists `de_de-sitemap.xml`). The German translation is partial (gallery captions stay Greek, some blocks are duplicated).

## Shared chrome (all pages)

- **Header** (transparent over content, black page): logo `logo-white-02` (`21375d_212d27…png`, 141×51 displayed) → nav, 6 items + "More" overflow, then language selector "EL".
  - Nav order: Αρχική → `/` · Η Φιλοσοφία μας → `/ourphilosophy` · Tα Ελληνικά Μέλια → `/thegreekhoneys` · Οι Βοτανικές Συνθέσεις → `/thecompositions` · Οι Συλλογές Μελιών → `/honeycollection` · Επικοινωνία → `/contact`
  - Note: "Tα Ελληνικά Μέλια" starts with a Latin "T" in the live site. Keep it verbatim.
  - Active item is gold, others white.
- **Footer**: "@ designed by Aesthlos Therafoods 2026" (small, letter-spaced), then heading "Next Generation Superfoods..." (right-aligned).

## Page outlines (section order)

### `/` Home
1. **Hero**: full-bleed image `AESTHLOS_ALL` (`21375d_572ef7…png`, 1920×1080) → centered white logo `logo-white-01` (`21375d_b42721…png`) → tagline, 2 lines: "Μια διατροφική σειρά premium βοτανικών συνθέσεων με βάση το μέλι, / που στοχεύει ολιστικά στην ενδυνάμωση της υγείας."
2. **Infinity feature**: background video (`11062b_fac51a…`, poster `11062b_fac51a…f000.jpg`) → "Αesthlos Infinity" (heading; first letter is a Greek capital Alpha — verbatim) → "για Ζωτικότητα & Ευεξία" → button "Δείτε περισσότερα" → `/copy-of-the-composition-of-earth` → text "Η νέα προσθήκη που ήρθε να ολοκληρώσει / τις Βοτανικές μας Συνθέσεις." → product photo (`21375d_4530e0…jpg`, square).
3. **Five compositions**: heading "Οι Πέντε Βοτανικές Συνθέσεις" → 5-item gallery (transparent product images, 320×320) with captions, each linking to its page, in order: Γη → `/compositionofearth`, Νερό → `/compositionofwater`, Φωτιά → `/compositionoffire`, Αέρας → `/compositionofair`, Αιθέρας → `/compositionofaether`. Greek captions: "H Σύνθεση της Γης", "Η Σύνθεση του Νερού", "Η Σύνθεση της Φωτιάς", "Η Σύνθεση του Αέρα", "Η Σύνθεση του Αιθέρα". (The "Die Komposition der Erde" labels are from the German version.)
4. **About us**: heading "Λίγα λόγια για εμάς..." → founders paragraph → image "Aesthlos Honey" (`21375d_c7a29b…png`, 1920×1080) → Hippocrates quote (gold) → attribution "(Ιπποκράτης, 460 π.Χ. - 377 π.Χ.)" → paragraph about «Συνθέσεις Μελιού» → link "Λίγα Λόγια για τα μέλια μας..." → `/thegreekhoneys`.
5. Footer.

### `/ourphilosophy`
1. Section with background image (`21375d_852f21…jpg`, 3500×2300).
2. **Slideshow gallery** (6 images, click-to-zoom, counter "1/6"), order: `60ef95` (png) → `abb2bc` → `db0c2a` → `0845d4` → `5171ff` → `030a5d` (avif).
3. «Eσθλός» definition (white text, definition line in gold) → intro paragraph.
4. **Five elements row**: 5 symbols (earth, water, fire, air, Aether; 592×592 png) with labels ΓΗ · ΝΕΡΟ · ΦΩΤΙΑ · ΑΕΡΑΣ · ΑΙΘΕΡΑΣ (το Πέμπτο Στοιχείο) in gold, letter-spaced.
5. «Ενδιάμεσος» definition → 2 paragraphs (Αφηγητές / Αλχημιστές).
6. Heading "Therafoods / Next Generation Superfoods" → image "Aesthlos therafoods fire composition" → 5 paragraphs → image "aesthlos honey formulations".
7. Footer. og:image: `21375d_55f5ac…jpg`.

### `/thegreekhoneys`
Page background image `21375d_6c144d…png` (2524×1438, also on /thecompositions, /honeycollection, Infinity page).
1. Tall image (`21375d_088015…png`, 1080×1920) beside H1 "Βοτανικές Συνθέσεις Aesthlos & Ελληνικά Μέλια" + 2 paragraphs.
2. H2 "Ελληνικά Μέλια: το θαύμα της ελληνικής φύσης με τα περισσότερα αντιοξειδωτικά!" + 3 paragraphs.
3. "Η Αντιοξειδωτική Δράση των Μελιών" + link "Διαβάστε Εδώ" → PDF `21375d_64d52d…pdf` + footnote citation.
4. Research section (ΑΠΘ, 48 μέλια) → "Ελληνικό Μέλι" → 4 paragraphs.
5. TÜV certification badge + H2 "Μέλια Aesthlos: Mέλι Βελανιδιάς / Μέλι Δάσους" + EU/NON-EU badge.
6. Image "honeys_square" + 5 paragraphs about beekeepers, Φολόη, Στενή → "Τα Ελληνικά Μεσογειακά Δάση".
7. Footer.

### `/thecompositions`
1. Header image (`21375d_2dadbc…png`, 1920×1080).
2. **Gallery of 6 tiles** (order): Infinity (`4530e0…jpg`, **no link on live site**) → Γη → Νερό → Φωτιά → Αέρας → Αιθέρας (each links to its page; alt texts "aesthlos … composition").
3. Footer.

### `/honeycollection`
1. Background video (`11062b_44a48d…`, poster `…f000.jpg`) → "Δείτε τα μέλια μας" → links "Μέλι Άγριας Βελανιδιάς" → `/aesthloswildoakhoney`, "Μέλι Δάσους" → `/aesthlosforesthoney`.
2. Footer.

### `/contact`
1. Image "Greek Honey" (`21375d_4baf01…jpg`).
2. Heading "Φόρμα επικοινωνίας" → form: Ονοματεπώνυμο (text, required) · Email (email, required) · "Το μήνυμά σου, ή, η παραγγελία σου..." (textarea, required) · button "Αποστολή" → success text "Ευχαριστούμε για την επικοινωνία!".
3. Company block: AESTHLOS THERAFOODS Κουτάλας Ανδρέας / Εταιρεία Παραγωγής Τροφίμων / Ομήρου 14, Νέα Σμύρνη Τ.Κ. 17122 Αθήνα / E: info@aesthlos.com / Τ: +30 213014 4422.
4. No embedded map.
5. Footer.

### Product pages (shared template)
Title (accent color) → [Infinity/Aether: subtitle line] → CAPS benefit line → description (herb names highlighted in accent color) → "Οδηγίες Χρήσης" → usage → "Συστατικά" → ingredients → link "Πιστοποίηση" → PDF `21375d_6ed06d…pdf` → link back "Οι Βοτανικές Συνθέσεις" → product photo.

| Page | Title | Benefit line | Accent | Photo |
|------|-------|-------------|--------|-------|
| `/copy-of-the-composition-of-earth` | Η Σύνθεση του Ιnfinity | ΖΩΤΙΚΟΤΗΤΑ & ΕΥΕΞΙΑ | `#1CBDBD` | `d9ce0a…jpg` (+ page bg `6c144d`) |
| `/compositionofearth` | Η Σύνθεση της Γης | ΔΥΝΑΜΗ & ΕΥΡΩΣΤΙΑ | `#49A94B` | `2e474d…png` |
| `/compositionofwater` | H Σύνθεση του Νερού | ΣΥΝΑΙΣΘΗΜΑΤΙΚΗ ΑΡΜΟΝΙΑ | `#0081BD` | `fc83b4…png` |
| `/compositionoffire` | H Σύνθεση της Φωτιάς | ΣΕΞΟΥΑΛΙΚΗ ΕΝΕΡΓΕΙΑ & ΥΓΕΙΑ ΤΩΝ ΟΣΤΩΝ | `#E21C21` | `9ca68b…jpg` |
| `/compositionofair` | Η Σύνθεση του Aέρα | ΔΙΑΝΟΗΤΙΚΗ ΛΕΙΤΟΥΡΓΙΑ | `#9374B4` | `441f9f…png` |
| `/compositionofaether` | Η Σύνθεση του Aιθέρα + "(του 5ου στοιχείου)" | ΟΛΙΣΤΙΚΗ ΕΥΕΞΙΑ | `#FFC824` | `519d0b…png` |

Titles mix Latin and Greek letters (e.g. "Ιnfinity", "Aέρα", "H Σύνθεση") — verbatim, do not normalise.

### Honey pages
- `/aesthloswildoakhoney`: "Mέλι Άγριας Βελανιδιάς" → subtitle → long article (ΑΠΘ research, manuka comparison) → 3 images → links "Πιστοποίηση" (`6ed06d…pdf`), "Χημικές Αναλύσεις" (`4af6af…pdf`), "Διαβάστε Εδώ" (`64d52d…pdf`), cross-link "Mέλι Δάσους".
- `/aesthlosforesthoney`: "Mέλι Δάσους" (accent `#108713`) → 5 paragraphs → links "Πιστοποίηση" (`6ed06d…pdf`), "Χημικές Αναλύσεις" (`73eb67…pdf`), cross-link "Μέλι Άγριας Βελανιδιάς" → image.

## PDFs (4)
| File | Used for |
|------|----------|
| `21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf` | "Πιστοποίηση" on every product + honey page |
| `21375d_64d52d0eb9de4b8ebb210f34ad4cb305.pdf` | "Διαβάστε Εδώ" antioxidant study (/thegreekhoneys, wild oak) |
| `21375d_4af6af938b46400392669fb091b07c93.pdf` | "Χημικές Αναλύσεις" wild oak honey |
| `21375d_73eb672f52df443291f93878977596e0.pdf` | "Χημικές Αναλύσεις" forest honey |

## Issues on the live site (decide whether to fix)
1. Contact email link points to `mailto:info@melimuses.gr` while the text says info@aesthlos.com.
2. Phone link points to an unrelated Google search ("υγειογνωσια").
3. Infinity tile on `/thecompositions` has no link.
4. Stray link "Section1SlideShowItem1MediaImage1RuleNoFaceImage" → `#comp-llqggnp0` on home (Wix artefact, invisible).
5. No og:image on most pages (only /ourphilosophy has one).
6. `/fullscreen-page` is published but unused.
