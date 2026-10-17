import type { Slug } from "@/content/site";
import type { Lang } from "@/content/types";
import RawPage from "@/components/content/RawPage";
import { getPage } from "@/lib/content";
import CompositionsPage from "./compositions/CompositionsPage";
import GreekHoneysPage from "./greekhoneys/GreekHoneysPage";
import HoneyCollectionPage from "./honeys/HoneyCollectionPage";
import PhilosophyPage from "./philosophy/PhilosophyPage";

/** Picks the designed layout for a page; pages not rebuilt yet fall back to the raw verbatim renderer. */
export default function PageForSlug({ lang, slug }: { lang: Lang; slug: Slug }) {
  switch (slug) {
    case "ourphilosophy":
      return <PhilosophyPage lang={lang} />;
    case "thegreekhoneys":
      return <GreekHoneysPage lang={lang} />;
    case "thecompositions":
      return <CompositionsPage lang={lang} />;
    case "honeycollection":
      return <HoneyCollectionPage lang={lang} />;
    default:
      return <RawPage page={getPage(lang, slug)} />;
  }
}
