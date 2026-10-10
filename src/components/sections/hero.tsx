import { Palette, Zap, Smartphone, Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";

const strengths = [
  { icon: Palette, label: "Design moderne" },
  { icon: Zap, label: "Rapidité" },
  { icon: Smartphone, label: "Adaptation mobile" },
  { icon: Handshake, label: "Accompagnement" },
];

function DeviceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg" aria-hidden="true">
      <div className="absolute -inset-6 rounded-[3rem] bg-brand-gradient opacity-25 blur-3xl" />

      <div className="relative rounded-2xl border border-white/10 bg-ink-800/90 p-3 shadow-2xl">
        <div className="flex items-center gap-2 px-2 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 flex-1 rounded-full bg-white/5 px-3 py-1 text-[10px] text-slate-500">
            webstudio.tn
          </span>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-night-900 to-ink-900 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-md bg-brand-gradient" />
              <span className="text-[10px] font-bold text-white">
                Web<span className="text-brand-300">Studio</span>
              </span>
            </div>
            <div className="hidden gap-2 sm:flex">
              {["Accueil", "Services", "Projets", "Contact"].map((item) => (
                <span
                  key={item}
                  className="rounded-full px-2 py-0.5 text-[9px] text-slate-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 max-w-[70%]">
            <div className="h-3 w-36 rounded-full bg-brand-gradient sm:h-3.5 sm:w-48" />
            <div className="mt-2 h-3 w-40 rounded-full bg-brand-gradient/70 sm:h-3.5 sm:w-56" />
            <div className="mt-3 h-2 w-48 rounded-full bg-white/15" />
            <div className="mt-1.5 h-2 w-40 rounded-full bg-white/15" />
            <div className="mt-4 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[9px] font-semibold text-white">
              Demander un devis
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg bg-white/5 p-2.5">
                <div className="h-2 w-8 rounded-full bg-brand-400/60" />
                <div className="mt-2 h-1.5 w-full rounded-full bg-white/10" />
                <div className="mt-1 h-1.5 w-2/3 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 -right-4 w-32 animate-float rounded-2xl border border-white/10 bg-ink-800/95 p-3 shadow-2xl sm:-right-8 sm:w-40">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-lg bg-emerald-400/20" />
          <div>
            <div className="h-2 w-16 rounded-full bg-white/40" />
            <div className="mt-1 h-2 w-20 rounded-full bg-white/15" />
          </div>
        </div>
        <div className="mt-3 h-8 rounded-lg bg-brand-gradient/80" />
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <div className="h-2 rounded-full bg-white/15" />
          <div className="h-2 rounded-full bg-white/15" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid mask-fade-b opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-magenta-500/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <Badge>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
              Agence web en Tunisie
            </Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Votre présence en ligne,{" "}
              <span className="text-gradient">notre expertise.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-xl text-lg leading-relaxed text-slate-300">
              WebStudio conçoit des sites web modernes, rapides et performants
              pour les entreprises, les commerces et les entrepreneurs tunisiens.
              Du site vitrine à la boutique e-commerce, nous donnons vie à vos
              ambitions digitales.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Demander un devis
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button href="/projets" size="lg" variant="secondary">
              Voir nos projets
            </Button>
          </Reveal>

          <Reveal delay={0.32}>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-4 lg:grid-cols-2">
              {strengths.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 text-sm font-medium text-slate-300"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-brand-400/30 bg-brand-500/10">
                    <Icon className="h-4 w-4 text-brand-300" aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative lg:pl-6" y={32}>
          <DeviceMockup />
        </Reveal>
      </div>
    </section>
  );
}