import React from "react";
import { ShieldCheck, Navigation, TrendingDown } from "lucide-react";
import { useTranslations } from "next-intl";

const VALUE_KEYS = ["risk", "ux", "cost"] as const;
const ICONS = {
  risk: ShieldCheck,
  ux: Navigation,
  cost: TrendingDown,
};

export default function CustomerValue() {
  const t = useTranslations("value");
  return (
    <section
      id="customer_value"
      className="py-24 px-6 bg-slate-50 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-950 mb-4">
          {t("heading")}
        </h2>
        <p className="text-slate-500 mb-16">{t("intro")}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {VALUE_KEYS.map((key) => {
            const Icon = ICONS[key];
            return (
              <div key={key} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold mb-3">
                  {t(`items.${key}.title`)}
                </h4>
                <p className="text-slate-500 text-sm">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
