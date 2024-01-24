import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const services = [
    {
      title: "Social Media Management",
      desc: " Account handling and content creation for your social media accounts",
      imageUrl:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Search Engine Optimization (SEO)",
      desc: " Account handling and content creation for your social media accounts",
      imageUrl:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Content Marketing",
      desc: " Account handling and content creation for your social media accounts",
      imageUrl:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Web Development",
      desc: " Account handling and content creation for your social media accounts",
      imageUrl:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className="section p-8 md:p-16 py-12 md:py-24  flex flex-col justify-center gap-6  bg-gray-500 rounded-xl  ">
      <div className="text-sm text-white ">SERVICES</div>
      <div className="sectionHeader">
        <div className="sectionHeading text-white ">
          Our Fundamentals <br />
          Expertise
        </div>
        <div className="sectionDescription text-white">
          Unleashing strategic prowess, we leverage cutting-edge tech, market
          insights, and user behavior to craft scalable digital marketing
          solutions that drive unprecedented growth for your brand.
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
        {services.map((service) => {
          return <ServicesCard service={service} key={service.title} />;
        })}
      </div>
    </div>
  );
};

export default Services;
