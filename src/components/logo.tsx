import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="WebStudio — Accueil"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient shadow-glow transition-transform duration-300 group-hover:scale-105">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="4.5" cy="12" r="2.6" fill="white" />
          <circle cx="19.5" cy="6.2" r="2.6" fill="white" />
          <circle cx="19.5" cy="17.8" r="2.6" fill="white" />
          <path
            d="M6.9 10.9 17.6 6.7M6.9 13.1l10.7 4.2"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
      </span>
      {!compact && (
        <span className="text-xl font-bold tracking-tight text-white">
          Web<span className="text-gradient">Studio</span>
        </span>
      )}
    </Link>
  );
}