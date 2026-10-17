import type { Lang } from "@/content/types";
import Footer from "./Footer";
import Header from "./Header";

/** <body> contents shared by both language root layouts. */
export default function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <>
      <Header lang={lang} />
      <main id="main" tabIndex={-1} className="outline-none lg:pb-footer">
        {children}
      </main>
      <Footer lang={lang} />
    </>
  );
}
