import RawPage from "@/components/content/RawPage";
import { getPage, pageMetadata } from "@/lib/content";

export const metadata = pageMetadata("el", "");

export default function HomePage() {
  return <RawPage page={getPage("el", "")} />;
}
