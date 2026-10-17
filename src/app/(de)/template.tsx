import PageFade from "@/components/motion/PageFade";

/** Re-mounts on every navigation: short fade between routes (not on first load; disabled for reduced motion in globals.css). */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageFade>{children}</PageFade>;
}
