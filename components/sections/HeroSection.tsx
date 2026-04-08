import React from "react";

export default function HeroSection() {
  return (
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
  );
}
