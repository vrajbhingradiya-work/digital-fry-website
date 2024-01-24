import React from "react";
import LatestWorksCard from "./LatestWorksCard";

const LatestWorks = () => {
  const works = [
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
  ];
  return (
    <div className="section flex flex-col justify-center gap-6  md:px-16">
      <div className="text-sm text-blue-600 ">SERVICES</div>
      <div className="sectionHeader w-full">
        <div className="sectionHeading text-black">
          Presenting Our
          <br /> Latest Work
        </div>
        <div className=" sectionDescription text-gray-600">
          Explore our latest digital masterpieces: a showcase of innovation,
          creativity, and excellence that defines our commitment to exceeding
          expectations in every project.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {works.map((work) => {
          return <LatestWorksCard work={work} key={work.title} />;
        })}
      </div>
    </div>
  );
};

export default LatestWorks;
