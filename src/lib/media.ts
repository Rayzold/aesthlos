import mediaIndex from "@/content/media-index.json";

type MediaEntry = { src: string; width: number; height: number };
const index = mediaIndex as Record<string, MediaEntry>;

/** Local optimised image for a Wix media id (accepts "~mv2" or "_mv2"). */
export function imageFor(wixId: string): MediaEntry | undefined {
  return index[wixId.replace("~", "_")];
}

/** Wix PDFs (/_files/ugd/<id>.pdf) -> local readable file names in /public/files. */
export const FILES: Record<string, string> = {
  "21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf": "/files/aesthlos-pistopoiisi.pdf",
  "21375d_64d52d0eb9de4b8ebb210f34ad4cb305.pdf": "/files/antioxeidotiki-drasi-melion.pdf",
  "21375d_4af6af938b46400392669fb091b07c93.pdf": "/files/chimikes-analyseis-meli-agrias-velanidias.pdf",
  "21375d_73eb672f52df443291f93878977596e0.pdf": "/files/chimikes-analyseis-meli-dasous.pdf",
};

export const VIDEOS: Record<string, string> = {
  "11062b_fac51a38acf24ea2aa030216e01a0ea3": "/video/home-infinity.mp4",
  "11062b_44a48dd0e9d043c8a1c1837e9dfeee8d": "/video/honeycollection.mp4",
};

/** Resolve a link captured from Wix to its new local target. */
export function resolveHref(href: string, lang: "el" | "de" = "el"): string {
  if (href.startsWith("wixfile:")) return FILES[href.slice(8)] ?? href;
  // Live-site bugs fixed per owner decision (see CLAUDE.md)
  if (href === "mailto:info@melimuses.gr") return "mailto:info@aesthlos.com";
  if (href.startsWith("https://www.google.com/search")) return "tel:+302130144422";
  if (href.startsWith("/") && !href.startsWith("/files/")) {
    const clean = href.replace(/\?lang=de$/, "");
    return lang === "de" ? (clean === "/" ? "/de" : "/de" + clean) : clean;
  }
  return href;
}
