import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[var(--background)]">
      {/* 内容区 */}
      <div
        className={`
          mx-auto w-full max-w-7xl
          px-4 sm:px-6 lg:px-12
          py-10 sm:py-12 lg:py-16
        `}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* 左：表单 */}
          <div className="p-4 sm:p-6 rounded-2xl ">
            <h2 className="font-semibold text-2xl sm:text-3xl mb-4">
              Contact Us
            </h2>
            <form className="space-y-4">
              <Input placeholder="Name" aria-label="Your name" />
              <Input type="email" placeholder="Email" aria-label="Your email" />
              <Textarea
                placeholder="Message"
                aria-label="Your message"
                className="min-h-[120px]"
              />
              <button
                type="submit"
                className="w-full bg-[var(--card)] text-[var(--text)] p-4 rounded-lg font-bold text-xl"
              >
                Submit
              </button>
            </form>
          </div>

          {/* 右：联系信息 */}
          <div className="p-4 sm:p-6 flex flex-col gap-6">
            {/* address */}
            <section>
              <h3 className="font-semibold text-xl sm:text-2xl mb-2">
                Address
              </h3>
              <a
                href="https://maps.google.com/?q=746/2 Marquet Street, Rhodes, NSW 2138, Australia"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 hover:opacity-80"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <p className="leading-relaxed">
                  746/2 Marquet Street, Rhodes, NSW 2138, Australia
                </p>
              </a>
            </section>

            {/* phone */}
            <section>
              <h3 className="font-semibold text-xl sm:text-2xl mb-2">
                Contact Number
              </h3>
              <a
                href="tel:+61478197355"
                className="flex items-center gap-3 hover:opacity-80"
              >
                <Phone className="h-5 w-5 shrink-0" />
                <p>+61 0478 197 355</p>
              </a>
            </section>

            {/* email */}
            <section>
              <h3 className="font-semibold text-xl sm:text-2xl mb-2">Email</h3>
              <a
                href="mailto:business@relianex.com.au"
                className="flex items-center gap-3 hover:opacity-80 break-all"
              >
                <Mail className="h-5 w-5 shrink-0" />
                <p>business@relianex.com.au</p>
              </a>
            </section>
          </div>
        </div>
      </div>

      {/* 底栏 */}
      <div
        className="
          bg-[var(--card)] text-[var(--text)]
          px-4 sm:px-6 lg:px-12
          py-4
        "
      >
        <div className="mx-auto w-full max-w-7xl text-center md:text-right font-bold">
          © 2025 Relianex
        </div>
      </div>
    </footer>
  );
};

export default Footer;
