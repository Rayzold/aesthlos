import type { Lang, Run } from "./types";

/**
 * Homepage copy, verbatim from the live Wix site (generated from src/content/generated/{el,de}/home.json,
 * then frozen here so the copy can be edited without touching layout code).
 * German: where the Wix German version had no translation (Infinity block, composition captions,
 * "Δείτε περισσότερα" button) the Greek original is kept — see archive/de-gaps.md.
 */
export type HomeContent = {
  hero: { tagline: string[] };
  infinity: { title: string; subtitle: string; cta: string; text: string[] };
  compositions: { title: string; items: { title: string; image: string; href: string }[] };
  about: { title: string; story: string[]; quote: Run[]; attribution: string; text: Run[][]; cta: string };
};

const compositionImages = ["/images/home/composition-earth.webp", "/images/home/composition-water.webp", "/images/home/composition-fire.webp", "/images/home/composition-air.webp", "/images/home/composition-aether.webp"];
const compositionLinks = ["compositionofearth", "compositionofwater", "compositionoffire", "compositionofair", "compositionofaether"];

export const home: Record<Lang, HomeContent> = {
  el: {
    hero: { tagline: ["Μια διατροφική σειρά premium βοτανικών συνθέσεων με βάση το μέλι,", "που στοχεύει ολιστικά στην ενδυνάμωση της υγείας."] },
    infinity: {
      title: "Αesthlos Infinity",
      subtitle: "για Ζωτικότητα & Ευεξία",
      cta: "Δείτε περισσότερα",
      text: ["Η νέα προσθήκη που ήρθε να ολοκληρώσει", "τις Βοτανικές μας Συνθέσεις."],
    },
    compositions: {
      title: "Οι Πέντε Βοτανικές Συνθέσεις",
      items: ["H Σύνθεση της Γης", "Η Σύνθεση του Νερού", "Η Σύνθεση της Φωτιάς", "Η Σύνθεση του Αέρα", "Η Σύνθεση του Αιθέρα"].map((title, i) => ({ title, image: compositionImages[i], href: compositionLinks[i] })),
    },
    about: {
      title: "Λίγα λόγια για εμάς...",
      story: ["Μία φιλία που ξεκίνησε κάπου στο μακρινό 1990, όταν ακόμα και οι δύο ήταν φοιτητές στο Πολυτεχνείο, και συνεχίστηκε με κοινούς βίους και αγαπημένες διαδρομές (στις πολεμικές τέχνες, στη φωτογραφία, στη συγγραφή, στη μουσική, στο θέατρο και… γενικότερα στις τέχνες!) οδήγησε μετά από 35 ολόκληρα χρόνια τον Γιώργο και τον Θεοδόση σε μία επαγγελματική συνεργασία κάτω από το BrandName «Aesthlos» («ΕΣΘΛΟΣ»). Μέσα από αυτήν τη συνεργασία κατάφεραν να \"παντρέψουν\" όλη την αγάπη τους για τον άνθρωπο με την βιομηχανία του τροφίμου, δημιουργώντας μια σειρά Βοτανικών Συνθέσεων εμπνευσμένων από την Αρχαία Ελληνική παράδοση."],
      quote: [{"text": "” Η τροφή πρέπει να είναι το φάρμακό σου", "color": "#FFC824"}, {"text": "\n"}, {"text": "και το φάρμακό σου να είναι η τροφή σου”", "color": "#FFC824"}],
      attribution: "(Ιπποκράτης, 460 π.Χ. - 377 π.Χ.)",
      text: [[{"text": "Σε μια εποχή που η τροφή υποβαθμίζεται συνεχώς μέσα από την αλόγιστη εκμετάλλευση και τη μόλυνση των φυσικών πόρων και οι θρεπτικές ουσίες της αντικαθίστανται με άγευστα συμπληρώματα διατροφής, οι δυο τους δημιούργησαν πέντε διαφορετικές "}, {"text": "«Συνθέσεις Μελιού» ", "color": "#FFC824"}, {"text": "που συνδυάζουν την ολιστική υποστήριξη των πέντε επιπέδων υγείας, και προετοιμάζει συναισθηματικά, διανοητικά και σωματικά τον άνθρωπο για το ταξίδι της ζωής του."}]],
      cta: "Λίγα Λόγια για τα μέλια μας...",
    },
  },
  de: {
    hero: { tagline: ["Eine erstklassige Nahrungsmittelserie,", "mit hochwertigen Kräuterkompositionen auf Honigbasis,", "die ganzheitlich zur Stärkung der Gesundheit abzielt."] },
    infinity: {
      // Not translated on the Wix German page (it repeated the hero tagline) -> Greek original kept.
      title: "Αesthlos Infinity",
      subtitle: "για Ζωτικότητα & Ευεξία",
      cta: "Δείτε περισσότερα",
      text: ["Η νέα προσθήκη που ήρθε να ολοκληρώσει", "τις Βοτανικές μας Συνθέσεις."],
    },
    compositions: {
      title: "Die fünf Botanische Kompositionen",
      // Captions were not translated on Wix.
      items: ["H Σύνθεση της Γης", "Η Σύνθεση του Νερού", "Η Σύνθεση της Φωτιάς", "Η Σύνθεση του Αέρα", "Η Σύνθεση του Αιθέρα"].map((title, i) => ({ title, image: compositionImages[i], href: compositionLinks[i] })),
    },
    about: {
      title: "Ein paar Worte über uns…",
      story: ["Eine Freundschaft, die irgendwo in den fernen 90er Jahren begann, als beide noch Studenten am Polytechnikum waren, und sich mit gemeinsamen Leben und beliebten Lebensläufen fortsetzte (in den Kampfkünsten, der Fotografie, dem Schreiben, der Musik, dem Theater, und…also den Künsten allgemein) führte Georg und Theodosius, nach ganzen 35 Jahren, zu einer professionellen Zusammenarbeit unter dem Markennamen “Aesthlos” (“ΕΣΘΛΟΣ”).", "Durch diese Zusammenarbeit haben sie es geschafft, ihre Liebe zu den Mitmenschen mit der Lebensmittelindustrie zu “verheiraten” und eine Reihe von botanischen Kompositionen, die von der antiken griechischen Tradition inspiriert sind, herzustellen."],
      quote: [{ text: "\"Nahrung sollte deine Medizin", color: "#FFC824" }, { text: "\n" }, { text: "und deine Medizin deine Nahrung sein.\"", color: "#FFC824" }],
      attribution: "( Hippokrates, 460 v.Chr.-377 v.Chr.)",
      text: [[{"text": "In einer Zeit, in der Lebensmittel durch die wahllose Ausbeutung und Verschmutzung natürlicher Ressourcen immer mehr herabgestuft wird und ihre Nährstoffe durch geschmacklose Nahrungsergänzungsmittel ersetzt werden, haben beide fünf verschiedene "}, {"text": "“Honig Kompositionen\" ", "color": "#FFC824"}, {"text": " entwickelt, die eine ganzheitliche Unterstützung der fünf Ebenen der Gesundheit"}], [{"text": "mit einem einzigartigen Geschmackserlebnis verbinden, und den Menschen emotional, geistig und körperlich auf seinen Lebensweg vorbereitet."}]],
      cta: "Ein paar Worte über unsere Honigsorten…",
    },
  },
};
