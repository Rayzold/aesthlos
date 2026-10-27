import type { Lang } from "./types";

/** Site-wide copy (header, footer). Text is verbatim from the live Wix site. */

export const SITE_URL = "https://www.aesthlos.com";
export const GOOGLE_SITE_VERIFICATION = "g7LjiPu_ZV8mltEXlB6QUpscu5lMpNBEXcpVSd7_5NI";

/** Every page of the site, in URL form without the language prefix ("" = home). */
export const SLUGS = [
  "",
  "ourphilosophy",
  "thegreekhoneys",
  "thecompositions",
  "honeycollection",
  "contact",
  "copy-of-the-composition-of-earth",
  "compositionofearth",
  "compositionofwater",
  "compositionoffire",
  "compositionofair",
  "compositionofaether",
  "aesthloswildoakhoney",
  "aesthlosforesthoney",
] as const;
export type Slug = (typeof SLUGS)[number];

export const NAV: Record<Lang, { label: string; slug: Slug }[]> = {
  el: [
    { label: "Αρχική", slug: "" },
    { label: "Η Φιλοσοφία μας", slug: "ourphilosophy" },
    { label: "Tα Ελληνικά Μέλια", slug: "thegreekhoneys" },
    { label: "Οι Βοτανικές Συνθέσεις", slug: "thecompositions" },
    { label: "Οι Συλλογές Μελιών", slug: "honeycollection" },
    { label: "Επικοινωνία", slug: "contact" },
  ],
  de: [
    { label: "Homepage", slug: "" },
    { label: "Unsere Philosophie", slug: "ourphilosophy" },
    { label: "Griechische Honige", slug: "thegreekhoneys" },
    { label: "Die Kompositionen", slug: "thecompositions" },
    { label: "Die Honigsammlungen", slug: "honeycollection" },
    { label: "Kontakt", slug: "contact" },
  ],
};

export const FOOTER: Record<Lang, { credit: string; tagline: string }> = {
  el: { credit: "@ designed by Aesthlos Therafoods 2026", tagline: "Next Generation Superfoods..." },
  // Owner request 27/10: German footer year 2025 -> 2026 (as in Greek).
  de: { credit: "@ designed by Aesthlos Therafoods 2026", tagline: "Next Generation Superfoods..." },
};

export const UI: Record<Lang, { menu: string; close: string; skip: string; more: string; language: string; home: string }> = {
  el: { menu: "Μενού", close: "Κλείσιμο", skip: "Μετάβαση στο κύριο περιεχόμενο", more: "More", language: "Γλώσσα", home: "Αρχική" },
  de: { menu: "Menü", close: "Schließen", skip: "Zum Hauptinhalt springen", more: "More", language: "Sprache", home: "Homepage" },
};

export const LANGS: { lang: Lang; label: string; htmlLang: string; ogLocale: string }[] = [
  { lang: "el", label: "EL", htmlLang: "el", ogLocale: "el_GR" },
  { lang: "de", label: "DE", htmlLang: "de", ogLocale: "de_DE" },
];

/** URL path for a page in a language: el lives at the root, de under /de. */
export function pathFor(lang: Lang, slug: string): string {
  if (lang === "el") return slug ? `/${slug}` : "/";
  return slug ? `/de/${slug}` : "/de";
}

/**
 * Social preview image per page (the live site only had one on /ourphilosophy;
 * owner asked for og:image on every page). 1200x630 JPEGs built by scripts/og-images.mjs.
 */
export const OG_IMAGES: Record<Slug, string> = Object.fromEntries(
  SLUGS.map((s) => [s, `/og/${s || "home"}.jpg`]),
) as Record<Slug, string>;
