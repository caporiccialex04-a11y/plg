"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";
import { faqs } from "@/data/leasingData";
import { cn } from "@/lib/cn";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="bg-cream-dark py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Pre-leasing FAQ"
            title="Answers before the tour."
            description="The questions we hear most from brokers, medical groups, and owner-operators evaluating The Meridian."
          />
        </div>
        <div className="divide-y divide-navy/10 border-y border-navy/10 lg:col-span-8">
          {faqs.map((item) => {
            const open = item.id === openId;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : item.id)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-emerald focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <span className="font-display text-xl text-navy sm:text-2xl">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-gold transition-transform duration-300",
                      open && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-7 text-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
