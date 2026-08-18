import {
  Car,
  MapPinned,
  Navigation,
  ShieldCheck,
  TrainFront,
  UtensilsCrossed,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";
import { amenities } from "@/data/leasingData";

const icons = {
  map: MapPinned,
  parking: Car,
  transit: TrainFront,
  access: Navigation,
  dining: UtensilsCrossed,
  security: ShieldCheck,
};

export function LocationAmenities() {
  return (
    <section id="location" className="bg-cream py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Location & amenities"
          title="Arrival is easy. The trade area does the rest."
          description="The Meridian sits on a signalized commercial boulevard with structured parking, transit within a short walk, and a daytime population that already supports Harbor Court."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article
                key={item.id}
                className="border border-navy/10 bg-white p-7 transition-all duration-300 hover:border-emerald/40"
              >
                <Icon className="h-6 w-6 text-emerald" />
                <p className="mt-5 font-display text-3xl text-navy">
                  {item.metric}
                </p>
                <h3 className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
