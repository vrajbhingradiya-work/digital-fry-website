import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import SimpleReveal from "../utils/SimpleReveal";
import Image from "next/image";

const HoverDevCards = ({ service, Icon }: any) => {
  return (
    <SimpleReveal sequence={2}>
      <div className="w-[80vw] h-[40vh] md:w-[60vw]  md:h-[60vh] cursor-pointer  rounded-xl border-[1px] border-slate-300  overflow-hidden group bg-white  flex flex-col justify-end relative">
        <Image
          src={`${service.imgUrl}`}
          alt="Description of your image"
          fill
      style={{objectFit:"cover"}}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 p-4">
          <p className="text-sm md:text-base text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
            {service.desc.substring(0, 250)}
          </p>
        </div>

        {/* <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" /> */}
        <div className="absolute w-full hover:relative flex flex-col items-start  bg-gradient-to-t from-black/70 group-hover:from-transparent via-black/50 group-hover:via-white/30 to-transparent p-4 ">
          <h3 className=" text-xl md:text-2xl mb-2 font-bold text-white relative z-10 duration-300 md:group-hover:scale-150 md:group-hover:translate-x-[20rem] group-hover:translate-x-[0rem] group-hover:-translate-y-10 w-full">
            {service.title}
          </h3>
        </div>
      </div>
    </SimpleReveal>
  );
};

export default HoverDevCards;
