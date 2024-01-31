import React from "react";
import RevealLeft from "./utils/RevealLeft";
import Image from "next/image";

const LatestWorksCard = ({ work }: any) => {
  return (
    <>
      <div className=" flex flex-col justify-start items-start rounded-xl overflow-hidden transition hover:scale-[102%] shadow-md hover:shadow-2xl shadow-black hover:ease-in-out ">
        {/* add container image */}
        <div className=" flex justify-center items-center w-full h-[250px] md:h-[250px]  bg-gray-400 relative">
          <Image
            src={work.imgUrl}
            alt="Description of your image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4 text-gray-600">
          <RevealLeft sequence={2}>
            <div className=" text-xl font-semibold">{work.title}</div>
          </RevealLeft>
          <RevealLeft sequence={6}>
            <div className="text-xs ">{work.title.slice(0, 100)}</div>
          </RevealLeft>
        </div>
      </div>
    </>
  );
};

export default LatestWorksCard;
