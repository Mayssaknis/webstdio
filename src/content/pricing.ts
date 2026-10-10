export interface Pricing {
  name: string;
  fromPrice: number | null;
  unit?: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta?: string;
}

export const pricing: Pricing[] = [
  {
    name: "Landing page",
    fromPrice: 350,
    unit: "DT",
    description:
      "Une page unique percutante pour lancer un produit, une offre ou une inscription.",
    features: [
      "Design sur mesure adapté à votre marque",
      "Optimisation mobile",
      "Formulaire de contact ou bouton d'action",
      "Intégration WhatsApp",
      "Référencement de base",
    ],
  },
  {
    name: "Site vitrine",
    fromPrice: 600,
    unit: "DT",
    description:
      "Un site complet de 3 à 5 pages pour présenter votre activité et gagner en crédibilité.",
    features: [
      "Pages : accueil, services, à propos, contact…",
      "Design responsive et moderne",
      "Formulaire de devis et intégration WhatsApp",
      "SEO de base et sitemap",
      "Formation à la prise en main",
    ],
    popular: true,
  },
  {
    name: "Site e-commerce",
    fromPrice: 1200,
    unit: "DT",
    description:
      "Une boutique en ligne complète pour vendre vos produits et gérer vos commandes.",
    features: [
      "Catalogue et fiches produits",
      "Panier et paiement sécurisé (COD disponible)",
      "Gestion des commandes et livraisons",
      "Tableau d'administration",
      "Optimisation SEO",
    ],
  },
  {
    name: "Application web",
    fromPrice: null,
    description:
      "Un outil web sur mesure : espace client, réservation, optimisation de vos processus.",
    features: [
      "Étude de faisabilité et cadrage",
      "Développement et tests",
      "Base de données sécurisée",
      "Formation et documentation",
      "Maintenance incluse 3 mois",
    ],
    cta: "Demander un devis",
  },
  {
    name: "Maintenance & support",
    fromPrice: 100,
    unit: "DT/mois",
    description:
      "Votre site reste à jour, sécurisé et performant avec un accompagnement continue.",
    features: [
      "Mises à jour et sauvegardes",
      "Corrections et petites évolutions",
      "Surveillance et sécurité",
      "Support réactif (e-mail & WhatsApp)",
    ],
  },
];