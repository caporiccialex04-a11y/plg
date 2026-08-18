"use client";

import { CheckCircle2, CircleAlert, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

type FormFeedbackProps = {
  open: boolean;
  tone: "success" | "error";
  title: string;
  message: string;
  onClose: () => void;
};

export function FormFeedback({
  open,
  tone,
  title,
  message,
  onClose,
}: FormFeedbackProps) {
  if (!open) return null;

  const Icon = tone === "success" ? CheckCircle2 : CircleAlert;

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-navy-deep/70 px-4 backdrop-blur-sm"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="feedback-title"
    >
      <div className="relative w-full max-w-md border border-white/10 bg-cream p-8 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-muted transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Close message"
        >
          <X className="h-5 w-5" />
        </button>
        <Icon
          className={cn(
            "h-10 w-10",
            tone === "success" ? "text-emerald" : "text-red-700",
          )}
        />
        <h3
          id="feedback-title"
          className="mt-4 font-display text-3xl text-navy"
        >
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted">{message}</p>
        <Button className="mt-6 w-full" onClick={onClose}>
          Continue
        </Button>
      </div>
    </div>
  );
}
