"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactUs from "@/components/ContactUs";
import FounderSection from "@/components/FounderSection";
import SimpleReveal from "@/components/utils/SimpleReveal";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <section className="overflow-hidden  lg:pt-16 lg:pb-16 bg-white mt-12">
        <div className="container  flex flex-col gap-8 items-center">
          <SimpleReveal sequence={1}>
            <div
              className="zoom relative overflow-hidden rounded-xl bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] h-[45vh] lg:h-[80vh] w-[95vw]"
              data-te-ripple-init=""
              data-te-ripple-color="dark"
            >
              <Image
                src="/images/aboutus/AboutUs.png"
                alt="Footer"
                layout="fill"
                objectFit="cover"
                className="w-full align-middle transition duration-300 hover:ease-linear  "
              />
            </div>
          </SimpleReveal>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full p-4 ">
            <div className="w-full px-4  text-black flex flex-col gap-4">
              <div className="mt-10 lg:mt-0 lg:px-4">
                <SimpleReveal sequence={6}>
                  <span className="block mb-4 text-lg font-semibold text-blue-600">
                    Why Choose Us
                  </span>
                </SimpleReveal>
                <SimpleReveal sequence={7}>
                  <h2 className="mb-5 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
                    Pioneering the Future of Digital Excellence
                  </h2>
                </SimpleReveal>

                <SimpleReveal sequence={8}>
                  <p className="mb-5 text-base text-body-color dark:text-dark-6">
                    Welcome to Digital Fry, Jaipur's leading digital marketing
                    hub. We specialize in elevating your online presence through
                    tailored strategies, encompassing SEO, paid advertising, and
                    social media management. Beyond being marketers, we're
                    storytellers, forging meaningful connections with your
                    audience.
                  </p>
                </SimpleReveal>
                <SimpleReveal sequence={9}>
                  <p className="mb-8 text-base text-body-color dark:text-dark-6">
                    Our expertise extends to crafting visually striking websites
                    that align seamlessly with your brand identity. At Digital
                    Fry, success is not a mere goal; it's a guarantee. Join us
                    in transforming your brand, expanding your reach, and
                    conquering the digital landscape. Let's embark on a journey
                    to digital excellence together.
                  </p>
                </SimpleReveal>

                <SimpleReveal sequence={11}>
                  <Link
                    className="underline hover:underline-none text-xs text-white px-4 py-2 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg md:text-sm   dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition  shadow-black hover:shadow-2xl "
                    href="/contactus"
                  >
                    <motion.button whileTap={{ scale: 0.85 }} type="button">
                      Get Started
                    </motion.button>
                  </Link>
                </SimpleReveal>
              </div>
            </div>
          </div>
          <SimpleReveal sequence={2}>
            <div className="p-4">
              <FounderSection />
            </div>
          </SimpleReveal>
          <SimpleReveal sequence={2}>
            <div className="w-full flex justify-center items-center p-4">
              <ContactUs />
            </div>
          </SimpleReveal>
        </div>
      </section>
    </>
  );
}
