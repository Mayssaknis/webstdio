import { z } from "zod";

export const PROJECT_TYPES = [
  { value: "landing", label: "Landing page" },
  { value: "vitrine", label: "Site vitrine" },
  { value: "ecommerce", label: "Site e-commerce" },
  { value: "application", label: "Application web" },
  { value: "refonte", label: "Refonte de site web" },
  { value: "maintenance", label: "Maintenance & support" },
  { value: "autre", label: "Autre / à définir" },
] as const;

export const BUDGETS = [
  { value: "moins-500", label: "Moins de 500 DT" },
  { value: "500-1000", label: "500 – 1 000 DT" },
  { value: "1000-2500", label: "1 000 – 2 500 DT" },
  { value: "2500-5000", label: "2 500 – 5 000 DT" },
  { value: "plus-5000", label: "Plus de 5 000 DT" },
  { value: "a-definir", label: "À définir ensemble" },
] as const;

export const projectTypeValues = PROJECT_TYPES.map((t) => t.value) as [
  string,
  ...string[],
];
export const budgetValues = BUDGETS.map((b) => b.value) as [
  string,
  ...string[],
];

const phoneRegex = /^\+?[0-9\s().-]{8,20}$/;

export const quoteSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Merci d'indiquer votre nom complet (2 caractères minimum).")
    .max(80, "Le nom est trop long."),
  company: z
    .string()
    .trim()
    .max(120, "Le nom de l'entreprise est trop long.")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .min(1, "L'adresse e-mail est obligatoire.")
    .email("Merci de saisir une adresse e-mail valide."),
  phone: z
    .string()
    .trim()
    .min(1, "Le numéro de téléphone est obligatoire.")
    .refine((v) => phoneRegex.test(v), "Merci de saisir un numéro de téléphone valide."),
  projectType: z.enum(projectTypeValues, {
    message: "Merci de choisir un type de projet.",
  }),
  budget: z
    .enum(budgetValues)
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(20, "Décrivez votre besoin en quelques phrases (20 caractères minimum).")
    .max(4000, "La description est trop longue."),
  consent: z.literal(true, {
    message: "Merci d'accepter le traitement de vos données.",
  }),
  // Honeypot anti-spam : doit rester vide.
  website: z.string().max(0, "Requête invalide.").optional().or(z.literal("")),
});

export type QuoteInput = z.infer<typeof quoteSchema>;

export function formatZodErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!errors[key]) errors[key] = issue.message;
  }
  return errors;
}
