# Professional Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polish the Relianex homepage into a coherent, brand-aligned enterprise-serious design system by introducing design tokens, 3 shared UI primitives, and refactoring all 8 section components + Header + layout to use them.

**Architecture:** All visual decisions are centralized in `app/globals.css` CSS custom properties. Three new primitives (`Section`, `Eyebrow`, `FeatureCard`) under `components/ui/` enforce consistency — every homepage section is rewritten to use them. No information architecture, copy, or backend changes.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind CSS 4, shadcn/ui, Lucide React, Framer Motion (existing), `cn()` utility with `tailwind-merge`.

**Spec:** `docs/superpowers/specs/2026-04-07-professional-polish-design.md`

**Note:** No test framework is configured. Verification in each task is `npx tsc --noEmit` + visual check via `npm run dev`. Commit at the end of each task.

---

## File Structure

**Create:**
- `components/ui/section.tsx` — standardized section wrapper with tone variants
- `components/ui/eyebrow.tsx` — small uppercase label with leading rule
- `components/ui/feature-card.tsx` — standardized icon + title + description card

**Modify:**
- `app/globals.css` — add/update CSS vars (tokens), add focus-visible rule
- `app/layout.tsx` — metadata themeColor, `scroll-pt-20` on html, body colors
- `app/page.tsx` — remove outer div wrapper, simplify
- `components/Header.tsx` — align tokens, active state, sticky backdrop
- `components/sections/HeroSection.tsx`
- `components/sections/CoreCapabilities.tsx`
- `components/sections/OurServices.tsx`
- `components/sections/ProjectExperienceSection.tsx`
- `components/sections/ScenarioSection.tsx`
- `components/sections/CustomerValue.tsx`
- `components/sections/ContactSection.tsx`
- `components/sections/PageFooter.tsx`

**Leave alone:**
- `components/LogoLoop.tsx`, `components/LogoLoop.css`
- `components/Footer.tsx`, `components/HeaderLinks.tsx`, `components/Business.tsx`, `components/ProjectExperience.tsx` (not used on homepage)
- `components/ui/*` (except the 3 new files)
- `.dark` vars in globals.css

---

## Task 1: Establish Design Tokens in globals.css

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Replace `:root` custom properties**

Open `app/globals.css` and replace the entire `:root { ... }` block (currently lines 46–80) with:

```css
:root {
  --radius: 0.625rem;

  /* Brand palette */
  --brand: #1E3FBE;
  --brand-hover: #1732A0;
  --brand-soft: rgba(30, 63, 190, 0.08);

  /* Ink (dark) */
  --ink: #0A1A4D;
  --ink-soft: #15266B;

  /* Surfaces */
  --surface: #FFFFFF;
  --surface-alt: #F7F8FA;

  /* Structure */
  --border: #E5E7EB;

  /* Text */
  --text: #0F172A;
  --text-muted: #64748B;
  --text-inverse: #FFFFFF;

  /* Accent */
  --accent-gray: #B8B8BA;

  /* Backwards-compatibility aliases (consumed by Footer.tsx / HeaderLinks.tsx) */
  --text-legacy: #ffffff;
  --background: var(--surface);
  --foreground: var(--text);
  --card: #073aad;
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}
```

The shadcn legacy vars (`--card`, `--popover`, `--primary` …) stay because `Footer.tsx`, `HeaderLinks.tsx`, and shadcn `ui/*` components consume them. `--background`, `--foreground`, and `--border` are repointed to our brand tokens (the legacy `--border: oklch(...)` line from the original :root is intentionally absent — `--border: #E5E7EB` near the top is the only definition).

`--input` and `--ring` are kept from the old shadcn defaults; we'll let visual review on Task 12 catch any input border color that needs further tightening.

- [ ] **Step 2: Add focus-visible rule**

Append the following inside the existing `@layer base { ... }` block in `app/globals.css` (after the existing `body { ... }` rule):

```css
  *:focus-visible {
    outline: 2px solid var(--brand);
    outline-offset: 2px;
    border-radius: 4px;
  }
```

- [ ] **Step 3: Verify typecheck still passes**

Run: `npx tsc --noEmit`
Expected: exits 0, no output.

- [ ] **Step 4: Verify build still works**

Run: `npm run build`
Expected: Build succeeds. Visual may look temporarily broken — that's fine, we'll fix it in subsequent tasks.

- [ ] **Step 5: Commit**

