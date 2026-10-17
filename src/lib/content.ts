import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import type { GeneratedPage, Lang } from "@/content/types";
import { DE_META } from "@/content/de-translations";
import { GOOGLE_SITE_VERIFICATION, LANGS, OG_IMAGES, SITE_URL, pathFor, type Slug } from "@/content/site";

const GENERATED = path.join(process.cwd(), "src", "content", "generated");

/** Loads the verbatim page content captured from Wix (build time only). */
export function getPage(lang: Lang, slug: Slug): GeneratedPage {
  const file = path.join(GENERATED, lang, `${slug || "home"}.json`);
  return JSON.parse(fs.readFileSync(file, "utf-8")) as GeneratedPage;
}

/** Per-page <head>: title, description, canonical, hreflang, Open Graph, Twitter. */
export function pageMetadata(lang: Lang, slug: Slug, ogImage?: string): Metadata {
  const page = getPage(lang, slug);
  const url = SITE_URL + (pathFor(lang, slug) === "/" ? "" : pathFor(lang, slug));
  // German pages: Wix left titles/descriptions in English or empty -> translated overrides.
  const override = lang === "de" ? DE_META[slug] : undefined;
  const title = override?.title ?? page.meta.title;
  const description = override?.description ?? page.meta.description ?? undefined;
  const ogSrc = ogImage ?? OG_IMAGES[slug];
  const locale = LANGS.find((l) => l.lang === lang)!;
  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        el: SITE_URL + pathFor("el", slug).replace(/^\/$/, ""),
        de: SITE_URL + pathFor("de", slug),
        "x-default": SITE_URL + pathFor("el", slug).replace(/^\/$/, ""),
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: "Aesthlos Therafoods",
      title: override?.title ?? page.meta.ogTitle ?? title,
      description: override ? description : page.meta.ogDescription ?? description,
      locale: locale.ogLocale,
      images: ogSrc ? [{ url: ogSrc }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: override?.title ?? page.meta.ogTitle ?? title,
      description: override ? description : page.meta.ogDescription ?? description,
      images: ogSrc ? [ogSrc] : undefined,
    },
    verification: { google: GOOGLE_SITE_VERIFICATION },
  };
}

/** Meta description used for a page (German overrides included). */
export function pageDescription(lang: Lang, slug: Slug): string | undefined {
  const override = lang === "de" ? DE_META[slug] : undefined;
  return override?.description ?? getPage(lang, slug).meta.description ?? undefined;
}
