import React from "react";
import { hero } from "../assets";

const Hero = () => {
  return (
    <div
      id="/"
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 my-20 px-4"
    >
      <div className="text-white flex flex-col gap-6 max-w-lg">
        <h3 className="text-3xl font-bold font-mono uppercase text-[#F97316]">
          Sports Cars
        </h3>
        <h1 className="text-4xl font-bold leading-tight ">
          Make Your Day Great With Our Special cars
        </h1>
        <p className="text-lg ]">
          Welcome to our car world, where every car tells a unique story, and
          every road is filled with joy and excitement.
        </p>
        <div className="flex gap-6 ">
          <button className="px-6 py-3 bg-[#444] border  text-white rounded-full hover:bg-transparent transition duration-500">
            Contact Us
          </button>
          <button className="px-6 py-3 bg-transparent border border-white text-white rounded-full hover:border-yellow-500 hover:text-white transition duration-300">
            Order Now
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={hero} alt="Coffee Hero" className="rounded-full" />
      </div>
    </div>
  );
};

export default Hero;
