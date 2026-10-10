import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ServiceCard } from "@/components/service-card";
import { CtaSection } from "@/components/sections/cta";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Site vitrine, boutique e-commerce, refonte, application web, maintenance et conseil : découvrez les services de création web de WebStudio en Tunisie.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos services"
        title={
          <>
            Chaque projet est une opportunité de{" "}
            <span className="text-gradient">vous démarquer</span>
          </>
        }
        description="Du site vitrine à la plateforme e-commerce, nous vous accompagnons pour construire une présence web de qualité, performante et durable."
      />

      <section className="bg-ink-950 pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
                full
                id={service.slug}
              />
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Un besoin spécifique ?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
              Cette liste n&apos;est pas exhaustive. Contactez-nous pour discuter
              de votre projet, même s&apos;il ne correspond à aucune de ces
              catégories — nous trouverons la solution adaptée.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}