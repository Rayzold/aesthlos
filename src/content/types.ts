export type Lang = "el" | "de";

/** A piece of inline text with the styling it had on the Wix site. */
export type Run = {
  text: string;
  color?: string;
  bold?: boolean;
  href?: string;
};

export type TextBlock = {
  type: "text";
  section: string | null;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "li";
  runs: Run[];
  color?: string;
};
export type ImageBlock = {
  type: "image";
  section: string | null;
  src: string;
  alt: string;
  width: number | null;
  height: number | null;
};
export type LinkBlock = { type: "link"; section: string | null; text: string; href: string };
export type VideoBlock = { type: "video"; section: string | null; id: string };
export type GalleryBlock = {
  type: "gallery";
  section: string | null;
  id: string;
  items: { image: string; title: string; alt: string; href: string | null }[];
};
export type Block = TextBlock | ImageBlock | LinkBlock | VideoBlock | GalleryBlock;

/** Shape of src/content/generated/<lang>/<slug>.json (written by scripts/extract_content.py). */
export type GeneratedPage = {
  lang: Lang;
  slug: string;
  meta: {
    title: string;
    description: string | null;
    ogTitle: string | null;
    ogDescription: string | null;
    ogImage: string | null;
    canonical: string | null;
  };
  blocks: Block[];
};
