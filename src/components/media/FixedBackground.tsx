/**
 * Page background that stays put while content scrolls (Wix "fixed" page background).
 * Uses a fixed layer instead of background-attachment so it also works on iOS.
 */
export default function FixedBackground({
  src,
  mobileSrc,
  overlay = 0,
  position = "center",
}: {
  src: string;
  mobileSrc?: string;
  overlay?: number;
  position?: string;
}) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <picture>
        {mobileSrc && <source media="(max-width: 767px)" srcSet={mobileSrc} />}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" className="h-full w-full object-cover" style={{ objectPosition: position }} fetchPriority="high" />
      </picture>
      {overlay > 0 && <div className="absolute inset-0 bg-black" style={{ opacity: overlay }} />}
    </div>
  );
}
