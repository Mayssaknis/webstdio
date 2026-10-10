import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { CurrentYear } from "@/components/ui/current-year";
import { siteConfig } from "@/lib/site";
import { services } from "@/content/services";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  );
}

export function Footer() {
  const hasSocials =
    siteConfig.social.facebook ||
    siteConfig.social.instagram ||
    siteConfig.social.linkedin;

  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Agence tunisienne de création de sites web modernes, boutiques
              e-commerce et applications web pour les entreprises, commerces et
              entrepreneurs.
            </p>
            {hasSocials ? (
              <div className="flex gap-3">
                {siteConfig.social.facebook && (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-brand-400/50 hover:text-white"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                )}
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-brand-400/50 hover:text-white"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                )}
                {siteConfig.social.linkedin && (
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-brand-400/50 hover:text-white"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            ) : null}
          </div>

          <nav aria-label="Services" className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Navigation" className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Demander un devis
                </Link>
              </li>
            </ul>
          </nav>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {siteConfig.contact.email && (
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-brand-400" />
                    {siteConfig.contact.email}
                  </a>
                </li>
              )}
              {siteConfig.contact.phone && (
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-brand-400" />
                    {siteConfig.contact.phone}
                  </a>
                </li>
              )}
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {siteConfig.contact.address}
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-2 inline-block text-sm font-semibold text-brand-300 transition-colors hover:text-brand-200"
            >
              Contactez-nous →
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
<p>
            © <CurrentYear /> {siteConfig.name}. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="transition-colors hover:text-slate-300">
              Demande de devis
            </Link>
            <Link href="/a-propos" className="transition-colors hover:text-slate-300">
              À propos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
