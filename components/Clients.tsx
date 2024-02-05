import React from "react";
import { ClientLogosList } from "./Data/ClientsLogos";
import Logo from "./Logo";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

const Clients = () => {
  const clientLogos1 = ClientLogosList.slice(0, 8);
  const clientLogos2 = ClientLogosList.slice(8, ClientLogosList.length);

  return (
    <div className="section  flex flex-col items-center w-full gap-6 ">
      <div className="text-center text-sm font-semibold text-blue-600  ">
        CLIENTS
      </div>
      <Marquee
        fade={true}
        pauseOnHover={true}
        className="motion-reduce:overflow-auto [--duration:50s]"
      >
        <div className="flex  gap-16 md:gap-16 w-full items-center md:mt-16 pl-4 ">
          {clientLogos1.map((logo) => {
            return <Logo Logo={logo} key={logo.title} />;
          })}
          {clientLogos2.map((logo) => {
            return <Logo Logo={logo} key={logo.title} />;
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default Clients;
