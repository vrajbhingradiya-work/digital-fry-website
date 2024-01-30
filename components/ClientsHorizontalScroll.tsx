import React from "react";
import HorizontalScrollCarousel from "./HorizontalClientsScroll";

const ClientsHorizontalScroll = () => {
  return (
    <div className="section p-6  md:p-16 py-12 md:py-24  flex flex-col justify-center gap-6 ">
      <div className=" sticky top-32 text-center text-sm font-semibold text-blue-600 mb-64 ">
        CLIENTS
      </div>

      <div className="">
        <HorizontalScrollCarousel />
      </div>
    </div>
  );
};

export default ClientsHorizontalScroll;
