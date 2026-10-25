import type { Lang } from "./types";

/**
 * /contact copy — verbatim from Wix (form placeholders, button, success message, company block).
 * Error messages and the "not configured" fallback are new (the Wix form handled them silently).
 */
export const contact: Record<
  Lang,
  {
    formTitle: string;
    fields: { name: string; email: string; message: string };
    submit: string;
    success: string;
    successFallback: string;
    company: { line: string; name: string }[];
    address: string[];
    emailLabel: string;
    phoneLabel: string;
    phoneDisplay: string;
    errors: { required: string; email: string; send: string };
    sending: string;
  }
> = {
  el: {
    formTitle: "Φόρμα επικοινωνίας",
    fields: { name: "Ονοματεπώνυμο", email: "Email", message: "Το μήνυμά σου, ή, η παραγγελία σου..." },
    submit: "Αποστολή",
    success: "Ευχαριστούμε για την επικοινωνία!",
    // Added (code review 25/10): the Jotform response is opaque, so offer the email as a fallback.
    successFallback: "Αν δεν λάβετε απάντηση, γράψτε μας στο ",
    // On Wix the person's name is dark grey (#2A2A2A) on black, i.e. practically hidden — kept as is.
    company: [{ line: "AESTHLOS THERAFOODS ", name: "Κουτάλας Ανδρέας" }],
    address: ["Εταιρεία Παραγωγής Τροφίμων", "Ομήρου 14, Νέα Σμύρνη Τ.Κ. 17122 Αθήνα"],
    emailLabel: "E: ",
    phoneLabel: "Τ: +30 ",
    phoneDisplay: "213014 4422",
    // new
    errors: {
      required: "Συμπληρώστε αυτό το πεδίο.",
      email: "Συμπληρώστε ένα έγκυρο email.",
      send: "Κάτι πήγε στραβά. Δοκιμάστε ξανά ή στείλτε email στο info@aesthlos.com.",
    },
    sending: "Αποστολή…",
  },
  de: {
    formTitle: "Kommunikationsformel",
    fields: { name: "Vor - und Zuname", email: "Email", message: "Bitte schreiben Sie hier Ihren Text..." },
    submit: "Senden",
    success: "Danke für Ihre Nachricht!",
    successFallback: "Falls Sie keine Antwort erhalten, schreiben Sie uns an ", // translated
    company: [{ line: "AESTHLOS THERAFOODS Koutalas Andreas", name: "" }],
    // "Lebensmittelhersteller": translated (the Wix German page had no equivalent of "Εταιρεία Παραγωγής Τροφίμων")
    address: ["Lebensmittelhersteller", "Οmirou 14, Nea Smirni", "17122 Αthen - Griechenland"],
    emailLabel: "E: ",
    phoneLabel: "Τ: +30 ",
    phoneDisplay: "21 3014 4422",
    // new
    errors: {
      required: "Bitte füllen Sie dieses Feld aus.",
      email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      send: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie an info@aesthlos.com.",
    },
    sending: "Wird gesendet…",
  },
};
