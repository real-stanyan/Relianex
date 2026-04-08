import React from "react";
import { Map, Radio, Mic, Rocket } from "lucide-react";

export default function OurServices() {
  return (
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
  );
}
