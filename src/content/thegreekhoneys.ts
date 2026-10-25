import type { Lang, Run } from "./types";

/**
 * /thegreekhoneys copy — editorial flow in page order, verbatim from Wix
 * (frozen by scripts/freeze/phase4.py). Owner/designer change (25/10/2026): the green heading
 * «Τα Ελληνικά Μεσογειακά Δάση» stands above «Το Δάσος της Φολόης…» (on Wix it was at the end). Blocks with `translated: true` were added for the German page.
 */
export type EditorialBlock =
  | { type: "text"; tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "li"; runs: Run[]; color?: string; translated?: boolean }
  | { type: "pdf"; text: string; href: string }
  | { type: "image"; src: string; alt: string };

export const greekHoneys: Record<Lang, EditorialBlock[]> = {
  "el": [
    {
      "type": "text",
      "tag": "h1",
      "runs": [
        {
          "text": "Βοτανικές Συνθέσεις Aesthlos & Ελληνικά Μέλια",
          "color": "#FFC824"
        }
      ],
      "color": "#FFC824"
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Οι συνθέσεις μας συνδυάζουν την ολιστική υποστήριξη των πέντε επιπέδων της υγείας (ή απλώς την «ολιστική υποστήριξη της υγείας»), με μια μοναδική γευστική εμπειρία, που θωρακίζει τον οργανισμό  από κάθε μορφής ασθένεια. Είναι όλες βασισμένες επάνω στις καλύτερες διαθρεπτικά ποικιλίες ελληνικού μελιού, και βεβαίως, ενισχύονται από εκλεκτής ποιότητας βότανα και καρπούς βιολογικής προέλευσης.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Οι χημικές αναλύσεις που συνοδεύουν τα μέλια μας πιστοποιούν τις premium ποιότητες αυτών και αποτελούν βασικό εχέγγυο της προσπάθειάς μας για το άριστο, ενώ τα βότανα και όλα τα ενδιάμεσα συστατικά των διατροφικών μας Συνθέσεων προέρχονται αυστηρά από βιολογικές καλλιέργειες.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "h2",
      "runs": [
        {
          "text": "Ελληνικά Μέλια: ",
          "color": "#FFC824"
        },
        {
          "text": "το θαύμα της ελληνικής φύσης με τα περισσότερα αντιοξειδωτικά!",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Το μέλι είναι μια ξεχωριστή υπόθεση στο χώρο του τροφίμου. Είναι ένα θαύμα της φύσης στην κυριολεξία. Είναι από τα πιο πολύτιμα, θρεπτικά και υγιεινά τρόφιμα που υπάρχουν και οι λόγοι που τεκμηριώνουν τον ισχυρισμό αυτό είναι αμέτρητοι. Ένας εξέχων εξ αυτών, στηρίζεται σε μια συγκεκριμένη ιδιότητα του μελιού, την αντιοξειδωτική του δράση!",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Η ",
          "color": "#FFFFFF"
        },
        {
          "text": "Χρυσούλα Τανανάκη",
          "color": "#FFFFFF",
          "bold": true
        },
        {
          "text": ", Επίκουρη Καθηγήτρια και επικεφαλής του Εργαστηρίου Μελισσοκομίας και Σηροτροφίας στο Τμήμα Γεωπονίας του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης παρουσίασε τα αποτελέσματα μιας μεγάλης έρευνας του Τμήματος που αποδεικνύουν ότι το μέλι έχει ισχυρή αντιοξειδωτική δράση. Καταπολεμά δηλαδή τις ελεύθερες ρίζες, οι οποίες είναι υπεύθυνες για τον εκφυλισμό των κυττάρων που προκαλεί τους καρκινικούς όγκους.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Η αντιοξειδωτική δράση που εμφανίζουν τα διάφορα μέλια ωστόσο δεν είναι ίδια. Το Μέλι της Άγριας βελανιδιάς μαζί με τα περισσότερα δασικά μέλια (μελιτωμάτων) είναι τα πλουσιότερα μέλια, τόσο σε αντιοξειδωτικά όσο και σε φαινόλες!",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Η Αντιοξειδωτική Δράση των Μελιών",
          "color": "#FFC824",
          "bold": true
        }
      ],
      "color": "#FFC824"
    },
    {
      "type": "pdf",
      "text": "Διαβάστε Εδώ",
      "href": "pdf:21375d_64d52d0eb9de4b8ebb210f34ad4cb305.pdf"
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "* Τανανάκη, Χ. Δήμου, Μ. & Θρασυβούλου, Α. (2015). Βιολογική Δράση των ελληνικών μελιών. Α' Πανελλήνιο Συνέδριο Επαγγελματικής μελισσοκομίας, 100-106.",
          "color": "#FFC824",
          "bold": true
        }
      ],
      "color": "#FFC824"
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Έρευνα από το ΑΠΘ εξέτασε 48 διαφορετικά ελληνικά μέλια και το αποτέλεσμα ήταν εκπληκτικό!",
          "color": "#FFC824",
          "bold": true
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Η έρευνα των Τανανάκη, Δήμου & Θρασυβούλου (2015) αποδεικνύει την ευεργετική δράση των ελληνικών μελιών στο ανθρώπινο οργανισμό. Συλλέχθηκαν 48 διαφορετικά δείγματα μελιού από όλη την Ελλάδα και από όλες τις ανθοφορίες, και κανείς δεν περίμενε ότι η σύνθεση τους κρύβει τόσες ιδιότητες, πολύ καλύτερες ακόμα και από τα πολυδιαφημισμένα μέλια του εξωτερικού, όπως πχ το μέλι manuka!",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Ελληνικό Μέλι",
          "color": "#FFC824",
          "bold": true
        }
      ],
      "color": "#FFC824"
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Η γλυκόζη και η φρουκτόζη στο μέλι είναι στην πιο απλή τους μορφή. Τόσο εύπεπτες για τον οργανισμό που μπορούν να κάνουν ένα πραγματικό θαύμα. Δεν υπάρχει ουδεμία σχέση με τη ζάχαρη που καταστρέφει τα όργανα και την εύρυθμη λειτουργία τους. Το μέλι όταν μπαίνει στον οργανισμό, αναγνωρίζεται ως \"βιολογικό προϊόν\" και η απορρόφηση της γλυκόζης στο αίμα γίνεται με μέτρο (παίρνει όση έχει ανάγκη ο οργανισμός) και όχι ανεξέλεγκτη όπως συμβαίνει με τη ζάχαρη.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Πρόκειται για πολύ σημαντικές ανακαλύψεις που μας θυμίζουν για άλλη μια φορά την ανεκτίμητη αξία που έχει το ελληνικό μέλι και ότι πρέπει να καταναλώνεται οπωσδήποτε δύο φορές κάθε ημέρα. Ακόμη και για όποιον έχει προβλήματα με το ζάχαρο, το μέλι μπορεί να γίνει φάρμακο, με ιδανικό σε αυτήν την περίπτωση να θεωρείται αυτό της κουμαριάς (πικρό) που έχει τη χαμηλότερη περιεκτικότητα σε σάκχαρα.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Το μέλι είναι από τα λίγα προϊόντα σήμερα που δεν έχει επηρεαστεί από την εξέλιξη του ανθρώπου, τη βιομηχανική δραστηριότητα, τα φυτοφάρμακα κλπ. Η μέλισσα έχει τον τρόπο της να συλλέγει μόνο τα καθαρά λουλούδια, και να παράγει \"θησαυρό\" σε όποιο μέρος και αν βρίσκεται. Το μόνο που θα πρέπει να προσέξουμε στην αγορά του, είναι να το πάρουμε κατευθείαν από κάποιο πιστοποιημένο και έμπιστο παραγωγό, και όχι τυποποιημένο από κάποια μεγάλη εμπορική αλυσίδα -διότι εκεί ίσως αλλάζουν τα πράγματα.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Συμπεραίνοντας, η Ελλάδα έχει ένα θησαυρό στα χέρια της.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Μέλι που δεν παράγεται πουθενά αλλού σε ολόκληρο το κόσμο. Και αν πρέπει να γίνει κάτι στο μέλλον αυτό είναι να αναδείξουμε το πλούτο μας και να κάνουμε μια προώθηση που θα φτάσει σε κάθε γωνιά του πλανήτη. Να φτάσουμε την Ελλάδα μας στη κορυφή. Γιατί το αξίζει!",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "image",
      "src": "21375d_3b6b476abf5a4897a10c9fcb0af867b5~mv2.png",
      "alt": "Aesthlos TUV certification"
    },
    {
      "type": "text",
      "tag": "h2",
      "runs": [
        {
          "text": "Μέλια Aesthlos: ",
          "color": "#FFC824",
          "bold": true
        },
        {
          "text": "Mέλι Βελανιδιάς / Μέλι Δάσους",
          "color": "#FFFFFF"
        }
      ],
      "color": "#FFC824"
    },
    {
      "type": "image",
      "src": "21375d_6fbcd7e7b44c44e0bade78de87b4c8e6~mv2.png",
      "alt": "aesthlos EU/NON-EU certification"
    },
    {
      "type": "image",
      "src": "21375d_81d6a38788814448a5163dd0b5a0780d~mv2.png",
      "alt": "honeys_square.png"
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Η συλλογή των μελιών μας γίνεται από οικογένειες μελισσουργών που έχουν παράδοση τουλάχιστον μισού αιώνα επάνω στη μελισσουργία, με απολύτως φυσικές και βιολογικές μεθόδους. Η μεταφορά των μελισσών σε διάφορες περιοχές ανά την Ελλάδα, επιτρέπει τη συλλογή του μελιού από διαφορετικά μελιτώματα και άνθη, δημιουργώντας ένα φυσικό φαρμακείο που προστατεύει τον ανθρώπινο οργανισμό, θωρακίζοντας την υγεία του. Βασικός στόχος μας είναι τα προϊόντα των μελισσών, να φθάνουν στα χέρια του καταναλωτή αγνά και ακατέργαστα, κατευθείαν από την κυψέλη, παρμένα με απόλυτο σεβασμό, κυριολεκτικά μέσα από το σπίτι της μέλισσας.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Η συλλογή των μελιών μας (Δάσους και Άγριας Βελανιδιάς) γίνεται ως επί το πλείστων στην ορεινή Ηλεία, στο ξακουστό Δάσος της Φολόης, σε υψόμετρο μεγαλύτερο των 600 μέτρων, αλλά και στην ορεινή Εύβοια, την πανύψηλη Δίρφυ σε υψόμετρο 1000 μέτρα. Αντίστοιχα το μέλι των Ανθέων προέρχεται από την ορεινή Αρκαδία και την Εύβοια.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "h3",
      "runs": [
        {
          "text": "Τα Ελληνικά Μεσογειακά Δάση",
          "color": "#49A94B"
        }
      ],
      "color": "#49A94B"
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Το Δάσος της Φολόης πήρε το όνομά του από τον Κένταυρο Φόλο της ελληνικής μυθολογίας. Όποιος βρεθεί εκεί καταλαβαίνει γιατί οι αρχαίοι έδωσαν σε αυτόν τον τόπο τέτοια αίγλη. Είναι ένα μοναδικό δρυοδάσος στα Βαλκάνια, ένα από τα μεγαλύτερα στην Ευρώπη με έκταση 42.000 στρέμματα και ενταγμένο στο δίκτυο Νatura 2000. Σε όλο το οροπέδιο της Φολόης κυριαρχεί η ευθύκορμη βελανιδιά (δρυς), την οποία ο λαός της περιοχής ονόμασε «Κάπελη», που σημαίνει πυκνό δάσος ή άφθονο δάσος. Η Κάπελη λέγεται και «μπαλκόνι της Ηλείας». Αν βρεθείτε εκτός δάσους, θα καταλάβετε το γιατί. Σε πολλά σημεία, ο ουρανός κρύβεται από τις θεόρατες βελανιδιές. Είναι ένα από τα σπανιότερα δάση, μοναδικό στα Βαλκάνια. Οι βελανιδιές του είναι ψηλές, άλλες ευθείς σαν κυπαρίσσια και άλλες χοντρές πολύκλωνες. Σύμφωνα με τους ντόπιους, στο δάσος υπάρχουν 5 εκατομμύρια δέντρα (!). Το δάσος βρίσκεται σε οροπέδιο, σε υψόμετρο 660 μέτρων. Είναι από τα αρχαιότερα δάση της Ευρώπης, ίσως και γιατί η βελανιδιά δεν καίγεται τόσο εύκολα όσο το πεύκο, γεγονός που βοηθά το δάσος στην αυτοπροστασία του από τις φωτιές.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Το οροπέδιο της Φολόης είναι προστατευόμενος βιότοπος του Natura 2000.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Το Δάσος της Στενής από την άλλη ανήκει στα 19 αισθητικά δάση της Ελλάδας με χαρακτηριστικά το περιβαλλοντικό του ενδιαφέρον, τις ευεργετικές του ιδιότητες για την υγεία, την ψυχή και το πνεύμα, τη φυσική ομορφιά του, τη δυνατότητα που δίνει στον επισκέπτη να ξεκουραστεί και να γίνει ένα με τη φύση. Αντίστοιχα και η βλάστηση της Δίρφυς είναι μοναδική με εκτεταμένους δασότοπους από ελάτη, βελανιδιές, καστανιές και πεύκα. Οι περιοχές της Δίρφης: δάσος Στενής και Δελφί είναι επίσης προστατευόμενοι βιότοποι του Natura 2000.",
          "color": "#FFFFFF"
        }
      ]
    }
  ],
  "de": [
    {
      "type": "text",
      "tag": "h1",
      "runs": [
        {
          "text": "Botanische Kompositionen Aesthlos & Griechische Honige",
          "color": "#FFC824",
          "bold": true
        }
      ],
      "color": "#FFC824"
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Unsere Rezepturen verbinden die ganzheitliche Unterstützung der fünf Ebenen der Gesundheit (oder einfach “ganzheitliche Gesundheitsunterstützung”) mit einem einzigartigen Geschmackserlebnis, das den Körper vor allen Krankheitsarten schützt. Sie basieren alle auf den besten ernährungsphysiologischen Sorten griechischen Honigs und werden durch hochwertige Kräuter und Früchte aus biologischem Anbau ergänzt.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Die chemischen Analysen, die unsere Honige begleiten, bescheinigen ihre erstklassige Qualität und sind grundlegende Garantie unseres Strebens nach dem Außergewöhnlichem, während die Kräuter und alle Zwischenprodukte ausschließlich aus biologischem Anbau stammen.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "h2",
      "runs": [
        {
          "text": "Griechische Honige:",
          "color": "#FFC824"
        },
        {
          "text": "\n"
        },
        {
          "text": "",
          "color": "#FFC824"
        },
        {
          "text": "das Wunder der griechischen Natur mit den meisten Antioxidantien!",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Honig ist ein besonderer Fall in der Lebensmittelindustrie. Er ist buchstäblich ein Wunder der Natur.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Er ist eines der wertvollsten, nahrhaftesten und gesündesten Lebensmittel, die es gibt, und de Gründe,",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "die diese Behauptung stützen, sind zahllos. Einer der wichtigsten Gründe ist eine besondere Eigenschaft des Honigs: seine antioxidative Wirkung!",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Chrysoula Tananaki, Assistenzprofessorin und Leiterin des Labors für Bienenzucht und Seidenraupenzucht an der Fakultät für Landwirtschaft der Aristoteles-Universität Thessaloniki, stellte die Ergebnisse einer größeren Forschungsarbeit der Fakultät vor, die belegen, dass Honig eine antioxidative Wirkung hat. Das heißt, er bekämpft freie Radikale, die für die Entartung von Zellen verantwortlich sind, die wiederum Krebstumore verursachen.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Die antioxidative Aktivität der verschiedenen Honigsorten ist jedoch nicht gleich hoch. Wilder Eichenhonig und die meisten Waldhonige (Honigtau) sind die reichsten Honige, sowohl an Antioxidantien als auch an Phenolen!",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Die antioxidative Wirkung des Honigs",
          "color": "#FFC824",
          "bold": true
        }
      ],
      "color": "#FFC824"
    },
    {
      "type": "pdf",
      "text": "Hier lesen",
      "href": "pdf:21375d_64d52d0eb9de4b8ebb210f34ad4cb305.pdf"
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "*Tananaki,Ch. Dimou, M. & Thrasivoulou, A.( 2015): Biological Action of Greek honey. 1st Panhellenic Conference of Professional Beekeeping, 100-106.",
          "color": "#FFC824"
        }
      ],
      "color": "#FFC824"
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Forscher der Aristoteles-Universität Thessaloniki untersuchten 48 verschiedene Griechische Honigsorten",
          "color": "#FFC824"
        }
      ],
      "color": "#FFC824"
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "und kamen zu einem erstaunlichen Ergebnis!",
          "color": "#FFC824"
        }
      ],
      "color": "#FFC824"
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Die Untersuchung von Tananaki, Dimou & Thrasivoulou (2015) beweist die wohltuende Wirkung von griechischem Honigauf den menschlichen Körper. Sie sammelten 48 verschiedene Honigproben aus ganz Griechenland und von allen blühenden Pflanzen, und niemand hätte erwartet, dass ihre Zusammensetzung so viele Eigenschaften verbirgt, viel besser sogar als die viel beworbenen Honige aus dem Ausland, wie z.B. Manuka-Honig!",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Griechischer Honig",
          "color": "#FFC824"
        }
      ],
      "color": "#FFC824"
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Glukose und Fruktose liegen im Honig in ihrer einfachsten Form vor. Sie sind für den Körper so leicht verdaulich, dass sie wahre Wunder bewirken können. Mit Zucker, der die Organe und ihre einwandfreie Funktion schädigt, haben sie nichts gemein. Gelangt Honig in den Körper, wird er als „biologisches Produkt“ erkannt, und die Aufnahme der Glukose ins Blut erfolgt maßvoll (der Körper nimmt nur so viel auf, wie er braucht) und nicht unkontrolliert wie bei Zucker."
        }
      ],
      "translated": true
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Es handelt sich um sehr wichtige Erkenntnisse, die uns einmal mehr an den unschätzbaren Wert des griechischen Honigs erinnern und daran, dass er unbedingt zweimal täglich verzehrt werden sollte. Selbst für Menschen mit Blutzuckerproblemen kann Honig zur Medizin werden; als ideal gilt in diesem Fall der (bittere) Erdbeerbaumhonig, der den geringsten Zuckergehalt aufweist."
        }
      ],
      "translated": true
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Honig ist heute eines der wenigen Produkte, das nicht durch die menschliche Entwicklung, industrielle Aktivitäten, Pestizide usw. beeinträchtigt wurde. Die Biene sammelt nur die reinen Blüten und produziert “Schätze”, wo immer sie zu finden sind. Das Einzige, worauf man achten sollte, ist, ihn direkt von einem zertifizierten und vetrauenswürdigen Imker zu beziehen und nicht standardisiert von einer großen Handelskette- denn dort könnten sich die Dinge ändern.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Zusammenfassend lässt sich sagen, dass Griechenland einen Schatz in seinen Händen hält.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Honig, der nirgendwo sonst auf der Welt produziert wird. Und wenn in Zukunft etwas getan werden sollte, dann ist es, unseren Reichtum zu präsentieren und eine Werbung zu machen, die jeden Winkel der Welt erreicht. Um unser Griechenland an die Spitze zu bringen. Denn es hat es verdient!",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "image",
      "src": "21375d_3b6b476abf5a4897a10c9fcb0af867b5~mv2.png",
      "alt": "Aesthlos TUV certification"
    },
    {
      "type": "text",
      "tag": "h2",
      "runs": [
        {
          "text": "Honige Aesthlos:",
          "color": "#FFC824",
          "bold": true
        },
        {
          "text": " Wilder Eichenhonig/ Waldhonig",
          "color": "#FFFFFF",
          "bold": true
        }
      ],
      "color": "#FFC824"
    },
    {
      "type": "image",
      "src": "21375d_6fbcd7e7b44c44e0bade78de87b4c8e6~mv2.png",
      "alt": "aesthlos EU/NON-EU certification"
    },
    {
      "type": "image",
      "src": "21375d_81d6a38788814448a5163dd0b5a0780d~mv2.png",
      "alt": "honeys_square.png"
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Unser Honig wird von Imkerfamilien geerntet, die mindestens ein halbes Jahrhundert Tradition in der Imkerei haben, und dabei völlig natürliche und biologische Methoden anwenden. Der Transport der Bienen in verschiedenen Regionen Griechenlands ermöglicht das Sammeln von Honig aus verschiedenen Blüten und Honigtau, wodurch eine natürliche Apotheke entsteht, die den menschlichen Körper schützt und seine Gesundheit bewahrt. Das Hauptziel ist, dass die Produkte der Bienen rein und roh direkt aus dem Bienenstock, buchstäblich mit absolutem Respekt aus dem Haus der Bienen, in die Hände des Verbrauchers gelangen.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Die Ernte unseres Honigs (Wald - und Wilder Eichenhonig) erfolgt hauptsächlich im gebirgigen Ilia, im berühmten Wald von Folio, in einer Höhe von mehr als 600 Metern, aber auch im gebirgigen Euböa, dem hoch aufragenden Dirfi in einer Höhe von 1000 Metern. Auch der Blütenhonig stammt aus dem gebirgigen Arkadien und Euböa.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "h3",
      "runs": [
        {
          "text": "Die griechischen Mittelmeerwälder",
          "color": "#49A94B"
        }
      ],
      "color": "#49A94B"
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Der Wald von Folio ist nach dem Kentaur Follo aus der griechischen Mythologie benannt. Jeder, der sich dort aufhält, versteht, warum sie damals diesem Ort einen solchen Glanz verliehen haben. Es ist ein einzigartiger Eichenwald auf dem Balkan, einer der größten in Europa mit einer Fläche von 42000 Hektar und Teil des Natura-2000-Netzes.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Die gesamte Hochebene von Folio wird von aufrechten, geraden Eichen dominiert, den die Einheimischen “Kapeli” nennen, was so viel wie ein “dichter Wald” oder “üppiger Wald” bedeutet. Kapeli wird auch die “Terrasse von Ilia” genannt. Wenn sie sich außerhalb des Waldes befinden, werden sie verstehen, warum. An vielen Stellen wird der Himmel von den riesigen Eichen verdeckt. Es handelt sich um einen der seltensten Wälder, der auf dem Balkan einzigartig ist.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Die Eichen sind hoch, manche gerade wie Zypressen und andere dick und mehrstämmig. Nach Angaben der Einheimischen gibt es in diesem Wald 5 Millionen Bäume (!). Der Wald befindet sich auf einer Hochebene in 660 m Höhe. Er ist einer der ältesten Wälder Europas, vielleicht weil die Eiche nicht so leicht brennt wie die Kiefer, was dem Wald hilft, sich vor Bränden zu schützen.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Die Hochebene von Folio ist ein geschützter Lebensraum von Natura 2000.",
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "type": "text",
      "tag": "p",
      "runs": [
        {
          "text": "Der Wald von Steni hingegen gehört zu den 19 ästhetischen Wäldern Griechenlands, die sich durch ihre ökologische Bedeutung, ihre wohltuenden Eigenschaften für Gesundheit, Seele und Geist, ihre natürliche Schönheit und die Möglichkeit für den Besucher, sich zu erholen und mit der Natur eins zu werden, auszeichnen. Auch die Vegetation von Dirfi ist einzigartig mit ausgedehnten Fichten-, Eichen-, Kastanien-und Kiefernwäldern. Die Gebiete von Dirfi , also Steni-Wald und Delphi sind ebenfalls geschützte Natura-2000-Gebiete.",
          "color": "#FFFFFF"
        }
      ]
    }
  ]
};
