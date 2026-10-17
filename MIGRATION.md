# Μεταφορά του aesthlos.com από το Wix στο Cloudflare Pages

Οδηγός βήμα-βήμα. Ο στόχος είναι **μηδενικός χρόνος εκτός λειτουργίας** και να **μη χαθεί ούτε ένα email** στο info@aesthlos.com.

## Τι ισχύει σήμερα (έλεγχος DNS, 17/10/2026)

| | Τιμή | Σημασία |
|---|---|---|
| **Registrar** (εταιρεία καταχώρισης) | **Enartia Single Member S.A.** (papaki.gr) | Το domain **δεν** είναι στο Wix. Δεν χρειάζεται μεταφορά (transfer), μόνο αλλαγή nameservers. |
| Λήξη domain | 04/04/2027 | Ανανέωση στο papaki, όπως και τώρα. |
| Κλειδώματα | `clientTransferProhibited`, `clientUpdateProhibited` | Για να αλλάξουν οι nameservers, ίσως χρειαστεί να ξεκλειδωθεί το «update lock» στο papaki. |
| **Nameservers** (ποιος διαχειρίζεται το DNS) | `ns8.wixdns.net`, `ns9.wixdns.net` | Το DNS το διαχειρίζεται το Wix. Αυτό αλλάζει. |
| Site (apex) | A → `185.230.63.171`, `185.230.63.107`, `185.230.63.186` (Wix) | Θα αντικατασταθεί. |
| Site (www) | CNAME → `cdn3.wixdns.net` (Wix) | Θα αντικατασταθεί. |
| **Email (MX)** | `10 mail.aesthlos.com` | ⚠️ Πρέπει να μεταφερθεί ακριβώς. |
| mail.aesthlos.com | A → `148.251.14.105` | ⚠️ Πρέπει να μεταφερθεί ακριβώς, **χωρίς proxy** (γκρι σύννεφο). |
| SPF | TXT `v=spf1 +a +mx include:_spf.fastmail.gr +ip6:2a01:4f8:201:7368::2 -all` | ⚠️ Μεταφέρεται ακριβώς. Ο πάροχος email είναι το **fastmail.gr**. |
| DKIM | TXT στο `default._domainkey` (`v=DKIM1; p=MIGfMA0…`) | ⚠️ Αντιγράφεται **ολόκληρη** η τιμή από τον πίνακα DNS του Wix. |
| DMARC | — (δεν υπάρχει) | Προαιρετικό, για αργότερα. |
| Google Search Console | Επαλήθευση με meta tag (υπάρχει ήδη στο νέο site) | Δεν χρειάζεται νέα επαλήθευση. |

Η πρόταση είναι το DNS να περάσει στο **Cloudflare** (δωρεάν), αφού εκεί θα φιλοξενείται και το site. Το domain μένει στο papaki.

---

## Βήμα 0: Αντίγραφο του DNS (πριν αλλάξει οτιδήποτε)

1. Wix → **Domains** → aesthlos.com → **Manage DNS Records**.
2. Κάντε screenshot ή αντιγράψτε **όλες** τις εγγραφές (A, CNAME, MX, TXT, SRV). Ο παραπάνω πίνακας δείχνει μόνο όσα φαίνονται απ' έξω. Μπορεί να υπάρχουν κι άλλα, π.χ. `webmail`, `autodiscover`, `smtp`, `imap`, `pop`.
3. Από την εγγραφή `default._domainkey`, αντιγράψτε **ολόκληρη** την τιμή DKIM σε ένα αρχείο κειμένου.
4. Στείλτε ένα δοκιμαστικό email **προς** και **από** το info@aesthlos.com. Έτσι θα ξέρετε ότι δούλευε πριν την αλλαγή.

## Βήμα 1: Το νέο site στο Cloudflare Pages (δεν επηρεάζει το τωρινό site)

1. Δημιουργία λογαριασμού στο https://dash.cloudflare.com (δωρεάν).
2. **Workers & Pages → Create → Pages → Connect to Git** → σύνδεση GitHub → repo `Rayzold/aesthlos`.
3. Ρυθμίσεις: Framework preset **None**, Build command `npm run build`, Build output directory `out`, Production branch `main`.
4. Το site ανοίγει στο `https://aesthlos.pages.dev`. Εκεί γίνεται ο έλεγχος πριν πειραχτεί το domain.

