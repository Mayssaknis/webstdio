import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/content/services";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function ServiceCard({
  service,
  index = 0,
  full = false,
  id,
}: {
  service: Service;
  index?: number;
  full?: boolean;
  id?: string;
}) {
  const Icon = service.icon;

  return (
    <Reveal
      id={id}
      delay={index * 0.06}
      className={cn(
        "group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300",
        "hover:-translate-y-1.5 hover:border-brand-400/40 hover:bg-white/[0.05] hover:shadow-glow",
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-600/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient shadow-glow">
          <Icon className="h-6 w-6 text-white" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-white">{service.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
          {service.description}
        </p>
        <ul className="mt-5 space-y-2">
          {(full ? service.features : service.features.slice(0, 4)).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href={`/services#${service.slug}`}
            className="text-sm font-semibold text-brand-300 transition-colors hover:text-white"
          >
            En savoir plus
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-brand-300"
          >
            Demander un devis
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}