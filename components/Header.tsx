import React from "react";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
  return (
    <div
      className={`
        border w-full h-[100px] flex justify-between bg-[var(--background)]
        px-[30px]
        `}
    >
      <div className="bg-black text-white w-[100px] text-center">Relianex</div>
      <HeaderLinks />
    </div>
  );
};

export default Header;
