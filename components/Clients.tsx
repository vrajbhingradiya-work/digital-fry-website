import React from "react";
import { ClientLogosList } from "./Data/ClientsLogos";
import Logo from "./Logo";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { InfiniteMovingCardsDemo } from "./Testimonials";

const Clients = () => {
  return (
    <div className="section  flex flex-col items-center w-full gap-6 ">
      <div className="text-center text-sm font-semibold text-blue-600  ">
        CLIENTS
      </div>

      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default Clients;
