"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="flex items-center justify-between px-10 py-6">
        <div className="flex-shrink-0">
          <Image
            src="/logo.webp"
            alt="relianex_logo"
            width={800}
            height={240}
            className="h-5 md:h-7 w-auto object-contain"
            priority
          />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          {navLinks.map(({ href, label }) => {
            const id = href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                className={
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1 transition-colors"
                    : "hover:text-blue-600 transition-colors"
                }
              >
                {label}
              </a>
            );
          })}
        </div>

        <button className="hidden md:block bg-blue-900 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
          Contact
        </button>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav — right slide-over */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />
      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 flex flex-col pt-8 px-8 space-y-6 transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="self-end text-slate-900 mb-2"
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
              className={
                isActive
                  ? "text-blue-600 border-l-2 border-blue-600 pl-3 text-sm font-medium transition-colors"
                  : "pl-3 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              }
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
