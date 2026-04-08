import React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "bg-white rounded-xl border border-[var(--border)] p-8",
        "shadow-sm hover:shadow-md transition-all duration-200",
        className
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-[var(--brand-soft)] text-[var(--brand)] flex items-center justify-center mb-6">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-[var(--text)]">{title}</h3>
      <p className="text-sm leading-relaxed text-[var(--text-muted)]">
        {description}
      </p>
    </article>
  );
}

export default FeatureCard;
