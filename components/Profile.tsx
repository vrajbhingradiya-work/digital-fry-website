import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./utils/Reveal";

const Profile = () => {
  const textRevealChildVariants = {
    hidden: {
      opacity: 0,
      y: "5vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.8,
        duration: 0.5,
        type: "tween",
        stiffness: 300,
      },
    },
  };
  return (
    <div className="section mt-20 md:mt-4 bg-black py-32 md:py-64 flex justify-center items-center rounded-xl relative ">
      <div className="flex flex-col items-center justify-start gap-4 text-center ">
        <Reveal sequence={5}>
          <div className=" w-4/5 sm:w-5/7 md:w-2/3  xl:w-[650px]  responsiveHeading font-black">
            Navigating the Digital Frontier with Precision and Imagination
          </div>
        </Reveal>
        <Reveal sequence={6}>
          <div className="w-3/5  sm:w-[350px]   text-xs">
            Maximize online impact with our creative solutions and strategic
            excellence for unparalleled digital success.
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Profile;
