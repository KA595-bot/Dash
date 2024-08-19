import { useState } from "react";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center mx-auto max-w-[1200px] h-24 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">DASH.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer hover:underline ease-in-out">Home</li>
        <li className="p-4 cursor-pointer hover:underline ease-in-out">
          Company
        </li>
        <li className="p-4 cursor-pointer hover:underline ease-in-out">
          Resources
        </li>
        <li className="p-4 cursor-pointer hover:underline ease-in-out">
          About
        </li>
        <li className="p-4 cursor-pointer hover:underline ease-in-out">
          Contact
        </li>
      </ul>
      <div onClick={handleNav} className="block mr-2 md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-5 pl-5">
          DASH.
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
