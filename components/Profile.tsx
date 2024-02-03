import React from "react";
import Link from "next/link";
import Reveal from "./utils/Reveal";
import SimpleReveal from "./utils/SimpleReveal";

const Profile = () => {
  return (
    <div className="section mt-24 xl:mt-4  overflow-hidden flex justify-center items-center rounded-xl  relative">
      <video
        className="w-full h-[80vh]   md:h-full object-cover min-w-screen"
        loop
        preload="auto"
        autoPlay
        muted
      >
        <source src="/videos/theme.mp4" type="video/mp4" />
      </video>

      <div className="flex flex-col items-center justify-center gap-4 text-center absolute ">
        <div className="  w-4/5 sm:w-5/7 md:w-full  xl:max-w-[880px] responsiveHeading font-black  ">
          <SimpleReveal sequence={5}>
            <div className="">Digitalize your Reach!</div>
          </SimpleReveal>
        </div>
        <div className="w-3/5  sm:w-[350px]  text-[0.6rem] sm:text-sm">
          <Reveal sequence={6}>
            <div>
              Maximize online impact with our creative solutions and strategic
              excellence for unparalleled digital success.
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Profile;
