"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/data/leasingData";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled || open
          ? "border-white/10 bg-navy/80 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          : "border-transparent bg-navy/30 backdrop-blur-md",
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-6">
        <Logo inverted />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-cream/70 transition-colors hover:text-gold focus-visible:outline-none focus-visible:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ButtonLink href="#inquire" className="hidden sm:inline-flex" size="md">
            Join Priority List
          </ButtonLink>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center border border-white/15 text-cream transition-colors hover:border-gold/50 hover:text-gold lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>
      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-navy/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-5 sm:px-8" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-1 py-3 text-sm uppercase tracking-[0.2em] text-cream/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="#inquire"
            className="mt-3"
            onClick={() => setOpen(false)}
          >
            Join Priority List
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
