import type { Metadata } from "next";
import {
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Search,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "WebStudio est une agence tunisienne de conception de sites web modernes. Découvrez notre vision, notre méthode de travail et nos engagements.",
};

const engagements = [
  {
    icon: ShieldCheck,
    title: "Transparence",
    description:
      "Des devis clairs, un calendrier réaliste et des avancements documentés : vous savez toujours où en est votre projet.",
  },
  {
    icon: Lightbulb,
    title: "Écoute",
    description:
      "Nous prenons le temps de comprendre votre activité et vos objectifs avant de proposer la moindre solution.",
  },
  {
    icon: HeartHandshake,
    title: "Proximité",
    description:
      "Un interlocuteur unique, joignable par e-mail, téléphone et WhatsApp, et une relation construite dans la durée.",
  },
  {
    icon: Sparkles,
    title: "Qualité",
    description:
      "Design soigné, code propre et performant, respect des standards web et de l'accessibilité : rien n'est laissé au hasard.",
  },
];

const method = [
  {
    icon: Search,
    step: "01",
    title: "Découverte",
    description:
      "Nous analysons votre activité, vos objectifs et vos concurrents pour définir une direction claire.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Conception",
    description:
      "Maquettes et arborescence du site : nous validons le design et les contenus avec vous avant de développer.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Développement",
    description:
      "Intégration, développement, optimisation et tests sur tous les supports jusqu'à un résultat impeccable.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Lancement & suivi",
    description:
      "Mise en ligne, formation à la prise en main et accompagnement pour faire évoluer votre site selon vos besoins.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title={
          <>
            WebStudio, votre{" "}
            <span className="text-gradient">partenaire web</span> en Tunisie
          </>
        }
        description="Nous aidons les entreprises, commerces et entrepreneurs à bâtir une présence en ligne solide, esthétique et performante."
      />

      <section className="bg-ink-950 pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-3xl font-bold text-white">
                Une approche moderne de la{" "}
                <span className="text-gradient">création web</span>
              </h2>
              <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
                <p>
                  WebStudio est une agence tunisienne spécialisée dans la
                  conception de sites web modernes, de boutiques e-commerce et
                  d&apos;applications web. Notre conviction est simple : une
                  présence en ligne réussie repose sur un design soigné, une
                  technique solide et une compréhension profonde du métier de
                  nos clients.
                </p>
                <p>
                  Nous travaillons avec des technologies actuelles et éprouvées
                  pour garantir des sites rapides, sécurisés et faciles à faire
                  évoluer. Chaque projet est mené avec méthode et transparence,
                  de la première idée jusqu&apos;au lancement et au-delà.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {engagements.map(({ icon: Icon, title, description }, index) => (
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

          <div className="mt-24">
            <Reveal className="text-center">
              <h2 className="text-3xl font-bold text-white">
                Notre méthode de travail
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-400">
                Un déroulé clair et éprouvé, pour aboutir au résultat attendu,
                dans les délais et sans mauvaises surprises.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {method.map(({ icon: Icon, step, title, description }, index) => (
                <Reveal key={title} delay={index * 0.08} className="h-full">
                  <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <span
                      aria-hidden="true"
                      className="absolute right-5 top-4 text-4xl font-extrabold text-white/10"
                    >
                      {step}
                    </span>
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

          <Reveal className="mt-24 text-center">
            <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-10 sm:p-14">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Envie de travailler ensemble ?
              </h2>
              <p className="mx-auto mt-3 max-w-xl leading-relaxed text-slate-400">
                Racontez-nous votre projet. Nous prendrons le temps d&apos;y
                répondre avec sérieux et de vous proposer une solution adaptée à
                vos objectifs et à votre budget.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-brand-gradient px-8 py-4 text-base font-semibold text-white shadow-glow transition-all hover:opacity-95"
                >
                  Démarrer un projet
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}