"use client";
import CardScroll from "@/components/CardScroll";
import ContactUs from "@/components/ContactUs";
import Reveal from "@/components/utils/Reveal";
import SimpleReveal from "@/components/utils/Simple Reveal";

export default function Service() {
  return (
    <section className="pb-12 pt-20 p-4  lg:pb-[90px] lg:pt-[120px] flex flex-col justify-center items-center  w-full">
      <div className=" w-full text-center mt-32 text-black  text-5xl md:text-6xl lg:text-8xl font-bold  ">
        <SimpleReveal sequence={4}>
          <p>What do we Offer ?</p>
        </SimpleReveal>
      </div>
      <div className="container flex flex-col items-center w-full">
        <CardScroll />
        <SimpleReveal sequence={3}>
          <div className="w-full flex justify-center items-center ">
            <ContactUs />
          </div>
        </SimpleReveal>
      </div>
    </section>
  );
}
