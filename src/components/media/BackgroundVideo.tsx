"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Muted looping background video. Shows only the poster when the user prefers reduced motion,
 * and pauses while off-screen to save battery/CPU.
 */
export default function BackgroundVideo({ src, poster, className = "" }: { src: string; poster: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const v = ref.current;
    // Check the media query directly: on the first run `reduced` is still its initial `false`,
    // which used to start (and download) the video for reduced-motion visitors.
    if (!v || reduced || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.05 });
    io.observe(v);
    return () => io.disconnect();
  }, [reduced]);

  // The poster is a real (responsive) <img> painted immediately; the video fades in over it once playing.
  return (
    <>
      <Image src={poster} alt="" aria-hidden fill sizes="100vw" className={`object-cover ${className}`} />
      {!reduced && (
        <video
          ref={ref}
          className={`absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ${className}`}
          src={src}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
          onPlaying={(e) => e.currentTarget.classList.remove("opacity-0")}
        />
      )}
    </>
  );
}
