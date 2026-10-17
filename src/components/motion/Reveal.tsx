"use client";

import { useEffect, useRef, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";

/**
 * Lightweight stand-in for React Bits <FadeContent> (same props we use), without GSAP:
 * IntersectionObserver + CSS transitions, ~1 KB.
 *
 * Performance: content is rendered VISIBLE in the static HTML. Only elements that are below the fold
 * when the page hydrates get hidden and then revealed on scroll — so nothing above the fold waits for
 * JavaScript (keeps LCP fast) and the page still reads fine without JS or with reduced motion.
 */
type Props = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  delay?: number; // seconds
  duration?: number; // seconds
  blur?: boolean;
  stagger?: number; // seconds between direct children
  trigger?: "scroll" | "mount";
  className?: string;
  style?: CSSProperties;
};

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function Reveal({ children, delay = 0, duration = 0.8, blur = false, stagger = 0, trigger = "scroll", className = "", style, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = stagger > 0 && el.children.length ? (Array.from(el.children) as HTMLElement[]) : [el];
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView && trigger === "scroll") return; // already on screen at load: never hide it

    const hide = () =>
      targets.forEach((t) => {
        t.style.opacity = "0";
        t.style.transform = "translateY(14px)";
        if (blur) t.style.filter = "blur(8px)";
      });
    const show = () =>
      targets.forEach((t, i) => {
        const d = delay + i * stagger;
        t.style.transition = `opacity ${duration}s ${EASE} ${d}s, transform ${duration}s ${EASE} ${d}s, filter ${duration}s ${EASE} ${d}s`;
        t.style.opacity = "";
        t.style.transform = "";
        t.style.filter = "";
      });

    hide();
    if (trigger === "mount") {
      requestAnimationFrame(() => requestAnimationFrame(show));
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          show();
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [blur, delay, duration, stagger, trigger]);

  return (
    <div ref={ref} className={className} style={style} {...rest}>
      {children}
    </div>
  );
}
