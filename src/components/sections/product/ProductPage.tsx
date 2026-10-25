import Image from "next/image";
import Link from "next/link";
import { products, type CompositionProduct, type HoneyProduct, type ProductLink, type ProductSlug } from "@/content/products";
import { SITE_URL, pathFor } from "@/content/site";
import type { Lang, Run } from "@/content/types";
import RichText from "@/components/content/RichText";
import BlurText from "@/components/ui/BlurText";
import FadeContent from "@/components/motion/Reveal";
import { pageDescription } from "@/lib/content";
import { resolveHref, sizeOf } from "@/lib/media";

/**
 * One template for all 8 product pages (6 compositions, 2 honeys), matching the live layout
 * (archive/screenshots/compositionofearth-1-desktop.jpg): dark text panel left, product photo right,
 * accent-coloured title/labels and two outlined buttons at the bottom of the panel.
 */
export default function ProductPage({ lang, slug }: { lang: Lang; slug: ProductSlug }) {
  const p = products[lang][slug];
  return (
    <>
      <ProductJsonLd lang={lang} slug={slug} name={p.title} image={p.images[0].src} />
      <div className="mx-auto grid max-w-site gap-1.5 px-4 py-8 lg:grid-cols-[480px_494px] lg:px-0 lg:py-0" style={{ ["--accent" as string]: p.accent }}>
        <article className="flex flex-col bg-[#0b0b0b] px-6 py-8 sm:px-10 lg:min-h-[741px]">
          {p.kind === "composition" ? <CompositionBody p={p} lang={lang} /> : <HoneyBody p={p} lang={lang} />}
          <Buttons links={p.links} lang={lang} />
        </article>
        <Photos p={p} />
      </div>
    </>
  );
}

function Title({ text, sub }: { text: string; sub?: Run[][] }) {
  return (
    <header>
      <h1 className="font-display text-[22px] leading-[1.3] tracking-[0.03em] text-[var(--accent)] sm:text-[20px]">
        <BlurText text={text} animateBy="words" direction="top" delay={100} trigger="load" />
      </h1>
      {sub?.map((r, i) => (
        <p key={i} className="font-display text-[16px] tracking-[0.03em] text-[var(--accent)]">
          <RichText runs={r} />
        </p>
      ))}
    </header>
  );
}

function CompositionBody({ p, lang }: { p: CompositionProduct; lang: Lang }) {
  return (
    <div className="space-y-4 text-[15px] leading-[1.2] text-white">
      <Title text={p.title} sub={p.subtitle} />
      <p className="font-display text-[18px] leading-[1.3] tracking-[0.03em]">{p.benefit}</p>
      <FadeContent duration={0.8} className="space-y-3">
        {p.description.map((r, i) => (
          <p key={i}>
            <RichText runs={r} lang={lang} />
          </p>
        ))}
      </FadeContent>
      <section className="space-y-2">
        <h2 className="pt-2 font-display text-[18px] tracking-[0.03em] text-[var(--accent)]">{p.usageLabel}</h2>
        <FadeContent duration={0.8} className="space-y-2">
          {p.usage.map((r, i) => (
            <p key={i}>
              <RichText runs={r} lang={lang} />
            </p>
          ))}
        </FadeContent>
      </section>
      <section className="space-y-2">
        <h2 className="pt-2 font-display text-[19px] tracking-[0.03em] text-[var(--accent)]">{p.ingredientsLabel}</h2>
        <Ingredients runs={p.ingredients} />
      </section>
    </div>
  );
}

/** Ingredients, revealed one by one: split after each comma, keeping each run's styling (e.g. bold). */
function Ingredients({ runs }: { runs: Run[][] }) {
  const items: Run[][] = [[]];
  const flat = runs.flatMap((para, pi) => (pi > 0 ? [{ text: " " }, ...para] : para));
  flat.forEach((run) => {
    const chunks = run.text.split(/(?<=,)\s*/);
    chunks.forEach((chunk, ci) => {
      if (chunk) items[items.length - 1].push({ ...run, text: chunk });
      if (ci < chunks.length - 1) items.push([]);
    });
  });
  return (
    <FadeContent stagger={0.06} duration={0.5} className="flex flex-wrap gap-x-1 text-[13px] italic leading-[1.4]">
      {items
        .filter((it) => it.length)
        .map((it, i) => (
          <span key={i}>
            <RichText runs={it} />
          </span>
        ))}
    </FadeContent>
  );
}

function HoneyBody({ p, lang }: { p: HoneyProduct; lang: Lang }) {
  return (
    <div className="space-y-4 text-[15px] leading-[1.3] text-white">
      <Title text={p.title} />
      {p.flow.map((f, i) =>
        f.type === "pdf" ? (
          <p key={i}>
            <a
              href={resolveHref(f.href, lang)}
              target="_blank"
              rel="noopener"
              className="inline-block rounded-[20px] border-2 border-[var(--accent)] px-5 py-1.5 font-display text-[13px] text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-black"
            >
              {f.label}
            </a>
          </p>
        ) : (
          <FadeContent key={i} duration={0.7}>
            <p className={f.type === "lead" ? "pt-2 text-[16px]" : undefined}>
              <RichText runs={f.runs} lang={lang} />
            </p>
          </FadeContent>
        ),
      )}
    </div>
  );
}

function Buttons({ links, lang }: { links: ProductLink[]; lang: Lang }) {
  return (
    <nav className="mt-auto flex flex-wrap gap-3 pt-8" aria-label={lang === "el" ? "Σύνδεσμοι" : "Links"}>
      {links.map((l) => {
        const href = resolveHref(l.href, lang);
        const file = href.startsWith("/files/");
        const cls =
          "inline-block min-w-[140px] rounded-full border-2 border-[var(--accent)] px-5 py-2 text-center font-display text-[13px] text-[var(--accent)] transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent)] hover:text-black";
        return file ? (
          <a key={l.href} href={href} target="_blank" rel="noopener" className={cls}>
            {l.label}
          </a>
        ) : (
          <Link key={l.href} href={href} className={cls}>
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}

function Photos({ p }: { p: CompositionProduct | HoneyProduct }) {
  return (
    <div className={p.images.length > 1 ? "space-y-1.5" : undefined}>
      {p.images.map((img, i) => (
        <FadeContent key={img.src} delay={i * 0.1} duration={0.9} className="overflow-hidden">
          <Image
            src={img.src}
            alt={img.alt && !/\.(png|jpe?g)$/i.test(img.alt) ? img.alt : p.title}
            {...sizeOf(img.src)}
            priority={i === 0}
            sizes="(min-width: 1024px) 494px, 100vw"
            className="h-auto w-full transition-transform duration-700 ease-out hover:-translate-y-1 hover:scale-[1.015]"
          />
        </FadeContent>
      ))}
    </div>
  );
}

/** schema.org Product structured data for search results. */
function ProductJsonLd({ lang, slug, name, image }: { lang: Lang; slug: ProductSlug; name: string; image: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description: pageDescription(lang, slug),
    image: SITE_URL + image,
    url: SITE_URL + pathFor(lang, slug),
    brand: { "@type": "Brand", name: "Aesthlos Therafoods" },
    manufacturer: { "@type": "Organization", name: "Aesthlos Therafoods", url: SITE_URL },
    inLanguage: lang,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
