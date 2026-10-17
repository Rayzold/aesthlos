import RawPage from "@/components/content/RawPage";
import { getPage, pageMetadata } from "@/lib/content";

export const metadata = pageMetadata("de", "");

export default function HomePageDe() {
  return <RawPage page={getPage("de", "")} />;
}
