import React from "react";
import Popup from "./utils/PopUp";
import RevealRight from "./utils/RevealRight";

const ServicesCard = ({ service, sequence }: any) => {
  return (
    <div className=" w-full h-[250px] md:h-[370px] bg-gray-400 flex flex-col justify-end items-start rounded-xl overflow-hidden transition hover:scale-[102%] hover:shadow-2xl shadow-black hover:ease-in-out">
      <div className="p-4 text-white ">
        <RevealRight sequence={2}>
          <div className=" text-xl font-semibold">{service.title}</div>
        </RevealRight>
        <RevealRight sequence={4}>
          <div className="text-xs ">{service.desc}</div>
        </RevealRight>
      </div>
    </div>
  );
};

export default ServicesCard;
