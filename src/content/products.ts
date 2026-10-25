import type { Lang, Run } from "./types";

/**
 * Product pages (6 compositions + 2 honeys), verbatim from Wix — frozen by scripts/freeze/phase5.py.
 * German Infinity (`translated: true`) is a new translation: Wix showed the Earth text there.
 * German Aether subtitle: "fünfte Element)" was #2A2A2A (invisible on black) on Wix -> accent colour.
 */
export type ProductLink = { label: string; href: string };
export type ProductImage = { src: string; alt: string };
export type CompositionProduct = {
  kind: "composition";
  accent: string;
  title: string;
  subtitle: Run[][];
  benefit: string;
  description: Run[][];
  usageLabel: string;
  usage: Run[][];
  ingredientsLabel: string;
  ingredients: Run[][];
  links: ProductLink[];
  images: ProductImage[];
  translated?: boolean;
};
export type HoneyProduct = {
  kind: "honey";
  accent: string;
  title: string;
  flow: ({ type: "p" | "lead"; runs: Run[] } | { type: "pdf"; label: string; href: string })[];
  links: ProductLink[];
  images: ProductImage[];
};
export type Product = CompositionProduct | HoneyProduct;

export const PRODUCT_SLUGS = ["copy-of-the-composition-of-earth", "compositionofearth", "compositionofwater", "compositionoffire", "compositionofair", "compositionofaether", "aesthloswildoakhoney", "aesthlosforesthoney"] as const;
export type ProductSlug = (typeof PRODUCT_SLUGS)[number];

