import React from "react";

export default function ScenarioSection() {
  return (
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
            don&apos;t just test functionality; we validate human-vehicle
            synergy.
          </p>
          <div className="space-y-4">
            <div className="bg-blue-900/50 border border-blue-800 p-6 rounded-xl flex items-center gap-6">
              <div className="text-4xl font-bold text-cyan-400">20+</div>
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image_1.webp"
              alt="Highway driving scenario"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
