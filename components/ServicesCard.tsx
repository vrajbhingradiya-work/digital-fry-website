import React from "react";
import RevealRight from "./utils/RevealRight";
import Image from "next/image";
import Link from "next/link";
import socialmediamanagement from "@/public/images/services/socialmediamanagement.svg";
import packagingandlabelling from "@/public/images/services/packagingandlabelling.svg";
import logodesigning from "@/public/images/services/logodesigning.svg";
import contentcreation from "@/public/images/services/contentcreation.svg";

const ServicesCard = ({ service }: any) => {
  const serviceObjects = [
    { title: "contentcreation", icon: contentcreation },
    { title: "socialmediamanagement", icon: socialmediamanagement },

    { title: "logodesigning", icon: logodesigning },

    { title: "packagingandlabelling", icon: packagingandlabelling },
  ];

  const imgSrc = serviceObjects.find(
    (obj) => service.title.replace(/\s/g, "").toLowerCase() === obj.title
  );
  return (
    <Link
      href={`/services/${service.title.replace(/\s/g, "").toLowerCase()}`}
      className={`w-full h-[250px] md:h-[70vh] flex flex-col justify-end items-start rounded-xl overflow-hidden transition hover:scale-[102%] hover:shadow-2xl shadow-black hover:ease-in-out relative`}
    >
      <Image
        src={imgSrc?.icon}
        alt="Description of your image"
        fill
        className="object-cover"
      />
      <div className="p-4 text-white absolute bg-gradient-to-t from-black via-black/80 to-transparent w-full">
        <RevealRight sequence={2}>
          <div className=" text-xl font-semibold">{service.title}</div>
        </RevealRight>
      </div>
    </Link>
  );
};

export default ServicesCard;
