"use client";
import ContactUs from "@/components/ContactUs";
import { servicesCardsInfo } from "@/components/Data/ServicesInfo";
import HorizontalServicesScroll from "@/components/servicesPage/HorizontalServicesScroll";
import SimpleReveal from "@/components/utils/SimpleReveal";
import Popup from "@/components/utils/PopUp";
import HoverDevCards from "@/components/servicesPage/HoverDevCards";

export default function Service() {
  const services = servicesCardsInfo;
  return (
    <div className="p-2 flex flex-col  items-center  w-full xl:mt-16 mt-8">
      {/* <div className="mb-16 overflow-hidden w-full text-center mt-16 flex justify-center items-center text-black  text-5xl md:text-6xl lg:text-8xl font-bold  ">
        <SimpleReveal sequence={4}>
          <Clients />
        </SimpleReveal>
      </div> */}

      <div className=" w-full text-center  text-black  text-5xl md:text-6xl lg:text-8xl font-bold mt-16  ">
        <SimpleReveal sequence={4}>
          <p>What do we Offer ?</p>
        </SimpleReveal>
      </div>
      <div className=" flex flex-col  items-center w-full">
        <div className=" w-full    py-12 md:py-24  flex flex-col justify-center items-center gap-6  ">
          <SimpleReveal sequence={4}>
            <div className=" w-[98vw] hidden xl:block">
              <HorizontalServicesScroll />
            </div>
          </SimpleReveal>
          <SimpleReveal sequence={4}>
            <div className="w-full  xl:hidden ">
              <div className="grid grid-cols-1  gap-6 bg-gray-500 p-8  rounded-xl overflow-hidden">
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
      </div>
      <div className="mx-8 w-full">
        <ContactUs />
      </div>
    </div>
  );
}
