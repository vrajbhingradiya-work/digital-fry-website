// import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Reveal from "./utils/Reveal";
import Link from "next/link";
// import { useEffect, useRef } from "react";

const ContactUs = () => {
  // const videoRef = useRef(null);
  // useEffect(() => {
  //   // Check if the videoRef is not null before accessing the currentTime property
  //   if (videoRef.current) {
  //     // Set the currentTime to 5 seconds
  //     videoRef.current.currentTime = 5;
  //   }
  // }, []);
  return (
    <div className=" section bg-black  rounded-xl overflow-hidden  w-full md:mb-16    relative">
      <video
        // ref={videoRef}
        className="w-full h-[80vh] md:h-[50vh]  object-cover min-w-screen"
        loop
        preload="auto"
        autoPlay
        muted
      >
        <source src="/videos/theme2.mp4" type="video/mp4" />
      </video>
      <div className="h-full flex  justify-center items-end w-full absolute top-0 ">
        <div className="pb-12 md:pb-8 bg-gradient-to-t from-black via-black/80 to-transparent w-full md:p-6 flex md:flex-row flex-col items-center gap-6 md:gap-32 justify-center md:justify-between absolute ">
          <Reveal sequence={4}>
            <div className="text-sm sm:text-md md:text-2xl font-black text-white text-center md:text-left w-7/8 sm:w-3/5 md:w-full">
              Elevate your brand. <br />
              Scale with our digital marketing expertise
            </div>
          </Reveal>
          <motion.button
            whileTap={{ scale: 0.85 }}
            type="button"
            className=" text-xs text-white bg-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg md:text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:scale-105 transition hover:ease-in-out shadow-black hover:shadow-2xl"
          >
            <Reveal sequence={12}>
              <Link href="/contactus">Schedule a Meeting</Link>
            </Reveal>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
