import Image from "next/image";
import { ELEMENT_SYMBOLS, SLIDES, philosophy } from "@/content/ourphilosophy";
import type { Lang, Run } from "@/content/types";
import RichText from "@/components/content/RichText";
import BlurText from "@/components/ui/BlurText";
import FadeContent from "@/components/motion/Reveal";
import SplitText from "@/components/ui/SplitText";
import Slideshow from "@/components/media/Slideshow";
import Parallax from "@/components/media/Parallax";

/**
 * /ourphilosophy — two columns inside the 980px grid, as on the live page
 * (archive/screenshots/ourphilosophy-*.jpg): slideshow | definitions + elements + story,
 * then fire-composition photo | "Therafoods / Next Generation Superfoods" + body + formulations photo.
 */
export default function PhilosophyPage({ lang }: { lang: Lang }) {
  const c = philosophy[lang];
  return (
    <div className="mx-auto max-w-site px-4 py-8 lg:px-0 lg:py-0">
      <section className="grid gap-8 lg:grid-cols-[490px_1fr] lg:gap-3">
        <Slideshow
          images={SLIDES}
          alt="Aesthlos"
          lang={lang}
          className="aspect-[490/690] w-full lg:h-[690px] lg:aspect-auto"
        />
        <div className="space-y-4 text-[16px] leading-[1.2] text-white lg:pt-6">
          <Definition
            intro={c.esthlos.intro}
            definition={c.esthlos.definition}
          />
          <FadeContent>
            {c.intro.map((r, i) => (
              <p key={i}>
                <RichText runs={r} lang={lang} />
              </p>
            ))}
          </FadeContent>

          <ul
            className="space-y-1 py-2"
            aria-label={
              lang === "el" ? "Τα πέντε στοιχεία" : "Die fünf Elemente"
            }
          >
            {c.elements.map((label, i) => (
              <li key={label}>
                <FadeContent
                  delay={i * 0.1}
                  duration={0.6}
                  className="group flex items-center gap-3"
                >
                  <Image
                    src={ELEMENT_SYMBOLS[i]}
                    alt=""
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] transition-[filter] duration-500 group-hover:drop-shadow-[0_0_6px_rgba(255,200,36,0.9)]"
                  />
                  <span className="font-display text-[14px] leading-[26.6px] tracking-[0.05em] text-gold">
                    {label}
                  </span>
                </FadeContent>
              </li>
            ))}
          </ul>

          <Definition
            intro={c.endiamesos.intro}
            definition={c.endiamesos.definition}
          />
          <FadeContent className="space-y-4">
            {c.story.map((r, i) => (
              <p key={i}>
                <RichText runs={r} lang={lang} />
              </p>
            ))}
          </FadeContent>
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:mt-3 lg:grid-cols-[490px_1fr] lg:gap-3">
        <Parallax strength={30} className="order-2 lg:order-1">
          <Image
            src="/images/ourphilosophy/therafoods-fire-composition.webp"
            alt="Aesthlos therafoods fire composition"
            width={1000}
            height={1500}
            sizes="(min-width: 1024px) 490px, 100vw"
            className="h-auto w-full"
          />
        </Parallax>
        <div className="order-1 space-y-4 text-[16px] leading-[1.1] text-white lg:order-2">
          <h2 className="font-display text-[26px] leading-[1.1] text-gold">
            {c.heading.map((line, i) => (
              <BlurText
                key={i}
                text={line}
                animateBy="words"
                direction="top"
                delay={120}
                className="block"
              />
            ))}
          </h2>
          <FadeContent className="space-y-4">
            {c.body.map((r, i) => (
              <p key={i}>
                <RichText runs={r} lang={lang} />
              </p>
            ))}
            {c.note.map((r, i) => (
              <p key={i} className="pt-2 text-[13px] italic leading-[1.2]">
                <RichText runs={r} lang={lang} />
              </p>
            ))}
          </FadeContent>
          <FadeContent className="pt-4">
            <Image
              src="/images/ourphilosophy/honey-formulations.webp"
              alt="aesthlos honey formulations"
              width={1000}
              height={716}
              sizes="(min-width: 1024px) 475px, 100vw"
              className="h-auto w-full"
            />
          </FadeContent>
        </div>
      </section>
    </div>
  );
}

/** «Word», intro text… / definition (gold). SplitText animates only the quoted word. */
function Definition({
  intro,
  definition,
}: {
  intro: Run[];
  definition: Run[];
}) {
  const first = intro.map((r) => r.text).join("");
  const m = first.match(/^\s*([«“"][^»”"]+[»”"])([\s\S]*)$/);
  return (
    <div>
      <p>
        {m ? (
          <>
            <span className="sr-only">{m[1]}</span>
            <span aria-hidden>
              <SplitText
                text={m[1]}
                tag="span"
                splitType="chars"
                delay={45}
                duration={0.6}
                from={{ opacity: 0, y: 12 }}
                to={{ opacity: 1, y: 0 }}
                className="!inline-block"
              />
            </span>
            {m[2]}
          </>
        ) : (
          <RichText runs={intro} />
        )}
      </p>
      <p className="text-gold">
        <RichText runs={definition} />
      </p>
    </div>
  );
}
