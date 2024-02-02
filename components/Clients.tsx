import React from "react";
import { ClientLogosList } from "./Data/ClientsLogos";
import Logo from "./Logo";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

const Clients = () => {
  const clientLogos = ClientLogosList;
  return (
    <div className="section p-6   py-12    flex flex-col items-center w-full gap-6 ">
      <div className="text-center text-sm font-semibold text-blue-600  ">
        CLIENTS
      </div>

      <Marquee fade={true} pauseOnHover={true}>
        <div className="flex  gap-16 md:gap-16 w-full  h-[25vh] md:mt-16 ">
          {clientLogos.map((logo) => {
            return <Logo Logo={logo} key={logo.title} />;
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default Clients;
