import { Container, SectionHeading } from "@/components/ui/Container";
import { timelineStages } from "@/data/leasingData";
import { cn } from "@/lib/cn";

const statusStyles = {
  complete: "border-emerald bg-emerald text-cream",
  "in-progress": "border-gold bg-gold text-navy",
  upcoming: "border-navy/20 bg-white text-navy",
};

const statusLabel = {
  complete: "Complete",
  "in-progress": "In progress",
  upcoming: "Upcoming",
};

export function NewDevelopment() {
  return (
    <section id="development" className="bg-cream-dark py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="The new development"
          title="The Meridian is rising on a fully entitled, mixed-use campus."
          description="A civic-scaled commercial building with a bronze colonnade, independent service court, and occupancy targeted for Q2 2027. Construction is past structure — the leasing window is now."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="border border-navy/10 bg-navy p-8 text-cream lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.24em] text-gold-light">
              Vision
            </p>
            <h3 className="mt-4 font-display text-3xl leading-tight">
              One address. Four commercial lives.
            </h3>
            <p className="mt-5 text-sm leading-7 text-cream/70">
              The Meridian is designed so retail, office, medical, and light
              industrial can coexist without compromising parking, loading, or
              public arrival. Tenants inherit a landmark façade and a campus
              that is already operating next door at Harbor Court.
            </p>
          </article>
          <div className="border border-navy/10 bg-white p-6 sm:p-8 lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.24em] text-gold-dark">
              Construction & occupancy timeline
            </p>
            <ol className="mt-8 space-y-0">
              {timelineStages.map((stage, index) => (
                <li key={stage.id} className="relative grid gap-4 py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-8">
                  {index < timelineStages.length - 1 ? (
                    <span className="absolute top-12 bottom-0 left-[0.7rem] w-px bg-navy/10 sm:left-[3.4rem]" />
                  ) : null}
                  <div className="flex items-start gap-3 sm:block">
                    <span
                      className={cn(
                        "relative z-10 grid h-6 w-6 place-items-center rounded-full border text-[0.6rem] font-semibold sm:mx-auto",
                        statusStyles[stage.status],
                      )}
                    >
                      {stage.phase}
                    </span>
                    <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted sm:mt-3 sm:text-center">
                      {stage.window}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="font-display text-2xl text-navy">
                        {stage.title}
                      </h4>
                      <span className="text-[0.65rem] uppercase tracking-[0.18em] text-emerald">
                        {statusLabel[stage.status]}
                      </span>
                    </div>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                      {stage.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
