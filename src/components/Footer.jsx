import React from "react";
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaWhatsappSquare,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className=" text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4  ">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold mb-2 text-[#F97316]">
            About Us
          </h1>
          <p>
            We are committed to delivering high-quality solutions and services
            to meet your needs. Our mission is to empower your digital presence.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold mb-2 text-[#F97316]">
            Quick Links
          </h1>
          <p className=" cursor-pointer hover:text-[#1E1E1E] transition duration-300">
            Home
          </p>
          <p className=" cursor-pointer hover:text-[#1E1E1E] transition duration-300">
            Gallery
          </p>
          <p className=" cursor-pointer hover:text-[#1E1E1E] transition duration-300">
            MenuCars
          </p>
          <p className=" cursor-pointer hover:text-[#1E1E1E] transition duration-300">
            Customers
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold mb-2 text-[#F97316]">
            Contact Us
          </h1>
          <div className="flex items-center gap-2  sm:justify-start">
            <HiLocationMarker className="text-xl text-[#F97316] " />
            <span>Mansoura City, Country</span>
          </div>
          <div className="flex items-center gap-2  sm:justify-start">
            <FaPhone className="text-xl text-[#F97316] " />
            <span>+201019564363</span>
          </div>
          <div className="flex items-center gap-2  sm:justify-start">
            <IoMdMail className="text-xl text-[#F97316] " />
            <span>mohammedapdala12@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-[#1E1E1E] my-3 shadow " />
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
        <div className="flex gap-4">
          <a href="https://www.instagram.com/mohamed_abd_3" target="_blank">
            <GrInstagram className="bg-[#1E1E1E] text-white p-1 rounded-lg size-10 cursor-pointer hover:bg-transparent hover:scale-110 transition duration-300" />
          </a>
          <a href="https://github.com/Mohamedabdullah222" target="_blank">
            <FaGithub className="bg-[#1E1E1E] text-white p-1 rounded-lg size-10 cursor-pointer hover:bg-transparent hover:scale-110 transition duration-300" />
          </a>
          <a
            href="https://linkedin.com/in/mohamed-abdullah-m"
            target="_blank"
          >
            <FaLinkedin className="bg-[#1E1E1E] text-white p-1 rounded-lg size-10 cursor-pointer hover:bg-transparent hover:scale-110 transition duration-300" />
          </a>
          <a href="https://Wa.me/+201019564363" target="_blank">
            <FaWhatsappSquare className="bg-[#1E1E1E] text-white p-1 rounded-lg size-10 cursor-pointer hover:bg-transparent hover:scale-110 transition duration-300" />
          </a>
          <a href="https://www.facebook.com/MohamedAbdullahh22" target="_blank">
            <FaFacebookSquare className="bg-[#1E1E1E] text-white p-1 rounded-lg size-10 cursor-pointer hover:bg-transparent hover:scale-110 transition duration-300" />
          </a>
        </div>

      <p className="py-4 text-center text-xs md:text-sm text-gray-200">
        Copyright 2025 © <a href="https://ferrari-cars.vercel.app/">Ferrari-Cars</a>. All Right Reserved.
      </p>
      </div>
    </div>
  );
};

export default Footer;
