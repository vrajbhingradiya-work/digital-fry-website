import React from "react";

const ServicesCard = ({ service }: any) => {
  return (
    <div className="w-full h-[45vh] bg-gray-400 flex flex-col justify-end items-start rounded-xl overflow-hidden transition hover:scale-[102%] hover:shadow-2xl shadow-black hover:ease-in-out">
      <div className="p-4 text-white">
        <div className=" text-xl font-semibold">{service.title}</div>
        <div className="text-xs ">{service.desc}</div>
      </div>
    </div>
  );
};

export default ServicesCard;
