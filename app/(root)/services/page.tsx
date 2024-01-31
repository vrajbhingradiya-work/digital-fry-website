"use client";
import ContactUs from "@/components/ContactUs";
import HorizontalServicesScroll from "@/components/servicesPage/HorizontalServicesScroll";
import SimpleReveal from "@/components/utils/SimpleReveal";
export default function Service() {
  return (
    <section className="p-4 flex flex-col justify-center items-center  w-full">
      <div className=" w-full text-center mt-32 text-black  text-5xl md:text-6xl lg:text-8xl font-bold  ">
        <SimpleReveal sequence={4}>
          <p>What do we Offer ?</p>
        </SimpleReveal>
      </div>
      <div className="container flex flex-col  items-center w-full">
        <div className="section w-full p-2 md:p-16  py-12 md:py-24  flex flex-col justify-center items-center gap-6  ">
          <div className=" sticky  top-16 md:top-28 text-center text-sm font-semibold text-blue-600 mb-64 ">
            SERVICES
          </div>

          <div className="w-full lg:w-[65vw] ">
            <HorizontalServicesScroll />
          </div>
        </div>
        <SimpleReveal sequence={3}>
          <div className="w-full flex justify-center items-center ">
            <ContactUs />
          </div>
        </SimpleReveal>
      </div>
    </section>
  );
}