export const products: Record<Lang, Record<ProductSlug, Product>> = {
 "el": {
  "copy-of-the-composition-of-earth": {
   "kind": "composition",
   "accent": "#1CBDBD",
   "title": "Η Σύνθεση του Ιnfinity",
   "subtitle": [],
   "benefit": "ΖΩΤΙΚΟΤΗΤΑ & ΕΥΕΞΙΑ",
   "description": [
    [
     {
      "text": "Βοτανική συνταγή βάσης μελιού ανθέων με "
     },
     {
      "text": "20% ενεργά βότανα ",
      "color": "#1CBDBD"
     },
     {
      "text": "και superfoods. Περιέχει "
     },
     {
      "text": "βασιλικό πολτό",
      "color": "#1CBDBD"
     },
     {
      "text": " και "
     },
     {
      "text": "Ashwagandha",
      "color": "#1CBDBD"
     },
     {
      "text": ", που συμβάλλει στην σωματική αντοχή, στην συναισθηματική ισορροπία και στη νοητική λειτουργία. Η σύνθεση ενισχύεται από "
     },
     {
      "text": "Rosa canina",
      "color": "#1CBDBD"
     },
     {
      "text": " (κυνόροδο) και  εξισορροπείται από το «ενδιάμεσο» συστατικό της "
     },
     {
      "text": "κανέλας",
      "color": "#1CBDBD"
     },
     {
      "text": ". "
     },
     {
      "text": "\n"
     },
     {
      "text": "Tο Infinity αξιοποιεί τον συνδυασμό τριών πολύτιμων βοτάνων σε συνέργεια με τη φυσική υπερ-τροφή του βασιλικού πολτού, σε μια προσεκτικά ζυγισμένη συνταγή, ενισχύοντας με απολύτως φυσικό τρόπο τη προσπάθεια που καθημερινά καταβάλει ο ανθρώπινος οργανισμός για την καλυτέρευση της υγείας σωματικά, συναισθηματικά και νοητικά."
     }
    ]
   ],
   "usageLabel": "Οδηγίες Χρήσης",
   "usage": [
    [
     {
      "text": "Μισή κουταλιά του γλυκού πολύ καλά μασημένη, κατά προτίμηση τις πρωινές ώρες."
     },
     {
      "text": "\n"
     },
     {
      "text": "Συνιστάται καθημερινή χρήση για 1-3 μήνες ως προς την επαλήθευση των ισχυρισμών της υγείας."
     }
    ]
   ],
   "ingredientsLabel": "Συστατικά",
   "ingredients": [
    [
     {
      "text": "Μέλι Ανθέων, σιρόπι Αγαύης, Ashwagandha -  Withania somnifera, Rosa Canina, Βασιλικός Πολτός, Κανέλα Κεϋλάνης"
     }
    ]
   ],
   "links": [
    {
     "label": "Οι Βοτανικές Συνθέσεις",
     "href": "/thecompositions"
    },
    {
     "label": "Πιστοποίηση",
     "href": "pdf:21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf"
    }
   ],
   "images": [
    {
     "src": "/images/products/infinity.webp",
     "alt": "Untitled Catalog0703 copy.JPG"
    }
   ]
  },
  "compositionofearth": {
   "kind": "composition",
   "accent": "#49A94B",
   "title": "Η Σύνθεση της Γης",
   "subtitle": [],
   "benefit": "ΔΥΝΑΜΗ & ΕΥΡΩΣΤΙΑ",
   "description": [
    [
     {
      "text": "Βοτανική σύνθεση βάσης μελιού ανθέων με 25% ενεργά βότανα και superfoods. Περιέχει "
     },
     {
      "text": "Rosa canina",
      "color": "#49A94B"
     },
     {
      "text": " και μείγμα υπερτροφών, που συμβάλλει στην σωματική ευρωστία και στην άμυνα έναντι των εξωτερικών μικρο-οργανισμών. Η Rosa canina (κυνόροδο) από την αρχαιότητα χρησιμοποιήθηκε ευρέως ως «Ύπατος  βοτανικός θεραπευτής». Λειτουργεί ως δυναμωτικό σε περίπτωση εξάντλησης του οργανισμού και έλλειψης βιταμινών, για το ανοσο- ποιητικό σύστημα αλλά και για άλλα οργανικά συστήματα της ανθρώπινης φυσιολογίας.  Η σύνθεση ενισχύεται και εξισορροπείται από  "
     },
     {
      "text": "Ashwaganda",
      "color": "#49A94B"
     },
     {
      "text": ", "
     },
     {
      "text": "Schisandra",
      "color": "#49A94B"
     },
     {
      "text": " και "
     },
     {
      "text": "κανέλλα",
      "color": "#49A94B"
     },
     {
      "text": "."
     }
    ]
   ],
   "usageLabel": "Οδηγίες Χρήσης",
   "usage": [
    [
     {
      "text": "Διαλύουμε με υπομονή μισή κουταλιά του γλυκού μέσα σε ένα μικρό φλιτζάνι με ζεστό (60°C ) νερό, ή τσάι. Αφού διαλυθεί καλά το μίγμα, καταναλώνουμε το ρόφημα χλιαρό, κατά προτίμηση πριν από το φαγητό, σκέτο, ή μαζί με λίγες σταγόνες λεμόνι."
     }
    ],
    [
     {
      "text": "Αλλιώς, τρώμε μισό κουταλάκι του γλυκού, πολύ καλά μασημένο, λίγη ώρα πριν από το γεύμα."
     }
    ],
    [
     {
      "text": "Συνιστώμενη κατανάλωση: από δύο έως και τρεις φορές την ημέρα."
     }
    ],
    [
     {
      "text": "Συνιστάται καθημερινή χρήση για 1-3 μήνες ως προς την επαλήθευση των ισχυρισμών της υγείας."
     }
    ]
   ],
   "ingredientsLabel": "Συστατικά",
   "ingredients": [
    [
     {
      "text": "Μέλι ανθέων, σιρόπι αγαύης, Rosa canina, Cinnamomum zeylanicum, Aschwagandha -  Withania somnifera, Schisandra chinensis"
     }
    ]
   ],
   "links": [
    {
     "label": "Οι Βοτανικές Συνθέσεις",
     "href": "/thecompositions"
    },
    {
     "label": "Πιστοποίηση",
     "href": "pdf:21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf"
    }
   ],
   "images": [
    {
     "src": "/images/products/earth.webp",
     "alt": "Pro-Capture-One-0416-small.png"
    }
   ]
  },
  "compositionofwater": {
   "kind": "composition",
   "accent": "#0081BD",
   "title": "H Σύνθεση του Νερού",
   "subtitle": [],
   "benefit": "ΣΥΝΑΙΣΘΗΜΑΤΙΚΗ ΑΡΜΟΝΙΑ",
   "description": [
    [
     {
      "text": "Βοτανική σύνθεση βάσης μελιού ανθέων με 20% ενεργά βότανα και superfoods. Περιέχει "
     },
     {
      "text": "Ashwagandha",
      "color": "#0081BD"
     },
     {
      "text": " και μείγμα υπερτροφών, που ενισχύει τη συναισθηματική ισορροπία, συμβάλλει στην ανθεκτικότητα έναντι του στρες, και υποστηρίζει την καρδιαγγειακή λειτουργία. Η λέξη «άσβα» (ashwa) στην σανσκριτική σημαίνει «άλογο» και η λέξη «γκάντα» (gandha) σημαίνει «μυρωδιά». Οι Ινδοί υποστηρίζουν ότι το βότανο έχει τη μυρωδιά ιδρωμένου αλόγου και γι’ αυτό μεταδίδει τη δύναμη ενός επιβήτορα σε όποιον το καταναλώνει.  Η Ashwagandha, το μυστηριώδες αυτό βότανο της ανατολής, αποτελεί έναν σημαντικό προστάτη κατά του καθημερινού στρες, επιφέροντας φυσική και συναισθηματική ευεξία.  Η σύνθεση ενισχύεται από τη "
     },
     {
      "text": "Schisandra",
      "color": "#0081BD"
     },
     {
      "text": ", ενώ εξισορροπείται από «ενδιάμεσα» συστατικά όπως το "
     },
     {
      "text": "σουσάμι ",
      "color": "#0081BD"
     },
     {
      "text": "και η "
     },
     {
      "text": "κανέλλα",
      "color": "#0081BD"
     },
     {
      "text": "."
     }
    ]
   ],
   "usageLabel": "Οδηγίες Χρήσης",
   "usage": [
    [
     {
      "text": "Aλείψτε σε ζεστό ψωμί ως εξής: είτε απευθείας, μία κουταλιά σε μια μικρή φέτα από ψωμί ολικής άλεσης, είτε η ίδια ποσότητα, διαλυμένη με καλής ποιότητας μέλι πάνω σε φέτες ψωμιού.  Αλλιώς, τρώμε ένα \"κοφτό\" κουταλάκι του γλυκού, πολύ καλά μασημένο, ενδιαμέσως των γευμάτων."
     }
    ],
    [
     {
      "text": "Συνιστώμενη κατανάλωση: Δύο έως και τρεις φορές την ημέρα."
     }
    ],
    [
     {
      "text": "Συνιστάται καθημερινή χρήση για 1-3 μήνες ως προς την επαλήθευση των ισχυρισμών της υγείας."
     }
    ]
   ],
   "ingredientsLabel": "Συστατικά",
   "ingredients": [
    [
     {
      "text": "Μέλι ανθέων, σιρόπι αγαύης, ταχίνι "
     },
     {
      "text": "(πάστα σουσαμιού) ",
      "bold": true
     },
     {
      "text": "ολικής άλεσης, Aschwagandha - Withania somnifera , Cinnamomum zeylanicum , Schisandra chinensis"
     }
    ]
   ],
   "links": [
    {
     "label": "Οι Βοτανικές Συνθέσεις",
     "href": "/thecompositions"
    },
    {
     "label": "Πιστοποίηση",
     "href": "pdf:21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf"
    }
   ],
   "images": [
    {
     "src": "/images/products/water.webp",
     "alt": "Pro-Capture One 0527 copy.png"
    }
   ]
  },
  "compositionoffire": {
   "kind": "composition",
   "accent": "#E21C21",
   "title": "H Σύνθεση της Φωτιάς",
   "subtitle": [],
   "benefit": "ΣΕΞΟΥΑΛΙΚΗ ΕΝΕΡΓΕΙΑ & ΥΓΕΙΑ ΤΩΝ ΟΣΤΩΝ",
   "description": [
    [
     {
      "text": "Βοτανική σύνθεση βάσης μελιού ανθέων με 35% ενεργά βότανα και superfoods. Περιέχει "
     },
     {
      "text": "γύρη",
      "color": "#E21C21"
     },
     {
      "text": ", "
     },
     {
      "text": "βασιλικό πολτό",
      "color": "#E21C21"
     },
     {
      "text": ", "
     },
     {
      "text": "Maca",
      "color": "#E21C21"
     },
     {
      "text": " και μείγμα υπερτροφών, που ενισχύει την ερωτική απόδοση και επιθυμία, βελτιώνει την γονιμότητα και συμβάλλει στην προστασία από την οστεοπόρωση. Η Maca είναι ένα εξαιρετικό φυσικό αφροδισιακό, που θεωρείται ιδιαίτερα θρεπτική τροφή, γιατί ταυτόχρονα προκαλεί πολύ σημαντική αύξηση στην ενέργεια, στη δύναμη και στην αντοχή, σε όλο τον ανθρώπινο οργανισμό. H σύνθεση ενισχύεται από "
     },
     {
      "text": "βασιλικό πολτό ",
      "color": "#E21C21"
     },
     {
      "text": "και "
     },
     {
      "text": "τζίντζερ",
      "color": "#E21C21"
     },
     {
      "text": ", ενώ  εξισορροπείται από «ενδιάμεσα» συστατικά όπως η "
     },
     {
      "text": "γύρη",
      "color": "#E21C21"
     },
     {
      "text": " και η "
     },
     {
      "text": "κανέλλα",
      "color": "#E21C21"
     },
     {
      "text": "."
     }
    ]
   ],
   "usageLabel": "Οδηγίες Χρήσης",
   "usage": [
    [
     {
      "text": "Μέγιστη καταναλώσιμη ποσότητα ημερησίως: 1-2 \"κοφτές\" κουταλιές του γλυκού, επαρκώς μασημένες, κατά προτίμηση"
     }
    ],
    [
     {
      "text": "πριν από σωματική άσκηση, είτε χορηγούμενες σε μικρότερες ποσότητες πολλαπλές φορές τη μέρα, αρχικά υπογλωσσίως και στη συνέχεια επαρκώς μασημένες."
     }
    ],
    [
     {
      "text": "Συνιστάται καθημερινή χρήση για 1-3 μήνες ως προς την επαλήθευση των ισχυρισμών της υγείας."
     }
    ]
   ],
   "ingredientsLabel": "Συστατικά",
   "ingredients": [
    [
     {
      "text": "Μέλι ανθέων, σιρόπι αγαύης, Maca – Lepidium meyenii, γύρη,"
     }
    ],
    [
     {
      "text": "βασιλικός πολτός, Zingiber officinale, Cinnamomum zeylanicum"
     }
    ]
   ],
   "links": [
    {
     "label": "Οι Βοτανικές Συνθέσεις",
     "href": "/thecompositions"
    },
    {
     "label": "Πιστοποίηση",
     "href": "pdf:21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf"
    }
   ],
   "images": [
    {
     "src": "/images/products/fire.webp",
     "alt": "7R2B0538 αντίγραφο copy.jpg"
    }
   ]
  },
  "compositionofair": {
   "kind": "composition",
   "accent": "#9374B4",
   "title": "Η Σύνθεση του Aέρα",
   "subtitle": [],
   "benefit": "ΔΙΑΝΟΗΤΙΚΗ ΛΕΙΤΟΥΡΓΙΑ",
   "description": [
    [
     {
      "text": "Βοτανική σύνθεση βάσης μελιού ανθέων με 25% ενεργά βότανα και superfoods. Περιέχει "
     },
     {
      "text": "Ginkgo Biloba",
      "color": "#9374B4"
     },
     {
      "text": ", που βελτιώνει τη συγκέντρωση, τη μνήμη και τη νοητική απόδοση. Το Ginkgo Biloba θεωρείται το βότανο της μνήμης και σίγουρα αποτελεί τον καλύτερο φίλο του εγκεφάλου, αφού υποστηρίζει τη διανοητική λειτουργία του.  Η σύνθεση ενισχύεται από "
     },
     {
      "text": "καρύδι",
      "color": "#9374B4"
     },
     {
      "text": " (ο καρπός που έχει το σχήμα του εγκεφάλου!) και από συνδυασμό άλλων υπερτροφών, ενώ εξισορροπείται από «ενδιάμεσα» συστατικά όπως ο "
     },
     {
      "text": "κουρκουμάς",
      "color": "#9374B4"
     },
     {
      "text": " και η "
     },
     {
      "text": "κανέλλα",
      "color": "#9374B4"
     },
     {
      "text": "."
     }
    ]
   ],
   "usageLabel": "Οδηγίες Χρήσης",
   "usage": [
    [
     {
      "text": "Ένα \"κοφτό\" κουταλάκι του γλυκού καλά διαλυμένο σε ζεστό φυτικό γάλα, ή γιαούρτι, ή ένα \"κοφτό\" κουταλάκι του γλυκού μετά το γεύμα, ή πριν από κάθε διανοητική εργασία."
     }
    ],
    [
     {
      "text": "Συνιστώμενη ποσότητα:  έως και 3 φορές την ημέρα σε πολύ απαιτητικές για τον εγκέφαλο περιόδους. Συνιστάται καθημερινή χρήση για 1-3 μήνες ως προς την επαλήθευση"
     }
    ],
    [
     {
      "text": "των ισχυρισμών της υγείας."
     }
    ]
   ],
   "ingredientsLabel": "Συστατικά",
   "ingredients": [
    [
     {
      "text": "Μέλι ανθέων, σιρόπι αγαύης, Ginkgo biloba, "
     },
     {
      "text": "τριμμένο καρύδι",
      "bold": true
     },
     {
      "text": ", Rosa canina, Schisandra chinensis, Cinnamomum zeylanicum, Curcuma longa"
     }
    ]
   ],
   "links": [
    {
     "label": "Οι Βοτανικές Συνθέσεις",
     "href": "/thecompositions"
    },
    {
     "label": "Πιστοποίηση",
     "href": "pdf:21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf"
    }
   ],
   "images": [
    {
     "src": "/images/products/air.webp",
     "alt": "Pro-Capture-One-0461-small.png"
    }
   ]
  },
  "compositionofaether": {
   "kind": "composition",
   "accent": "#FFC824",
   "title": "Η Σύνθεση του Aιθέρα",
   "subtitle": [
    [
     {
      "text": "(του 5ου στοιχείου)",
      "color": "#FFC824"
     }
    ]
   ],
   "benefit": "ΟΛΙΣΤΙΚΗ ΕΥΕΞΙΑ",
   "description": [
    [
     {
      "text": "Βοτανική συνταγή βάσης μελιού ανθέων με 25% ενεργά βότανα και superfoods. Περιέχει "
     },
     {
      "text": "βασιλικό πολτό",
      "color": "#FFC824"
     },
     {
      "text": ", "
     },
     {
      "text": "Ashwagandha ",
      "color": "#FFC824"
     },
     {
      "text": "& "
     },
     {
      "text": "Schisandra chinensis",
      "color": "#FFC824"
     },
     {
      "text": ", που βοηθάει την ολιστική ευεξία του οργανισμού, τονώνοντας τη νοητική και τη σωματική λειτουργία. Η Schisandra αποτελεί έναν σημαντικό εξισορροπιστή για τον οργανισμό του ανθρώπου.  Δρα κατά του άγχους και της  κόπωσης, ενώ τονώνει το  δυναμικό του αποτελώντας  ενισχυτικό της απόδοσης  ολιστικά: σε νου και σώμα. Η σύνθεση ενισχύεται από"
     },
     {
      "text": " Rosa canina (κυνόροδο) ",
      "color": "#FFC824"
     },
     {
      "text": "και  "
     },
     {
      "text": "χυμό Noni",
      "color": "#FFC824"
     },
     {
      "text": ", ενώ εξισορροπείται  από τα «ενδιάμεσα» συστατικά  της "
     },
     {
      "text": "γύρης",
      "color": "#FFC824"
     },
     {
      "text": " και της "
     },
     {
      "text": "κανέλλας",
      "color": "#FFC824"
     },
     {
      "text": "."
     }
    ]
   ],
   "usageLabel": "Οδηγίες Χρήσης",
   "usage": [
    [
     {
      "text": "Μέγιστη καταναλώσιμη ποσότητα ημερησίως: ένα έως δύο \"κοφτά\" κουταλάκια του γλυκού επαρκώς μασημένα, κατά προτίμηση πριν από σωματική άσκηση, είτε χορηγούμενο σε μικρότερες ποσότητες πολλαπλές φορές τη μέρα, αρχικά υπογλωσσίως και στη συνέχεια επαρκώς μασημένα."
     }
    ],
    [
     {
      "text": "Συνιστάται καθημερινή χρήση για 1-3 μήνες ως προς την επαλήθευση των ισχυρισμών της υγείας."
     }
    ]
   ],
   "ingredientsLabel": "Συστατικά",
   "ingredients": [
    [
     {
      "text": "Μέλι ανθέων, Ashwagandha - Withania somnifera, Schisandra chinensis, βασιλικός πολτός, γύρη, xυμός Noni, Rosa canina, Cinnamomum zeylanicum"
     }
    ]
   ],
   "links": [
    {
     "label": "Οι Βοτανικές Συνθέσεις",
     "href": "/thecompositions"
    },
    {
     "label": "Πιστοποίηση",
     "href": "pdf:21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf"
    }
   ],
   "images": [
    {
     "src": "/images/products/aether.webp",
     "alt": "Pro-Capture-One-0579-smakk.png"
    }
   ]
  },
  "aesthloswildoakhoney": {
   "kind": "honey",
   "accent": "#FFC824",
   "title": "Mέλι Άγριας Βελανιδιάς",
   "flow": [
    {
     "type": "p",
     "runs": [
      {
       "text": "το θαύμα της ελληνικής φύσης με τα περισσότερα αντιοξειδωτικά!"
      }
     ]
    },
    {
     "type": "lead",
     "runs": [
      {
       "text": "Το σκουρόχρωμο μέλι βελανιδιάς",
       "color": "#FFC824",
       "bold": true
      }
     ]
    },
    {
     "type": "lead",
     "runs": [
      {
       "text": "στο μικροσκόπιο των επιστημόνων.",
       "color": "#FFC824",
       "bold": true
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Το μέλι είναι μια ξεχωριστή υπόθεση στο χώρο του τροφίμου. Είναι ένα θαύμα της φύσης στην κυριολεξία. Είναι από τα πιο πολύτιμα, θρεπτικά"
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "και υγιεινά τρόφιμα που υπάρχουν και οι λόγοι που τεκμηριώνουν τον ισχυρισμό αυτό είναι αμέτρητοι. Ας εστιάσουμε εν προκειμένω σε έναν εξέχων εξ αυτών, σε μια συγκεκριμένη ιδιότητα του μελιού, την αντιοξειδωτική του δράση!"
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Η "
      },
      {
       "text": "Χρυσούλα Τανανάκη",
       "bold": true
      },
      {
       "text": ", Επίκουρη Καθηγήτρια και επικεφαλής του Εργαστηρίου Μελισσοκομίας και Σηροτροφίας στο Τμήμα Γεωπονίας του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης παρουσίασε τα αποτελέσματα μιας μεγάλης έρευνας του Τμήματος που αποδεικνύουν ότι το μέλι έχει ισχυρή αντιοξειδωτική δράση. Καταπολεμά δηλαδή τις ελεύθερες ρίζες, οι οποίες είναι υπεύθυνες για τον εκφυλισμό των κυττάρων που προκαλεί τους καρκινικούς όγκους. Επίσης αυτές οι αντιοξειδωτικές ιδιότητες δημιουργούσαν στον οργανισμό τη δυνατότητα να τον \"υπερφορτώσουν\" με αμυντικούς μηχανισμούς για όλες τις ασθένειες."
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Η αντιοξειδωτική δράση που εμφανίζουν τα διάφορα μέλια ωστόσο δεν είναι ίδια. Μάλιστα το μέλι manuka έχει αποκτήσει την φήμη του καλύτερου μελιού στον κόσμο, κάτι που όπως φαίνεται δεν ισχύει τελικά."
      }
     ]
    },
    {
     "type": "lead",
     "runs": [
      {
       "text": "Το μέλι βελανιδιάς έναντι των υπολοίπων.",
       "color": "#FFC824",
       "bold": true
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Στην έρευνα που διεξήχθη στο ΑΠΘ (Τανανάκη, Δήμου & Θρασυβούλου, 2015*) επιλέχθηκαν και εξετάστηκαν 48 δείγματα μελιού από όλη την Ελλάδα και από όλες τις ανθοφορίες. Στην έρευνα συμμετείχαν μέλι από βελανιδιά, πεύκο, έλατο, ερείκη, καστανιά, θυμάρι, πορτοκαλιά και το περίφημο ξενόφερτο manuka."
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Κάθε μέλι παρουσίασε τις δικές του μοναδικές ιδιότητες, ωστόσο η ανακάλυψη που έγινε ήταν μοναδική."
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Διαπιστώθηκε ότι το μέλι με τη μεγαλύτερη αντιοξειδωτική δράση είναι το σκουρόχρωμο μέλι βελανιδιάς. Ακολουθούν καταπόδας το μέλι από έλατο, το μέλι από ερείκι, το μέλι καστανιάς, το μέλι από πεύκο, το μέλι από θυμάρι και το μέλι από πορτοκαλιά.  Μπορεί λοιπόν το θυμαρίσιο μέλι και το μέλι από πορτοκάλι να έχουν εκπληκτικό άρωμα και ως τέτοια να προτιμούνται από πολλούς, ωστόσο δεν εμφανίζουν τόσο μεγάλη αντιοξειδωτική δράση όσο τα προαναφερθέντα. Χωρίς φυσικά αυτό να σημαίνει ότι δεν είναι πολύτιμα!"
      }
     ]
    },
    {
     "type": "lead",
     "runs": [
      {
       "text": "Το μέλι βελανιδιάς πιο πολύτιμο από το μέλι manuka.",
       "color": "#FFC824",
       "bold": true
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Εντυπωσιακή ήταν επίσης η διαπίστωση ότι το μέλι βελανιδιάς είναι ισχυρότερο αντιοξειδωτικό από το μέλι manuka, το οποίο τα τελευταία χρόνια έχει κατακλύσει την παγκόσμια αγορά διαφημιζόμενο για τη βιολογική του δράση. Μάλιστα το μέλι manuka έχει μικρότερη αντιοξειδωτική δράση από τα περισσότερα ελληνικά μέλια."
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Συμπέρασμα; Το marketing που χρησιμοποίησαν για την προώθηση του manuka ήταν όντως αποτελεσματικό!  Αντιλαμβανόμαστε λοιπόν τόσο τη σπουδαία διατροφική αξία του ελληνικού μελιού όσο και την ανάγκη να γίνουν οι απαραίτητες ενέργειες ώστε το ελληνικό μέλι να πάρει τη θέση που του αξίζει στην παγκόσμια αγορά."
      }
     ]
    },
    {
     "type": "lead",
     "runs": [
      {
       "text": "Έρευνα από το ΑΠΘ εξέτασε 48 διαφορετικά ελληνικά μέλια",
       "color": "#FFC824",
       "bold": true
      }
     ]
    },
    {
     "type": "lead",
     "runs": [
      {
       "text": "και το αποτέλεσμα ήταν εκπληκτικό!",
       "color": "#FFC824",
       "bold": true
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Η έρευνα των Τανανάκη, Δήμου & Θρασυβούλου (2015) αποδεικνύει την ευεργετική δράση των ελληνικών μελιών στο ανθρώπινο οργανισμό. Συλλέχθηκαν 48 διαφορετικά δείγματα μελιού από όλη την Ελλάδα και από όλες τις ανθοφορίες, και κανείς δεν περίμενε ότι η σύνθεση τους κρύβει τόσες ιδιότητες καλύτερες ακόμα και από τα πολυδιαφημισμένα μέλια του εξωτερικού όπως πχ το manuka!"
      }
     ]
    },
    {
     "type": "lead",
     "runs": [
      {
       "text": "Ελληνικό Μέλι - Μέλι Aesthlos",
       "color": "#FFC824",
       "bold": true
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Η Ελλάδα κρατάει ένα θησαυρό στα χέρια της."
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Μέλι που δεν παράγεται πουθενά αλλού σε ολόκληρο το κόσμο. Και αν πρέπει να γίνει κάτι στο μέλλον, αυτό είναι να αναδείξουμε το πλούτο μας και να κάνουμε μια προώθηση που θα το φτάσει σε κάθε γωνιά του πλανήτη. Να φτάσουμε την Ελλάδα μας στη κορυφή. Γιατί το αξίζει!"
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Αναζητήσαμε ως εκ τούτου την καλύτερη ποιότητα για το συγκεκριμένο μέλι της Άγριας Βελανιδιάς και τις καλύτερες δυνατές συνθήκες παραγωγής του. Οι συλλογές μας προέρχονται από την Ορεινή Ηλεία και το ξακουστό Δάσος της Φολόης αλλά και την ορεινή Εύβοια, την πανύψηλη Δίρφυ. Εργαστήκαμε σε υψόμετρο άνω των 600 μέτρων σε περιοχές Natura με βιολογική διαχείριση από την TUV HELLAS, και καταφέραμε να παράξουμε ένα αληθινό θαύμα της φύσης:"
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "το Μέλι της Άγριας Βελανιδιάς Aesthlos Therafoods"
      }
     ]
    },
    {
     "type": "lead",
     "runs": [
      {
       "text": "Η Αντιοξειδωτική Δράση των Μελιών",
       "color": "#FFC824"
      }
     ]
    },
    {
     "type": "pdf",
     "label": "Διαβάστε Εδώ",
     "href": "pdf:21375d_64d52d0eb9de4b8ebb210f34ad4cb305.pdf"
    },
    {
     "type": "lead",
     "runs": [
      {
       "text": "* Τανανάκη, Χ. Δήμου, Μ. & Θρασυβούλου, Α. (2015). Βιολογική Δράση των ελληνικών μελιών. Α' Πανελλήνιο Συνέδριο Επαγγελματικής μελισσοκομίας, 100-106.",
       "color": "#FFC824"
      }
     ]
    }
   ],
   "links": [
    {
     "label": "Πιστοποίηση",
     "href": "pdf:21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf"
    },
    {
     "label": "Χημικές Αναλύσεις",
     "href": "pdf:21375d_4af6af938b46400392669fb091b07c93.pdf"
    },
    {
     "label": "Mέλι Δάσους",
     "href": "/aesthlosforesthoney"
    }
   ],
   "images": [
    {
     "src": "/images/honeys/wild-oak-catalog.webp",
     "alt": "Untitled Catalog0090 1 copy.png"
    },
    {
     "src": "/images/honeys/wild-oak-honey.webp",
     "alt": "WildOakHoney.jpg"
    },
    {
     "src": "/images/honeys/wild-oak-bees.webp",
     "alt": "aesthlos wild oak honey, bees"
    }
   ]
  },
  "aesthlosforesthoney": {
   "kind": "honey",
   "accent": "#108713",
   "title": "Mέλι Δάσους",
   "flow": [
    {
     "type": "p",
     "runs": [
      {
       "text": "Το ελληνικό μέλι Δάσους είναι μία εξαιρετική ποιότητα μελιού που προκύπτει ως σύνθεση μέσα από την απόλυτη εμπιστοσύνη του μελισσουργού στο φυσικό ένστικτο και την ελευθερία της μέλισσας στον τρύγο."
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Κάθε δάσος έχει μία δική του εντελώς προσωπική ταυτότητα που προκύπτει από την επιθυμία της φύσης για γενναιοδωρία και προσφορά. Η ποικιλότητά του σε φυτά, βοτανικούς θάμνους, ανθούς και δέντρα, μόνο τυχαία δεν είναι, δρα αλχημιστικά με βάσει φυσικούς \"αλγόριθμους υγείας\", προσδίδοντας έναν απόλυτο συνδυασμό μελιτωμάτων (από άγρια δέντρα) και νέκταρ (από άγρια βοτάνια, λουλούδια και άλλα ενδημικά είδη φυτών)."
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Το αποτέλεσμα είναι ένα πολύ γευστικό και βελούδινο μέλι, χωρίς όμως υπερβολική γλυκύτητα, ανάλογα πάντα και με την αναλογία μελιτωμάτων και γύρης που εμπεριέχει. Χαρακτηρίζεται ως ένα μέλι μεγάλης θρεπτικής αξίας, καθώς περιέχει σε μεγάλες ποσότητες κάλλιο, μαγνήσιο, φώσφορο, σίδηρο και νάτριο. Βοηθάει  στις γαστρικές διαταραχές, στη γρίπη, στην υπερκόπωση και στις αιμορροΐδες."
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Οι συλλογές μας προέρχονται από την Ορεινή Ηλεία και το ξακουστό Δάσος της Φολόης αλλά και την ορεινή Εύβοια, την πανύψηλη Δίρφυ. Δάση γεμάτα από Βελανιδιές καστανιές, πεύκα, έλατα, οξιές, πλατάνια, πουρνάρια, αριές, κουμαριές, ρείκια, σπάρτα, καρυδιές, αγριολούλουδα, παιώνιες, πρίμουλες, οπωροφόρα δέντρα και ορεινότερα σφάκα."
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Είναι από τα πιο πλούσια σε αντιοξειδωτικές ιδιότητες μέλια."
      }
     ]
    }
   ],
   "links": [
    {
     "label": "Πιστοποίηση",
     "href": "pdf:21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf"
    },
    {
     "label": "Χημικές Αναλύσεις",
     "href": "pdf:21375d_73eb672f52df443291f93878977596e0.pdf"
    },
    {
     "label": "Μέλι Άγριας Βελανιδιάς",
     "href": "/aesthloswildoakhoney"
    }
   ],
   "images": [
    {
     "src": "/images/honeys/forest-honey.webp",
     "alt": "Untitled Catalog0137 1 copy.png"
    }
   ]
  }
 },
 "de": {
  "copy-of-the-composition-of-earth": {
   "kind": "composition",
   "accent": "#1CBDBD",
   "title": "Die Komposition Infinity",
   "subtitle": [],
   "benefit": "VITALITÄT & WOHLBEFINDEN",
   "description": [
    [
     {
      "text": "Botanische Rezeptur auf Basis von Blütenhonig mit "
     },
     {
      "text": "20 % aktiven Kräutern",
      "color": "#1CBDBD"
     },
     {
      "text": " und Superfoods. Sie enthält "
     },
     {
      "text": "Gelée Royale",
      "color": "#1CBDBD"
     },
     {
      "text": " und "
     },
     {
      "text": "Ashwagandha",
      "color": "#1CBDBD"
     },
     {
      "text": ", die zur körperlichen Ausdauer, zum emotionalen Gleichgewicht und zur geistigen Leistungsfähigkeit beitragen. Die Komposition wird durch "
     },
     {
      "text": "Rosa canina",
      "color": "#1CBDBD"
     },
     {
      "text": " (Hagebutte) verstärkt und durch die „vermittelnde“ Zutat "
     },
     {
      "text": "Zimt",
      "color": "#1CBDBD"
     },
     {
      "text": " ausgeglichen."
     }
    ],
    [
     {
      "text": "Infinity nutzt die Kombination dreier wertvoller Kräuter im Zusammenspiel mit dem natürlichen Superfood Gelée Royale in einer sorgfältig abgestimmten Rezeptur und unterstützt auf völlig natürliche Weise das tägliche Bemühen des menschlichen Körpers, die Gesundheit körperlich, emotional und geistig zu verbessern."
     }
    ]
   ],
   "usageLabel": "Anweisungen für den Gebrauch",
   "usage": [
    [
     {
      "text": "Einen halben Teelöffel sehr gut zerkauen, vorzugsweise am Morgen."
     }
    ],
    [
     {
      "text": "Eine tägliche Anwendung über einen Zeitraum von 1 bis 3 Monaten wird empfohlen, um die gesundheitsbezogenen Angaben zu ermöglichen."
     }
    ]
   ],
   "ingredientsLabel": "Zutaten",
   "ingredients": [
    [
     {
      "text": "Blütenhonig, Agavensirup, Ashwagandha - Withania somnifera, Rosa canina, Gelée Royale, Ceylon-Zimt"
     }
    ]
   ],
   "links": [
    {
     "label": "Die Botanischen Kompositionen",
     "href": "/thecompositions"
    },
    {
     "label": "Zertifizierung",
     "href": "pdf:21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf"
    }
   ],
   "images": [
    {
     "src": "/images/products/infinity.webp",
     "alt": "Untitled Catalog0703 copy.JPG"
    }
   ],
   "translated": true
  },
  "compositionofearth": {
   "kind": "composition",
   "accent": "#49A94B",
   "title": "Die Komposition der Erde",
   "subtitle": [],
   "benefit": "STÄRKE UND ROBUSHEIT",
   "description": [
    [
     {
      "text": "Botanische Komposition aus Blütenhonig mit "
     },
     {
      "text": "Rosa Canina",
      "color": "#49A94B"
     },
     {
      "text": " (Hagebutte) und einer Mischung aus Superfoods, die zur Stärkung des Körpers und zur Abwehr schädlicher Mikroorganismen beiträgt."
     }
    ],
    [
     {
      "text": "Rosa Canina wird seit der Antike als “Oberster Kräuterheiler” verwendet und wirkt als Super-Stärkung bei körperlicher Erschöpfung und Vitaminmangel, für fast alle organischen Systeme der menschlichen Physiologie"
     }
    ],
    [
     {
      "text": "( Immunsystem, Harnwege, Hormone, Magen- Darm-Trakt, Haut, etc.). Die Komposition wird durch "
     },
     {
      "text": "Ashwagandha",
      "color": "#49A94B"
     },
     {
      "text": ", "
     },
     {
      "text": "Schisandra",
      "color": "#49A94B"
     },
     {
      "text": " und "
     },
     {
      "text": "Zimt ",
      "color": "#49A94B"
     },
     {
      "text": "ergänzt und ausgeglichen."
     }
    ]
   ],
   "usageLabel": "Anweisungen für den Gebrauch",
   "usage": [
    [
     {
      "text": "Lösen Sie geduldig einen halben Teelöffel in einer kleinen Tasse mit heißem (60°C) Wasser oder Tee auf. Nachdem sich die Mischung gut aufgelöst hat, konsumieren Sie das Getränk lauwarm, vorzugsweise vor dem Essen, pur oder mit ein paar Tropfen Zitrone. Andernfalls essen Sie einen halben Teelöffel, sehr gut gekaut, ein paar Stunden vor der Mahlzeit."
     }
    ],
    [
     {
      "text": "Empfohlener Verzehr : zwei- bis dreimal täglich."
     }
    ],
    [
     {
      "text": "Eine tägliche Anwendung über einen Zeitraum von 1 bis 3 Monaten wird empfohlen, um die gesundheitsbezogenen Angaben zu ermöglichen."
     }
    ]
   ],
   "ingredientsLabel": "Zutaten",
   "ingredients": [
    [
     {
      "text": "Blütenhonig, Agavensirup, Rosa canina, Cinnamomum zeylanicum, Aschwagandha - Withania somnifera, Schisandra chinensis"
     }
    ]
   ],
   "links": [
    {
     "label": "Die Botanischen Kompositionen",
     "href": "/thecompositions"
    },
    {
     "label": "Zertifizierung",
     "href": "pdf:21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf"
    }
   ],
   "images": [
    {
     "src": "/images/products/earth.webp",
     "alt": "Pro-Capture-One-0416-small.png"
    }
   ]
  },
  "compositionofwater": {
   "kind": "composition",
   "accent": "#0081BD",
   "title": "Die Κomposition des Wassers",
   "subtitle": [],
   "benefit": "EMOTIONALE HARMONIE",
   "description": [
    [
     {
      "text": "Botanische Komposition aus "
     },
     {
      "text": "Blütenhonig",
      "color": "#0081BD"
     },
     {
      "text": ", "
     },
     {
      "text": "Ashwagandha",
      "color": "#0081BD"
     },
     {
      "text": " und einer Mischung aus Superfoods, die das emotionale Gleichgewicht fördert, zur Stressresistenz beiträgt und die Herz-Kreislauf-Funktion unterstützt."
     }
    ],
    [
     {
      "text": "Das Sanskrit-Wort “ashwah” bedeutet “Pferd” und das Wort “gandha\" bedeutet “Geruch”. Die Inder behaupten, dass das Kraut den Geruch eines verschwitzten Pferdes hat und daher jedem, der es konsumiert, die Kraft eines Hengstes verleiht."
     }
    ],
    [
     {
      "text": "Ashwagandha, das geheimnisvolle Kraut des Ostens, ist der ultimative Schutz gegen den täglichen Stress und sorgt für körperliches und emotionales Wohlbefinden."
     }
    ],
    [
     {
      "text": "Die Komposition wird durch "
     },
     {
      "text": "Schisandra",
      "color": "#0081BD"
     },
     {
      "text": " verstärkt, während sie durch “mittlere” Zutaten wie "
     },
     {
      "text": "Sesam",
      "color": "#0081BD"
     },
     {
      "text": " und "
     },
     {
      "text": "Zimt ",
      "color": "#0081BD"
     },
     {
      "text": "ausgeglichen wird."
     }
    ]
   ],
   "usageLabel": "Anweisungen für den Gebrauch",
   "usage": [
    [
     {
      "text": "Verteilen Sie es wie folgt auf warmem Brot: entweder direkt, einen Löffel auf einer kleinen Scheibe Vollkornbrot, oder die gleiche Menge, aufgelöst in hochwertigem Honig auf Brotscheiben. Andernfalls können Sie einen halben Teelöffel, sehr gut gekaut, zwischen den Mahlzeiten essen."
     }
    ],
    [
     {
      "text": "Empfohlener Verzehr: zwei- bis dreimal pro Tag."
     }
    ],
    [
     {
      "text": "Eine tägliche Anwendung über einen Zeitraum von 1 bis 3 Monaten wird empfohlen, um die gesundheitsbezogenen Angaben zu ermöglichen."
     }
    ]
   ],
   "ingredientsLabel": "Zutaten",
   "ingredients": [
    [
     {
      "text": "Blütenhonig, Agavensirup, Vollkorn-Tahini "
     },
     {
      "text": "(Sesampaste)",
      "bold": true
     },
     {
      "text": ", Aschwagandha - Withania somnifera, Cinnamomum zeylanicum , Schisandra chinensis"
     }
    ]
   ],
   "links": [
    {
     "label": "Die Botanischen Kompositionen",
     "href": "/thecompositions"
    },
    {
     "label": "Zertifizierung",
     "href": "pdf:21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf"
    }
   ],
   "images": [
    {
     "src": "/images/products/water.webp",
     "alt": "Pro-Capture One 0527 copy.png"
    }
   ]
  },
  "compositionoffire": {
   "kind": "composition",
   "accent": "#E21C21",
   "title": "Die Komposition des Feuers",
   "subtitle": [],
   "benefit": "SEXUELLE ENERGIE & KNOCHENGESUNDHEIT",
   "description": [
    [
     {
      "text": "Botanische Komposition aus "
     },
     {
      "text": "Blütenhonig",
      "color": "#E21C21"
     },
     {
      "text": " mit "
     },
     {
      "text": "Pollen",
      "color": "#E21C21"
     },
     {
      "text": ", "
     },
     {
      "text": "Gelée Royale",
      "color": "#E21C21"
     },
     {
      "text": ", "
     },
     {
      "text": "Maca ",
      "color": "#E21C21"
     },
     {
      "text": "und eine Mischung aus Superfoods, die die sexuelle Leistungsfâhigkeit und das Verlangen erhöht, die Fruchtbarkeit verbessert und vor Osteoporose schützt. Maca ist ein ausgezeichnetes natürliches Aphrodisiakum, das als sehr nahrhaftes Lebensmittel gilt, und erheblich die Energie, Kraft und Ausdauer im gesamten menschlichen Körper steigert."
     }
    ],
    [
     {
      "text": "Die Komposition wird durch Gelée Royale und "
     },
     {
      "text": "Ingwer ",
      "color": "#E21C21"
     },
     {
      "text": "bereichert, während mit Pollen und"
     },
     {
      "text": " Zimt ",
      "color": "#E21C21"
     },
     {
      "text": "ausgeglichen wird."
     }
    ]
   ],
   "usageLabel": "Anweisungen für den Gebrauch:",
   "usage": [
    [
     {
      "text": "Maximale Tagesdosis: 1- 2 “gehäufte” Teelöffel pro"
     }
    ],
    [
     {
      "text": "Tag, gut zerkaut, vorzugsweise vor körperlicher Betätigung, oder in kleineren Mengen mehrmals täglich, zunächst unter der Zunge und dann ausreichend zerkaut. Eine tägliche Anwendung über einen Zeitraum von 1 bis 3 Monaten wird empfohlen, um die gesundheitsbezogenen Angaben zu ermöglichen"
     }
    ]
   ],
   "ingredientsLabel": "Zutaten",
   "ingredients": [
    [
     {
      "text": "Blütenhonig,  Agavensirup, Maca – Lepidium meyenii,  Pollen,"
     }
    ],
    [
     {
      "text": "Gelée Royale, Zingiber officinale, Cinnamomum zeylanicum"
     }
    ]
   ],
   "links": [
    {
     "label": "Die Botanischen Kompositionen",
     "href": "/thecompositions"
    },
    {
     "label": "Zertifizierung",
     "href": "pdf:21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf"
    }
   ],
   "images": [
    {
     "src": "/images/products/fire.webp",
     "alt": "7R2B0538 αντίγραφο copy.jpg"
    }
   ]
  },
  "compositionofair": {
   "kind": "composition",
   "accent": "#9374B4",
   "title": "Die Komposition der Luft",
   "subtitle": [],
   "benefit": "MENTALE FUNKTION",
   "description": [
    [
     {
      "text": "Botanische Komposition aus "
     },
     {
      "text": "Blütenhonig ",
      "color": "#9374B4"
     },
     {
      "text": "mit "
     },
     {
      "text": "Ginkgo Biloba",
      "color": "#9374B4"
     },
     {
      "text": ", der die Konzentration, das Gedächtnis und die geistige Leistungsfähigkeit verbessert."
     }
    ],
    [
     {
      "text": "Ginkgo Biloba gilt als das Kraut des Gedächtnisses und ist definitiv der beste Freund des Gehirns, da es sämtliche mentalen Funktionen unterstützt."
     }
    ],
    [
     {
      "text": "Die Rezeptur wird durch "
     },
     {
      "text": "Walnüsse ",
      "color": "#9374B4"
     },
     {
      "text": "(welche die Form des Gehirns haben) und die Komposition anderer Superfoods ergänzt und mit Zutaten wie "
     },
     {
      "text": "Kurkuma",
      "color": "#9374B4"
     },
     {
      "text": " und "
     },
     {
      "text": "Zimt",
      "color": "#9374B4"
     },
     {
      "text": " verfeinert."
     }
    ]
   ],
   "usageLabel": "Anweisungen für den Gebrauch",
   "usage": [
    [
     {
      "text": "Ein “gehäufter” Teelöffel gut aufgelöst in warmer Pflanzenmilch oder Joghurt nach einer Mahlzeit, oder vor jeder geistigen Tätigkeit."
     }
    ],
    [
     {
      "text": "Empfohlene Menge: bis zu 3 Mal pro Tag, bei sehr anspruchsvollen Phasen des Gehirns. Eine tägliche Anwendung über einen Zeitraum von 1 bis 3 Monaten wird empfohlen, um die gesundheitsbezogenen Angaben zu ermöglichen."
     }
    ]
   ],
   "ingredientsLabel": "Zutaten",
   "ingredients": [
    [
     {
      "text": "Blütenhonig, Agavensirup, Ginkgo biloba,  "
     },
     {
      "text": "geriebene Walnüsse",
      "bold": true
     },
     {
      "text": ","
     },
     {
      "text": " ",
      "bold": true
     },
     {
      "text": "Rosa canina, Schisandra chinensis, Cinnamomum zeylanicum, Curcuma longa"
     }
    ]
   ],
   "links": [
    {
     "label": "Die Botanischen Kompositionen",
     "href": "/thecompositions"
    },
    {
     "label": "Zertifizierung",
     "href": "pdf:21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf"
    }
   ],
   "images": [
    {
     "src": "/images/products/air.webp",
     "alt": "Pro-Capture-One-0461-small.png"
    }
   ]
  },
  "compositionofaether": {
   "kind": "composition",
   "accent": "#FFC824",
   "title": "Die Κomposition des Äthers",
   "subtitle": [
    [
     {
      "text": "(Das ",
      "color": "#FFC824"
     },
     {
      "text": "fünfte Element)",
      "color": "#FFC824"
     }
    ]
   ],
   "benefit": "HOLISTISCHE WELLNESS",
   "description": [
    [
     {
      "text": "Botanische Komposition aus "
     },
     {
      "text": "Blütenhonig ",
      "color": "#FFC824"
     },
     {
      "text": "mit "
     },
     {
      "text": "Gelée Royale",
      "color": "#FFC824"
     },
     {
      "text": ", "
     },
     {
      "text": "Ashwagandha",
      "color": "#FFC824"
     },
     {
      "text": " und "
     },
     {
      "text": "Schisandra chinensis",
      "color": "#FFC824"
     },
     {
      "text": ", welche das ganzheitliche Wohlbefinden des Körpers unterstützen und die geistigen und körperlichen Funktionen anregt. Schisandra ist ein absoluter Balancer für den menschlichen Körper. Es wirkt gegen Stress und Müdigkeit und stimuliert das Potential und steigert gleichzeitig ganzheitlich die Leistungsfähigkeit in Geist und Körper."
     }
    ],
    [
     {
      "text": "Die Komposition wird durch "
     },
     {
      "text": "Rosa canina",
      "color": "#FFC824"
     },
     {
      "text": " und "
     },
     {
      "text": "Noni-Saft ",
      "color": "#FFC824"
     },
     {
      "text": "bereichert und mit "
     },
     {
      "text": "Pollen",
      "color": "#FFC824"
     },
     {
      "text": " und "
     },
     {
      "text": "Zimt",
      "color": "#FFC824"
     },
     {
      "text": " verfeinert."
     }
    ]
   ],
   "usageLabel": "Anweisungen für den Gebrauch",
   "usage": [
    [
     {
      "text": "Maximale Tagesdosis: ein bis zwei “gehäufte” Teelöffel, ausreichend zerkaut, vorzugsweise vor einer körperlichen Aktivität, oder in kleineren Mengen mehrmals täglich, zunächst unter der Zunge und dann ausreichend zerkaut."
     }
    ],
    [
     {
      "text": "Eine tägliche Anwendung über einen Zeitraum von 1 bis 3 Monaten wird empfohlen, um die gesundheitsbezogenen Angaben zu ermöglichen."
     }
    ]
   ],
   "ingredientsLabel": "Zutaten",
   "ingredients": [
    [
     {
      "text": "Blütenhonig, Ashwagandha - Withania somnifera , Schisandra chinensis , Gelée Royale, Pollen, Noni Saft, Rosa canina, Cinnamomum zeylanicum"
     }
    ]
   ],
   "links": [
    {
     "label": "Die Botanischen Kompositionen",
     "href": "/thecompositions"
    },
    {
     "label": "Zertifizierung",
     "href": "pdf:21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf"
    }
   ],
   "images": [
    {
     "src": "/images/products/aether-de.webp",
     "alt": "7R2B0457 αντίγραφο copy.jpg"
    }
   ]
  },
  "aesthloswildoakhoney": {
   "kind": "honey",
   "accent": "#FFC824",
   "title": "Wilder Eichenhonig",
   "flow": [
    {
     "type": "p",
     "runs": [
      {
       "text": "das Wunder der griechischen Natur"
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "mit den meisten Antioxidantien!"
      }
     ]
    },
    {
     "type": "lead",
     "runs": [
      {
       "text": "Der dunkle Eichenhonig unter dem Mikroskop der Wissenschaftler.",
       "color": "#FFC824"
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Honig ist ein Sonderfall in der Lebensmittelindustrie. Er ist buchstäblich ein Wunder der Natur. Er ist eins der wertvollsten, gesündesten und nahrhaftesten Lebensmittel die es gibt, und die Gründe die diese Behauptung stützen, sind zahllos. Konzentrieren wir uns in diesem Fall auf eine der wichtigsten, bestimmten Eigenschaft des Honigs: seine antioxidative Wirkung!"
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Chrysoula Tananaki, Assistenzprofessorin und Leiterin des Labors für Bienzucht und Seidenraupenzucht an der Fakultät für Landwirtschaft der Aristoteles-Universität Thessaloniki, stellte die Ergebnisse einer größeren Forschungsarbeit der Fakultät vor, die belegen, dass Honig eine starke antioxidative Wirkung hat. Das heißt, er bekämpft freie Radikale, die für die Entartung von Zellen verantwortlich sind, die wiederum Krebstumore verursachen. Außerdem schaffen diese antioxidativen Eigenschaften im Körper die Fähigkeit, ihn mit Abwehrmechanismen gegen alle Krankheiten zu “überladen”."
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Die antioxidative Aktivität der verschiedenen Honigsorten ist jedoch nicht gleich hoch. Der Manuka-Honig hat sich den Ruf erworben, der beste Honig der Welt zu sein, was offensichtlich nicht der Fall ist."
      }
     ]
    },
    {
     "type": "lead",
     "runs": [
      {
       "text": "Eichenhonig im Vergleich zu den anderen.",
       "color": "#FFC824"
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "In der an der Aristoteles-Universität Thessaloniki durchgeführten Untersuchung (Tananaki, Dimou & Thrasivoulou, 2015*) wurden 48 Honigproben aus ganz Griechenland und aus allen Floraarten ausgewählt und untersucht. An der Studie nahmen Honig von Eiche,"
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Kiefer, Tanne, Heidekraut, Kastanie, Thymian, Orange und dem berühmten fremdländischen Manuka teil."
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Jeder Honig hatte seine eigenen einzigartigen Eigenschaften, aber die Entdeckung, die gemacht wurde, war einzigartig."
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Es wurde festgestellt, dass der Honig mit der größten antioxidativen Aktivität dunkler Eichenhonig ist."
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Danach folgen Tannenhonig, Heidekrauthonig, Kastanienhonig, Kiefernhonig und Orangenhonig. Thymian Honig und Orangenhonig haben zwar ein wunderbares Aroma und werden daher von vielen bevorzugt, aber haben nicht so viel antioxidative Wirkung wie die oben genannten Honige. Das bedeutet natürlich nicht, dass sie nicht wertvoll sind!"
      }
     ]
    },
    {
     "type": "lead",
     "runs": [
      {
       "text": "Eichenhonig ist wertvoller als Manuka-Honig.",
       "color": "#FFC824"
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Beeindruckend war auch die Feststellung, dass Eichenhonig ein stärkeres Antioxidant ist als Manuka- Honig, der in den letzten Jahren den Weltmarkt überschwemmt hat und mit seiner biologischen Wirkung beworben wird. Tatsächlich hat Manuka-Honig einen geringere antioxidative Wirkung als die meisten griechischen Honigsorten."
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Schlussfolgerung: Das Marketing, mit dem sie für Manuka geworben haben, war in der Tat effektiv!"
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Wir verstehen also sowohl den großen Nährwert des griechischen Honigs als auch die Notwendigkeit, die notwendigen Schritte zu unternehmen, um sicherzustellen, dass der griechische Honig den Platz auf dem Weltmarkt bekommt, den er verdient."
      }
     ]
    },
    {
     "type": "lead",
     "runs": [
      {
       "text": "Forscher der Aristoteles-Universität Thessaloniki untersuchten 48 verschiedene Griechische Honigsorten und kamen zu einem erstaunlichen Ergebnis!",
       "color": "#FFC824"
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Die Untersuchung von Tananaki, Dimou & Thrasivoulou (2015) beweist die wohltuende Wirkung von griechischem Honig auf den menschlichen Körper. Sie sammelten 48 verschiedene Honigproben aus ganz Griechenland und von allen blühenden Pflanzen, und niemand hätte erwartet, dass ihre Zusammensetzung so viele Eigenschaften verbirgt, viel besser sogar als die viel beworbenen Honige aus dem Ausland, wie z.B. Manuka-Honig!"
      }
     ]
    },
    {
     "type": "lead",
     "runs": [
      {
       "text": "Griechischer Honig - Aesthlos Honig",
       "color": "#FFC824",
       "bold": true
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Griechenland hält einen Schatz in seine Händen. Honig, der nirgendwo sonst auf der Welt produziert wird. Und, wenn es in Zukunft etwas zu tun gibt, dann ist es, unseren Reichtum zu präsentieren"
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "und eine Werbung zu machen, die jeden Winkel der Welt erreicht. Um unser Griechenland an die Spitze zu bringen. Denn es hat es verdient!"
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Deshalb haben wir uns um die beste Qualität für diesen besonderen Wildeichenhonig und um die bestmöglichen Produktionsbedingungen bemüht. Unsere Kollektionen stammen aus dem gebirgigen Ilia und dem berühmten Wald von Foloi sowie aus dem gebirgigen Euböa, dem hoch aufragenden Dirfi. Wir haben in einer Höhe von mehr als 600 m gearbeitet, in biologischen Bienenstöcken, die von anerkannten Einrichtungen zertifiziert sind, und es ist uns gelungen, ein wahres Wunder der Natur zu erzeugen:"
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "den Wildeichenhonig Aesthlos Therafoods"
      }
     ]
    },
    {
     "type": "lead",
     "runs": [
      {
       "text": "Die antioxidative Wirkung des Honigs.",
       "color": "#FFC824"
      }
     ]
    },
    {
     "type": "pdf",
     "label": "Hier lesen",
     "href": "pdf:21375d_64d52d0eb9de4b8ebb210f34ad4cb305.pdf"
    },
    {
     "type": "lead",
     "runs": [
      {
       "text": "*Tananaki,Ch. Dimou, M. & Thrasivoulou, A.( 2015): Biological Action of Greek honey. 1st Panhellenic Conference of Professional Beekeeping, 100-106.",
       "color": "#FFC824"
      }
     ]
    }
   ],
   "links": [
    {
     "label": "Zertifizierung",
     "href": "pdf:21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf"
    },
    {
     "label": "Chemische Analysen",
     "href": "pdf:21375d_4af6af938b46400392669fb091b07c93.pdf"
    },
    {
     "label": "Waldhonig",
     "href": "/aesthlosforesthoney"
    }
   ],
   "images": [
    {
     "src": "/images/honeys/wild-oak-catalog.webp",
     "alt": "Untitled Catalog0090 1 copy.png"
    },
    {
     "src": "/images/honeys/wild-oak-honey.webp",
     "alt": "WildOakHoney.jpg"
    },
    {
     "src": "/images/honeys/wild-oak-bees.webp",
     "alt": "aesthlos wild oak honey, bees"
    }
   ]
  },
  "aesthlosforesthoney": {
   "kind": "honey",
   "accent": "#FFC824",
   "title": "Waldhonig",
   "flow": [
    {
     "type": "p",
     "runs": [
      {
       "text": "Griechischer Waldhonig ist ein Honig von hervorragender Qualität, ein Ergebnis des absoluten Vertrauens des Imkers im natürlichen Instinkt und die Freiheit der Bienen bei der Ernte . Jeder Wald hat seine eigene persönliche Identität, die dem Wunsch der Natur nach Großzügigkeit und Anbieten entspringt."
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Seine Vielfalt an Pflanzen, Sträuchern, Blumen und Bäumen ist nicht zufällig, sondern wirkt alchemistisch nach natürlichen “ Gesundheits- Algorithmen” und bietet eine perfekte Kombination aus Honigtau( von wilden Bäumen) und Nektar (von wilden Kräutern, Blumen und anderen einheimischen Pflanzenarten)."
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Das Ergebnis ist ein sehr schmackhafter und samtiger Honig, der jedoch nicht übermäßig süß ist, aber immer je nach dem Verhältnis von Honig und Pollen. Es ist ein Honig mit hohem Nährwert, da er große Mengen an Kalium, Magnesium, Phosphor, Eisen und Natrium enthält. Er ist hilfreich bei Magenbeschwerden, Grippe, Überarbeitung und Hämorrhoiden."
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Unsere Sammlungen stammen aus dem gebirgigen Ilia und dem berühmten Wald von Foloi und aus gebirgigen Euböa, dem hoch aufragenden Dirfi."
      }
     ]
    },
    {
     "type": "p",
     "runs": [
      {
       "text": "Wälder voller Eichen, Kastanien, Kiefern, Tannen, Buchen, Platanen, Stechpalmen, Erdbeerbäume, Heidekraut, Spatzen, Walnüsse, Wildblumen, Pfingstrosen, Primeln, Obstbäume und Torfmoose. Es ist einer der Honige mit den meisten antioxidativen Eigenschaften."
      }
     ]
    }
   ],
   "links": [
    {
     "label": "Zertifizierung",
     "href": "pdf:21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf"
    },
    {
     "label": "Chemische Analysen",
     "href": "pdf:21375d_73eb672f52df443291f93878977596e0.pdf"
    },
    {
     "label": "Wildeichenhonig",
     "href": "/aesthloswildoakhoney"
    }
   ],
   "images": [
    {
     "src": "/images/honeys/forest-honey.webp",
     "alt": "Untitled Catalog0137 1 copy.png"
    }
   ]
  }
 }
};
