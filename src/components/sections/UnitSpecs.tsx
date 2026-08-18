import { Container, SectionHeading } from "@/components/ui/Container";
import { unitSpecs } from "@/data/leasingData";

export function UnitSpecs() {
  return (
    <section id="units" className="bg-cream py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Unit specifications & uses"
          title="Suites sized for how you actually occupy space."
          description="Each use is zoned, parked, and serviced independently. Select a category, then request the matching floor plates in the leasing package."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {unitSpecs.map((unit) => (
            <article
              key={unit.id}
              className="group border border-navy/10 bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-[0_24px_60px_-36px_rgba(11,29,54,0.35)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-gold-dark">
                    {unit.zoning}
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-navy">
                    {unit.use}
                  </h3>
                </div>
                <span className="border border-navy/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                  {unit.availability}
                </span>
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-navy/10 py-5">
                <div>
                  <dt className="text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                    Suite sizes
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-navy">
                    {unit.sizeRange}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                    Clear height
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-navy">
                    {unit.ceiling}
                  </dd>
                </div>
              </dl>
              <ul className="mt-5 space-y-2">
                {unit.highlights.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-6 text-muted before:mr-2 before:text-gold before:content-['—']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
