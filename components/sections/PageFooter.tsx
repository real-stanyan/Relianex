import React from "react";
import { useTranslations } from "next-intl";

const LINK_KEYS = ["privacy", "terms", "compliance"] as const;

export default function PageFooter() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-white border-t border-slate-200 py-8 px-6 text-sm text-slate-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-bold text-blue-900 text-lg tracking-tighter">
            RELIANEX
          </div>
          <p>{t("copyright")}</p>
        </div>
        <div className="flex gap-6 font-medium">
          {LINK_KEYS.map((key) => (
            <a key={key} href="#" className="hover:text-blue-600">
              {t(`links.${key}`)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
