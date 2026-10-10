export const siteConfig = {
  name: "WebStudio",
  tagline: "Votre présence en ligne, notre expertise.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://webstudio.tn",
  description:
    "WebStudio est une agence tunisienne spécialisée dans la création de sites web modernes, boutiques e-commerce et applications web pour les entreprises, commerces et entrepreneurs.",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
    address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS ?? "Tunis, Tunisie",
  },
  social: {
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ?? "",
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ?? "",
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ?? "",
  },
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projets", href: "/projets" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
