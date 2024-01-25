import React from "react";
import Link from "next/link";
import FixedNavbar from "./FixedNavbar";

const Profile = () => {
  return (
    <div className="section mt-4 bg-black h-screen flex justify-center items-center rounded-xl relative ">
      <div className=" w-full absolute top-2 z-30 text-white">
        <FixedNavbar />
      </div>
      <div className="flex flex-col items-center justify-start gap-4 text-center ">
        <div className=" w-4/5 sm:w-5/7 md:w-2/3  xl:w-[650px]  responsiveHeading font-black">
          Navigating the Digital Frontier with Precision and Imagination
        </div>
        <div className="w-3/5  sm:w-[350px]   text-xs">
          Maximize online impact with our creative solutions and strategic
          excellence for unparalleled digital success.
        </div>
      </div>
    </div>
  );
};

export default Profile;
