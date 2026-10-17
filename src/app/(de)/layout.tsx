import type { Viewport } from "next";
import SiteShell from "@/components/layout/SiteShell";
import "../globals.css";

export const viewport: Viewport = { themeColor: "#000000", colorScheme: "dark" };

export default function GermanRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preload" href="/fonts/roboto-condensed-latin-400-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <SiteShell lang="de">{children}</SiteShell>
      </body>
    </html>
  );
}
