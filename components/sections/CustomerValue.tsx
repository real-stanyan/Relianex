import React from "react";
import { ShieldCheck, Navigation, TrendingDown } from "lucide-react";

export default function CustomerValue() {
  return (
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
  );
}
