import { NextResponse } from "next/server";
import { quoteSchema, formatZodErrors } from "@/lib/quote";
import {
  hashSensitive,
  isRateLimited,
  recordAttempt,
  submitQuote,
  type SubmitResult,
} from "@/lib/leads";

const ALLOWED_ORIGINS = new Set(
  (process.env.ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
);

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://webstudio.tn";

function getClientIp(request: Request): string | null {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip");
}

export async function POST(request: Request) {
  // Vérification de l'en-tête Origin pour éviter les requêtes cross-site.
  const origin = request.headers.get("origin");
  if (origin) {
    const isCurrentSite =
      origin === BASE_URL.replace(/\/$/, "") ||
      (() => {
        try {
          return new URL(origin).host === new URL(BASE_URL).host;
        } catch {
          return false;
        }
      })();
    if (!isCurrentSite && !ALLOWED_ORIGINS.has(origin)) {
      return NextResponse.json(
        { ok: false, detail: "Origine de la requête non autorisée." },
        { status: 403 },
      );
    }
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { ok: false, detail: "Format de requête invalide." },
      { status: 415 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, detail: "Corps de requête invalide." },
      { status: 400 },
    );
  }

  const parsedObject = body as Record<string, unknown>;

  // Honeypot : si rempli, la requête vient d'un robot. On répond « succès » sans enregistrer.
  if (typeof parsedObject.website === "string" && parsedObject.website.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: formatZodErrors(parsed.error) },
      { status: 400 },
    );
  }

  const ip = getClientIp(request);
  const ipHash = ip ? hashSensitive(ip) : null;

  if (ipHash && isRateLimited(ipHash)) {
    return NextResponse.json(
      {
        ok: false,
        detail:
          "Trop de demandes envoyées récemment. Merci de réessayer un peu plus tard.",
      },
      { status: 429 },
    );
  }

  try {
    const result: SubmitResult = await submitQuote(parsed.data, {
      ip,
      userAgent: request.headers.get("user-agent"),
      source:
        typeof parsedObject.source === "string" ? parsedObject.source : "contact",
    });

    if (ipHash) recordAttempt(ipHash);

    return NextResponse.json(
      { ok: true, storedInDatabase: result.storedInDatabase, emailed: result.emailed },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erreur lors de la soumission de la demande de devis :", error);
    return NextResponse.json(
      {
        ok: false,
        detail:
          error instanceof Error
            ? error.message
            : "Une erreur interne est survenue. Merci de réessayer.",
      },
      { status: 500 },
    );
  }
}