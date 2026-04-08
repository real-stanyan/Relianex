import { Map, Mail, Check } from "lucide-react";

export default function ContactSection() {
  return (
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
  );
}
