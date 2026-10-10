"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const whatsappQuery = encodeURIComponent(
    "Bonjour WebStudio, je souhaite obtenir un devis pour la création d'un site web.",
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-white"
                      : "text-slate-300 hover:text-white",
                  )}
                >
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-brand-400/40"
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={siteConfig.contact.whatsapp ? `https://wa.me/${siteConfig.contact.whatsapp}?text=${whatsappQuery}` : "/contact"} size="sm" target="_blank" rel="noreferrer" variant="secondary">
            WhatsApp
          </Button>
          <Button href="/contact" size="sm">
            Demander un devis
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="lg:hidden"
            initial={
              reduce ? false : { opacity: 0, height: 0 }
            }
            animate={reduce ? undefined : { opacity: 1, height: "auto" }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="mx-auto max-w-7xl space-y-1 px-4 pb-6 pt-2 sm:px-6">
              {siteConfig.nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                      active
                        ? "bg-brand-500/15 text-white ring-1 ring-brand-400/40"
                        : "text-slate-300 hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-3 pt-4">
                <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>
                  Demander un devis
                </Button>
                <Button
                  href={siteConfig.contact.whatsapp ? `https://wa.me/${siteConfig.contact.whatsapp}?text=${whatsappQuery}` : "/contact"}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}