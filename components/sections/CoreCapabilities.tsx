import React from "react";
import { MapPin, Search, Sliders } from "lucide-react";

export default function CoreCapabilities() {
  return (
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
  );
}
