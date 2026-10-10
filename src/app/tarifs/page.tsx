import type { Metadata } from "next";
import { FileText, CalendarClock, MessagesSquare, Rocket } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { PricingCard } from "@/components/pricing-card";
import { CtaSection } from "@/components/sections/cta";
import { pricing } from "@/content/pricing";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tarifs indicatifs de WebStudio : landing page à partir de 350 DT, site vitrine à partir de 600 DT, e-commerce à partir de 1 200 DT et maintenance à partir de 100 DT/mois.",
};

const steps = [
  {
    icon: MessagesSquare,
    title: "1. Discutons de votre projet",
    description: "Vous nous décrivez votre besoin par e-mail, téléphone ou WhatsApp.",
  },
  {
    icon: FileText,
    title: "2. Recevez votre devis gratuit",
    description: "Un devis détaillé, clair et sans surprise sous 24 à 48 heures.",
  },
  {
    icon: CalendarClock,
    title: "3. Nous réalisons votre site",
    description: "Des points réguliers jusqu'au lancement, avec formation à la prise en main.",
  },
  {
    icon: Rocket,
    title: "4. Lancement & accompagnement",
    description: "Votre site est en ligne, suivi et maintenu par nos soins.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tarifs"
        title={
          <>
            Des tarifs <span className="text-gradient">transparents</span> et
            adaptés au marché tunisien
          </>
        }
        description="Les prix ci-dessous sont indicatifs et servent de point de départ. Le devis final dépend des fonctionnalités, du contenu et de la complexité de votre projet."
      />

      <section className="bg-ink-950 pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {pricing.map((plan) => (
              <div key={plan.name} className="h-full">
                <PricingCard plan={plan} />
              </div>
            ))}

            <Reveal delay={0.2} className="h-full">
              <div className="flex h-full flex-col justify-center rounded-3xl border border-dashed border-white/15 bg-transparent p-7 text-center">
                <h3 className="text-lg font-bold text-white">
                  Un projet particulier ?
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
                  Chaque besoin est unique. Décrivez-nous le vôtre et recevez un
                  devis personnalisé, gratuit et sans engagement.
                </p>
                <a
                  href="/contact"
                  className="mt-5 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors hover:text-white"
                >
                  Demander un devis personnalisé →
                </a>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center text-sm leading-relaxed text-slate-400">
            <p>
              Les prix affichés sont <strong className="text-white">indicatifs</strong>{" "}
              et varient selon le volume de contenu, les fonctionnalités, le design sur
              mesure et la complexité technique du projet. Un paiement en plusieurs
              tranches est possible pour les projets d&apos;envergure.
            </p>
          </div>

          <div className="mt-20">
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
              Comment ça se passe ?
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ icon: Icon, title, description }, index) => (
                <Reveal key={title} delay={index * 0.08} className="h-full">
                  <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-brand-400/40">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient shadow-glow">
                      <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-bold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
