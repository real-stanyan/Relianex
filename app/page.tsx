import Image from "next/image";
import { Settings, Car, Cloud, ShieldCheck } from "lucide-react";

import ProjectExperience from "@/components/ProjectExperience";
import Business from "@/components/Business";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="relative z-30 h-[50vh] lg:h-[70vh] min-h-[420px]">
        <Image
          src="/bg/home_bg.webp"
          alt="home_bg"
          fill
          priority
          className="object-cotain object-top"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-[15%] left-[10%] text-[var(--text)]">
          <div className="font-black text-4xl md:text-5xl tracking-wide leading-tight">
            <h1>Driving the Future</h1>
            <h1>of Software Testing</h1>
          </div>
          <p className="mt-4 md:mt-6 opacity-90">
            Specializing in New Energy Vehicle and IT
          </p>
          <div className="mt-6 flex gap-4 font-semibold">
            <button className="bg-[var(--card)] px-6 py-2 rounded-sm">
              Learn More
            </button>
            <button className="bg-transparent px-6 py-2 rounded-sm border border-[var(--text)]">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative z-40 -mt-10 md:-mt-14">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ServiceCard
            icon={<Settings className="size-8" />}
            title={["New Energy", "Vehicle Software", "Testing"]}
            desc="Comprehensive solutions for electric and hybrid."
          />
          <ServiceCard
            icon={<Car className="size-8" />}
            title={["Onboard Systems", "Compatibility"]}
            desc="Integration validation across vehicle platforms."
          />
          <ServiceCard
            icon={<Cloud className="size-8" />}
            title={["Cloud-Based", "IT Solutions"]}
            desc="Scalable backend, data, and DevOps services."
          />
          <ServiceCard
            icon={<ShieldCheck className="size-8" />}
            title={["Data Security", "& Performance"]}
            desc="Hardening, compliance, and performance tuning."
          />
        </div>
      </section>
      <Business />
      <ProjectExperience />
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string[]; // lines
  desc: string;
}) {
  return (
    <div className="rounded-xl bg-[var(--background)] backdrop-blur border shadow-sm p-5">
      <div className="flex items-center justify-center size-12 rounded-md mb-4">
        {icon}
      </div>
      <div className="mb-2 leading-snug font-semibold">
        {title.map((t, i) => (
          <h3 key={i}>{t}</h3>
        ))}
      </div>
      <p className="text-sm opacity-80">{desc}</p>
    </div>
  );
}
