import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = { title: "404 | Aesthlos", robots: { index: false } };

/** Shown for any unknown URL (static hosts serve out/404.html). Bilingual, links back home. */
export default function GlobalNotFound() {
  return (
    <html lang="el">
      <body className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center">
        <Image src="/images/shared/logo-white-01.webp" alt="Aesthlos Therafoods" width={140} height={140} priority />
        <h1 className="font-display text-[22px] tracking-[0.05em] text-gold">404</h1>
        <p className="text-[16px] text-white">
          Η σελίδα δεν βρέθηκε.
          <br />
          <span lang="de">Die Seite wurde nicht gefunden.</span>
        </p>
        <p className="flex gap-4">
          <Link href="/" className="rounded-[20px] border-2 border-gold px-5 py-1.5 font-display text-[13px] text-gold hover:bg-gold hover:text-black">
            Αρχική
          </Link>
          <Link href="/de" lang="de" className="rounded-[20px] border-2 border-gold px-5 py-1.5 font-display text-[13px] text-gold hover:bg-gold hover:text-black">
            Homepage
          </Link>
        </p>
      </body>
    </html>
  );
}
