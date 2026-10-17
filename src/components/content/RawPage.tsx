import Image from "next/image";
import Link from "next/link";
import type { GeneratedPage } from "@/content/types";
import { imageFor, resolveHref, VIDEOS } from "@/lib/media";
import RichText from "./RichText";

/**
 * Temporary renderer (Phase 2): shows a page's verbatim Wix content in document order,
 * so every URL exists and every text/image is reachable. Each page gets its real
 * layout in Phases 3–6, built from the same content.
 */
export default function RawPage({ page }: { page: GeneratedPage }) {
  const lang = page.lang;
  return (
    <div className="mx-auto max-w-site space-y-4 px-4 py-12 lg:px-[9px]">
      {page.blocks.map((b, i) => {
        switch (b.type) {
          case "text": {
            const Tag = b.tag;
            const size = b.tag.startsWith("h") ? "text-[28px] font-bold leading-tight" : "text-[16px] leading-[1.4]";
            return (
              <Tag key={i} className={size} style={b.color ? { color: b.color } : undefined}>
                <RichText runs={b.runs} lang={lang} />
              </Tag>
            );
          }
          case "image": {
            const img = imageFor(b.src);
            if (!img) return null;
            return (
              <Image key={i} src={img.src} alt={b.alt} width={img.width} height={img.height} className="h-auto max-h-[70vh] w-auto" />
            );
          }
          case "video":
            return VIDEOS[b.id] ? (
              <video key={i} src={VIDEOS[b.id]} muted loop playsInline autoPlay className="w-full" aria-hidden />
            ) : null;
          case "link": {
            const href = resolveHref(b.href, lang);
            return (
              <p key={i}>
                <Link href={href} className="inline-block rounded-full border-2 border-gold px-5 py-1.5 text-[13px] text-gold">
                  {b.text}
                </Link>
              </p>
            );
          }
          case "gallery":
            return (
              <ul key={i} className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                {b.items.map((it, j) => {
                  const img = imageFor(it.image);
                  const inner = (
                    <>
                      {img && <Image src={img.src} alt={it.alt || it.title} width={img.width} height={img.height} className="h-auto w-full" />}
                      <span className="mt-2 block text-center text-[18px]">{it.title}</span>
                    </>
                  );
                  return (
                    <li key={j}>{it.href ? <Link href={resolveHref(it.href, lang)}>{inner}</Link> : inner}</li>
                  );
                })}
              </ul>
            );
        }
      })}
    </div>
  );
}
