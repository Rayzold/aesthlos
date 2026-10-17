import { FOOTER } from "@/content/site";
import type { Lang } from "@/content/types";

/** Fixed to the bottom of the viewport on desktop (as on the live Wix site), static on mobile. */
export default function Footer({ lang }: { lang: Lang }) {
  const f = FOOTER[lang];
  return (
    <footer className="border-t border-white/30 bg-black lg:fixed lg:inset-x-0 lg:bottom-0 lg:z-40 lg:h-footer">
      <div className="mx-auto flex h-full max-w-site flex-col gap-3 px-4 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-[9px] lg:py-0">
        <p className="font-display text-[11px] leading-[17.6px] tracking-[0.06em] text-white">{f.credit}</p>
        <h2 className="text-[15px] leading-[15px] italic text-white lg:text-right">{f.tagline}</h2>
      </div>
    </footer>
  );
}
