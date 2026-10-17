import type { Slug } from "./site";

/**
 * German texts that did NOT exist on the Wix German version and were translated for the new site
 * (owner request, 2026-10-17). Everything else in German is verbatim from Wix.
 * Listed for the owner in OWNER-CHANGES.md — a native-speaker review is recommended.
 */

/** Composition names, same wording as the German product-page titles on Wix ("Die Komposition der Erde"). */
export const DE_COMPOSITION_TITLES = {
  infinity: "Die Komposition Infinity",
  earth: "Die Komposition der Erde",
  water: "Die Komposition des Wassers",
  fire: "Die Komposition des Feuers",
  air: "Die Komposition der Luft",
  aether: "Die Komposition des Äthers",
} as const;

/** <title> and meta description for German pages (Wix left these in English or empty). */
export const DE_META: Partial<Record<Slug, { title?: string; description: string }>> = {
  "": {
    description:
      "Aesthlos Therafoods ist eine erstklassige Nahrungsmittelserie mit hochwertigen Kräuterkompositionen auf Honigbasis, die ganzheitlich zur Stärkung der Gesundheit beiträgt.",
  },
  ourphilosophy: {
    description:
      "„Aesthlos“ bedeutet im Altgriechischen „der Starke, der Würdige, der Beste seiner Art“. Dieses Wort kennzeichnet die fünf Produkte der Serie – die fünf Rezepte der Stärke.",
  },
  thegreekhoneys: {
    description:
      "Unsere Honige stammen von Imkerfamilien mit mindestens einem halben Jahrhundert Tradition und werden mit völlig natürlichen und biologischen Methoden gewonnen – eine natürliche Apotheke, die den Körper schützt und die Gesundheit stärkt.",
  },
  thecompositions: {
    description:
      "Unsere Kompositionen verbinden die ganzheitliche Unterstützung der fünf Ebenen der Gesundheit mit einem einzigartigen Geschmackserlebnis.",
  },
  honeycollection: {
    description:
      "Unsere Honigsammlung stammt von Imkerfamilien mit mindestens einem halben Jahrhundert Tradition, gewonnen mit völlig natürlichen und biologischen Methoden in verschiedenen Regionen Griechenlands.",
  },
  contact: { description: "Kontakt zu Aesthlos Therafoods per E-Mail an info@aesthlos.com." },
  "copy-of-the-composition-of-earth": {
    title: "Die Komposition Infinity | Aesthlos",
    description:
      "Botanische Rezeptur auf Basis von Blütenhonig mit Gelée Royale und Ashwagandha, die zur körperlichen Ausdauer, zum emotionalen Gleichgewicht und zur geistigen Leistungsfähigkeit beiträgt.",
  },
  compositionofearth: {
    title: "Die Komposition der Erde | Aesthlos",
    description:
      "Botanische Komposition auf Basis von Blütenhonig mit Rosa canina und einer Mischung aus Superfoods, die die körperliche Vitalität fördert und die Abwehr gegen äußere Mikroorganismen stärkt.",
  },
  compositionofwater: {
    title: "Die Komposition des Wassers | Aesthlos",
    description:
      "Botanische Komposition auf Basis von Blütenhonig mit Ashwagandha und einer Mischung aus Superfoods, die das emotionale Gleichgewicht fördert, zur Stressresistenz beiträgt und die Herz-Kreislauf-Funktion unterstützt.",
  },
  compositionoffire: {
    title: "Die Komposition des Feuers | Aesthlos",
    description:
      "Botanische Komposition auf Basis von Blütenhonig mit Pollen, Gelée Royale, Maca und einer Mischung aus Superfoods, die Leistungsfähigkeit und Verlangen steigert, die Fruchtbarkeit verbessert und vor Osteoporose schützt.",
  },
  compositionofair: {
    title: "Die Komposition der Luft | Aesthlos",
    description:
      "Botanische Komposition auf Basis von Blütenhonig mit Ginkgo Biloba, der Konzentration, Gedächtnis und geistige Leistungsfähigkeit verbessert.",
  },
  compositionofaether: {
    title: "Die Komposition des Äthers | Aesthlos",
    description:
      "Botanische Rezeptur auf Basis von Blütenhonig mit Gelée Royale, Ashwagandha und Schisandra chinensis, die das ganzheitliche Wohlbefinden unterstützt und die geistige und körperliche Leistungsfähigkeit steigert.",
  },
  aesthloswildoakhoney: {
    title: "Wilder Eichenhonig | Aesthlos",
    description:
      "Beste Qualität und bestmögliche Produktionsbedingungen für unseren Wilden Eichenhonig. Unsere Sammlungen stammen aus dem gebirgigen Ilia, dem berühmten Wald von Foloi, und aus dem gebirgigen Euböa, vom Berg Dirfys.",
  },
  aesthlosforesthoney: {
    title: "Waldhonig | Aesthlos",
    description:
      "Unsere Sammlungen stammen aus dem gebirgigen Ilia, dem berühmten Wald von Foloi, und aus dem gebirgigen Euböa, vom Berg Dirfys – Wälder voller Eichen, Kastanien, Kiefern, Tannen, Buchen und Wildblumen.",
  },
};
