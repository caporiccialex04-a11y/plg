import { ArrowDownRight, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PropertyRendering } from "@/components/ui/PropertyRendering";
import { heroStats } from "@/data/leasingData";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-deep pt-28 pb-16 text-cream md:pt-32 md:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,163,90,0.16),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(26,122,109,0.18),transparent_36%)]" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-gold-light">
            Now pre-leasing · The Meridian
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[0.95] font-medium tracking-tight sm:text-6xl lg:text-7xl">
            A landmark address for serious commercial occupancy.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-cream/70 sm:text-lg">
            PLG develops and leases institutional-grade commercial real estate.
            The Meridian brings street-level retail, professional office,
            outpatient medical, and light industrial into a single, carefully
            entitled campus.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#inquire" size="lg">
              Request Leasing Package
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="#development" variant="ghost" size="lg">
              View the development
              <ArrowDownRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
        <div className="lg:col-span-6">
          <PropertyRendering />
        </div>
      </Container>
      <Container className="relative mt-14 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/5 sm:grid-cols-4">
        {heroStats.map((stat) => (
          <div key={stat.label} className="bg-navy/60 px-5 py-5 backdrop-blur-sm">
            <p className="font-display text-2xl text-gold-light sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-[0.68rem] uppercase tracking-[0.2em] text-cream/55">
              {stat.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
