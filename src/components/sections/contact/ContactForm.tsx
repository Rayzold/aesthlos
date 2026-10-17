"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/content/contact";
import type { Lang } from "@/content/types";

/**
 * Contact form, same fields as the Wix form. The site is static, so submissions go to Web3Forms
 * (https://web3forms.com), which emails them to the address the access key was created with
 * (info@aesthlos.com). Key: NEXT_PUBLIC_WEB3FORMS_KEY at build time — see README.
 */
const KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ lang }: { lang: Lang }) {
  const t = contact[lang];
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    if (!KEY) {
      setStatus("error");
      setErrors({ form: t.errors.notConfigured });
      return;
    }
    setStatus("sending");
    const data = new FormData(form);
    data.append("access_key", KEY);
    data.append("subject", lang === "el" ? "Νέο μήνυμα από το aesthlos.com" : "Neue Nachricht von aesthlos.com (DE)");
    data.append("from_name", "aesthlos.com");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data, headers: { Accept: "application/json" } });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
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
      {/* honeypot: hidden from people; bots fill it and Web3Forms drops the submission */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
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
        {status === "sent" && <span className="text-white">{t.success}</span>}
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
