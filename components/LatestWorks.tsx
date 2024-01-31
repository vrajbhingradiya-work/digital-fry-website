import React from "react";
import LatestWorksCard from "./LatestWorksCard";
import Popup from "./utils/PopUp";
import { servicesCardsInfo } from "./Data/ServicesInfo";
import RevealLeft from "./utils/RevealLeft";
import SimpleReveal from "./utils/SimpleReveal";
import Reveal from "./utils/Reveal";

const LatestWorks = () => {
  const works = servicesCardsInfo.slice(0, 3);
  return (
    <div className="section flex flex-col justify-center gap-6  md:px-16">
      <div className="text-sm font-semibold text-blue-600 ">
        <Reveal sequence={2}>
          <p>SERVICES</p>
        </Reveal>
      </div>
      <div className="sectionHeader w-full">
        <RevealLeft sequence={2}>
          <div className="sectionHeading text-black">
            Presenting Our
            <br /> Latest Work
          </div>
        </RevealLeft>
        <div className=" sectionDescription text-gray-600">
          <SimpleReveal sequence={12}>
            <p>
              Explore our latest digital masterpieces: a showcase of innovation,
              creativity, and excellence that defines our commitment to
              exceeding expectations in every project.
            </p>
          </SimpleReveal>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {works.map((work, i) => {
          return (
            <Popup sequence={i} key={i}>
              <LatestWorksCard work={work} />
            </Popup>
          );
        })}
      </div>
    </div>
  );
};

export default LatestWorks;
