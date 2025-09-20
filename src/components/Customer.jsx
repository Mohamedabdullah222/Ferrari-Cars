import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import {
  customers1,
  customers2,
  customers3,
  customers4,
  customers5,
  customers6,
} from "../assets";

const Customer = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const data = [
    {
      id: 1,
      title: "The car 812 Competizione veryGood",
      name: "Hala Nageh",
      img: customers1,
    },
    {
      id: 2,
      title: "The car F90 Xx Spider veryGood",
      name: "Fofa Abdo",
      img: customers2,
    },
    {
      id: 3,
      title: "The car Ferrari 296 GTB veryGood",
      name: "Nahed Mohamed",
      img: customers3,
    },
    {
      id: 4,
      title: "The car Ferrari Purosangue veryGood",
      name: "Yousef Ahmed",
      img: customers4,
    },
    {
      id: 5,
      title: "The car SF90 Xx Stradale veryGood",
      name: "Yehya Ahmed",
      img: customers5,
    },
    {
      id: 6,
      title: "The car Ferrari 12Cilindri veryGood",
      name: "Yousef Abdullah",
      img: customers6,
    },
  ];

  return (
    <div id="customers" className="py-10 bg-[#444] text-white">
      <div className="flex flex-col items-center text-center mb-6">
        <h1 className="font-medium capitalize text-white text-2xl">
          Customers
        </h1>
        <div className=" bg-orange-400 w-[100px] h-[3px] rounded mt-3 "></div>
      </div>
      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide>
              <div key={item.id} className="flex flex-col items-center gap-4">
                <img src={item.img} className="w-20 h-20 rounded-full" alt="" />
                <p className=" text-lg">{item.title}</p>
                <h3 className=" font-bold">- {item.name}</h3>
              </div>
            </SwiperSlide>
          ))}

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Customer;
