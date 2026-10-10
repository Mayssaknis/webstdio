import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function CtaSection() {
  const whatsappQuery = encodeURIComponent(
    "Bonjour WebStudio, je souhaite obtenir un devis pour la création d'un site web.",
  );
  const whatsappHref = siteConfig.contact.whatsapp
    ? `https://wa.me/${siteConfig.contact.whatsapp}?text=${whatsappQuery}`
    : "/contact";

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-brand-gradient px-6 py-16 text-center shadow-glow sm:px-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-grid opacity-20"
            />
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-magenta-300/20 blur-3xl"
            />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Prêt à donner à votre entreprise la présence en ligne qu&apos;elle
                mérite ?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85">
                Racontez-nous votre projet et recevez un devis gratuit et détaillé
                sous 24 à 48 heures — sans engagement.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Button href="/contact" size="lg" variant="white">
                  Demander un devis
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
                <Button
                  href={whatsappHref}
                  size="lg"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/25 bg-ink-950/20 text-white backdrop-blur hover:bg-ink-950/35"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Discuter sur WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}