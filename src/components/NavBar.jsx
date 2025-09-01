import React, { useState } from "react";
import { logo } from "../assets";
import { IoClose, IoMenu } from "react-icons/io5";

const NavBar = () => {
  const [openBar, setOpenBar] = useState(false);

  const links = [
    { id: 1, page: "Home", path: "/" },
    { id: 2, page: "Gallery", path: "/gallery" },
    { id: 3, page: "MenuCars", path: "/menucars" },
    { id: 4, page: "Customers", path: "/customers" },
  ];
  return (
    <div className="fixed top-0 w-full h-16 rounded-b-lg shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center h-full px-4   ">
        <div className="flex items-center ">
          <img src={logo} alt="" className="w-20 rounded" />
          <h1 className="text-[20px] font-bold text-white">Ferrari</h1>
        </div>

        <ul className=" hidden lg:flex text-white text-lg items-center gap-8  ">
          {links.map((link) => (
            <li key={link.id} className="  ">
              <a
                href={link.path}
                className="text-white text-lg font-semibold hover:bg-[#444] p-1 rounded-md transition duration-500"
              >
                {link.page}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <button
            className=" bg-transparent p-2 rounded-full border-[2px] text-white hover:bg-[#444] transition duration-500 font-semibold text-lg
           hover:border-yellow-500"
          >
            ContactUs
          </button>
        </div>

        <div className="lg:hidden" onClick={() => setOpenBar(!openBar)}>
          {!openBar ? (
            <IoMenu className=" text-white cursor-pointer " fontSize={30} />
          ) : (
            <IoClose className=" text-white cursor-pointer " fontSize={30} />
          )}
        </div>
      </div>
      {/* small menu */}
      <div
        className={`fixed w-[200px] h-[100vh] top-0 right-0 bg-[#1E1E1E] transform ${
          openBar ? "translate-x-0" : "translate-x-full"
        }
       transition-transform duration-500 ease-in-out`}
      >
        <div className=" text-white " onClick={() => setOpenBar(false)}>
          <IoClose className=" my-3 mx-3  cursor-pointer" fontSize={30} />
        </div>
        <ul className="flex flex-col text-white text-lg ml-2 items-start gap-8 mt-8  ">
          {links.map((link) => (
            <li key={link.id} className="  ">
              <a
                href={link.path}
                className="text-white text-lg font-semibold hover:bg-[#444] p-1 rounded-md transition duration-500"
              >
                {link.page}
              </a>
            </li>
          ))}
          <div className="  gap-4 ">
            <button
              className=" bg-transparent p-2 rounded-full border text-white  hover:bg-[#444] transition duration-500 font-semibold text-lg
           hover:border-yellow-500"
            >
              ContactUs
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
