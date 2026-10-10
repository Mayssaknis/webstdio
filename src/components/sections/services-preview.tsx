import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/service-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";

export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-brand-600/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Nos services"
            title="Des solutions web pensées pour votre croissance"
            description="De la simple landing page à la plateforme e-commerce complète, nous couvrons l'ensemble de vos besoins digitaux."
          />
          <Button href="/services" variant="secondary" className="shrink-0">
            Tous les services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-400">
          Besoin d&apos;une solution sur mesure ?{" "}
          <Link
            href="/contact"
            className="font-semibold text-brand-300 underline-offset-4 hover:underline"
          >
            Parlons de votre projet
          </Link>
        </p>
      </div>
    </section>
  );
}