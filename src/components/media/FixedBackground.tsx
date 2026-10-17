/**
 * Page background that stays put while content scrolls (Wix "fixed" page background).
 * Uses a fixed layer instead of background-attachment so it also works on iOS.
 * Serves pre-generated width variants (scripts/image-variants.mjs): phones get the 1080px
 * version (it is a soft decorative background), larger screens pick by viewport width.
 */
const variant = (src: string, w: number) => src.replace(/\.webp$/, `-w${w}.webp`);

export default function FixedBackground({
  src,
  mobileSrc,
  overlay = 0,
  position = "center",
  priority = "auto",
}: {
  src: string;
  mobileSrc?: string;
  overlay?: number;
  position?: string;
  /** Decorative backgrounds should not compete with the real LCP element. */
  priority?: "high" | "low" | "auto";
}) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <picture>
        <source media="(max-width: 767px)" srcSet={variant(mobileSrc ?? src, 1080)} />
        <source srcSet={[1080, 1600, 2560].map((w) => `${variant(src, w)} ${w}w`).join(", ")} sizes="100vw" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" className="h-full w-full object-cover" style={{ objectPosition: position }} fetchPriority={priority} />
      </picture>
      {overlay > 0 && <div className="absolute inset-0 bg-black" style={{ opacity: overlay }} />}
    </div>
  );
}
