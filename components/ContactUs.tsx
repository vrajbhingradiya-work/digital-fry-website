import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Reveal from "./utils/Reveal";

const ContactUs = () => {
  return (
    <div className=" section bg-black  rounded-xl  p-24 md:px-12 md:py-24 w-full md:mb-16    ">
      <div className="h-full flex justify-center items-end w-full">
        <Image src="" objectFit="contain" alt="" />
        <div className=" w-full md:p-6 flex md:flex-row flex-col items-center gap-6 md:gap-32 justify-center md:justify-between ">
          <Reveal sequence={2}>
            <div className="text-sm sm:text-md md:text-2xl font-black text-white text-center md:text-left w-7/8 sm:w-3/5 md:w-full">
              Elevate your brand. <br />
              Scale with our digital marketing expertise
            </div>
          </Reveal>
          <Reveal sequence={8}>
            <motion.button
              whileTap={{ scale: 0.85 }}
              type="button"
              className=" text-xs text-white bg-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg md:text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:scale-105 transition hover:ease-in-out shadow-black hover:shadow-2xl"
            >
              Schedule a Meeting
            </motion.button>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
