import React from "react";
import { cn } from "@/lib/utils";

type SectionTone = "surface" | "alt" | "ink";

type SectionProps = {
  id: string;
  tone?: SectionTone;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
};

const toneClasses: Record<SectionTone, string> = {
  surface: "bg-[var(--surface)] text-[var(--text)]",
  alt: "bg-[var(--surface-alt)] text-[var(--text)]",
  ink: "bg-[var(--ink)] text-[var(--text-inverse)]",
};

export function Section({
  id,
  tone = "surface",
  className,
  innerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-20 md:py-28 px-6 scroll-mt-20",
        toneClasses[tone],
        className
      )}
    >
      <div className={cn("relative z-10 max-w-6xl mx-auto", innerClassName)}>
        {children}
      </div>
    </section>
  );
}

export default Section;
