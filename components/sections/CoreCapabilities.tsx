import { MapPin, Search, Sliders } from "lucide-react";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FeatureCard } from "@/components/ui/feature-card";

const CAPABILITY_KEYS = ["local", "discovery", "experience"] as const;
const ICONS = {
  local: MapPin,
  discovery: Search,
  experience: Sliders,
};

export default function CoreCapabilities() {
  const t = useTranslations("capabilities");
  return (
    <Section id="capabilities" tone="alt">
      <Eyebrow>{t("eyebrow")}</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] mb-12">
        {t("heading")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {CAPABILITY_KEYS.map((key) => (
          <FeatureCard
            key={key}
            icon={ICONS[key]}
            title={t(`items.${key}.title`)}
            description={t(`items.${key}.description`)}
          />
        ))}
      </div>
    </Section>
  );
}