> ✅ **Έγινε στις 17/10/2026.** Το project `aesthlos` στο Cloudflare Pages συνδέθηκε με το GitHub (`Rayzold/aesthlos`, branch `main`) και ανεβαίνει αυτόματα σε κάθε push. Ελέγχθηκαν και οι 28 σελίδες (ελληνικά και γερμανικά), η σελίδα 404, το sitemap, το robots.txt, οι ανακατευθύνσεις `?lang=de` και `.html`, και τα headers για cache και ασφάλεια.

## Βήμα 2: Το domain στο Cloudflare (το site μένει ακόμα στο Wix)

1. Cloudflare → **Add a domain** → `aesthlos.com` → πλάνο **Free**.
2. Το Cloudflare διαβάζει μόνο του τις εγγραφές DNS. **Ελέγξτε τις μία-μία** με το αντίγραφο του Βήματος 0:
   - `MX  aesthlos.com  →  mail.aesthlos.com` (priority 10)
   - `A   mail  →  148.251.14.105`: **Proxy status: DNS only (γκρι σύννεφο)**. Αυτό είναι απαραίτητο για το email.
   - `TXT aesthlos.com  →  v=spf1 …` (SPF), όπως ακριβώς είναι
   - `TXT default._domainkey  →  v=DKIM1; p=…` (DKIM), ολόκληρη η τιμή
   - Ό,τι άλλο υπήρχε στο Wix (webmail, autodiscover κ.λπ.), επίσης με **DNS only**
3. Τις εγγραφές του site (A του apex προς 185.230.63.x και CNAME του www προς Wix) **τις αφήνετε προς το παρόν**. Έτσι το Wix site συνεχίζει να δουλεύει κατά την αλλαγή.
4. Το Cloudflare θα δώσει **δύο nameservers** (π.χ. `xxx.ns.cloudflare.com`).

## Βήμα 3: Αλλαγή nameservers στο papaki

1. papaki.gr → Τα domains μου → aesthlos.com → **Nameservers**.
2. Αν η αλλαγή δεν επιτρέπεται, απενεργοποιήστε πρώτα το κλείδωμα ενημέρωσης (update lock). Αν δεν φαίνεται κάπου, ζητήστε το από την υποστήριξη του papaki.
3. Στη θέση των `ns8.wixdns.net` / `ns9.wixdns.net` μπαίνουν οι δύο nameservers του Cloudflare.
4. Η αλλαγή θέλει από λίγα λεπτά έως 24 ώρες. Το Cloudflare στέλνει email όταν το domain γίνει **Active**.
5. **Έλεγχος email:** μόλις γίνει Active, στείλτε ξανά δοκιμαστικά email προς και από το info@aesthlos.com.

## Βήμα 4: Το domain δείχνει στο νέο site

1. Cloudflare → Workers & Pages → aesthlos → **Custom domains → Set up a custom domain**:
   - `www.aesthlos.com` (το κύριο, όπως και στο Wix)
   - `aesthlos.com`
   Το Cloudflare αντικαθιστά μόνο του τις παλιές εγγραφές του Wix και βγάζει πιστοποιητικό HTTPS μέσα σε λίγα λεπτά.
2. **SSL/TLS → Edge Certificates → Always Use HTTPS: On.**
3. **Ανακατεύθυνση aesthlos.com → www.aesthlos.com** (ένα κανονικό URL για τη Google):
   Rules → **Redirect Rules → Create rule → Template «Redirect from root to WWW»** → 301, *Preserve query string* ενεργό.
4. **Παλιοί γερμανικοί σύνδεσμοι του Wix (`?lang=de`)**, δεύτερος Redirect Rule:
   - When: *Custom filter expression* → `(http.request.uri.query contains "lang=de")`
   - Then: *Dynamic* → `concat("/de", http.request.uri.path)`, status **301**, *Preserve query string* **ανενεργό**.
   (Το site το κάνει ήδη και μέσα στον browser. Αυτός ο κανόνας το κάνει στον server, που είναι καλύτερο για τη Google.)