```bash
git add app/globals.css
git commit -m "feat(tokens): introduce brand-aligned design tokens"
```

---

## Task 2: Create `<Section>` Primitive

**Files:**
- Create: `components/ui/section.tsx`

- [ ] **Step 1: Create the Section component**

Write `components/ui/section.tsx`:

```tsx
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
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
git add components/ui/section.tsx
git commit -m "feat(ui): add Section primitive with tone variants"
```

---

## Task 3: Create `<Eyebrow>` Primitive

**Files:**
- Create: `components/ui/eyebrow.tsx`

- [ ] **Step 1: Create the Eyebrow component**

Write `components/ui/eyebrow.tsx`:

```tsx
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
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
git add components/ui/eyebrow.tsx
git commit -m "feat(ui): add Eyebrow label primitive"
```

---

## Task 4: Create `<FeatureCard>` Primitive

**Files:**
- Create: `components/ui/feature-card.tsx`

- [ ] **Step 1: Create the FeatureCard component**

Write `components/ui/feature-card.tsx`:

```tsx
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
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
git add components/ui/feature-card.tsx
git commit -m "feat(ui): add FeatureCard primitive"
```

---

## Task 5: Update `app/layout.tsx` and `app/page.tsx` Shell

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Update `app/layout.tsx`**

Replace the entire file with:

```tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RELIANEX",
  description:
    "Combining an engineer's perspective with a user-experience mindset.",
  icons: {
    icon: "/logo.webp",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1A4D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--surface)] text-[var(--text)]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
```

Note: `Footer` import is intentionally removed — it was imported but never rendered in the original file, and we're using `PageFooter` inside `page.tsx` instead.

- [ ] **Step 2: Update `app/page.tsx`**

Replace the entire file with:

```tsx
import HeroSection from "@/components/sections/HeroSection";
import CoreCapabilities from "@/components/sections/CoreCapabilities";
import OurServices from "@/components/sections/OurServices";
import ProjectExperienceSection from "@/components/sections/ProjectExperienceSection";
import ScenarioSection from "@/components/sections/ScenarioSection";
import CustomerValue from "@/components/sections/CustomerValue";
import ContactSection from "@/components/sections/ContactSection";
import PageFooter from "@/components/sections/PageFooter";

export default function RelianexLandingPage() {
  return (
    <main className="min-h-screen font-sans">
      <HeroSection />
      <CoreCapabilities />
      <OurServices />
      <ProjectExperienceSection />
      <ScenarioSection />
      <CustomerValue />
      <ContactSection />
      <PageFooter />
    </main>
  );
}
```

- [ ] **Step 3: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx app/page.tsx
git commit -m "refactor(app): simplify root layout and page shell"
```

---

## Task 6: Refactor HeroSection

**Files:**
- Modify: `components/sections/HeroSection.tsx`

- [ ] **Step 1: Rewrite HeroSection**

Replace the entire file with:

```tsx
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
```

Key changes:
- Outer wrapper is now `<Section>`; padding is overridden via className (`tailwind-merge` handles conflict resolution)
- Background image moves to className on Section; dark tint is a sibling `<div>` inside Section's inner container
- `RELIANEX` → `Relianex`, weight `extrabold` → `semibold`, size `md:text-7xl` → `md:text-6xl`
- Cyan badge → Eyebrow primitive
- Cyan border-left → small gray horizontal rule

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0.

- [ ] **Step 3: Visual check**

Run: `npm run dev`
Open: `http://localhost:3000`
Expected: Hero shows deep-ink background behind image, `Relianex` in semibold, subtle eyebrow label, no cyan.
Kill the dev server (`Ctrl+C`) after verifying.

- [ ] **Step 4: Commit**

```bash
git add components/sections/HeroSection.tsx
git commit -m "refactor(hero): align hero to brand tokens and primitives"
```

---

## Task 7: Refactor CoreCapabilities

**Files:**
- Modify: `components/sections/CoreCapabilities.tsx`

- [ ] **Step 1: Rewrite CoreCapabilities**

Replace the entire file with:

