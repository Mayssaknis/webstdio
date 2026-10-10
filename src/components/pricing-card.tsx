import { ArrowRight, Check, Sparkles } from "lucide-react";
import type { Pricing } from "@/content/pricing";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingCard({ plan }: { plan: Pricing }) {
  const popular = plan.popular;

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-300",
        popular
          ? "border-transparent bg-ink-800 ring-2 ring-brand-400/60 shadow-glow hover:-translate-y-1"
          : "border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-brand-400/40",
      )}
    >
      {popular ? (
        <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-brand-gradient px-4 py-1.5 text-xs font-semibold text-white shadow-glow">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Le plus demandé
        </span>
      ) : null}

      <h3 className="text-lg font-bold text-white">{plan.name}</h3>
      <div className="mt-4 flex items-baseline gap-2">
        {plan.fromPrice !== null ? (
          <>
            <span className="text-4xl font-extrabold tracking-tight text-gradient">
              {formatPrice(plan.fromPrice)}
            </span>
            <span className="text-sm font-medium text-slate-400">
              {plan.unit}
            </span>
          </>
        ) : (
          <span className="text-3xl font-extrabold tracking-tight text-gradient">
            Sur devis
          </span>
        )}
      </div>
      <p className="mt-1 text-xs text-slate-500">à partir de · prix indicatif</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-400">
        {plan.description}
      </p>

      <ul className="mt-6 flex-1 space-y-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
            <span
              className={cn(
                "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                popular ? "bg-brand-500/25" : "bg-white/8",
              )}
            >
              <Check className="h-3.5 w-3.5 text-brand-300" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          href={`/contact?offre=${encodeURIComponent(plan.name)}`}
          variant={popular ? "primary" : "secondary"}
          className="w-full"
        >
          {plan.cta ?? "Choisir cette offre"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}