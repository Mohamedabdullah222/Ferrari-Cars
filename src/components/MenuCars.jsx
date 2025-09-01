import React from "react";
import {
  images1,
  images2,
  images3,
  images4,
  images5,
  images6,
} from "../assets";

const MenuCars = () => {
  const images = [
    {
      id: 1,
      title: "SF90 Xx Spider",
      prise: 200,
      desc: "Easy to control and stable on fast roads, offering a comfortable and safe driving experience. I recommend you to try it and feel the difference yourself.",
      img: images1,
    },
    {
      id: 2,
      title: "812 Competizione",
      prise: 200,
      desc: "Easy to control and stable on fast roads, offering a comfortable and safe driving experience. I recommend you to try it and feel the difference yourself.",
      img: images2,
    },
    {
      id: 3,
      title: "Ferrari 296 GTB",
      prise: 200,
      desc: "Easy to control and stable on fast roads, offering a comfortable and safe driving experience. I recommend you to try it and feel the difference yourself.",
      img: images3,
    },
    {
      id: 4,
      title: "Ferrari Purosangue",
      prise: 200,
      desc: "Easy to control and stable on fast roads, offering a comfortable and safe driving experience. I recommend you to try it and feel the difference yourself.",
      img: images4,
    },
    {
      id: 5,
      title: "SF90 Xx Stradale",
      prise: 200,
      desc: "Easy to control and stable on fast roads, offering a comfortable and safe driving experience. I recommend you to try it and feel the difference yourself.",
      img: images5,
    },
    {
      id: 6,
      title: "Ferrari 12Cilindri",
      prise: 200,
      desc: "Easy to control and stable on fast roads, offering a comfortable and safe driving experience. I recommend you to try it and feel the difference yourself.",
      img: images6,
    },
  ];

  return (
    <div id="/menucars" className="container mx-auto py-10 px-3  text-white  ">
      <div className="flex flex-col items-center text-center mb-6">
        <h1 className="font-medium capitalize text-white text-2xl">MenuCars</h1>
        <div className=" bg-orange-400 w-[100px] h-[3px] rounded mt-3 "></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {images.map((data) => (
          <div
            key={data.id}
            className="bg-[#1E1E1E] p-3 rounded-md hover:scale-105 transition-transform duration-500"
          >
            <img src={data.img} className="w-96" alt="" />
            <div className="flex justify-between ">
              <h2 className="font-bold text-2xl">{data.title}</h2>
              <p className="font-medium text-2xl">{data.prise} $</p>
            </div>
            <p className="mt-2 text-gray-400">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCars;
