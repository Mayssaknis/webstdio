import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function WhatsAppButton() {
  const number = siteConfig.contact.whatsapp;

  if (!number) return null;

  const text = encodeURIComponent(
    "Bonjour WebStudio, je souhaite obtenir un devis pour la création d'un site web.",
  );
  const href = `https://wa.me/${number}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Discuter avec WebStudio sur WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.65)] transition-transform duration-200 hover:scale-105 active:scale-95"
    >
      <span className="absolute inset-0 -z-10 animate-pulse rounded-full bg-[#25D366]/60" aria-hidden="true" />
      <MessageCircle className="h-6 w-6" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-56 group-hover:pr-1 group-hover:opacity-100 sm:inline">
        Un projet ? Discutons-en
      </span>
    </a>
  );
}