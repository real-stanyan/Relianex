import React from "react";
import {
  Menu,
  X,
  Map,
  Radio,
  Mic,
  Rocket,
  ShieldCheck,
  Search,
  Sliders,
  CheckCircle,
  Navigation,
  TrendingDown,
  Mail,
  MapPin,
  Check,
} from "lucide-react";
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

export default function RelianexLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* --- Hero Section --- */}
      <section
        id="mission"
        className="relative text-white py-32 px-6 overflow-hidden bg-[url('/bg/home_bg.webp')] bg-cover bg-top bg-no-repeat bg-blend-overlay"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            Precision Architect
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            RELIANEX
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 font-light max-w-2xl mb-8 leading-snug">
            Combining an engineer&apos;s perspective with a user-experience
            mindset.
          </p>
          <div className="border-l-4 border-cyan-400 pl-6 py-2 max-w-xl">
            <p className="text-slate-400 text-sm md:text-base">
              Helping global automakers achieve high-quality smart cabin
              deployment in the Australian market through rigorous validation
              and architectural excellence.
            </p>
          </div>
        </div>
      </section>

      {/* --- Core Capabilities --- */}
      <section id="capabilities" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-950 mb-12">
            Core Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Local Validation Capability
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Expert real-world driving and localized network testing across
                complex Australian geographies to ensure connectivity
                reliability.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Issue Discovery Capability
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Advanced diagnostic methodologies for identifying
                hard-to-simulate defects that only emerge in localized
                environmental conditions.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 mb-6">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Experience Optimization
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                User-centric refinement focused on Australian driver habits,
                regional UI preferences, and intuitive interface logic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Our Services --- */}
      <section
        id="our_service"
        className="py-24 px-6 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold text-blue-950 mb-4 uppercase tracking-wide">
                Our Services
              </h2>
              <p className="text-slate-500 max-w-md">
                Comprehensive smart cabin solutions tailored for the Pacific
                market.
              </p>
            </div>
            <div className="text-8xl font-black text-slate-100 absolute right-0 top-0 -z-10 select-none">
              01
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="flex gap-6 p-6 border border-slate-100 rounded-xl hover:border-blue-100 hover:bg-slate-50 transition-colors">
              <div className="text-blue-800 shrink-0">
                <Map className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">
                  Navigation & Map Validation
                </h4>
                <p className="text-slate-600 text-sm">
                  Precise point-of-interest for Australian GIS data, lane-level
                  accuracy, and regional POI integration across major metro
                  areas.
                </p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="flex gap-6 p-6 border border-slate-100 rounded-xl hover:border-blue-100 hover:bg-slate-50 transition-colors">
              <div className="text-blue-800 shrink-0">
                <Radio className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">
                  T-Box & Vehicle Communication
                </h4>
                <p className="text-slate-600 text-sm">
                  Robust testing of telematics hardware against local 4G/5G
                  carrier protocols and rural signal attenuation zones.
                </p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="flex gap-6 p-6 border border-slate-100 rounded-xl hover:border-blue-100 hover:bg-slate-50 transition-colors">
              <div className="text-blue-800 shrink-0">
                <Mic className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Voice & AI Assistant</h4>
                <p className="text-slate-600 text-sm">
                  Natural Language Processing validation for Australian accents
                  and local semantic nuances in high-noise cabin environments.
                </p>
              </div>
            </div>
            {/* Service 4 */}
            <div className="flex gap-6 p-6 border border-slate-100 rounded-xl hover:border-blue-100 hover:bg-slate-50 transition-colors">
              <div className="text-blue-800 shrink-0">
                <Rocket className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">
                  System Validation & Landing
                </h4>
                <p className="text-slate-600 text-sm">
                  End-to-end integration testing and compliance verification for
                  smooth product launch and vehicle delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Project Experience --- */}
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

      {/* --- Scenario Section --- */}
      <section
        id="scenario_section"
        className="py-24 bg-blue-950 text-white px-6"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Scenario-driven + User-experience-oriented
            </h2>
            <p className="text-slate-300 mb-10 text-lg leading-relaxed">
              Our unique architectural approach ensures that technical
              verification translates directly into meaningful user benefits. We
              don't just test functionality; we validate human-vehicle synergy.
            </p>
            <div className="space-y-4">
              <div className="bg-blue-900/50 border border-blue-800 p-6 rounded-xl flex items-center gap-6">
                <div className="text-4xl font-bold text-cyan-400">10+</div>
                <div>
                  <h4 className="font-bold text-white mb-1">
                    Proven Experience
                  </h4>
                  <p className="text-sm text-slate-400">
                    Automotive models successfully launched in Australia under
                    our supervision.
                  </p>
                </div>
              </div>
              <div className="bg-blue-900/50 border border-blue-800 p-6 rounded-xl flex items-center gap-6">
                <div className="text-4xl font-bold text-cyan-400">100%</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Compliance Rate</h4>
                  <p className="text-sm text-slate-400">
                    Full adherence to Australian safety and data privacy
                    regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Placeholder for the road image */}
            <div className="w-full h-[500px] bg-slate-800 rounded-2xl overflow-hidden relative">
              <img
                src="/image_1.webp"
                alt="Highway driving scenario"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Customer Value --- */}
      <section
        id="customer_value"
        className="py-24 px-6 bg-slate-50 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">
            Customer Value
          </h2>
          <p className="text-slate-500 mb-16">
            Quantifiable advantages for your global expansion strategy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold mb-3">Reduce Launch Risks</h4>
              <p className="text-slate-500 text-sm">
                Mitigate regulatory and technical failures before they reach the
                market.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mb-6">
                <Navigation className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold mb-3">
                Enhance User Experience
              </h4>
              <p className="text-slate-500 text-sm">
                Deliver localized features that resonate with the Australian
                driver persona.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mb-6">
                <TrendingDown className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold mb-3">Lower Costs</h4>
              <p className="text-slate-500 text-sm">
                Streamline validation cycles through local expertise and
                automated telemetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact / Deployment --- */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-blue-950 mb-6">
              Ready to deploy?
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our consultants are ready to provide a detailed audit of your
              smart cabin architecture for the Australian market.
            </p>
            <div className="flex items-center gap-4 text-blue-800 font-semibold mb-12">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <a
                href="mailto:business@relianex.com.au"
                className="hover:underline text-lg"
              >
                business@relianex.com.au
              </a>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <h5 className="font-bold text-sm tracking-wider text-slate-500 uppercase mb-6">
                Consultation Services
              </h5>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-cyan-500" />
                  Market Entry Regulatory Audit
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-cyan-500" />
                  Technical Feasibility Studies
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-cyan-500" />
                  On-road Performance Benchmarking
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-blue-950 p-8 md:p-10 rounded-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              {/* Abstract decorative icon */}
              <Map className="w-48 h-48" />
            </div>
            <h3 className="text-2xl font-bold mb-8 relative z-10">
              Direct Inquiry
            </h3>
            <form className="space-y-6 relative z-10">
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-blue-900/50 border border-blue-800 rounded-md px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  placeholder="Automotive Brand"
                  className="w-full bg-blue-900/50 border border-blue-800 rounded-md px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                  Requirement
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we assist your deployment?"
                  className="w-full bg-blue-900/50 border border-blue-800 rounded-md px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-cyan-400 text-blue-950 font-bold py-4 rounded-md hover:bg-cyan-300 transition-colors mt-4"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white border-t border-slate-200 py-8 px-6 text-sm text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="font-bold text-blue-900 text-lg tracking-tighter">
              RELIANEX
            </div>
            <p>
              © 2024 RELIANEX. Precision Architecture in Automotive Testing.
              Empowering global innovation with local precision.
            </p>
          </div>
          <div className="flex gap-6 font-medium">
            <a href="#" className="hover:text-blue-600">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:text-blue-600">
              TERMS OF SERVICE
            </a>
            <a href="#" className="hover:text-blue-600">
              COMPLIANCE
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
