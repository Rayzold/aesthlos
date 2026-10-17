"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LANGS, NAV, UI, pathFor } from "@/content/site";
import type { Lang } from "@/content/types";

/** Strip the /de prefix so we can compare the active page across languages. */
function slugOf(pathname: string): string {
  return pathname.replace(/^\/de(?=\/|$)/, "").replace(/^\//, "").replace(/\/$/, "");
}

export default function Header({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? "/";
  const current = slugOf(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ui = UI[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation and lock page scroll while it is open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 h-header transition-[background-color,backdrop-filter] duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md" : "bg-black"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-3 focus:py-2 focus:text-black"
      >
        {ui.skip}
      </a>

      <div className="mx-auto flex h-full max-w-site items-center px-4 lg:px-[9px]">
        <Link href={pathFor(lang, "")} aria-label={ui.home} className="shrink-0">
          <Image
            src="/images/shared/logo-white-02.webp"
            alt="Aesthlos Therafoods logo"
            width={141}
            height={51}
            priority
            className="h-[51px] w-[141px]"
          />
        </Link>

        <nav aria-label={lang === "el" ? "Ιστότοπος" : "Website"} className="ml-auto hidden lg:ml-[8px] lg:block">
          <ul className="flex">
            {NAV[lang].map((item) => {
              const active = current === item.slug;
              return (
                <li key={item.slug}>
                  <Link
                    href={pathFor(lang, item.slug)}
                    aria-current={active ? "page" : undefined}
                    className={`block px-[16px] text-[13px] leading-[50px] transition-colors duration-200 hover:text-gold ${
                      active ? "text-gold" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <LangDropdown lang={lang} current={current} />

        <button
          type="button"
          className="ml-auto flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? ui.close : ui.menu}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-6" aria-hidden>
            <span className={`absolute left-0 h-px w-6 bg-white transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-px w-6 bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-px w-6 bg-white transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {/* Mobile: full-screen menu with staggered fade-in */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-header z-40 overflow-y-auto bg-black lg:hidden"
      >
        <nav aria-label={lang === "el" ? "Ιστότοπος" : "Website"} className="px-8 pt-10">
          <ul className="space-y-6">
            {NAV[lang].map((item, i) => {
              const active = current === item.slug;
              return (
                <li key={item.slug} style={{ animation: open ? `menu-item-in 400ms ${80 + i * 60}ms ease-out both` : undefined }}>
                  <Link
                    href={pathFor(lang, item.slug)}
                    aria-current={active ? "page" : undefined}
                    className={`text-2xl ${active ? "text-gold" : "text-white"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <LangSwitch lang={lang} current={current} className="mt-12 flex" />
        </nav>
      </div>
    </header>
  );
}

function LangSwitch({ lang, current, className = "" }: { lang: Lang; current: string; className?: string }) {
  return (
    <ul className={`items-center gap-3 text-[13px] ${className}`} aria-label={UI[lang].language}>
      {LANGS.map((l) => (
        <li key={l.lang}>
          <Link
            href={pathFor(l.lang, current)}
            hrefLang={l.htmlLang}
            lang={l.htmlLang}
            aria-current={l.lang === lang ? "true" : undefined}
            className={`transition-colors hover:text-gold ${l.lang === lang ? "text-gold" : "text-white/70"}`}
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Desktop language selector styled like the Wix one: dark grey box "EL ⌄". */
function LangDropdown({ lang, current }: { lang: Lang; current: string }) {
  const [open, setOpen] = useState(false);
  const active = LANGS.find((l) => l.lang === lang)!;
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent && e.key !== "Escape") return;
      if (e instanceof MouseEvent && (e.target as HTMLElement).closest("[data-lang-dropdown]")) return;
      setOpen(false);
    };
    window.addEventListener("click", close);
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("click", close);
      window.removeEventListener("keydown", close);
    };
  }, [open]);
  return (
    <div data-lang-dropdown className="relative ml-auto hidden lg:ml-[8px] lg:block">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${UI[lang].language}: ${active.label}`}
        onClick={() => setOpen((v) => !v)}
        className="flex h-[42px] items-center gap-4 rounded-md bg-[#323232] px-3 text-[16px] text-white transition-colors hover:bg-[#3d3d3d]"
      >
        {active.label}
        <svg width="12" height="8" viewBox="0 0 12 8" aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M1 1.5 6 6.5l5-5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      {open && (
        <ul role="listbox" className="absolute right-0 mt-1 min-w-full overflow-hidden rounded-md bg-[#323232] py-1 text-[16px]">
          {LANGS.map((l) => (
            <li key={l.lang} role="option" aria-selected={l.lang === lang}>
              <Link
                href={pathFor(l.lang, current)}
                hrefLang={l.htmlLang}
                lang={l.htmlLang}
                className={`block px-3 py-1.5 hover:bg-[#444] ${l.lang === lang ? "text-gold" : "text-white"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
