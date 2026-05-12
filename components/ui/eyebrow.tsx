import React from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  tone?: "default" | "ink";
  className?: string;
};

export function Eyebrow({ children, tone = "default", className }: EyebrowProps) {
  const lineColor =
    tone === "ink" ? "bg-[var(--accent-gray)]/60" : "bg-[var(--accent-gray)]";
  const textColor =
    tone === "ink" ? "text-[var(--accent-gray)]" : "text-[var(--text-muted)]";

  return (
    <div className={cn("flex items-center gap-3 mb-4", className)}>
      <span className={cn("block w-6 h-px", lineColor)} aria-hidden="true" />
      <span
        className={cn(
          "text-xs font-semibold tracking-[0.2em] uppercase",
          textColor
        )}
      >
        {children}
      </span>
    </div>
  );
}

export default Eyebrow;
