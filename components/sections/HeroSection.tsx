import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

export default function HeroSection() {
  return (
    <Section
      id="mission"
      tone="ink"
      className="py-28 md:py-36 bg-[url('/bg/home_bg.webp')] bg-cover bg-top bg-no-repeat"
    >
      {/* Overlay tint — sits between background image and content */}
      <div
        className="absolute inset-0 bg-[var(--ink)]/60 pointer-events-none"
        aria-hidden="true"
      />

      <Eyebrow tone="ink">Precision Engineering</Eyebrow>
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-[var(--text-inverse)]">
        Relianex
      </h1>
      <p className="text-xl md:text-2xl text-[var(--text-inverse)]/80 max-w-2xl mb-8 leading-snug">
        Combining an engineer&apos;s perspective with a user-experience mindset.
      </p>
      <div className="flex items-start gap-3 max-w-xl">
        <span
          className="block w-6 h-px bg-[var(--accent-gray)]/60 mt-2 shrink-0"
          aria-hidden="true"
        />
        <p className="text-sm md:text-base text-[var(--text-inverse)]/70 leading-relaxed">
          Helping global automakers achieve high-quality smart cabin deployment
          in the Australian market through rigorous validation and
          architectural excellence.
        </p>
      </div>
    </Section>
  );
}
