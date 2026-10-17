import PageForSlug, { OWN_ROUTES } from "@/components/sections/PageForSlug";
import { SLUGS, type Slug } from "@/content/site";
import { pageMetadata } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return SLUGS.filter((s) => s !== "" && !(OWN_ROUTES as readonly string[]).includes(s)).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return pageMetadata("el", slug as Slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PageForSlug lang="el" slug={slug as Slug} />;
}
