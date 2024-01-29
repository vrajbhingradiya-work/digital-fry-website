"use client";
import ContactUs from "@/components/ContactUs";
import HorizontalScrollCarousel from "@/components/HorizontalScrollCarousel";
import Reveal from "@/components/utils/Reveal";
import SimpleReveal from "@/components/utils/Simple Reveal";

export default function Service() {
  return (
    <section className="pb-12 pt-20  lg:pb-[90px] lg:pt-[120px] flex  justify-center items-center ">
      <div className="container flex flex-col items-center w-full">
        <div className=" flex flex-wrap">
          <div className="w-full px-4 flex justify-center items-center">
            <Reveal sequence={4}>
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-blue-600">
                  Our Services
                </span>

                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-black sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2>
                <p className="text-base text-body-color text-gray-600">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <HorizontalScrollCarousel />
        <SimpleReveal sequence={2}>
          <div className="w-full flex justify-center items-center ">
            <ContactUs />
          </div>
        </SimpleReveal>
      </div>
    </section>
  );
}
