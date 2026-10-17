import type { Slug } from "@/content/site";
import type { Lang } from "@/content/types";
import RawPage from "@/components/content/RawPage";
import { getPage } from "@/lib/content";
import ProductPage from "./product/ProductPage";
import { PRODUCT_SLUGS, type ProductSlug } from "@/content/products";

/**
 * Shared [slug] route: product pages and any raw verbatim pages.
 * The designed pages (ourphilosophy, thegreekhoneys, thecompositions, contact, honeycollection)
 * have their own route folders so each ships only its own JavaScript.
 */
export const OWN_ROUTES = ["ourphilosophy", "thegreekhoneys", "thecompositions", "contact", "honeycollection"] as const;

export default function PageForSlug({ lang, slug }: { lang: Lang; slug: Slug }) {
  if ((PRODUCT_SLUGS as readonly string[]).includes(slug)) return <ProductPage lang={lang} slug={slug as ProductSlug} />;
  return <RawPage page={getPage(lang, slug)} />;
}
