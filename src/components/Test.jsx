import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Test = () => {
  const [state, handleSubmit] = useForm("xovnlnwy");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="container mx-auto my-10 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#1E1E1E] rounded-lg shadow-md p-6">
          <h1 className="text-3xl text-white my-2">
            Need Help ? Open a Ticket
          </h1>
          <p className="text-white my-2">
            Our Support Team Will Get Back To You ASAP Via Email
          </p>
          <form onSubmit={handleSubmit} action="">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 my-4">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-sm mb-2 text-white font-medium"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter Your Name"
                  className="w-full my-2 bg-[#444] py-3 px-3 text-white outline-none rounded-md text-sm focus:ring-2 focus:ring-[#777] transition duration-300"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="mb-4">
                <label className="text-sm mb-2 text-white font-medium">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  className="w-full my-2 bg-[#444] py-3 px-3 text-white outline-none rounded-md text-sm focus:ring-2 focus:ring-[#777] transition duration-300"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write Your Message Here ..."
                className="w-full p-4 rounded-lg bg-[#444] text-white focus:outline-none focus:ring-2 focus:ring-[#777] transition duration-300"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="px-6 py-3 bg-[#444] hover:bg-[#555] rounded-full text-white font-semibold shadow-md focus:outline-none focus:ring-1 focus:ring-white transition duration-500"
            >
              Submit Ticket
            </button>
          </form>
        </div>

        <div className="bg-[#1E1E1E] rounded-lg shadow-md p-6">
          <h1 className="text-2xl text-white mb-4 font-bold">
            Need Help ? Open a Ticket
          </h1>
          <p className="text-white">
            Our Support Team Will Get Back To You ASAP Via Email
          </p>
          <h1 className="text-2xl font-bold text-white my-4">
            Contact Us
          </h1>
          <h4 className="text-xl text-white mb-4 font-bold">
            Tools & Technologies I Used
          </h4>
          <h4 className="text-white">
            React js, TailwindCss, React Icons, Swiper, FormSpree
          </h4>
          <div className="flex items-center sm:justify-start my-5">
            <HiLocationMarker className=" text-[#F97316]" />
            <span className="text-xl text-white ml-2">
              Mansoura City, Country
            </span>
          </div>
          <div className="flex items-center sm:justify-start my-5">
            <FaPhone className=" text-[#F97316]" />
            <span className="text-xl text-white ml-2">+201019564363</span>
          </div>
          <div className="flex items-center sm:justify-start">
            <IoMdMail className=" text-[#F97316]" />
            <span className="text-xl text-white ml-2">
                
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