```tsx
import { MapPin, Search, Sliders } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FeatureCard } from "@/components/ui/feature-card";

const capabilities = [
  {
    icon: MapPin,
    title: "Local Validation Capability",
    description:
      "Expert real-world driving and localized network testing across complex Australian geographies to ensure connectivity reliability.",
  },
  {
    icon: Search,
    title: "Issue Discovery Capability",
    description:
      "Advanced diagnostic methodologies for identifying hard-to-simulate defects that only emerge in localized environmental conditions.",
  },
  {
    icon: Sliders,
    title: "Experience Optimization",
    description:
      "User-centric refinement focused on Australian driver habits, regional UI preferences, and intuitive interface logic.",
  },
];

export default function CoreCapabilities() {
  return (
    <Section id="capabilities" tone="alt">
      <Eyebrow>Capabilities</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] mb-12">
        Core Capabilities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {capabilities.map((c) => (
          <FeatureCard
            key={c.title}
            icon={c.icon}
            title={c.title}
            description={c.description}
          />
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
git add components/sections/CoreCapabilities.tsx
git commit -m "refactor(capabilities): use Section/Eyebrow/FeatureCard"
```

---

## Task 8: Refactor OurServices

**Files:**
- Modify: `components/sections/OurServices.tsx`

- [ ] **Step 1: Rewrite OurServices**

Replace the entire file with:

```tsx
import { Map, Radio, Mic, Rocket } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FeatureCard } from "@/components/ui/feature-card";

const services = [
  {
    icon: Map,
    title: "Navigation & Map Validation",
    description:
      "Precise point-of-interest for Australian GIS data, lane-level accuracy, and regional POI integration across major metro areas.",
  },
  {
    icon: Radio,
    title: "T-Box & Vehicle Communication",
    description:
      "Robust testing of telematics hardware against local 4G/5G carrier protocols and rural signal attenuation zones.",
  },
  {
    icon: Mic,
    title: "Voice & AI Assistant",
    description:
      "Natural Language Processing validation for Australian accents and local semantic nuances in high-noise cabin environments.",
  },
  {
    icon: Rocket,
    title: "System Validation & Landing",
    description:
      "End-to-end integration testing and compliance verification for smooth product launch and vehicle delivery.",
  },
];

export default function OurServices() {
  return (
    <Section id="our_service" tone="surface">
      <Eyebrow>01 / Services</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] mb-4">
        Our Services
      </h2>
      <p className="text-[var(--text-muted)] max-w-md mb-12">
        Comprehensive smart cabin solutions tailored for the Pacific market.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {services.map((s) => (
          <FeatureCard
            key={s.title}
            icon={s.icon}
            title={s.title}
            description={s.description}
          />
        ))}
      </div>
    </Section>
  );
}
```

Key changes:
- "01" giant watermark is deleted
- Eyebrow now carries "01 / Services"
- Flex-row card layout → column FeatureCard layout (consistent with Capabilities)

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
git add components/sections/OurServices.tsx
git commit -m "refactor(services): standardize cards and remove 01 watermark"
```

---

## Task 9: Refactor ProjectExperienceSection

**Files:**
- Modify: `components/sections/ProjectExperienceSection.tsx`

- [ ] **Step 1: Rewrite ProjectExperienceSection**

Replace the entire file with:

```tsx
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import LogoLoop from "@/components/LogoLoop";

const imageLogos = [
  {
    src: "/projectExperience/byd.webp",
    alt: "byd",
    href: "https://bydautomotive.com.au/",
  },
  {
    src: "/projectExperience/chery.webp",
    alt: "chery",
    href: "https://cherymotor.com.au/",
  },
  {
    src: "/projectExperience/gwm.webp",
    alt: "gwm",
    href: "https://www.gwmanz.com/au/",
  },
  {
    src: "/projectExperience/mazda.webp",
    alt: "mazda",
    href: "https://www.mazda.com.au/",
  },
  {
    src: "/projectExperience/mg.webp",
    alt: "mg",
    href: "https://mgmotor.com.au/",
  },
  {
    src: "/projectExperience/tank.webp",
    alt: "tank",
    href: "https://www.gwmanz.com/au/",
  },
  {
    src: "/projectExperience/xiaomi.webp",
    alt: "xiaomi",
    href: "https://www.mi.com/au/",
  },
];

