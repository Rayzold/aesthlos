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
- next/image with `unoptimized: true` (static export), images converted to WebP/AVIF at build time with sharp.

## Motion rules (premium = restrained)
- Read reactbits-guide.md. Follow its "audit before you animate" rule: motion supports the content, never competes with it.
- Max one animated background per page. No Hyperspeed, LetterGlitch, GlitchText, DecryptedText, PixelCard or other "tech" effects; they clash with an artisanal honey brand.
- Respect prefers-reduced-motion everywhere (render static fallbacks).
- Lighthouse targets (mobile): Performance >= 90, Accessibility >= 95, SEO 100.

## Workflow
- Work phase by phase (see "Claude Code Prompts - Aesthlos Rebuild.md"); stop after each phase for review.
- /archive holds the capture of the live Wix site (text, meta, image lists, screenshots, design tokens). It is the source of truth for layout and copy.
