import { Map, Radio, Mic, Rocket } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FeatureCard } from "@/components/ui/feature-card";

const services = [
  {
    icon: Map,
    title: "Navigation & Map Validation",
    description:
      "Precise point-of-interest for Australian GIS data, lane-level accuracy, and regional POI integration across major metro areas.",
  },
  {
    icon: Radio,
    title: "T-Box & Vehicle Communication",
    description:
      "Robust testing of telematics hardware against local 4G/5G carrier protocols and rural signal attenuation zones.",
  },
  {
    icon: Mic,
    title: "Voice & AI Assistant",
    description:
      "Natural Language Processing validation for Australian accents and local semantic nuances in high-noise cabin environments.",
  },
  {
    icon: Rocket,
    title: "System Validation & Landing",
    description:
      "End-to-end integration testing and compliance verification for smooth product launch and vehicle delivery.",
  },
];

export default function OurServices() {
  return (
    <Section id="our_service" tone="surface">
      <Eyebrow>01 / Services</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] mb-4">
        Our Services
      </h2>
      <p className="text-[var(--text-muted)] max-w-md mb-12">
        Comprehensive smart cabin solutions tailored for the Pacific market.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {services.map((s) => (
          <FeatureCard
            key={s.title}
            icon={s.icon}
            title={s.title}
            description={s.description}
          />
        ))}
      </div>
    </Section>
  );
}
