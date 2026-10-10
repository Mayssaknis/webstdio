"use client";

import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import {
  BUDGETS,
  PROJECT_TYPES,
  quoteSchema,
  type QuoteInput,
} from "@/lib/quote";
import { cn } from "@/lib/utils";

type FieldErrors = Partial<Record<keyof QuoteInput | "form", string>>;

const initialValues = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "a-definir",
  message: "",
  consent: false,
  website: "",
};

function matchProjectType(value: string): QuoteInput["projectType"] {
  const normalized = value.toLowerCase().replace(/[^a-z]+/g, " ");
  const match = PROJECT_TYPES.find((type) =>
    normalized.includes(type.value),
  );
  if (match) return match.value as QuoteInput["projectType"];
  if (normalized.includes("landing")) return "landing";
  if (normalized.includes("commerce")) return "ecommerce";
  if (normalized.includes("maintenance")) return "maintenance";
  if (normalized.includes("refonte")) return "refonte";
  if (normalized.includes("vitrine")) return "vitrine";
  return "autre";
}

export function ContactForm({ source = "contact" }: { source?: string }) {
  const formId = useId();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const offre = params.get("offre");
    if (offre) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- pré-remplissage ponctuel après hydratation
      setValues((prev) => ({
        ...prev,
        projectType: matchProjectType(offre),
        message: prev.message || "",
      }));
    }
  }, []);

  const setField = (
    name: keyof typeof initialValues,
    value: string | boolean,
  ) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrors({});
    setNotice("");

    const parsed = quoteSchema.safeParse({
      ...values,
      consent: values.consent === true,
      website: values.website ?? "",
    });

    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form") as keyof FieldErrors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("idle");
      return;
    }

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          source,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        errors?: FieldErrors;
        detail?: string;
      };

      if (response.ok) {
        setStatus("success");
        setValues(initialValues);
      } else if (response.status === 429) {
        setStatus("error");
        setNotice(
          data.detail ??
            "Trop de demandes récentes. Merci de réessayer un peu plus tard.",
        );
      } else if (data.errors) {
        setErrors(data.errors);
        setStatus("idle");
      } else {
        setStatus("error");
        setNotice(
          data.detail ??
            "Une erreur est survenue lors de l'envoi. Merci de réessayer.",
        );
      }
    } catch {
      setStatus("error");
      setNotice(
        "Impossible de contacter le serveur. Vérifiez votre connexion et réessayez.",
      );
    }
  }

  const inputClasses = (hasError?: string) =>
    cn(
      "w-full rounded-xl border bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors",
      hasError
        ? "border-red-400/70 focus:border-red-400"
        : "border-white/10 focus:border-brand-400",
      "focus:outline-none focus:ring-2 focus:ring-brand-400/30",
    );

  const labelClasses = "block text-sm font-medium text-slate-200";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-4 py-12 text-center"
          role="status"
        >
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15">
            <CheckCircle2 className="h-9 w-9 text-emerald-400" />
          </span>
          <h3 className="text-2xl font-bold text-white">
            Demande envoyée avec succès
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-slate-400">
            Merci pour votre confiance. Nous avons bien reçu votre demande et
            vous répondrons dans les plus brefs délais par e-mail ou par
            téléphone.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-2 text-sm font-semibold text-brand-300 transition-colors hover:text-white"
          >
            Envoyer une autre demande
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor={`${formId}-name`} className={labelClasses}>
                Nom complet <span className="text-brand-400">*</span>
              </label>
              <input
                id={`${formId}-name`}
                type="text"
                autoComplete="name"
                value={values.fullName}
                onChange={(e) => setField("fullName", e.target.value)}
                placeholder="Ex : Ahmed Ben Salem"
                className={inputClasses(errors.fullName)}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={
                  errors.fullName ? `${formId}-name-error` : undefined
                }
              />
              {errors.fullName ? (
                <p id={`${formId}-name-error`} className="text-xs text-red-400">
                  {errors.fullName}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label htmlFor={`${formId}-company`} className={labelClasses}>
                Nom de l&apos;entreprise
              </label>
              <input
                id={`${formId}-company`}
                type="text"
                autoComplete="organization"
                value={values.company}
                onChange={(e) => setField("company", e.target.value)}
                placeholder="Facultatif"
                className={inputClasses(errors.company)}
                aria-invalid={Boolean(errors.company)}
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor={`${formId}-email`} className={labelClasses}>
                Adresse e-mail <span className="text-brand-400">*</span>
              </label>
              <input
                id={`${formId}-email`}
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => setField("email", e.target.value)}
                placeholder="vous@exemple.com"
                className={inputClasses(errors.email)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? `${formId}-email-error` : undefined
                }
              />
              {errors.email ? (
                <p id={`${formId}-email-error`} className="text-xs text-red-400">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label htmlFor={`${formId}-phone`} className={labelClasses}>
                Numéro de téléphone <span className="text-brand-400">*</span>
              </label>
              <input
                id={`${formId}-phone`}
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                value={values.phone}
                onChange={(e) => setField("phone", e.target.value)}
                placeholder="+216 20 000 000"
                className={inputClasses(errors.phone)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={
                  errors.phone ? `${formId}-phone-error` : undefined
                }
              />
              {errors.phone ? (
                <p id={`${formId}-phone-error`} className="text-xs text-red-400">
                  {errors.phone}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label htmlFor={`${formId}-type`} className={labelClasses}>
                Type de projet <span className="text-brand-400">*</span>
              </label>
              <div className="relative">
                <select
                  id={`${formId}-type`}
                  value={values.projectType}
                  onChange={(e) => setField("projectType", e.target.value)}
                  className={cn(
                    inputClasses(errors.projectType),
                    "appearance-none pr-10",
                    !values.projectType && "text-slate-500",
                  )}
                  aria-invalid={Boolean(errors.projectType)}
                >
                  <option value="" disabled>
                    Sélectionnez un type de projet
                  </option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="m4 6 4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {errors.projectType ? (
                <p className="text-xs text-red-400">{errors.projectType}</p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label htmlFor={`${formId}-budget`} className={labelClasses}>
                Budget estimatif
              </label>
              <select
                id={`${formId}-budget`}
                value={values.budget}
                onChange={(e) => setField("budget", e.target.value)}
                className={cn(inputClasses(errors.budget), "appearance-none pr-10")}
              >
                {BUDGETS.map((budget) => (
                  <option key={budget.value} value={budget.value}>
                    {budget.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor={`${formId}-message`} className={labelClasses}>
              Description du besoin <span className="text-brand-400">*</span>
            </label>
            <textarea
              id={`${formId}-message`}
              rows={5}
              value={values.message}
              onChange={(e) => setField("message", e.target.value)}
              placeholder="Décrivez votre projet : objectifs, pages souhaitées, fonctionnalités, délais…"
              className={cn(inputClasses(errors.message), "resize-none leading-relaxed")}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? `${formId}-message-error` : undefined
              }
            />
            {errors.message ? (
              <p id={`${formId}-message-error`} className="text-xs text-red-400">
                {errors.message}
              </p>
            ) : null}
          </div>

          <div
            className={cn(
              "space-y-1.5 rounded-xl border p-4",
              errors.consent
                ? "border-red-400/50"
                : "border-white/10 bg-ink-900/40",
            )}
          >
            <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={values.consent}
                onChange={(e) => setField("consent", e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-ink-900 accent-brand-600"
              />
              <span>
                J&apos;accepte que mes données soient utilisées uniquement pour
                traiter ma demande de devis, conformément à la politique de
                confidentialité. <span className="text-brand-400">*</span>
              </span>
            </label>
            {errors.consent ? (
              <p className="text-xs text-red-400">{errors.consent}</p>
            ) : null}
          </div>

          {/* Champ anti-spam masqué */}
          <div className="absolute -left-[5000px]" aria-hidden="true">
            <label htmlFor={`${formId}-website`}>Votre site web</label>
            <input
              id={`${formId}-website`}
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={(e) => setField("website", e.target.value)}
            />
          </div>

          <AnimatePresence>
            {status === "error" ? (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                role="alert"
                className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-300"
              >
                {notice}
              </motion.p>
            ) : null}
          </AnimatePresence>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-base font-semibold text-white shadow-glow transition-all hover:opacity-95 disabled:opacity-60 sm:w-auto"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                Envoi en cours…
              </>
            ) : (
              <>
                <Send className="h-5 w-5" aria-hidden="true" />
                Envoyer ma demande
              </>
            )}
          </button>

          <p className="text-xs leading-relaxed text-slate-500">
            Vos données ne sont jamais partagées avec des tiers et sont utilisées
            uniquement pour répondre à votre demande.
          </p>
        </form>
      )}
    </div>
  );
}