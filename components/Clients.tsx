import React from "react";
import { ClientLogosList } from "./Data/ClientsLogos";
import Logo from "./Logo";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

const Clients = () => {
  const clientLogos1 = ClientLogosList.slice(0,ClientLogosList.length/3 );
  const clientLogos2 = ClientLogosList.slice(ClientLogosList.length/3, ClientLogosList.length);

  return (
    <div className="section  flex flex-col items-center w-full gap-6 ">
      <div className="text-center text-sm font-semibold text-blue-600  ">
        CLIENTS
      </div>

      <Marquee fade={true} pauseOnHover={true} className="motion-reduce:overflow-auto [--duration:80s]" >
        <div className="flex  gap-16 md:gap-16 w-full  h-[150px] md:mt-16 pl-4">
          {clientLogos1.map((logo) => {
            return <Logo Logo={logo} key={logo.title} />;
          })}
           {clientLogos1.map((logo) => {
            return <Logo Logo={logo} key={logo.title} />;
          })}
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>

      </Marquee>
      <Marquee fade={true} reverse={true} pauseOnHover={true} className="motion-reduce:overflow-auto [--duration:80s]" >
        <div className="flex  gap-16 md:gap-16 w-full  h-[150px] md:mt-16 pl-4">
          {clientLogos2.map((logo) => {
            return <Logo Logo={logo} key={logo.title} />;
          })}
          {clientLogos2.map((logo) => {
            return <Logo Logo={logo} key={logo.title} />;
          })}
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>

      </Marquee>
    </div>
  );
};

export default Clients;
