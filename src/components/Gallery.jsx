import React from "react";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
} from "../assets";

const Gallery = () => {
  const gallerys = [
    { id: 1, img: gallery1 },
    { id: 2, img: gallery2 },
    { id: 3, img: gallery6 },
    { id: 4, img: gallery4 },
    { id: 5, img: gallery5 },
    { id: 6, img: gallery3 },
  ];
  return (
    <div id="gallery" className="bg-[#444] py-10 px-3">
      <div className="flex flex-col items-center text-center mb-6">
        <h1 className="font-medium capitalize text-white text-2xl">Gallery</h1>
        <div className=" bg-orange-400 w-[100px] h-[3px] rounded mt-3 "></div>
      </div>

      <div className=" container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {gallerys.map((gallery) => (
          <div key={gallery.id} className="">
            <img
              src={gallery.img}
              alt=""
              className=" w-full h-full hover:scale-95 transition-transform object-cover duration-500 rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