export default function ProjectExperienceSection() {
  return (
    <Section id="project_experience" tone="alt">
      <Eyebrow>02 / Partners</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] mb-4">
        Project Experience
      </h2>
      <p className="text-[var(--text-muted)] max-w-md mb-12">
        Transforming complex business challenges into elegant digital
        solutions. Explore a selection of our most impactful enterprise work.
      </p>

      <div className="relative h-[160px] overflow-hidden">
        <LogoLoop
          logos={imageLogos}
          speed={100}
          direction="left"
          logoHeight={44}
          gap={100}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#F7F8FA"
          ariaLabel="Technology partners"
        />
      </div>

      <p className="text-xs text-[var(--text-muted)] text-center mt-6 tracking-wide">
        Trusted by leading automakers across APAC
      </p>
    </Section>
  );
}
```

Key changes:
- "02" watermark removed
- `logoHeight` 60 → 44
- `fadeOutColor` `#ffffff` → `#F7F8FA` (matches `--surface-alt`)
- Added trust line below

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
git add components/sections/ProjectExperienceSection.tsx
git commit -m "refactor(project-experience): token-align and polish logo strip"
```

---

## Task 10: Refactor ScenarioSection

**Files:**
- Modify: `components/sections/ScenarioSection.tsx`

- [ ] **Step 1: Rewrite ScenarioSection**

Replace the entire file with:

```tsx
import Image from "next/image";
import { Section } from "@/components/ui/section";

export default function ScenarioSection() {
  return (
    <Section id="scenario_section" tone="ink">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight text-[var(--text-inverse)]">
            Scenario-driven + User-experience-oriented
          </h2>
          <p className="text-[var(--text-inverse)]/75 mb-12 text-lg leading-relaxed">
            Our unique architectural approach ensures that technical
            verification translates directly into meaningful user benefits. We
            don&apos;t just test functionality; we validate human-vehicle
            synergy.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-5xl md:text-6xl font-semibold text-[var(--text-inverse)] mb-3">
                20+
              </div>
              <div className="w-8 h-px bg-[var(--accent-gray)]/60 mb-3" />
              <h4 className="font-semibold text-[var(--text-inverse)] mb-1">
                Proven Experience
              </h4>
              <p className="text-sm text-[var(--text-inverse)]/60 leading-relaxed">
                Automotive models successfully launched in Australia under our
                supervision.
              </p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-semibold text-[var(--text-inverse)] mb-3">
                100%
              </div>
              <div className="w-8 h-px bg-[var(--accent-gray)]/60 mb-3" />
              <h4 className="font-semibold text-[var(--text-inverse)] mb-1">
                Compliance Rate
              </h4>
              <p className="text-sm text-[var(--text-inverse)]/60 leading-relaxed">
                Full adherence to Australian safety and data privacy
                regulations.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
          <Image
            src="/image_1.webp"
            alt="Highway driving scenario"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Left-to-right ink fade to blend with the ink section background */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/30 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </Section>
  );
}
```

Key changes:
- `<img>` → Next `<Image>` with `fill` + `sizes`
- Stat blocks switched from horizontal boxes to editorial-style vertical (big number + hairline + title + description)
- Cyan `20+` / `100%` → white (contrast on ink is higher than brand-blue on ink, spec §4.4)

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
git add components/sections/ScenarioSection.tsx
git commit -m "refactor(scenario): ink tone, editorial stats, Next Image"
```

---

## Task 11: Refactor CustomerValue

**Files:**
- Modify: `components/sections/CustomerValue.tsx`

- [ ] **Step 1: Rewrite CustomerValue**

Replace the entire file with:

```tsx
import { ShieldCheck, Navigation, TrendingDown } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FeatureCard } from "@/components/ui/feature-card";

const values = [
  {
    icon: ShieldCheck,
    title: "Reduce Launch Risks",
    description:
      "Mitigate regulatory and technical failures before they reach the market.",
  },
  {
    icon: Navigation,
    title: "Enhance User Experience",
    description:
      "Deliver localized features that resonate with the Australian driver persona.",
  },
  {
    icon: TrendingDown,
    title: "Lower Costs",
    description:
      "Streamline validation cycles through local expertise and automated telemetry.",
  },
];

export default function CustomerValue() {
  return (
    <Section id="customer_value" tone="alt">
      <Eyebrow>Customer Value</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] mb-4">
        Customer Value
      </h2>
      <p className="text-[var(--text-muted)] max-w-md mb-12">
        Quantifiable advantages for your global expansion strategy.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {values.map((v) => (
          <FeatureCard
            key={v.title}
            icon={v.icon}
            title={v.title}
            description={v.description}
          />
        ))}
      </div>
    </Section>
  );
}
```

