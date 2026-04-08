import React from "react";
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
    <section
      id="project_experience"
      className="py-24 px-6 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-4 uppercase tracking-wide">
              Project Experience
            </h2>
            <p className="text-slate-500 max-w-md">
              Transforming complex business challenges into elegant digital
              solutions. Explore a selection of our most impactful enterprise
              work.
            </p>
          </div>
          <div className="text-8xl font-black text-slate-100 absolute right-0 top-0 -z-10 select-none">
            02
          </div>
        </div>
        <div
          style={{
            height: "200px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={imageLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={100}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
}
