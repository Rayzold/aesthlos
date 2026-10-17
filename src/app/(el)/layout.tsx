import type { Viewport } from "next";
import SiteShell from "@/components/layout/SiteShell";
import "../globals.css";

export const viewport: Viewport = { themeColor: "#000000", colorScheme: "dark" };

export default function GreekRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body>
        <SiteShell lang="el">{children}</SiteShell>
      </body>
    </html>
  );
}
