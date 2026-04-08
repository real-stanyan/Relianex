import { MapPin, Search, Sliders } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FeatureCard } from "@/components/ui/feature-card";

const capabilities = [
  {
    icon: MapPin,
    title: "Local Validation Capability",
    description:
      "Expert real-world driving and localized network testing across complex Australian geographies to ensure connectivity reliability.",
  },
  {
    icon: Search,
    title: "Issue Discovery Capability",
    description:
      "Advanced diagnostic methodologies for identifying hard-to-simulate defects that only emerge in localized environmental conditions.",
  },
  {
    icon: Sliders,
    title: "Experience Optimization",
    description:
      "User-centric refinement focused on Australian driver habits, regional UI preferences, and intuitive interface logic.",
  },
];

export default function CoreCapabilities() {
  return (
    <Section id="capabilities" tone="alt">
      <Eyebrow>Capabilities</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] mb-12">
        Core Capabilities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {capabilities.map((c) => (
          <FeatureCard
            key={c.title}
            icon={c.icon}
            title={c.title}
            description={c.description}
          />
        ))}
      </div>
    </Section>
  );
}
