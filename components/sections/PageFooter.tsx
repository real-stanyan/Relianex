import React from "react";

export default function PageFooter() {
  return (
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
  );
}
