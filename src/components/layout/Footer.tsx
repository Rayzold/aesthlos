import { FOOTER } from "@/content/site";
import type { Lang } from "@/content/types";

export default function Footer({ lang }: { lang: Lang }) {
  const f = FOOTER[lang];
  return (
    <footer className="bg-black">
      <div className="mx-auto flex max-w-site flex-col gap-4 px-4 py-10 sm:flex-row sm:items-end sm:justify-between lg:px-[9px]">
        <p className="font-display text-[11px] leading-[17.6px] tracking-[0.06em] text-white">{f.credit}</p>
        <h2 className="text-[15px] leading-[15px] text-white sm:text-right">{f.tagline}</h2>
      </div>
    </footer>
  );
}
