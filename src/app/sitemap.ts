import type { MetadataRoute } from "next";
import { SITE_URL, SLUGS, pathFor } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return (["el", "de"] as const).flatMap((lang) => SLUGS.map((slug) => ({
    url: SITE_URL + (lang === "el" && !slug ? "" : pathFor(lang, slug)),
    changeFrequency: "monthly",
    priority: slug === "" ? 1 : lang === "el" ? 0.8 : 0.5,
    alternates: {
      languages: {
        el: SITE_URL + (slug ? pathFor("el", slug) : ""),
        de: SITE_URL + pathFor("de", slug),
      },
    },
  })));
}