Key changes:
- Round icon containers → square (via FeatureCard)
- Center alignment removed — left-aligned like the other card sections

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
git add components/sections/CustomerValue.tsx
git commit -m "refactor(customer-value): use FeatureCard for consistency"
```

---

## Task 12: Refactor ContactSection

**Files:**
- Modify: `components/sections/ContactSection.tsx`

- [ ] **Step 1: Rewrite ContactSection**

Replace the entire file with:

```tsx
import { Mail, Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const services = [
  "Market Entry Regulatory Audit",
  "Technical Feasibility Studies",
  "On-road Performance Benchmarking",
];

export default function ContactSection() {
  return (
    <Section id="contact" tone="surface">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left column: message + contact + services */}
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)] mb-6">
            Ready to deploy?
          </h2>
          <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
            Our consultants are ready to provide a detailed audit of your smart
            cabin architecture for the Australian market.
          </p>

          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-lg bg-[var(--brand-soft)] text-[var(--brand)] flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <a
              href="mailto:business@relianex.com.au"
              className="text-[var(--brand)] font-semibold text-lg hover:underline"
            >
              business@relianex.com.au
            </a>
          </div>

          <div>
            <h5 className="text-xs font-semibold tracking-[0.2em] text-[var(--text-muted)] uppercase mb-4">
              Consultation Services
            </h5>
            <ul className="space-y-3">
              {services.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 text-[var(--text)]"
                >
                  <Check className="w-5 h-5 text-[var(--brand)] shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column: form on white background, matching the rest of the site */}
        <form className="space-y-6">
          <h3 className="text-xl font-semibold text-[var(--text)] mb-6">
            Direct Inquiry
          </h3>

          <div className="space-y-2">
            <label
              htmlFor="contact-name"
              className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider"
            >
              Full Name
            </label>
            <Input id="contact-name" type="text" placeholder="Your Name" />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contact-org"
              className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider"
            >
              Organization
            </label>
            <Input
              id="contact-org"
              type="text"
              placeholder="Automotive Brand"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider"
            >
              Requirement
            </label>
            <Textarea
              id="contact-message"
              rows={4}
              placeholder="How can we assist your deployment?"
              className="resize-none"
            />
          </div>

          <button
            type="button"
            className="w-full bg-[var(--brand)] text-white font-semibold py-3 rounded-xl hover:bg-[var(--brand-hover)] transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>
    </Section>
  );
}
```

Key changes:
- Right deep-blue card container deleted
- Decorative giant Map icon deleted
- shadcn `Input` / `Textarea` replace custom blue inputs
- Check bullets: `cyan-500` → `--brand`
- Submit: `bg-cyan-400 text-blue-950` → `bg-[--brand] text-white`

- [ ] **Step 2: Verify shadcn Input/Textarea exist**

Run: `ls components/ui/input.tsx components/ui/textarea.tsx`
Expected: both files exist (they are referenced by `components/Footer.tsx`, so they should).

If either is missing, add it via:
```bash
npx shadcn@latest add input textarea
```

- [ ] **Step 3: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0.

- [ ] **Step 4: Commit**

```bash
git add components/sections/ContactSection.tsx
git commit -m "refactor(contact): unify form into white-background layout"
```

---

## Task 13: Refactor PageFooter

**Files:**
- Modify: `components/sections/PageFooter.tsx`

- [ ] **Step 1: Rewrite PageFooter**

Replace the entire file with:

```tsx
const footerLinks = [
  { label: "PRIVACY POLICY", href: "#" },
  { label: "TERMS OF SERVICE", href: "#" },
  { label: "COMPLIANCE", href: "#" },
];

