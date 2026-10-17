"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

type Labels = { prev: string; next: string; zoom: string; close: string; slide: string };

const LABELS: Record<"el" | "de", Labels> = {
  el: { prev: "Προηγούμενο", next: "Επόμενο", zoom: "Μεγέθυνση εικόνας", close: "Κλείσιμο", slide: "Εικόνα" },
  de: { prev: "Zurück", next: "Weiter", zoom: "Bild vergrößern", close: "Schließen", slide: "Bild" },
};

/**
 * Crossfading slideshow with arrows, "1/6" counter and click-to-zoom lightbox
 * (rebuild of the Wix slideshow gallery on /ourphilosophy). Keyboard and swipe friendly.
 */
export default function Slideshow({
  images,
  alt,
  lang = "el",
  className = "",
}: {
  images: string[];
  alt: string;
  lang?: "el" | "de";
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const reduce = useReducedMotion();
  const t = LABELS[lang];
  const n = images.length;
  const go = useCallback((d: number) => setIndex((i) => (i + d + n) % n), [n]);

  return (
    <div className={`relative ${className}`} aria-roledescription="carousel" aria-label={alt}>
      <div className="relative h-full w-full overflow-hidden bg-black">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.button
            key={index}
            type="button"
            onClick={() => setZoom(true)}
            aria-label={`${t.zoom} ${index + 1}/${n}`}
            className="absolute inset-0 cursor-zoom-in"
            initial={reduce ? false : { opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            drag={reduce ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1);
              else if (info.offset.x > 60) go(-1);
            }}
          >
            <Image
              src={images[index]}
              alt={`${alt} — ${t.slide} ${index + 1}/${n}`}
              fill
              sizes="(min-width: 1024px) 490px, 100vw"
              className="pointer-events-none object-cover"
              priority={index === 0}
              draggable={false}
            />
          </motion.button>
        </AnimatePresence>
      </div>

      <NavButton side="left" label={t.prev} onClick={() => go(-1)} />
      <NavButton side="right" label={t.next} onClick={() => go(1)} />
      <p className="pointer-events-none absolute right-3 bottom-3 rounded bg-black/55 px-2 py-0.5 text-[12px] text-white" aria-live="polite">
        {index + 1}/{n}
      </p>

      {zoom && <Lightbox images={images} index={index} setIndex={setIndex} onClose={() => setZoom(false)} alt={alt} labels={t} />}
    </div>
  );
}

function NavButton({ side, label, onClick }: { side: "left" | "right"; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-gold ${
        side === "left" ? "left-2" : "right-2"
      }`}
    >
      <svg width="12" height="20" viewBox="0 0 12 20" aria-hidden className={side === "right" ? "rotate-180" : ""}>
        <path d="M10 2 2 10l8 8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    </button>
  );
}

function Lightbox({
  images,
  index,
  setIndex,
  onClose,
  alt,
  labels,
}: {
  images: string[];
  index: number;
  setIndex: (fn: (i: number) => number) => void;
  onClose: () => void;
  alt: string;
  labels: Labels;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const n = images.length;

  useEffect(() => {
    const d = ref.current;
    d?.showModal();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % n);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + n) % n);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      d?.close();
    };
  }, [n, setIndex]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-label={alt}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-black/95 p-0 text-white backdrop:bg-black/80"
    >
      <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-12">
        <Image
          src={images[index]}
          alt={`${alt} — ${labels.slide} ${index + 1}/${n}`}
          width={1000}
          height={1500}
          className="h-auto max-h-full w-auto max-w-full object-contain"
        />
        <NavButton side="left" label={labels.prev} onClick={() => setIndex((i) => (i - 1 + n) % n)} />
        <NavButton side="right" label={labels.next} onClick={() => setIndex((i) => (i + 1) % n)} />
        <button
          type="button"
          autoFocus
          onClick={onClose}
          aria-label={labels.close}
          className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl hover:bg-white/20 hover:text-gold"
        >
          ×
        </button>
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[13px] text-white/80">
          {index + 1}/{n}
        </p>
      </div>
    </dialog>
  );
}
