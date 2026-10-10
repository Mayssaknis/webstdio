const items = [
  "Sites vitrines",
  "Boutiques e-commerce",
  "Applications web",
  "Refonte de sites",
  "Maintenance & support",
  "SEO & performance",
  "Design sur mesure",
];

export function Marquee() {
  const row = [...items, ...items];

  return (
    <section
      aria-label="Nos domaines d'expertise"
      className="border-y border-white/5 bg-ink-900/60 py-5"
    >
      <div className="relative overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee items-center gap-10">
          {row.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-10 whitespace-nowrap"
            >
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                {item}
              </span>
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rotate-45 rounded-[1px] bg-brand-400"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}