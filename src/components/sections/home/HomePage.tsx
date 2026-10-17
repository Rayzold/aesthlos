import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/home";
import { pathFor } from "@/content/site";
import type { Lang } from "@/content/types";
import RichText from "@/components/content/RichText";
import BlurText from "@/components/ui/BlurText";
import FadeContent from "@/components/motion/Reveal";
import Magnet from "@/components/ui/Magnet";
import ShinyText from "@/components/ui/ShinyText";
import BackgroundVideo from "@/components/media/BackgroundVideo";
import Parallax from "@/components/media/Parallax";
import CompositionCard from "./CompositionCard";

/**
 * Homepage — section order and layout follow the live Wix page
 * (archive/screenshots/home-*.jpg): hero → Infinity → five compositions → about us → quote → honeys link.
 */
export default function HomePage({ lang }: { lang: Lang }) {
  const c = home[lang];
  return (
    <>
      {/* 1. Hero: full-bleed AESTHLOS_ALL image, white logo, tagline */}
      <section aria-label="Aesthlos Therafoods" className="relative h-[clamp(420px,46.4vw,900px)] overflow-hidden">
        <Image
          src="/images/home/aesthlos-all-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
        <div className="relative flex h-full flex-col items-center px-4">
          <Image
            src="/images/shared/logo-white-01.webp"
            alt="Aesthlos Therafoods logo"
            width={167}
            height={167}
            priority
            className="animate-logo-in mt-[38px] h-auto w-[110px] sm:w-[167px]"
          />
          <h1 className="mt-auto mb-[9%] text-center text-[16px] leading-[1.1] text-white sm:text-[21px]">
            {c.hero.tagline.map((line, i) => (
              <BlurText
                key={i}
                text={line}
                animateBy="words"
                direction="top"
                delay={120}
                trigger="load"
                className="justify-center"
              />
            ))}
          </h1>
        </div>
      </section>

      {/* 2. Infinity feature: video strip with inner panel (text left, product right) */}
      <section aria-labelledby="infinity-title" className="relative h-auto overflow-hidden lg:h-[429px]">
        <BackgroundVideo src="/video/home-infinity.mp4" poster="/images/home/infinity-video-poster.webp" />
        <FadeContent
          blur
          duration={1}
          className="relative mx-4 my-10 grid bg-black/85 lg:absolute lg:inset-x-[60px] lg:inset-y-[60px] lg:m-0 lg:grid-cols-[1fr_514px]"
        >
          <div className="flex flex-col items-center justify-center px-6 py-10 text-center lg:py-0">
            <h2 id="infinity-title" className="font-questrial text-[36px] leading-[1.4] sm:text-[49px]">
              <ShinyText
                text={c.infinity.title}
                color="#FFC824"
                shineColor="#FFF1C2"
                speed={4}
                delay={2}
                shineWidth={30}
                softness={0.9}
              />
            </h2>
            <p className="text-[18px] leading-[1.1] text-gold sm:text-[21px]">{c.infinity.subtitle}</p>
            <Magnet padding={40} magnetStrength={6} maxOffset={6} wrapperClassName="mt-6">
              <Link
                href={pathFor(lang, "copy-of-the-composition-of-earth")}
                className="inline-block rounded-[20px] border-2 border-gold px-6 py-1.5 font-display text-[13px] leading-[18.2px] text-gold transition-[transform,background-color,color] duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-black"
              >
                {c.infinity.cta}
              </Link>
            </Magnet>
            <p className="mt-6 text-[17px] leading-[18.7px] text-white">
              {c.infinity.text.map((l, i) => (
                <span key={i} className="block">
                  {l}
                </span>
              ))}
            </p>
          </div>
          <div className="relative aspect-[514/309] lg:aspect-auto">
            <Image
              src="/images/home/infinity-product.webp"
              alt="Aesthlos Infinity"
              fill
              sizes="(min-width: 1024px) 514px, 100vw"
              className="object-cover"
            />
          </div>
        </FadeContent>
      </section>

      {/* 3. The five compositions */}
      <section aria-labelledby="compositions-title" className="px-4 pt-14 pb-10 lg:px-[30px]">
        <h2 id="compositions-title" className="mb-6 text-center text-[24px] font-bold leading-[1.4] text-gold sm:text-[28px]">
          {c.compositions.title}
        </h2>
        <ul className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
          {c.compositions.items.map((item, i) => (
            <li key={item.href} className={i === 4 ? "col-span-2 mx-auto w-1/2 sm:col-span-1 sm:w-full" : undefined}>
              <FadeContent delay={i * 0.1} duration={0.8}>
                <CompositionCard href={pathFor(lang, item.href)} image={item.image} title={item.title} />
              </FadeContent>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. About us + Hippocrates quote + honeys link */}
      <section aria-labelledby="about-title" className="mx-auto max-w-site px-4 pt-10 pb-16 lg:px-0">
        <h2 id="about-title" className="text-center text-[24px] font-bold leading-[1.4] text-gold sm:text-[28px]">
          {c.about.title}
        </h2>
        <FadeContent duration={1} className="mx-auto mt-6 max-w-[763px] space-y-4 text-[16px] leading-[1.4] text-white sm:text-[18px]">
          {c.about.story.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </FadeContent>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[410px_1fr] lg:gap-0 lg:pl-[110px]">
          <div className="relative z-10">
            <blockquote className="text-[20px] italic leading-[1.2] text-gold sm:text-[23px]">
              {splitQuote(c.about.quote).map((line, i) => (
                <BlurText key={i} text={line} animateBy="words" direction="bottom" delay={70} className="block" />
              ))}
            </blockquote>
            <FadeContent delay={0.3}>
              <p className="mt-4 text-[16px] italic leading-[22.4px] text-white">{c.about.attribution}</p>
            </FadeContent>
            <FadeContent className="mt-6 space-y-2 text-[16px] leading-[1.4] text-white sm:text-[18px]">
              {c.about.text.map((runs, i) => (
                <p key={i}>
                  <RichText runs={runs} lang={lang} />
                </p>
              ))}
              <p className="pt-6">
                <Link
                  href={pathFor(lang, "thegreekhoneys")}
                  className="inline-block bg-gold px-8 py-2.5 font-questrial text-[16px] leading-[22.4px] text-black transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,200,36,0.25)]"
                >
                  {c.about.cta}
                </Link>
              </p>
            </FadeContent>
          </div>
          <Parallax strength={40} className="lg:-ml-[106px] lg:w-[600px]">
            <Image
              src="/images/home/aesthlos-honey.webp"
              alt="Aesthlos Honey"
              width={1920}
              height={1080}
              sizes="(min-width: 1024px) 600px, 100vw"
              className="h-auto w-full max-w-[600px]"
            />
          </Parallax>
        </div>
      </section>
    </>
  );
}

/** The quote is stored as runs with a line break; ScrollReveal needs one plain string per line. */
function splitQuote(runs: { text: string }[]): string[] {
  return runs
    .map((r) => r.text)
    .join("")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
}
