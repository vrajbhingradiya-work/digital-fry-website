import React from "react";
import ServicesCard from "./ServicesCard";
import Popup from "./utils/PopUp";
import Reveal from "./utils/Reveal";
import RevealLeft from "./utils/RevealLeft";
import SimpleReveal from "./utils/SimpleReveal";
const Services = () => {
  const services = [
    {
      title: "Social Media Management",
      desc: " Account handling and content creation for your social media accounts",
      imageUrl: "/images/services/SocialMediaManagement.jpg",
    },
    {
      title: "Search Engine Optimization (SEO)",
      desc: " Account handling and content creation for your social media accounts",
      imageUrl: "/images/services/SEO.jpg",
    },
    {
      title: "Content Marketing",
      desc: " Account handling and content creation for your social media accounts",
      imageUrl: "/images/services/ContentManagement.jpg",
    },
    {
      title: "Web Development",
      desc: " Account handling and content creation for your social media accounts",
      imageUrl: "/images/services/WebDev.jpg",
    },
  ];
  return (
    <div className="section p-6  md:p-16 py-12 md:py-24  flex flex-col justify-center gap-6  bg-gray-800 md:bg-gray-500 rounded-xl  ">
      <div className="text-sm font-semibold text-white ">
        <Reveal sequence={2}>
          <p>SERVICES</p>
        </Reveal>
      </div>
      <div className="sectionHeader px-2">
        <RevealLeft sequence={2}>
          <div className="sectionHeading text-white">
            Our Fundamental
            <br /> Expertise
          </div>
        </RevealLeft>

        <div className=" sectionDescription text-white">
          <SimpleReveal sequence={12}>
            <p>
              Unleashing strategic prowess, we leverage cutting-edge tech,
              market insights, and user behavior to craft scalable digital
              marketing solutions that drive unprecedented growth for your
              brand.
            </p>
          </SimpleReveal>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
        {services.map((service, i) => {
          return (
            <Popup sequence={i} key={i}>
              <ServicesCard service={service} key={service.title} />
            </Popup>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
