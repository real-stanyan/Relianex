import React from "react";
import HeaderLinks from "./HeaderLinks";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className={`
        w-full h-16 md:h-20 flex justify-between items-center
        bg-[var(--background)] border-b border-black/10
        px-4 sm:px-6 md:px-8 lg:px-12
        z-50
      `}
    >
      {/* Logo */}
      <div className="flex items-center w-[40%] sm:w-[30%] md:w-[20%] max-w-[180px]">
        <Image
          src="/logo.webp"
          alt="relianex_logo"
          width={800}
          height={240}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 导航（HeaderLinks 内已处理移动端 dropdown） */}
      <div className="flex items-center flex-1 justify-end">
        <HeaderLinks />
      </div>
    </header>
  );
};

export default Header;
