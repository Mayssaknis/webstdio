import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "target" | "rel"> {
  variant?: "primary" | "secondary" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  rel?: React.AnchorHTMLAttributes<HTMLAnchorElement>["rel"];
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 disabled:pointer-events-none disabled:opacity-60 active:scale-[0.98]";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-brand-gradient text-white shadow-[0_8px_30px_-8px_rgba(139,92,246,0.7)] hover:shadow-[0_10px_38px_-6px_rgba(217,70,239,0.65)] hover:opacity-95",
  secondary:
    "border border-white/15 bg-white/5 text-white backdrop-blur hover:border-brand-400/60 hover:bg-white/10",
  ghost: "text-brand-200 hover:text-white hover:bg-white/5",
  white: "bg-white text-ink-900 hover:bg-white/90 shadow-lg shadow-black/10",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const anchorProps = {
      ...props,
      target,
      rel,
    } as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>;

    const external = /^https?:\/\//.test(href);
    if (external) {
      return (
        <a href={href} className={classes} {...anchorProps}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}