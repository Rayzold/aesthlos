# Aesthlos — aesthlos.com

Self-owned rebuild of the Aesthlos Therafoods website (previously on Wix), as a static Next.js site.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in /out
npx serve out      # preview the static build
```

## Where things live

| What | Where |
|------|-------|
| Page text, per language (`el` / `de`) | `src/content/*.ts` (one file per page, see "How to edit content") |
| Navigation, footer, page list, social images, site URL | `src/content/site.ts` |
| New German translations (not on Wix) | `src/content/de-translations.ts` |
| Colours, fonts, spacing tokens | `src/app/globals.css` |
| Images (web-optimised + width variants `-w640.webp` …) | `public/images/<page>/` — originals stay in `archive/media` on the owner's computer |
| PDFs (certification, analyses, study) | `public/files/` |
| Videos | `public/video/` |
| Social preview images (1200×630) | `public/og/` |
| Capture of the old Wix site (text, sitemap, design tokens) | `archive/` |
| Changes vs. the Wix site, for the owner (Greek) | `OWNER-CHANGES.md` |
| Domain / DNS / email move | `MIGRATION.md` |

URLs: Greek pages keep the exact Wix paths (`/ourphilosophy`, `/copy-of-the-composition-of-earth`, …). German pages live under `/de/…`.

## How to edit content

Every page's text lives in one TypeScript file in `src/content/`, with a Greek (`el`) and a German (`de`) block.
Edit the text between the quotes, keep the quotes and commas, then commit and push (see "Redeploy").

| Page | File |
|------|------|
| Home (`/`) | `src/content/home.ts` |
| Our philosophy (`/ourphilosophy`) | `src/content/ourphilosophy.ts` |
| The Greek honeys (`/thegreekhoneys`) | `src/content/thegreekhoneys.ts` |
| The compositions overview (`/thecompositions`) | `src/content/thecompositions.ts` |
| Honey collection (`/honeycollection`) | `src/content/honeycollection.ts` |
| Product pages (5 compositions, Infinity, 2 honeys) | `src/content/products.ts` (one entry per URL, e.g. `compositionofearth`) |
| Contact (`/contact`) | `src/content/contact.ts` |
| Menu, footer, button labels | `src/content/site.ts` |
| Google titles/descriptions (German overrides) | `src/content/de-translations.ts` (Greek ones: `src/content/generated/el/*.json`, field `meta`) |

Text is stored as "runs" (`{ text: "…", color: "#FFC824", bold: true }`) so colours and bold words from Wix are kept;
change only the `text` part unless you want to change the styling. A line break inside a paragraph is `\n`.

**Replace an image:** save the new picture as WebP with **exactly the same file name** in the same `public/images/<page>/`
folder (e.g. with https://squoosh.app), then run `npm run variants` to regenerate the smaller sizes. To use a new file name,
also change the path in the page's content file.

**Replace a PDF:** overwrite the file in `public/files/` with the same name.

**Check before publishing (optional):** `npm run build && npm run check` (link check), then `npx serve out` and open http://localhost:3000.

### Redeploy

The host rebuilds the site automatically on every push to `main`:

```bash
git add -A
git commit -m "Update text on contact page"
git push
```

The new version is live after about 2 minutes (see the Cloudflare Pages dashboard → Deployments). A failed build
leaves the previous version online.

## Deploy

The build is a plain static folder (`out/`), so any static host works. Settings for all of them:
**build command** `npm run build`, **output folder** `out`, **Node** 22 (from `.node-version`),
**environment variable** `NEXT_PUBLIC_WEB3FORMS_KEY` (see "Contact form").

### Cloudflare Pages (chosen)

1. https://dash.cloudflare.com → Workers & Pages → Create → Pages → **Connect to Git** → pick `Rayzold/aesthlos`.
2. Framework preset: *None*. Build command `npm run build`, output directory `out`, production branch `main`.
3. Settings → Variables and Secrets: add `NEXT_PUBLIC_WEB3FORMS_KEY` (Production and Preview) → redeploy.
4. The site is live at `https://<project>.pages.dev`. Custom domain: see `MIGRATION.md`.

`public/_headers` sets caching and security headers. Clean URLs (`/ourphilosophy` → `ourphilosophy.html`) and the
404 page work out of the box. Old Wix German links (`?lang=de`) are redirected in the browser by the site itself and,
once the domain is on Cloudflare, by a Redirect Rule (see `MIGRATION.md`).

### Netlify (alternative)

Add site → Import from Git → build `npm run build`, publish `out`, add the environment variable.
`public/_headers` works as is. For the server-side `?lang=de` redirect add a `public/_redirects` file:

```
/       lang=de  /de           301!
/*      lang=de  /de/:splat    301!
```

### Vercel (alternative)

Import the repo → Framework *Next.js* (static export is detected) → add the environment variable.
Headers from `_headers` are not read by Vercel; add a `vercel.json` if needed:

```json
{
  "redirects": [
    { "source": "/", "has": [{ "type": "query", "key": "lang", "value": "de" }], "destination": "/de", "permanent": true },
    { "source": "/:path+", "has": [{ "type": "query", "key": "lang", "value": "de" }], "destination": "/de/:path+", "permanent": true }
  ],
  "headers": [
    { "source": "/_next/static/(.*)", "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }] }
  ]
}
```

## Re-capturing from Wix (one-off)

1. `scripts/download-wix.ps1` (PowerShell, on Windows) downloads HTML, original images, PDFs, videos and fonts into `archive/`.
2. `python3 scripts/extract_content.py archive/html` regenerates `src/content/generated/`.
3. `npm run images` regenerates `public/images` (+ width variants), `public/files`, `public/video` and `public/og`.

## Fonts

- Body: **Roboto Condensed** (free, Greek) — stand-in for PF DinText Pro (commercial Parachute font; no web licence for self-hosting).
- Display: **Aka-Acid-Quinfo** (free font, self-hosted).
- "Αesthlos Infinity" heading: **Questrial** (Google Fonts, OFL).

## Contact form (Web3Forms)

The site is static, so the contact form posts to [Web3Forms](https://web3forms.com) (free), which emails each
message to the address the access key was created with.

1. Go to https://web3forms.com, enter **info@aesthlos.com**, and confirm the email you receive — it contains the access key.
2. Locally: copy `.env.example` to `.env.local` and paste the key after `NEXT_PUBLIC_WEB3FORMS_KEY=`.
3. On the host (Cloudflare Pages / Netlify / Vercel): add the same variable `NEXT_PUBLIC_WEB3FORMS_KEY` in the project's
   environment variables and redeploy (the key is baked in at build time).

Without a key the form still validates, but tells visitors to email info@aesthlos.com instead.
Spam protection: hidden honeypot field (`botcheck`) — Web3Forms discards submissions that fill it.
