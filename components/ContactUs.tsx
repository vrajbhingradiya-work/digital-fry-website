import Image from "next/image";
import React from "react";
import image from "../public/images/pexels-pixabay-267350.jpg";

const ContactUs = () => {
  return (
    <div className=" section bg-black  rounded-xl p-12 mb-16">
      <div className="h-full flex justify-center items-end">
        <Image src="" objectFit="contain" alt="" />
        <div className=" w-full p-6 flex md:flex-row flex-col gap-6 md:gap-0  justify-center md:justify-between items-center  ">
          <div className="text-sm sm:text-md md:text-2xl font-black text-white text-center md:text-left w-7/8 sm:w-3/5 md:w-full">
            Elevate your brand. <br />
            Scale with our digital marketing expertise
          </div>
          <button
            type="button"
            className=" text-xs text-white bg-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg md:text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:scale-105 transition hover:ease-in-out shadow-black hover:shadow-2xl"
          >
            Schedule a Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
