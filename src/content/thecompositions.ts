import { DE_COMPOSITION_TITLES } from "./de-translations";
import type { Slug } from "./site";
import type { Lang } from "./types";

/** /thecompositions tiles, order and captions verbatim from Wix. The Infinity tile had no link on Wix (fixed). */
export type CompositionTile = { title: string; alt: string; image: string; slug: Slug };

const el: CompositionTile[] = [
  {
    "title": "Η Σύνθεση του Infinity",
    "alt": "Η Σύνθεση του Infinity",
    "image": "/images/home/infinity-product.webp",
    "slug": "copy-of-the-composition-of-earth"
  },
  {
    "title": "Η Σύνθεση της Γης",
    "alt": "aesthlos earth composition",
    "image": "/images/thecompositions/tile-earth.webp",
    "slug": "compositionofearth"
  },
  {
    "title": "Η Σύνθεση του Νερού",
    "alt": "aesthlos composition water",
    "image": "/images/thecompositions/tile-water.webp",
    "slug": "compositionofwater"
  },
  {
    "title": "H Σύνθεση της Φωτιάς",
    "alt": "aesthlos composition fire",
    "image": "/images/thecompositions/tile-fire.webp",
    "slug": "compositionoffire"
  },
  {
    "title": "H Σύνθεση του Αέρα",
    "alt": "aesthlos composition air",
    "image": "/images/thecompositions/tile-air.webp",
    "slug": "compositionofair"
  },
  {
    "title": "H Σύνθεση του Αιθέρα",
    "alt": "aesthlos composition aether",
    "image": "/images/thecompositions/tile-aether.webp",
    "slug": "compositionofaether"
  }
];

// translated: captions were Greek on the Wix German page
const deTitles = [DE_COMPOSITION_TITLES.infinity, DE_COMPOSITION_TITLES.earth, DE_COMPOSITION_TITLES.water, DE_COMPOSITION_TITLES.fire, DE_COMPOSITION_TITLES.air, DE_COMPOSITION_TITLES.aether];

export const compositionTiles: Record<Lang, CompositionTile[]> = {
  el,
  de: el.map((t, i) => ({ ...t, title: deTitles[i], alt: deTitles[i] })),
};
