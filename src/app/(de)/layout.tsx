import type { Viewport } from "next";
import SiteShell from "@/components/layout/SiteShell";
import "../globals.css";

export const viewport: Viewport = { themeColor: "#000000", colorScheme: "dark" };

export default function GermanRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <SiteShell lang="de">{children}</SiteShell>
      </body>
    </html>
  );
}
