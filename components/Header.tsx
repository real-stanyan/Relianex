import React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-white border-b border-slate-100 sticky top-0 z-50">
      {/* 移除了 p-4，避免把导航栏撑得太高 */}
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

      {/* 导航链接部分保持不变 */}
      <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
        <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">
          Mission
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          Capabilities
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          Services
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          Methodology
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          Value
        </a>
      </div>

      <button className="hidden md:block bg-blue-900 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
        Contact
      </button>

      <button className="md:hidden text-slate-900">
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
};

export default Header;
