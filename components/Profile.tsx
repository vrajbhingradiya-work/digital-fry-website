import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FixedNavbar from "./FixedNavbar";

const Profile = () => {
  const textReveal = {
    hidden: {
      opacity: 0,
      y: "5vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.4,
        duration: 0.5,
        type: "tween",
        stiffness: 300,
      },
    },
  };

  const textRevealChildVariants = {
    hidden: {
      opacity: 0,
      y: "5vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.6,
        duration: 0.5,
        type: "tween",
        stiffness: 300,
      },
    },
  };
  return (
    <div className="section mt-4 bg-black h-screen flex justify-center items-center rounded-xl relative ">
      <div className=" w-full absolute top-2 z-30 text-white">
        <FixedNavbar />
      </div>
      <div className="flex flex-col items-center justify-start gap-4 text-center ">
        <motion.div
          variants={textReveal}
          initial="hidden"
          animate="visible"
          className=" w-4/5 sm:w-5/7 md:w-2/3  xl:w-[650px]  responsiveHeading font-black"
        >
          Navigating the Digital Frontier with Precision and Imagination
        </motion.div>
        <motion.div
          variants={textRevealChildVariants}
          initial="hidden"
          animate="visible"
          className="w-3/5  sm:w-[350px]   text-xs"
        >
          Maximize online impact with our creative solutions and strategic
          excellence for unparalleled digital success.
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
