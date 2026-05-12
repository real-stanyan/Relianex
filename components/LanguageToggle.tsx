"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export default function LanguageToggle() {
  const t = useTranslations("languageToggle");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const onSelect = (next: Locale) => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div
      role="group"
      aria-label={t("ariaLabel")}
      className={`inline-flex items-center rounded-full border border-slate-200 bg-white text-xs font-medium overflow-hidden ${
        isPending ? "opacity-60" : ""
      }`}
    >
      {routing.locales.map((l) => {
        const isActive = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => onSelect(l)}
            aria-pressed={isActive}
            className={`px-3 py-1 transition-colors ${
              isActive
                ? "bg-blue-900 text-white"
                : "text-slate-600 hover:text-blue-900"
            }`}
          >
            {t(l)}
          </button>
        );
      })}
    </div>
  );
}
