import { Palette, Zap, Smartphone, Handshake } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const strengths = [
  {
    icon: Palette,
    title: "Design moderne & premium",
    description:
      "Des interfaces élégantes, uniques et alignées avec votre image de marque, qui inspirent confiance dès la première seconde.",
  },
  {
    icon: Zap,
    title: "Rapidité & performance",
    description:
      "Des sites légers et optimisés qui se chargent en un instant, pour une expérience agréable et un meilleur référencement.",
  },
  {
    icon: Smartphone,
    title: "100 % adapté au mobile",
    description:
      "Chaque réalisation est pensée pour s'afficher parfaitement sur smartphone, tablette et ordinateur.",
  },
  {
    icon: Handshake,
    title: "Accompagnement à chaque étape",
    description:
      "Un interlocuteur dédié, un suivi transparent et une formation à la prise en main de votre site : nous restons à vos côtés.",
  },
] as const;

export function Strengths() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Pourquoi WebStudio ?"
          title="Une agence qui met la qualité et vous au centre"
          description="Nous combinons design, technique et écoute pour créer des sites qui travaillent pour votre croissance — et non l'inverse."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 0.08} className="h-full">
              <div className="h-full rounded-3xl border border-ink-900/8 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-800/70">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}