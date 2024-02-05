// import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SimpleReveal from "./utils/SimpleReveal";

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
    <div className=" rounded-xl overflow-hidden  w-full  ">
      <SimpleReveal sequence={4}>
        <div className="mx-4">
          <div
            className="zoom relative overflow-hidden rounded-t-xl bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] h-[45vh] lg:h-[80vh] w-full "
            data-te-ripple-init=""
            data-te-ripple-color="dark"
          >
            <Image
              src="/images/footer/Footer1.jpg"
              alt="Footer"
              layout="fill"
              objectFit="cover"
              className="w-full align-middle transition duration-300 hover:ease-linear"
            />
          </div>
          <div className="p-4 w-full h-[25%] grid grid-cols-1 lg:grid-cols-2  xl:pb-4 lg:px-8 px-4 items-center justify-between bg-black   rounded-b-xl">
            <div className="text-sm sm:text-md md:text-2xl font-black text-white text-center xl:text-left w-full ">
              <SimpleReveal sequence={4}>
                <p>
                  Elevate your brand. <br />
                  Scale with our digital marketing expertise
                </p>
              </SimpleReveal>
            </div>
            <div className=" p-2 flex justify-center items-center lg:justify-end ">
              <Link
                className="underline hover:underline-none text-xs text-white px-4 py-2 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg md:text-sm   dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition  shadow-black hover:shadow-2xl "
                href="/contactus"
              >
                <motion.button whileTap={{ scale: 0.85 }} type="button">
                  Schedule a Meeting
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </SimpleReveal>
    </div>
  );
};

export default ContactUs;
