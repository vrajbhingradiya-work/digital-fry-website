// import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SimpleReveal from "./utils/SimpleReveal";
import Link from "next/link";

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
    <div className="  bg-black  rounded-xl overflow-hidden  w-full md:mb-16  relative">
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

      <div className="absolute bottom-0  w-full h-[40%] flex  p-4 items-center justify-between  bg-gradient-to-t from-black via-black/40 to-transparent   ">
        <div className="text-sm sm:text-md md:text-2xl font-black text-white text-center xl:text-left w-full ">
          <SimpleReveal sequence={4}>
            <p>
              Elevate your brand. <br />
              Scale with our digital marketing expertise
            </p>
          </SimpleReveal>
        </div>
        <div className=" hidden xl:block w-[200px]">
          <Link href="/contactus">
            <motion.button
              whileTap={{ scale: 0.85 }}
              type="button"
              className="absolute  z-20 text-xs text-white  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg md:text-sm px-5 py-2.5 me-2 mb-2bg-blue-600  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:scale-105 transition hover:ease-in-out shadow-black hover:shadow-2xl "
            >
              Schedule a Meeting
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
