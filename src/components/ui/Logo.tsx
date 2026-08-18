import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  markClassName?: string;
  inverted?: boolean;
};

export function Logo({ className, markClassName, inverted = false }: LogoProps) {
  return (
    <a
      href="#top"
      className={cn(
        "group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
        className,
      )}
      aria-label="PLG home"
    >
      <span
        className={cn(
          "grid h-10 w-10 place-items-center border",
          inverted
            ? "border-gold/60 text-gold"
            : "border-navy/20 text-navy",
          markClassName,
        )}
      >
        <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
          <path
            d="M6 26V8h9.2c3.7 0 6.3 2.2 6.3 5.6 0 3.5-2.6 5.7-6.3 5.7H11.2V26H6Zm5.2-10.2h3.6c1.7 0 2.7-1 2.7-2.4s-1-2.3-2.7-2.3H11.2v4.7Z"
            fill="currentColor"
          />
          <path d="M23.2 8h2.8v18h-2.8V8Z" fill="currentColor" opacity="0.72" />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-2xl tracking-[0.18em]",
            inverted ? "text-cream" : "text-navy",
          )}
        >
          PLG
        </span>
        <span
          className={cn(
            "mt-1 block text-[0.62rem] uppercase tracking-[0.28em]",
            inverted ? "text-gold-light/80" : "text-muted",
          )}
        >
          Commercial
        </span>
      </span>
    </a>
  );
}
