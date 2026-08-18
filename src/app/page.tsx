import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { InquiryFunnel } from "@/components/sections/InquiryFunnel";
import { LocationAmenities } from "@/components/sections/LocationAmenities";
import { MediaShowcase } from "@/components/sections/MediaShowcase";
import { NewDevelopment } from "@/components/sections/NewDevelopment";
import { UnitSpecs } from "@/components/sections/UnitSpecs";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <NewDevelopment />
      <UnitSpecs />
      <MediaShowcase />
      <LocationAmenities />
      <FAQ />
      <InquiryFunnel />
    </main>
  );
}
