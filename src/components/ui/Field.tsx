import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type FieldProps = {
  label: string;
  name: string;
  error?: string;
  tone?: "light" | "dark";
  children: ReactNode;
};

export function Field({
  label,
  name,
  error,
  tone = "dark",
  children,
}: FieldProps) {
  return (
    <label className="block" htmlFor={name}>
      <span
        className={cn(
          "mb-2 block text-xs font-medium uppercase tracking-[0.18em]",
          tone === "dark" ? "text-navy/70" : "text-gold-light",
        )}
      >
        {label}
      </span>
      {children}
      {error ? (
        <span
          className={cn(
            "mt-1.5 block text-xs",
            tone === "dark" ? "text-red-700" : "text-red-300",
          )}
        >
          {error}
        </span>
      ) : null}
    </label>
  );
}

const controlClass =
  "w-full border bg-white px-3.5 py-3 text-sm text-navy outline-none transition-all duration-200 placeholder:text-muted/70 focus:border-gold focus:ring-2 focus:ring-gold/25";

export function inputClass(error?: string) {
  return cn(controlClass, error ? "border-red-400" : "border-navy/15 hover:border-navy/30");
}
