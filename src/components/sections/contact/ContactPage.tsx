import Image from "next/image";
import { contact } from "@/content/contact";
import type { Lang } from "@/content/types";
import FadeContent from "@/components/ui/FadeContent";
import ContactForm from "./ContactForm";

/** /contact — honey photo left, form right, company details below (as on Wix). No map on the live page. */
export default function ContactPage({ lang }: { lang: Lang }) {
  const t = contact[lang];
  return (
    <div className="mx-auto max-w-site px-4 py-10 lg:px-0 lg:py-0">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_300px] lg:gap-0 lg:pr-[127px] lg:pl-[110px]">
        <FadeContent duration={1} className="mx-auto w-full max-w-[330px] lg:mx-0">
          <Image src="/images/contact/greek-honey.webp" alt="Greek Honey" width={1143} height={1600} priority sizes="330px" className="h-auto w-full" />
        </FadeContent>
        <section aria-labelledby="form-title" className="lg:pt-[50px]">
          <h1 id="form-title" className="mb-3 text-center font-display text-[18px] tracking-[0.03em] text-white">
            {t.formTitle}
          </h1>
          <ContactForm lang={lang} />
        </section>
      </div>

      <FadeContent className="mt-10 pb-10 text-center text-[15px] leading-[1.5] text-white lg:mt-4">
        <address className="not-italic">
          {t.company.map((c, i) => (
            <p key={i}>
              {c.line}
              {c.name && <span className={c.nameHiddenOnWix ? "text-[#2a2a2a]" : undefined}>{c.name}</span>}
            </p>
          ))}
          {t.address.map((l) => (
            <p key={l}>{l}</p>
          ))}
          <p>
            {t.emailLabel}
            <a href="mailto:info@aesthlos.com" className="underline-offset-4 hover:text-gold hover:underline">
              info@aesthlos.com
            </a>
          </p>
          <p>
            {t.phoneLabel}
            <a href="tel:+302130144422" className="underline-offset-4 hover:text-gold hover:underline">
              {t.phoneDisplay}
            </a>
          </p>
        </address>
      </FadeContent>
    </div>
  );
}
