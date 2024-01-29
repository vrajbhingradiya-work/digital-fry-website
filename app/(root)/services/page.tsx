"use client";
import TiltCard from "@/components/TiltCard";
import ContactUs from "@/components/ContactUs";
import SimpleReveal from "@/components/utils/Simple Reveal";

export default function Service() {
  return (
    <section className="p-4 flex flex-col justify-center items-center  w-full">
      <div className=" w-full text-center mt-32 text-black  text-5xl md:text-6xl lg:text-8xl font-bold  ">
        <SimpleReveal sequence={4}>
          <p>What do we Offer ?</p>
        </SimpleReveal>
      </div>
      <div className="container flex flex-col items-center w-full">
        <TiltCard />
        <SimpleReveal sequence={3}>
          <div className="w-full flex justify-center items-center ">
            <ContactUs />
          </div>
        </SimpleReveal>
      </div>
    </section>
  );
}
