export interface Project {
  slug: string;
  title: string;
  category: "vitrine" | "ecommerce" | "entreprise" | "application";
  summary: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  fictional: boolean;
  featured?: boolean;
}

export const projectCategories = [
  { value: "all", label: "Tous" },
  { value: "vitrine", label: "Sites vitrines" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "entreprise", label: "Sites d'entreprises" },
  { value: "application", label: "Applications web" },
] as const;

export type ProjectCategory = (typeof projectCategories)[number]["value"];

const categoryLabel = (value: Project["category"]) =>
  projectCategories.find((c) => c.value === value)?.label ?? value;

export function projectCategoryLabel(project: Project): string {
  return categoryLabel(project.category);
}

export const projects: Project[] = [
  {
    slug: "atelier-nour",
    title: "Atelier Nour — Site vitrine",
    category: "vitrine",
    summary:
      "Site vitrine élégant pour un atelier de création artisanale : galerie de pièces, à propos de l'atelier et contact.",
    description:
      "Un site vitrine chaleureux qui met en valeur le savoir-faire artisanal : page d'accueil immersive, galerie des créations, page À propos et formulaire de contact. Design pensé pour tenir sur mobile comme sur ordinateur.",
    image: "/projects/atelier-nour.svg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://example.com",
    fictional: true,
    featured: true,
  },
  {
    slug: "souk-market",
    title: "Souk Market — E-commerce",
    category: "ecommerce",
    summary:
      "Boutique en ligne pour un commerce tunisien : catalogue produits, panier et commande simplifiée.",
    description:
      "Une boutique e-commerce complète avec catalogue filtrable, fiches produits détaillées, panier et parcours de commande optimisé pour la livraison en Tunisie. Administration simple pour gérer produits et commandes.",
    image: "/projects/souk-market.svg",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    demoUrl: "https://example.com",
    fictional: true,
    featured: true,
  },
  {
    slug: "medina-consulting",
    title: "Médina Consulting — Site d'entreprise",
    category: "entreprise",
    summary:
      "Plateforme institutionnelle moderne pour un cabinet de conseil : services, équipe, actualités et recrutement.",
    description:
      "Un site d'entreprise professionnel qui présente les activités du cabinet, ses engagements et ses domaines d'expertise, avec blog et espace carrières. Une architecture claire pour guider les visiteurs vers la prise de contact.",
    image: "/projects/medina-consulting.svg",
    technologies: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    fictional: true,
    featured: true,
  },
  {
    slug: "gestio",
    title: "Gestio — Application web de gestion",
    category: "application",
    summary:
      "Application web de suivi de projets et de facturation pour indépendants et petites équipes.",
    description:
      "Une application web sur mesure permettant de gérer projets, clients et factures depuis un tableau de bord clair. Authentification sécurisée, rôles utilisateurs et export de données.",
    image: "/projects/gestio.svg",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    fictional: true,
  },
];