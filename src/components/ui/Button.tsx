import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "md" | "lg";
};

const variants = {
  primary:
    "bg-gold text-navy shadow-[0_10px_30px_-12px_rgba(196,163,90,0.7)] hover:bg-gold-light",
  secondary:
    "border border-gold/50 bg-transparent text-gold hover:border-gold hover:bg-gold/10",
  ghost:
    "border border-white/15 bg-white/5 text-cream hover:border-white/35 hover:bg-white/10",
  dark: "bg-navy text-cream hover:bg-navy-mid",
};

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm tracking-[0.14em]",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-none font-medium uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-navy disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
};

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  ...props
}: AnchorProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-none font-medium uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
