import CompositionsPage from "@/components/sections/compositions/CompositionsPage";
import { pageMetadata } from "@/lib/content";

// Own route (not [slug]) so this page only ships its own client JS.
export const metadata = pageMetadata("de", "thecompositions");

export default function Page() {
  return <CompositionsPage lang="de" />;
}
