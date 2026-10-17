import Link from "next/link";
import { honeyCollection } from "@/content/honeycollection";
import { pathFor } from "@/content/site";
import type { Lang } from "@/content/types";
import BlurText from "@/components/ui/BlurText";
import FadeContent from "@/components/motion/Reveal";
import Magnet from "@/components/ui/Magnet";
import BackgroundVideo from "@/components/media/BackgroundVideo";

/** /honeycollection — full-height forest video, title and the two honey buttons (as on Wix). */
export default function HoneyCollectionPage({ lang }: { lang: Lang }) {
  const c = honeyCollection[lang];
  return (
    <section className="relative flex min-h-[calc(100svh-var(--header-h))] items-center justify-center overflow-hidden lg:min-h-[calc(100svh-var(--header-h)-52px)]">
      <BackgroundVideo src="/video/honeycollection.mp4" poster="/images/honeycollection/video-poster.webp" />
      <div className="absolute inset-0 bg-black/20" aria-hidden />
      <div className="relative flex flex-col items-center px-4 pb-[8vh] text-center">
        <h1 className="font-display text-[17px] tracking-[0.03em] text-white">
          <BlurText text={c.title} animateBy="words" direction="top" delay={150} trigger="load" className="justify-center" />
        </h1>
        <FadeContent delay={0.4} trigger="mount" className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-10">
          {c.links.map((l) => (
            <Magnet key={l.slug} padding={30} magnetStrength={6} maxOffset={6}>
              <Link
                href={pathFor(lang, l.slug)}
                className="inline-block min-w-[200px] rounded-full border-2 border-gold bg-black/50 px-8 py-3 font-display text-[15px] text-gold backdrop-blur-sm transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-black"
              >
                {l.label}
              </Link>
            </Magnet>
          ))}
        </FadeContent>
      </div>
    </section>
  );
}
