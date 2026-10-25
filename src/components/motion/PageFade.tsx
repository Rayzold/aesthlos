"use client";

import { useEffect } from "react";

/**
 * Short fade between routes. Skipped on the very first page load so the first paint
 * (and the LCP image) is visible immediately; only client-side navigations fade in.
 * The flag is set after the first commit (useEffect), never during render, so a re-run of the
 * hydration render always matches the prerendered HTML.
 */
let firstPageShown = false;

export default function PageFade({ children }: { children: React.ReactNode }) {
  const fade = firstPageShown;
  useEffect(() => {
    firstPageShown = true;
  }, []);
  return <div className={fade ? "page-fade" : undefined}>{children}</div>;
}