## Βήμα 5: Έλεγχοι στο νέο site (τους κάνει ο Claude, αρκεί να του δοθεί το URL)

- [ ] `https://www.aesthlos.com` και `https://aesthlos.com` → ανοίγουν το νέο site (το δεύτερο πηγαίνει στο www)
- [ ] `http://` → `https://`
- [ ] Όλα τα παλιά URL ανοίγουν: `/ourphilosophy`, `/thegreekhoneys`, `/thecompositions`, `/honeycollection`, `/contact`, `/copy-of-the-composition-of-earth`, `/compositionofearth`, `/compositionofwater`, `/compositionoffire`, `/compositionofair`, `/compositionofaether`, `/aesthloswildoakhoney`, `/aesthlosforesthoney`
- [ ] `/ourphilosophy?lang=de` → `/de/ourphilosophy`
- [ ] Ανύπαρκτη σελίδα → σελίδα 404 του site
- [ ] Φόρμα επικοινωνίας → το μήνυμα εμφανίζεται στο Jotform (Submissions) και η ειδοποίηση φτάνει στο info@aesthlos.com
- [ ] Email προς/από info@aesthlos.com
- [ ] Lighthouse (κινητό) όπως στο Phase 7
- [ ] Προεπισκόπηση συνδέσμου σε Facebook/Viber (https://developers.facebook.com/tools/debug/)

## Βήμα 6: Google Search Console

1. https://search.google.com/search-console → property `https://www.aesthlos.com/`. Η επαλήθευση (meta tag) υπάρχει ήδη στο νέο site, οπότε το property μένει επαληθευμένο.
2. **Sitemaps** → `https://www.aesthlos.com/sitemap.xml` → Submit. Το παλιό sitemap του Wix αφαιρείται αν υπάρχει.
3. **URL Inspection** → αρχική και 2–3 βασικές σελίδες → *Request indexing*.
4. Μετά από 1–2 εβδομάδες, ελέγξτε το **Pages / Indexing** για σφάλματα 404.

## Βήμα 7: Κλείσιμο του Wix (μόνο αφού όλα δουλεύουν 1–2 εβδομάδες)

- Το domain **δεν** είναι στο Wix, οπότε η ακύρωση του Premium plan δεν το επηρεάζει. Ούτε το email, που είναι στο fastmail.gr.
- Πριν την ακύρωση: export από το Wix ό,τι μένει μόνο εκεί (μηνύματα της παλιάς φόρμας, contacts, analytics).
- Ακύρωση: Wix → **Subscriptions** → Premium plan → Cancel. Αν θέλετε, ο λογαριασμός και το site μένουν ως δωρεάν, ανενεργά.

## Αν κάτι πάει στραβά (επαναφορά)

Στο papaki ξαναμπαίνουν οι nameservers `ns8.wixdns.net` / `ns9.wixdns.net`. Μέσα σε λίγες ώρες όλα γυρίζουν όπως ήταν. Το Wix site λειτουργεί μέχρι να ακυρωθεί το πλάνο.

## Προαιρετικά, αργότερα

- **DMARC:** Βελτιώνει την παράδοση των email. Πριν προστεθεί, ρωτήστε το fastmail.gr ποια τιμή προτείνει (π.χ. `v=DMARC1; p=none; rua=mailto:info@aesthlos.com`).
- **SPF `+a`:** Επιτρέπει αποστολή email από την IP του site. Μετά τη μεταφορά, η IP αυτή είναι του Cloudflare, που δεν στέλνει email. Δεν χαλάει κάτι. Το fastmail.gr μπορεί να επιβεβαιώσει αν το `+a` χρειάζεται.
- **Μεταφορά του domain στο Cloudflare Registrar:** Δεν χρειάζεται. Αν θέλετε φθηνότερη ανανέωση, στο papaki ξεκλειδώνετε το transfer lock, παίρνετε τον κωδικό EPP/auth code και κάνετε transfer από το Cloudflare. Καλύτερα όχι κοντά στη λήξη (04/2027).
