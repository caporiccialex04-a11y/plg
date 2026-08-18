import { Check } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";
import { existingProperty } from "@/data/leasingData";

const pillars = [
  "Owner-operator discipline, not speculative flip underwriting",
  "Entitlements and parking ratios designed for mixed commercial use",
  "A leasing team that stays through occupancy and operations",
];

export function About() {
  return (
    <section id="about" className="bg-cream py-20 md:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="About PLG"
            title="A commercial landlord built for long tenancies."
            description="PLG acquires, develops, and holds commercial property. We lease as owners — which means the architecture, parking, and operating standard have to work on day one and in year ten."
          />
          <ul className="mt-8 space-y-4">
            {pillars.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <article className="border border-navy/10 bg-white p-8 shadow-[0_30px_80px_-48px_rgba(11,29,54,0.45)] md:p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-gold-dark">
            Existing property
          </p>
          <h3 className="mt-3 font-display text-3xl text-navy">
            {existingProperty.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{existingProperty.location}</p>
          <p className="mt-6 text-sm leading-7 text-muted">
            {existingProperty.narrative}
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-navy/10 pt-6">
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                Size
              </dt>
              <dd className="mt-1 font-display text-2xl text-navy">
                {existingProperty.size}
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                Occupied
              </dt>
              <dd className="mt-1 font-display text-2xl text-navy">
                {existingProperty.leased}
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                Tenants
              </dt>
              <dd className="mt-1 font-display text-2xl text-navy">
                {existingProperty.tenants}
              </dd>
            </div>
          </dl>
        </article>
      </Container>
    </section>
  );
}
