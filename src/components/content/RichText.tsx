import Link from "next/link";
import { Fragment } from "react";
import type { Lang, Run } from "@/content/types";
import { resolveHref } from "@/lib/media";

/** Renders verbatim Wix text runs, keeping accent colours, bold and inline links. */
export default function RichText({ runs, lang = "el" }: { runs: Run[]; lang?: Lang }) {
  return (
    <>
      {runs.map((r, i) => {
        const parts = r.text.split("\n");
        const text = parts.map((p, j) => (
          <Fragment key={j}>
            {j > 0 && <br />}
            {p}
          </Fragment>
        ));
        const style = r.color ? { color: r.color } : undefined;
        const cls = r.bold ? "font-bold" : undefined;
        if (r.href) {
          const href = resolveHref(r.href, lang);
          const internal = href.startsWith("/") && !href.startsWith("/files/");
          return internal ? (
            <Link key={i} href={href} style={style} className={`underline-offset-4 hover:underline ${cls ?? ""}`}>
              {text}
            </Link>
          ) : (
            <a
              key={i}
              href={href}
              style={style}
              className={`underline-offset-4 hover:underline ${cls ?? ""}`}
              {...(href.startsWith("/files/") ? { target: "_blank", rel: "noopener" } : {})}
            >
              {text}
            </a>
          );
        }
        return style || cls ? (
          <span key={i} style={style} className={cls}>
            {text}
          </span>
        ) : (
          <Fragment key={i}>{text}</Fragment>
        );
      })}
    </>
  );
}
