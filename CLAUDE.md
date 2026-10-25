# Aesthlos — project rules

PROJECT: Rebuild https://www.aesthlos.com (currently on Wix) as a self-owned, statically exported website that can be hosted anywhere.

## Non-negotiables
- Keep every page, section order, layout template, image, and color combination of the current site. This is a faithful rebuild with a premium motion layer, not a redesign.
- Keep all Greek copy verbatim. Do not rewrite, translate, shorten, or "fix" any text (including quirks like "Die Komposition der Erde" labels on the homepage) unless the owner asks.
- Keep every existing URL path identical (e.g. /ourphilosophy, /thegreekhoneys, /copy-of-the-composition-of-earth) so Google rankings and shared links survive.
- No Wix dependencies at runtime: every image, PDF, icon and font is downloaded into /public and served locally. No static.wixstatic.com URLs in the final build.

## Stack
- Next.js (App Router) + TypeScript + Tailwind CSS, `output: 'export'` (pure static HTML, deployable to any host).
- React Bits components in TS-TW variant, installed into src/components/ui/ via `npx shadcn@latest add @react-bits/<Name>-TS-TW`. Always check the exact component name on reactbits.dev first; some names in reactbits-guide.md may differ from the real library (e.g. TiltedCard, DecryptedText).
- next/image with a custom loader (src/lib/image-loader.ts) that points at pre-generated WebP width variants (`npm run images`, scripts/image-variants.mjs); widths must match next.config.ts deviceSizes/imageSizes.
- Designed pages have their own route folders (not [slug]) so each ships only its own JS; [slug] serves the 8 product pages.
- `npm run build` = image variants (missing only in CI) + next build + `scripts/check-links.mjs` (fails the deploy on any broken link/asset/Wix URL).
- Known technical debt is listed in README "Known limitations".

## Motion rules (premium = restrained)
- Read reactbits-guide.md. Follow its "audit before you animate" rule: motion supports the content, never competes with it.
- Max one animated background per page. No Hyperspeed, LetterGlitch, GlitchText, DecryptedText, PixelCard or other "tech" effects; they clash with an artisanal honey brand.
- Respect prefers-reduced-motion everywhere (render static fallbacks).
- Lighthouse targets (mobile): Performance >= 90, Accessibility >= 95, SEO 100.

## Owner decisions (2026-10-17, after Phase 1)
- Body font: PF DinText Pro is a commercial Parachute font with no web license → use a free Google Fonts look-alike with Greek support (show the owner a comparison). Aka-Acid-Quinfo (free) and Questrial (Google) are kept as-is.
- German: build the German version too, at `/de/<same-slug>`; old `?lang=de` URLs must redirect to it. German copy comes from archive/pages-de verbatim. Where Wix has no German text (Greek left in place, English meta, copy errors), translate it into German (owner request) — keep new translations in src/content/de-translations.ts or marked `// translated`, and list each one in OWNER-CHANGES.md.
- Fix these live-site bugs: contact email link → mailto:info@aesthlos.com; phone → tel:+302130144422; Infinity tile on /thecompositions links to /copy-of-the-composition-of-earth; og:image on every page.
- /fullscreen-page and Wix member pages (/my-account etc.) are not migrated.

## Owner changelog
- OWNER-CHANGES.md (Greek) records every change/fix vs. the live Wix site for the owner. Update it whenever something differs from Wix.
- Gold buttons use black text (contrast), owner-approved.

## Workflow
- Work phase by phase (see "Claude Code Prompts - Aesthlos Rebuild.md"); stop after each phase for review.
- /archive holds the capture of the live Wix site (text, meta, image lists, screenshots, design tokens). It is the source of truth for layout and copy.
