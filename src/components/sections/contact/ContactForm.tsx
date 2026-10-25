"use client";

import { useRef, useState, type FormEvent } from "react";
import { contact } from "@/content/contact";
import type { Lang } from "@/content/types";

/**
 * Contact form, same fields as the Wix form, styled like the site. The site is static, so the
 * data is posted straight to the owner's Jotform form "Aesthlos – Επικοινωνία / Contact"
 * (EU servers). Jotform stores every message and emails a notification.
 * Field names (qN_…) come from the Jotform form; if questions are added/removed there, update JOTFORM.
 *
 * TECH DEBT (see README "Known limitations"): the POST is cross-origin no-cors, so a rejection by
 * Jotform (spam, monthly quota, renamed fields) still shows "sent". The success text therefore also
 * offers info@aesthlos.com. Proper fix: a Cloudflare Pages Function that relays and reads the response.
 */
const JOTFORM = {
  id: "262894956014063",
  action: "https://eu-submit.jotform.com/submit/262894956014063",
  fields: { name: "q2_q2_textbox0", email: "q3_q3_email1", message: "q4_q4_textarea2", lang: "q5_q5_textbox3" },
  honeypot: "website", // Jotform's own spam trap: must stay empty
};
type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ lang }: { lang: Lang }) {
  const t = contact[lang];
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const mountedAt = useRef(Date.now());

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const e: Record<string, string> = {};
    for (const k of ["name", "email", "message"]) if (!String(data.get(k) ?? "").trim()) e[k] = t.errors.required;
    const email = String(data.get("email") ?? "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = t.errors.email;
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length) {
      (form.querySelector(`[name="${Object.keys(e)[0]}"]`) as HTMLElement | null)?.focus();
      return;
    }
    setStatus("sending");
    const data = new FormData(form);
    const body = new URLSearchParams({
      formID: JOTFORM.id,
      simple_spc: `${JOTFORM.id}-${JOTFORM.id}`,
      timeToSubmit: String(Math.round((Date.now() - mountedAt.current) / 1000)),
      [JOTFORM.fields.name]: String(data.get("name") ?? "").trim(),
      [JOTFORM.fields.email]: String(data.get("email") ?? "").trim(),
      [JOTFORM.fields.message]: String(data.get("message") ?? "").trim(),
      [JOTFORM.fields.lang]: lang,
      [JOTFORM.honeypot]: String(data.get("website") ?? ""),
    });
    try {
      // Cross-origin "simple" POST: the response is opaque, so a network error is the only failure we can see.
      await fetch(JOTFORM.action, { method: "POST", mode: "no-cors", body });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrors({ form: t.errors.send });
    }
  }

  const field =
    "w-full border-2 border-white bg-white px-3 py-2 text-[14px] text-black placeholder:italic placeholder:text-neutral-500 outline-none transition-[border-color,box-shadow] focus:border-gold focus:shadow-[0_0_0_3px_rgba(255,200,36,0.35)] aria-[invalid=true]:border-red-500";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-2.5" aria-describedby="form-status">
      {/* honeypot: hidden from people; bots fill it and Jotform treats the submission as spam */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <Field id="name" error={errors.name}>
        <label htmlFor="cf-name" className="sr-only">
          {t.fields.name}
        </label>
        <input id="cf-name" name="name" type="text" autoComplete="name" required placeholder={t.fields.name} aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-err" : undefined} className={field} />
      </Field>
      <Field id="email" error={errors.email}>
        <label htmlFor="cf-email" className="sr-only">
          {t.fields.email}
        </label>
        <input id="cf-email" name="email" type="email" autoComplete="email" required placeholder={t.fields.email} aria-invalid={!!errors.email} aria-describedby={errors.email ? "cf-email-err" : undefined} className={field} />
      </Field>
      <Field id="message" error={errors.message}>
        <label htmlFor="cf-message" className="sr-only">
          {t.fields.message}
        </label>
        <textarea id="cf-message" name="message" required rows={5} placeholder={t.fields.message} aria-invalid={!!errors.message} aria-describedby={errors.message ? "cf-message-err" : undefined} className={`${field} resize-y`} />
      </Field>
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="min-w-[100px] border-2 border-[#2a2a2a] bg-white px-5 py-1.5 text-[14px] text-black transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-gold disabled:opacity-60"
        >
          {status === "sending" ? t.sending : t.submit}
        </button>
      </div>
      <p id="form-status" role="status" aria-live="polite" className="min-h-[1.5em] text-[15px]">
        {status === "sent" && (
          <span className="text-white">
            {t.success}{" "}
            <span className="block text-[14px] text-white/80">
              {t.successFallback}
              <a href="mailto:info@aesthlos.com" className="underline underline-offset-4 hover:text-gold">
                info@aesthlos.com
              </a>
              .
            </span>
          </span>
        )}
        {status === "error" && errors.form && <span className="text-red-400">{errors.form}</span>}
      </p>
    </form>
  );
}

function Field({ id, error, children }: { id: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      {children}
      {error && (
        <p id={`cf-${id}-err`} className="mt-1 text-[13px] text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
