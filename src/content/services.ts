import {
  Rocket,
  ShoppingCart,
  RefreshCw,
  Code2,
  Wrench,
  Compass,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  features: string[];
  highlight?: string;
}

export const services: Service[] = [
  {
    icon: Rocket,
    title: "Création de sites vitrines",
    slug: "site-vitrine",
    description:
      "Présentez votre activité avec un site élégant et rapide qui inspire confiance et donne envie de vous contacter.",
    features: [
      "Design sur mesure et identité visuelle",
      "Optimisation mobile et rapide",
      "Formulaire de contact et intégration WhatsApp",
      "Référencement SEO de base",
      "Mises à jour faciles à gérer",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Boutiques e-commerce",
    slug: "ecommerce",
    description:
      "Lancez votre boutique en ligne et vendez vos produits 24h/24 et 7j/7 avec une plateforme fiable et sécurisée.",
    features: [
      "Catalogue produits et gestion des stocks",
      "Panier et paiement sécurisé",
      "Gestion des commandes et des livraisons",
      "Fiches produits optimisées",
    ],
  },
  {
    icon: RefreshCw,
    title: "Refonte de sites web",
    slug: "refonte",
    description:
      "Modernisez votre site existant : nouveau design, meilleures performances et une expérience utilisateur renouvelée.",
    features: [
      "Audit du site actuel",
      "Nouveau design et nouvelle architecture",
      "Migration des contenus",
      "Amélioration du référencement",
    ],
  },
  {
    icon: Code2,
    title: "Développement d'applications web",
    slug: "applications",
    description:
      "Des applications métier et outils web sur mesure pour digitaliser vos processus et gagner en productivité.",
    features: [
      "Espace client, tableaux de bord",
      "Réservation, prise de rendez-vous",
      "API et intégrations",
      "Base de données sécurisée",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance et support",
    slug: "maintenance",
    description:
      "Votre site reste à jour, sécurisé et performant grâce à notre accompagnement continue et réactif.",
    features: [
      "Mises à jour et sauvegardes régulières",
      "Corrections et petites évolutions",
      "Surveillance et sécurité",
      "Support par e-mail et WhatsApp",
    ],
  },
  {
    icon: Compass,
    title: "Conseil et accompagnement digital",
    slug: "conseil",
    description:
      "Définissons ensemble votre stratégie web : votre présence en ligne, vos objectifs et la meilleure manière de les atteindre.",
    features: [
      "Audit de votre présence en ligne",
      "Stratégie de développement web",
      "Accompagnement projet de A à Z",
      "Formation à la gestion de votre site",
    ],
  },
];