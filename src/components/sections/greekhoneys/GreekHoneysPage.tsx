import Image from "next/image";
import { greekHoneys, type EditorialBlock } from "@/content/thegreekhoneys";
import type { Lang } from "@/content/types";
import RichText from "@/components/content/RichText";
import BlurText from "@/components/ui/BlurText";
import FadeContent from "@/components/motion/Reveal";
import FixedBackground from "@/components/media/FixedBackground";
import Parallax from "@/components/media/Parallax";
import { imageFor, resolveHref } from "@/lib/media";

/**
 * /thegreekhoneys — long editorial page over the fixed "bees" background (as on Wix).
 * Reading column ~70ch; headings with BlurText, paragraphs only fade in once.
 */
export default function GreekHoneysPage({ lang }: { lang: Lang }) {
  const blocks = greekHoneys[lang];
  // Split the flow at the TÜV badge: everything after it is the "Aesthlos honeys" part with photo.
  const tuv = blocks.findIndex((b) => b.type === "image" && b.src.startsWith("21375d_3b6b47"));
  const article = blocks.slice(0, tuv);
  const honeys = blocks.slice(tuv);
  const heading = honeys.find((b) => b.type === "text" && b.tag === "h2");
  const eu = honeys.find((b) => b.type === "image" && b.src.startsWith("21375d_6fbcd7"));
  const photo = honeys.find((b) => b.type === "image" && b.src.startsWith("21375d_81d6a3"));
  const rest = honeys.filter((b) => b.type === "text" && b !== heading);

  return (
    <>
      <FixedBackground src="/images/shared/page-background.webp" mobileSrc="/images/thegreekhoneys/intro-tall.webp" overlay={0.15} />
      <article className="mx-auto max-w-[880px] px-4 py-10 text-[16px] leading-[1.35] text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.6)] lg:px-0">
        <div className="max-w-[72ch] space-y-4">
          {article.map((b, i) => (
            <Block key={i} b={b} lang={lang} />
          ))}
        </div>

        <section className="mt-16">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <Image src="/images/thegreekhoneys/tuv-certification.webp" alt="Aesthlos TUV certification" width={93} height={93} className="h-16 w-16 sm:h-[93px] sm:w-[93px]" />
            {heading && heading.type === "text" && (
              <h2 className="text-center text-[22px] leading-[1.1] sm:text-[30px]">
                <RichText runs={heading.runs} lang={lang} />
              </h2>
            )}
            {eu && <Image src="/images/thegreekhoneys/eu-non-eu-certification.webp" alt="aesthlos EU/NON-EU certification" width={75} height={78} className="h-auto w-14 sm:w-[75px]" />}
          </div>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[400px_1fr]">
            {photo && (
              <Parallax strength={30}>
                <Image src="/images/thegreekhoneys/honeys-square.webp" alt="Aesthlos Μέλι Βελανιδιάς & Μέλι Δάσους" width={1600} height={1600} sizes="(min-width: 1024px) 400px, 100vw" className="h-auto w-full" />
              </Parallax>
            )}
            <div className="space-y-4">
              {rest.map((b, i) => (
                <Block key={i} b={b} lang={lang} />
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

function Block({ b, lang }: { b: EditorialBlock; lang: Lang }) {
  if (b.type === "pdf") {
    return (
      <p>
        <a
          href={resolveHref(b.href, lang)}
          target="_blank"
          rel="noopener"
          className="inline-block rounded-[20px] border-2 border-gold px-5 py-1.5 font-display text-[13px] text-gold transition-colors hover:bg-gold hover:text-black"
        >
          {b.text}
        </a>
      </p>
    );
  }
  if (b.type === "image") {
    const img = imageFor(b.src);
    return img ? <Image src={img.src} alt={b.alt} width={img.width} height={img.height} className="h-auto max-w-full" /> : null;
  }
  const text = b.runs.map((r) => r.text).join("");
  if (b.tag === "h1" || b.tag === "h2") {
    const Tag = b.tag;
    const size = b.tag === "h1" ? "text-[24px] sm:text-[28px]" : "text-[22px] sm:text-[26px]";
    const simple = b.runs.length === 1;
    return (
      <Tag className={`${size} pt-4 leading-[1.1]`} style={{ color: b.runs[0]?.color ?? b.color }}>
        {simple ? <BlurText text={text} animateBy="words" direction="top" delay={60} className="inline-flex" /> : <RichText runs={b.runs} lang={lang} />}
      </Tag>
    );
  }
  const isLead = b.runs.every((r) => r.bold || r.color === "#FFC824" || r.color === "#49A94B");
  return (
    <FadeContent duration={0.7}>
      <p className={isLead ? "pt-2 text-[17px]" : undefined}>
        <RichText runs={b.runs} lang={lang} />
      </p>
    </FadeContent>
  );
}
