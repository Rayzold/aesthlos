import ContactPage from "@/components/sections/contact/ContactPage";
import { pageMetadata } from "@/lib/content";

// Own route (not [slug]) so this page only ships its own client JS.
export const metadata = pageMetadata("de", "contact");

export default function Page() {
  return <ContactPage lang="de" />;
}
