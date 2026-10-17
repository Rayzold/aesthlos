import type { Viewport } from "next";
import SiteShell from "@/components/layout/SiteShell";
import "../globals.css";

export const viewport: Viewport = { themeColor: "#000000", colorScheme: "dark" };

export default function GreekRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <head>
        {/* Old Wix German URLs (?lang=de) -> /de/... (static-host friendly; hosts can also redirect server-side) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if(/[?&]lang=de(&|$)/.test(location.search)){var p=location.pathname.replace(/\\/$/,"");location.replace("/de"+(p==="/"?"":p)+location.hash)}`,
          }}
        />
      </head>
      <body>
        <SiteShell lang="el">{children}</SiteShell>
      </body>
    </html>
  );
}
