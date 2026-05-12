import { Map, Radio, Mic, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FeatureCard } from "@/components/ui/feature-card";

const SERVICE_KEYS = ["navigation", "tbox", "voice", "system"] as const;
const ICONS = {
  navigation: Map,
  tbox: Radio,
  voice: Mic,
  system: Rocket,
};

export default function OurServices() {
  const t = useTranslations("services");
  return (
    <Section id="our_service" tone="surface">
      <Eyebrow>{t("eyebrow")}</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] mb-4">
        {t("heading")}
      </h2>
      <p className="text-[var(--text-muted)] max-w-md mb-12">{t("intro")}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {SERVICE_KEYS.map((key) => (
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
