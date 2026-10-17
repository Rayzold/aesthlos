"use client";

/**
 * Short fade between routes. Skipped on the very first page load so the first paint
 * (and the LCP image) is visible immediately; only client-side navigations fade in.
 * The flag lives only in the browser — prerendered HTML never carries the fade class.
 */
let hydrated = false;

export default function PageFade({ children }: { children: React.ReactNode }) {
  const isBrowser = typeof window !== "undefined";
  const fade = isBrowser && hydrated;
  if (isBrowser) hydrated = true;
  return <div className={fade ? "page-fade" : undefined}>{children}</div>;
}
