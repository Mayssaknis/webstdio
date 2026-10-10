import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40",
        className,
      )}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-brand-600/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-24 h-64 w-64 rounded-full bg-magenta-500/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow ? (
          <p className="mb-4 inline-block rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-300">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}