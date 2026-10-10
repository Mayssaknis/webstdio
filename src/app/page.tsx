import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Strengths } from "@/components/sections/strengths";
import { ServicesPreview } from "@/components/sections/services-preview";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { CtaSection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "WebStudio — Agence de création de sites web en Tunisie",
  description:
    "WebStudio conçoit des sites vitrines, boutiques e-commerce et applications web modernes, rapides et adaptés au mobile pour les entreprises tunisiennes. Demandez votre devis gratuit.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Strengths />
      <ServicesPreview />
      <ProjectsPreview />
      <PricingPreview />
      <CtaSection />
    </>
  );
}