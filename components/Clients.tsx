import React from "react";
import Marquee from "react-fast-marquee";
import { ClientLogosList } from "./Data/ClientsLogos";
import Logo from "./Logo";

const Clients = () => {
  const clientLogos = ClientLogosList;
  return (
    <div className="section p-6  md:p-16 py-12 md:py-24  flex flex-col items-center w-full gap-6 ">
      <div className="  text-center text-sm font-semibold text-blue-600  ">
        CLIENTS
      </div>

      <Marquee autoFill pauseOnClick>
        <div className="flex  gap-4 md:gap-16 w-full h-[50vh] mt-32">
          {clientLogos.map((logo) => {
            return <Logo Logo={logo} key={logo.title} />;
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default Clients;
