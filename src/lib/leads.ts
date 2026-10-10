import "server-only";
import { createHash, randomBytes } from "node:crypto";
import { prisma, isDatabaseConfigured } from "@/lib/prisma";
import { isEmailConfigured, sendQuoteEmail } from "@/lib/email";
import type { QuoteInput } from "@/lib/quote";

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

interface Attempt {
  timestamps: number[];
}

const attempts = new Map<string, Attempt>();

function pruneAttempts() {
  const now = Date.now();
  for (const [key, value] of attempts) {
    value.timestamps = value.timestamps.filter(
      (t) => now - t < RATE_LIMIT_WINDOW_MS,
    );
    if (value.timestamps.length === 0) attempts.delete(key);
  }
}

export function hashSensitive(value: string): string {
  const pepper = process.env.PRIVACY_PEPPER ?? "webstudio-local-pepper";
  return createHash("sha256").update(value + pepper).digest("hex");
}

export function isRateLimited(ipHash: string): boolean {
  pruneAttempts();
  const entry = attempts.get(ipHash);
  return (entry?.timestamps.length ?? 0) >= RATE_LIMIT_MAX;
}

export function recordAttempt(ipHash: string) {
  pruneAttempts();
  const entry = attempts.get(ipHash) ?? { timestamps: [] };
  entry.timestamps.push(Date.now());
  attempts.set(ipHash, entry);
}

export interface SubmitResult {
  storedInDatabase: boolean;
  emailed: boolean;
}

export async function submitQuote(
  input: QuoteInput,
  meta: {
    ip: string | null;
    userAgent: string | null;
    source: string | null;
  },
): Promise<SubmitResult> {
  const ipHash = meta.ip ? hashSensitive(meta.ip) : null;
  const storedInDatabase = isDatabaseConfigured;
  const emailed = isEmailConfigured();

  if (!storedInDatabase && !emailed) {
    throw new Error(
      "Le formulaire n'est pas encore configuré. Veuillez réessayer plus tard.",
    );
  }

  if (storedInDatabase) {
    await prisma.quoteRequest.create({
      data: {
        fullName: input.fullName,
        company: input.company || null,
        email: input.email,
        phone: input.phone,
        projectType: input.projectType,
        budget: input.budget || null,
        message: input.message,
        source: meta.source,
        userAgent: meta.userAgent,
        ipHash,
      },
    });
  }

  if (emailed) {
    await sendQuoteEmail(input);
  }

  return { storedInDatabase, emailed };
}

export function requestId(): string {
  return randomBytes(16).toString("hex");
}