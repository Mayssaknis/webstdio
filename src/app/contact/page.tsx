import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez WebStudio pour un devis gratuit : formulaire de demande, e-mail, téléphone et WhatsApp. Réponse sous 24 à 48 heures.",
};

const whatsappText = () =>
  encodeURIComponent(
    "Bonjour WebStudio, je souhaite obtenir un devis pour la création d'un site web.",
  );

export default function ContactPage() {
  const hasPhone = Boolean(siteConfig.contact.phone);
  const hasEmail = Boolean(siteConfig.contact.email);
  const hasWhatsapp = Boolean(siteConfig.contact.whatsapp);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Parlons de <span className="text-gradient">votre projet</span>
          </>
        }
        description="Remplissez le formulaire ci-dessous ou contactez-nous directement. Nous vous répondons sous 24 à 48 heures avec un devis gratuit."
      />

      <section className="bg-ink-950 pb-24 pt-4">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
          <div className="space-y-6">
            {hasEmail ? (
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-brand-400/40"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient shadow-glow">
                  <Mail className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-slate-400">E-mail</span>
                  <span className="block font-semibold text-white group-hover:text-brand-300">
                    {siteConfig.contact.email}
                  </span>
                </span>
              </a>
            ) : null}

            {hasPhone ? (
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-brand-400/40"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient shadow-glow">
                  <Phone className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-slate-400">Téléphone</span>
                  <span className="block font-semibold text-white group-hover:text-brand-300">
                    {siteConfig.contact.phone}
                  </span>
                </span>
              </a>
            ) : null}

            <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient shadow-glow">
                <MapPin className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-slate-400">Localisation</span>
                <span className="block font-semibold text-white">
                  {siteConfig.contact.address}
                </span>
              </span>
            </div>

            {hasWhatsapp ? (
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${whatsappText()}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 rounded-3xl border border-[#25D366]/30 bg-[#25D366]/10 p-6 transition-colors hover:border-[#25D366]/60"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] shadow-[0_8px_24px_-6px_rgba(37,211,102,0.6)]">
                  <MessageCircle className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-slate-400">WhatsApp</span>
                  <span className="block font-semibold text-white group-hover:text-emerald-300">
                    Discuter directement sur WhatsApp
                  </span>
                </span>
              </a>
            ) : null}

            <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-400">
              <Clock className="h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
              Réponse sous 24 à 48 heures ouvrées. Devis gratuit et sans
              engagement.
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}