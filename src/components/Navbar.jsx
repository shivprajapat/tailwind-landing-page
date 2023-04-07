import React, { useState } from "react";
import { iconHamburgerMenu, iconClose, iconLogo, iconLock } from "../assets";
import { navItems } from "../data";
import Button from "./Button";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <nav className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[600px] mx-auto w-full h-full flex justify-between items-center px-3.5">
        <img src={iconLogo} className="lg:h-[25px] h-[20px]" />
        <div className="hidden md:flex items-center ">
          <ul className="flex gap-4">
            {navItems?.map((item, i) => (
              <li key={i} className="cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="flex justify-between items-center  bg-transparent  px-6 gap-2">
            <img src={iconLock} />
            Login
          </button>
          <Button title="Sign Up For Free" />
        </div>

        <div className="md:hidden cursor-pointer" onClick={handleClick}>
          <img src={toggle ? iconClose : iconHamburgerMenu} />
        </div>
      </div>
      <div
        className={`${
          toggle ? "md:hidden:" : "hidden"
        } absolute z-10 bg-white w-full px-5 pb-4  border-b"`}
      >
        <ul>
          {navItems?.map((item, i) => (
            <li
              key={i}
              className="cursor-pointer hover:bg-gray-100 pb-2 last:pb-0"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-col my-4 gap-4">
          <button className="border border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4">
            <img src={iconLock} />
            Login
          </button>
          <Button title="Sign Up For Free" />{" "}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
