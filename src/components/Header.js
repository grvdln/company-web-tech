import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="flex py-[12px] justify-between items-center max-w-[1240px] mx-auto">
        <div className="text-3xl">Gaurav & Shilpi's PVT LTD</div>
        {toggleMenu ? (
          <AiOutlineClose onClick={() => setToggleMenu(!toggleMenu)} className="text-white text-2xl block md:hidden" />
        ) : (
          <AiOutlineMenu onClick={() => setToggleMenu(!toggleMenu)} className="text-white text-2xl block md:hidden" />
        )}

        <ul className="hidden md:flex gap-10 text-white">
          <li>Home</li>
          <li>Company</li>
          <li>Resouces</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* Responsive menu */}
        <ul className={` duration-300 fixed bg-black top-[92px] ${toggleMenu ? 'left-[0]' : 'left-[-100%]'} w-full h-screen text-white md:hidden`}>
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resouces</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
