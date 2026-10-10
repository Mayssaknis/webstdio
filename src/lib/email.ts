import "server-only";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";
import { PROJECT_TYPES, type QuoteInput } from "@/lib/quote";

const resendApiKey = process.env.RESEND_API_KEY;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function client() {
  return resendApiKey ? new Resend(resendApiKey) : null;
}

export function isEmailConfigured() {
  return Boolean(
    resendApiKey && (process.env.QUOTE_EMAIL_TO ?? siteConfig.contact.email),
  );
}

function projectLabel(value: string) {
  return (
    PROJECT_TYPES.find((t) => t.value === value)?.label ??
    value.charAt(0).toUpperCase() + value.slice(1)
  );
}

export async function sendQuoteEmail(input: QuoteInput): Promise<void> {
  const resend = client();
  const to = process.env.QUOTE_EMAIL_TO ?? siteConfig.contact.email;

  if (!resend || !to) {
    throw new Error("La notification e-mail n'est pas configurée.");
  }

  const project = projectLabel(input.projectType);

  const rows: Array<[string, string]> = [
    ["Nom complet", escapeHtml(input.fullName)],
    ["Entreprise", input.company ? escapeHtml(input.company) : "—"],
    ["E-mail", escapeHtml(input.email)],
    ["Téléphone", escapeHtml(input.phone)],
    ["Type de projet", escapeHtml(project)],
    ["Budget estimatif", input.budget ? escapeHtml(input.budget) : "—"],
  ];

  const rowsHtml = rows
    .map(
      ([key, value]) =>
        `<tr><td style="padding:10px 12px;border:1px solid #e5e7eb;color:#374151;font-weight:600;white-space:nowrap">${key}</td><td style="padding:10px 12px;border:1px solid #e5e7eb;color:#111827">${value}</td></tr>`,
    )
    .join("");

  const { error } = await resend.emails.send({
    from: process.env.QUOTE_EMAIL_FROM ?? "WebStudio <onboarding@resend.dev>",
    to,
    replyTo: input.email,
    subject: `Nouvelle demande de devis — ${input.fullName} (${project})`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#f9fafb;padding:24px">
        <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb">
          <div style="background:linear-gradient(120deg,#7c3aed,#d946ef);padding:20px 24px;color:#fff">
            <h2 style="margin:0;font-size:20px">${siteConfig.name} — Nouvelle demande de devis</h2>
          </div>
          <div style="padding:24px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              ${rowsHtml}
              <tr><td style="padding:10px 12px;border:1px solid #e5e7eb;color:#374151;font-weight:600;vertical-align:top">Besoin</td><td style="padding:10px 12px;border:1px solid #e5e7eb;color:#111827;white-space:pre-wrap">${escapeHtml(input.message)}</td></tr>
            </table>
            <p style="margin:20px 0 0;font-size:12px;color:#6b7280">Reçu le ${new Date().toLocaleString("fr-FR")}</p>
          </div>
        </div>
      </div>
    `,
  });

  if (error) throw new Error(error.message ?? "Erreur lors de l'envoi de l'e-mail.");
}