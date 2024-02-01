"use client";
import ContactUs from "@/components/ContactUs";
import { servicesCardsInfo } from "@/components/Data/ServicesInfo";
import HorizontalServicesScroll from "@/components/servicesPage/HorizontalServicesScroll";
import SimpleReveal from "@/components/utils/SimpleReveal";
import Popup from "@/components/utils/PopUp";
import HoverDevCards from "@/components/servicesPage/HoverDevCards";
import Clients from "@/components/Clients";

export default function Service() {
  const services = servicesCardsInfo;
  return (
    <div className="p-2 flex flex-col justify-center items-center  w-full">
      <div className=" w-full text-center mt-16 flex justify-center items-center text-black  text-5xl md:text-6xl lg:text-8xl font-bold  ">
        <SimpleReveal sequence={4}>
          <Clients />
        </SimpleReveal>
      </div>

      <div className=" w-full text-center  text-black  text-5xl md:text-6xl lg:text-8xl font-bold  ">
        <SimpleReveal sequence={4}>
          <p>What do we Offer ?</p>
        </SimpleReveal>
      </div>
      <div className=" flex flex-col  items-center w-full">
        <div className=" w-full    py-12 md:py-24  flex flex-col justify-center items-center gap-6  ">
          <SimpleReveal sequence={4}>
            <div className=" sticky  top-16 md:top-28 text-center text-sm font-semibold text-blue-600 md:mb-64 mb-8">
              SERVICES
            </div>
          </SimpleReveal>
          <SimpleReveal sequence={4}>
            <div className="w-full lg:w-[65vw] hidden md:block">
              <HorizontalServicesScroll />
            </div>
          </SimpleReveal>
          <SimpleReveal sequence={4}>
            <div className="w-full  md:hidden mb-64">
              <div className="grid grid-cols-1  gap-6 bg-gray-500 p-8 rounded-xl overflow-hidden">
                {services.map((service, i) => {
                  return (
                    <Popup sequence={i / 2} key={i}>
                      <HoverDevCards service={service} key={service.title} />
                    </Popup>
                  );
                })}
              </div>
            </div>
          </SimpleReveal>
        </div>
        <div className="w-full flex justify-center items-center ">
          <SimpleReveal sequence={3}>
            <ContactUs />
          </SimpleReveal>
        </div>
      </div>
    </div>
  );
}
