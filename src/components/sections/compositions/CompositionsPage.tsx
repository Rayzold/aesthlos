import Link from "next/link";
import { compositionTiles } from "@/content/thecompositions";
import { pathFor } from "@/content/site";
import type { Lang } from "@/content/types";
import FadeContent from "@/components/motion/Reveal";
import TiltedCard from "@/components/ui/TiltedCard";
import FixedBackground from "@/components/media/FixedBackground";

/** /thecompositions — six tiles (3 × 2) over the honeycomb background, same order as Wix. */
export default function CompositionsPage({ lang }: { lang: Lang }) {
  const tiles = compositionTiles[lang];
  return (
    <>
      <FixedBackground src="/images/thecompositions/header.webp" position="left center" />
      <h1 className="sr-only">{lang === "el" ? "Οι Βοτανικές Συνθέσεις" : "Die Kompositionen"}</h1>
      <ul className="mx-auto grid max-w-[760px] grid-cols-2 gap-x-3 gap-y-8 px-4 py-16 sm:grid-cols-3 lg:px-0">
        {tiles.map((t, i) => (
          <li key={t.slug}>
            <FadeContent delay={i * 0.1} duration={0.8}>
              <Link href={pathFor(lang, t.slug)} className="group block">
                <div className="aspect-square border border-grey-line bg-black">
                  <TiltedCard
                    imageSrc={t.image.replace(/\.webp$/, "-w640.webp")}
                    altText={t.alt}
                    imageFetchPriority={i < 3 ? "high" : undefined}
                    containerWidth="100%"
                    containerHeight="100%"
                    imageWidth="100%"
                    imageHeight="100%"
                    rotateAmplitude={8}
                    scaleOnHover={1.03}
                    radius={0}
                    glare={0.12}
                    glareColor="#FFC824"
                    shadow={0.3}
                    parallax={0.5}
                    flipOnClick={false}
                    gyroscope={false}
                    intro={false}
                    showTooltip={false}
                  />
                </div>
                <span className="mx-auto mt-3 block w-fit rounded bg-black/60 px-2 py-0.5 text-center font-display text-[15px] leading-[1.3] tracking-[0.03em] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.9)] transition-colors group-hover:text-gold sm:bg-transparent sm:px-0 sm:text-[17px]">
                  {t.title}
                </span>
              </Link>
            </FadeContent>
          </li>
        ))}
      </ul>
    </>
  );
}
