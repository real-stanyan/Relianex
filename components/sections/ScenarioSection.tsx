import React from "react";
import { useTranslations } from "next-intl";

const STAT_KEYS = ["experience", "compliance"] as const;

export default function ScenarioSection() {
  const t = useTranslations("scenario");
  return (
    <section
      id="scenario_section"
      className="py-24 bg-blue-950 text-white px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {t("heading")}
          </h2>
          <p className="text-slate-300 mb-10 text-lg leading-relaxed">
            {t("body")}
          </p>
          <div className="space-y-4">
            {STAT_KEYS.map((key) => (
              <div
                key={key}
                className="bg-blue-900/50 border border-blue-800 p-6 rounded-xl flex items-center gap-6"
              >
                <div className="text-4xl font-bold text-cyan-400">
                  {t(`stats.${key}.value`)}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">
                    {t(`stats.${key}.title`)}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {t(`stats.${key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          {/* Placeholder for the road image */}
          <div className="w-full h-[500px] bg-slate-800 rounded-2xl overflow-hidden relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image_1.webp"
              alt={t("imageAlt")}
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
