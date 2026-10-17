import type { Slug } from "./site";
import type { Lang } from "./types";

/** /honeycollection copy — verbatim from Wix. */
export const honeyCollection: Record<Lang, { title: string; links: { label: string; slug: Slug }[] }> = {
  "el": {
    "title": "Δείτε τα μέλια μας",
    "links": [
      {
        "label": "Μέλι Άγριας Βελανιδιάς",
        "slug": "aesthloswildoakhoney" as Slug
      },
      {
        "label": "Μέλι Δάσους",
        "slug": "aesthlosforesthoney" as Slug
      }
    ]
  },
  "de": {
    "title": "Unsere Honige",
    "links": [
      {
        "label": "Wilder Eichenhonig",
        "slug": "aesthloswildoakhoney" as Slug
      },
      {
        "label": "Wald Honig",
        "slug": "aesthlosforesthoney" as Slug
      }
    ]
  }
};
