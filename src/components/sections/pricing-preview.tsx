import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { pricing } from "@/content/pricing";

export function PricingPreview() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-magenta-500/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tarifs"
          title="Des prix clairs et adaptés au marché tunisien"
          description="Des budgets indicatifs, transparents et sans surprise. Chaque projet est unique : le devis final dépend de vos fonctionnalités et de la complexité."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricing.slice(0, 3).map((plan) => (
            <div key={plan.name} className="h-full">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="flex items-center gap-2 text-sm text-slate-400">
            <Info className="h-4 w-4 text-brand-400" aria-hidden="true" />
            Application web et maintenance disponibles sur demande.
          </p>
          <Button href="/tarifs" variant="secondary">
            Voir tous les tarifs
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <p className="text-center text-sm text-slate-500">
            Un doute ?{" "}
            <Link
              href="/contact"
              className="font-semibold text-brand-300 underline-offset-4 hover:underline"
            >
              Demandez votre devis gratuit
            </Link>
            , sans engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
