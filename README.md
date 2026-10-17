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
| Page text (verbatim from Wix), per language | `src/content/generated/el/*.json`, `src/content/generated/de/*.json` |
| Navigation, footer, page list, social images | `src/content/site.ts` |
| Colours, fonts, spacing tokens | `src/app/globals.css` |
| Images (web-optimised) | `public/images/<page>/` — originals stay in `archive/media` on the owner's computer |
| PDFs (certification, analyses, study) | `public/files/` |
| Videos | `public/video/` |
| Capture of the old Wix site (text, sitemap, design tokens) | `archive/` |

URLs: Greek pages keep the exact Wix paths (`/ourphilosophy`, `/copy-of-the-composition-of-earth`, …). German pages live under `/de/…`.

## Re-capturing from Wix (one-off)

1. `scripts/download-wix.ps1` (PowerShell, on Windows) downloads HTML, original images, PDFs, videos and fonts into `archive/`.
2. `python3 scripts/extract_content.py archive/html` regenerates `src/content/generated/`.
3. `node scripts/optimize-media.mjs archive` regenerates `public/images`, `public/files`, `public/video`.

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
