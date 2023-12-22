import { useState } from "react";

import { FaBars, FaGripLines } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaBolt } from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#003b29]">
      <div className="container mx-auto lg:flex flex-wrap items-center justify-between px-3 border-b border-[#134e3c]">
        <div className="lg:w-1/5 sticky top-0 flex justify-between lg:static lg:justify-start h-[10vh] items-center">
          <a
            href="#"
            to="/"
            className="font-medium tracking-wider transition-colors cursor-pointer"
          >
            <button className="flex items-center gap-x-4 text-white">
              <FaBolt className="text-2xl" />
              <p className="text-2xl primary-font">Arco.io</p>
            </button>
          </a>
          <div className="flex items-center">
            <button
              className="cursor-pointer text-xl text-white leading-none px-3 py-1 h-[3rem] block lg:hidden outline-none focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <AiOutlineClose /> : <FaBars />}
            </button>
          </div>
        </div>
        <div
          className={
            "lg:flex flex-grow lg:items-center items-baseline lg:h-auto h-[90vh] justify-center lg:w-4/5" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <ul className="flex flex-col lg:flex-row items-center justify-between w-full gap-x-4 list-none lg:ml-auto lg:transform-none lg:translate-y-[-50%]">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-x-8 lg:w-2/3 lg:border-x border-[#134e3c]">
              <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
                <a href="#">Design</a>
              </li>
              <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
                <a href="#">About us</a>
              </li>
              <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
                <a href="#">Projects</a>
              </li>
              <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
                <a href="#">Contact Team</a>
              </li>
              <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
                <a href="#">Reviews</a>
              </li>
            </div>

            <div className="lg:w-1/3 flex lg:flex-row flex-col items-center justify-end gap-x-8">
              <li className="py-2 text-white font-medium leading-snug hover:opacity-40">
                <a href="#" className=" flex items-center">EN
                <IoMdArrowDropdown /></a>
              </li>
              <li className="py-2 flex text-white font-medium items-center leading-snug hover:opacity-40">
                <FaGripLines className="text-xl" />
              </li>
              <button className="rounded-full px-3 py-2 flex items-center bg-[#fdca51] text-[#003b29] gap-2 transition ease-out duration-300 transform hover:scale-110">
                <p className="">Contact us</p>
                <IoMdArrowDropright className="text-xl" />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
