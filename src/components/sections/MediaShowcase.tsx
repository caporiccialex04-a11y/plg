"use client";

import { useState } from "react";
import { Container, SectionHeading } from "@/components/ui/Container";
import { PropertyRendering } from "@/components/ui/PropertyRendering";
import { mediaTabs } from "@/data/leasingData";
import { cn } from "@/lib/cn";

function FloorPlanVisual() {
  return (
    <svg viewBox="0 0 640 360" className="h-full w-full" aria-hidden="true">
      <rect width="640" height="360" fill="#f6f3ec" />
      <g fill="none" stroke="#0b1d36" strokeWidth="1.5">
        <rect x="28" y="36" width="200" height="288" />
        <rect x="228" y="36" width="250" height="180" />
        <rect x="228" y="216" width="250" height="108" />
        <rect x="478" y="36" width="134" height="288" />
      </g>
      <g fill="#c4a35a" opacity="0.25">
        <rect x="40" y="48" width="80" height="70" />
        <rect x="128" y="48" width="86" height="70" />
        <rect x="40" y="128" width="174" height="84" />
      </g>
      <g fill="#1a7a6d" opacity="0.18">
        <rect x="240" y="48" width="226" height="156" />
        <rect x="490" y="48" width="110" height="264" />
      </g>
      <text x="70" y="88" fill="#0b1d36" fontSize="11">
        RETAIL
      </text>
      <text x="320" y="130" fill="#0b1d36" fontSize="11">
        OFFICE
      </text>
      <text x="292" y="278" fill="#0b1d36" fontSize="11">
        ARRIVAL
      </text>
      <text x="512" y="180" fill="#0b1d36" fontSize="11">
        MEDICAL
      </text>
    </svg>
  );
}

function SitePlanVisual() {
  return (
    <svg viewBox="0 0 640 360" className="h-full w-full" aria-hidden="true">
      <rect width="640" height="360" fill="#0b1d36" />
      <rect x="40" y="48" width="360" height="220" fill="#153056" stroke="#c4a35a" />
      <rect x="420" y="48" width="180" height="220" fill="#071322" stroke="#1a7a6d" />
      <rect x="40" y="284" width="560" height="36" fill="#c4a35a" opacity="0.35" />
      <circle cx="130" cy="250" r="18" fill="#1a7a6d" opacity="0.6" />
      <circle cx="190" cy="250" r="18" fill="#1a7a6d" opacity="0.6" />
      {Array.from({ length: 6 }).map((_, index) => (
        <rect
          key={index}
          x={440}
          y={64 + index * 32}
          width="140"
          height="20"
          fill="none"
          stroke="#dcc48a"
          opacity="0.5"
        />
      ))}
      <text x="70" y="80" fill="#dcc48a" fontSize="11">
        BUILDING FOOTPRINT
      </text>
      <text x="448" y="80" fill="#dcc48a" fontSize="11">
        PARKING PODIUM
      </text>
      <text x="70" y="308" fill="#0b1d36" fontSize="11">
        MERIDIAN BOULEVARD
      </text>
    </svg>
  );
}

export function MediaShowcase() {
  const [active, setActive] = useState<(typeof mediaTabs)[number]["id"]>(
    "floor-plans",
  );
  const tab = mediaTabs.find((item) => item.id === active) ?? mediaTabs[0];

  return (
    <section id="media" className="bg-navy py-20 text-cream md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Media showcase"
          title="Plans and renderings, without the brochure runaround."
          description="Switch between floor plans, the site plan, and design-intent renderings. The full drawing set ships with the leasing package."
          tone="light"
        />
        <div
          className="mt-10 flex flex-wrap gap-2 border-b border-white/10 pb-1"
          role="tablist"
          aria-label="Media types"
        >
          {mediaTabs.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={item.id === active}
              onClick={() => setActive(item.id)}
              className={cn(
                "relative px-4 py-3 text-xs uppercase tracking-[0.22em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                item.id === active
                  ? "text-gold"
                  : "text-cream/55 hover:text-cream",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute inset-x-4 -bottom-px h-px bg-gold transition-opacity duration-300",
                  item.id === active ? "opacity-100" : "opacity-0",
                )}
              />
            </button>
          ))}
        </div>
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-12">
          <div className="border border-white/10 bg-navy-deep lg:col-span-7">
            {active === "floor-plans" ? <FloorPlanVisual /> : null}
            {active === "site-plans" ? <SitePlanVisual /> : null}
            {active === "renderings" ? (
              <PropertyRendering compact caption="Design-intent rendering" />
            ) : null}
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.24em] text-gold-light">
              {tab.kicker}
            </p>
            <h3 className="mt-3 font-display text-3xl">{tab.title}</h3>
            <p className="mt-4 text-sm leading-7 text-cream/70">
              {tab.description}
            </p>
            <ul className="mt-6 space-y-3">
              {tab.captions.map((caption) => (
                <li
                  key={caption}
                  className="border-l border-gold/50 pl-4 text-sm text-cream/80"
                >
                  {caption}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