export default function PageFooter() {
  return (
    <footer className="bg-white border-t border-[var(--border)] py-8 px-6 text-sm text-[var(--text-muted)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-semibold text-[var(--ink)] text-lg tracking-tight">
            RELIANEX
          </div>
          <p>
            © 2026 RELIANEX. Precision Architecture in Automotive Testing.
            Empowering global innovation with local precision.
          </p>
        </div>
        <div className="flex gap-6 font-medium">
          {footerLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="hover:text-[var(--brand)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
git add components/sections/PageFooter.tsx
git commit -m "refactor(footer): align to brand tokens, bump year"
```

---

## Task 14: Refactor Header

**Files:**
- Modify: `components/Header.tsx`

- [ ] **Step 1: Rewrite Header**

Replace the entire file with:

```tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#mission", label: "Mission" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#project_experience", label: "Experience" },
  { href: "#scenario_section", label: "Scenario" },
  { href: "#customer_value", label: "Value" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("mission");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-[var(--border)] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <div className="flex-shrink-0">
          <Image
            src="/logo.webp"
            alt="relianex_logo"
            width={800}
            height={240}
            className="h-5 md:h-6 w-auto object-contain"
            priority
          />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-[var(--text-muted)]">
          {navLinks.map(({ href, label }) => {
            const id = href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                className={cn(
                  "transition-colors",
                  isActive
                    ? "text-[var(--brand)] border-b-2 border-[var(--brand)] pb-1"
                    : "hover:text-[var(--brand)]"
                )}
              >
                {label}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block bg-[var(--brand)] text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-[var(--brand-hover)] transition-colors"
        >
          Contact
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[var(--text)]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav — right slide-over */}
      <div
        className={cn(
          "fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 md:hidden",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 flex flex-col pt-8 px-8 space-y-6 transition-transform duration-300 ease-out md:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className="self-end text-[var(--text)] mb-2"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
        {navLinks.map(({ href, label }) => {
          const id = href.slice(1);
          const isActive = activeSection === id;
          return (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors pl-3",
                isActive
                  ? "text-[var(--brand)] border-l-2 border-[var(--brand)]"
                  : "text-[var(--text-muted)] hover:text-[var(--brand)]"
              )}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
```

Key changes:
- `border-slate-100` → `border-[var(--border)]`
- Active link: `text-blue-600 border-blue-600` → `text-[var(--brand)] border-[var(--brand)]`
- Contact button: `bg-blue-900 hover:bg-blue-800` → `bg-[var(--brand)] hover:bg-[var(--brand-hover)]`
- Sticky: `bg-white` → `bg-white/90 backdrop-blur-md`
- max-w-6xl wrapper aligned with Section
- `cn()` introduced for readability

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
git add components/Header.tsx
git commit -m "refactor(header): token-align, blurred sticky, brand accents"
```

---

## Task 15: Final Verification

**Files:** (none modified — this is a gate)

- [ ] **Step 1: Typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0.

- [ ] **Step 2: Lint**

Run: `npm run lint`
Expected: no errors. Warnings about unused imports in the section components we rewrote are unlikely but if they appear, remove the offending imports and re-run.

- [ ] **Step 3: Production build**

Run: `npm run build`
Expected: Build succeeds, no errors.

- [ ] **Step 4: Grep for leftover `cyan-*` references in homepage components**

Run: `grep -rn "cyan-" components/sections/ components/Header.tsx app/page.tsx app/layout.tsx`
Expected: no output. If any found, replace with tokens and re-run.

- [ ] **Step 5: Grep for leftover `blue-950`, `blue-900`, `blue-800`, `blue-700`, `blue-600`, `blue-100`, `blue-50` in homepage components**

Run: `grep -rnE "blue-(50|100|600|700|800|900|950)" components/sections/ components/Header.tsx app/page.tsx app/layout.tsx`
Expected: no output.

- [ ] **Step 6: Grep for leftover `slate-*` in homepage components**

Run: `grep -rn "slate-" components/sections/ components/Header.tsx app/page.tsx app/layout.tsx`
Expected: no output.

- [ ] **Step 7: Visual smoke test**

Run: `npm run dev`
Open: `http://localhost:3000`

Check each of the following by scrolling and clicking header links:
- [ ] Hero: semibold "Relianex" title, subtle eyebrow, dark ink background tint
- [ ] Capabilities: three cards with square brand-blue icon wells
- [ ] Services: four matching cards, no "01" watermark
- [ ] Project Experience: eyebrow, logo strip fades into alt surface (no white box)
- [ ] Scenario: ink-dark, two big number stats, image with left ink fade
- [ ] Customer Value: three cards matching the others
- [ ] Contact: form on white, shadcn inputs, brand-blue submit
- [ ] Footer: tokens applied, year shows 2026
- [ ] Header: sticky with blur, active link uses brand blue, Contact button brand blue
- [ ] Click each header link — each section's heading lands at a comfortable offset from the sticky nav (not flush against it)

Kill `npm run dev` with `Ctrl+C` after verifying.

- [ ] **Step 8: Final commit** (if any minor cleanups happened)

Only if steps 4-6 surfaced leftovers that required fixing:
```bash
git add -A
git commit -m "chore(polish): clean up stray legacy color references"
```

Otherwise, nothing to commit here — verification is the gate.
