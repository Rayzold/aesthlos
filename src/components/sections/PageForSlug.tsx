import type { Slug } from "@/content/site";
import type { Lang } from "@/content/types";
import ProductPage from "./product/ProductPage";
import { PRODUCT_SLUGS, type ProductSlug } from "@/content/products";

/**
 * Shared [slug] route: the 8 product pages. The designed pages (ourphilosophy, thegreekhoneys,
 * thecompositions, contact, honeycollection) have their own route folders so each ships only its own JS.
 */
export const OWN_ROUTES = ["ourphilosophy", "thegreekhoneys", "thecompositions", "contact", "honeycollection"] as const;

export default function PageForSlug({ lang, slug }: { lang: Lang; slug: Slug }) {
  if (!(PRODUCT_SLUGS as readonly string[]).includes(slug)) throw new Error(`No layout for /${slug}: add it to OWN_ROUTES or PRODUCT_SLUGS`);
  return <ProductPage lang={lang} slug={slug as ProductSlug} />;
}
