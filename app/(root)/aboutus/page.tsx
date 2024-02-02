"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactUs from "@/components/ContactUs";
import FounderSection from "@/components/FounderSection";
import SimpleReveal from "@/components/utils/SimpleReveal";

export default function AboutUs() {
  return (
    <>
      <section className="overflow-hidden  lg:pt-16 lg:pb-16 bg-white mt-12">
        <div className="container  flex flex-col gap-8 ">
          <SimpleReveal sequence={1}>
            <img
              className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96"
              src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=divat&fit=crop&w=1632&q=100"
              alt=""
            />
          </SimpleReveal>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full ">
            <div className="w-full px-4  text-black flex flex-col gap-4">
              <div className="mt-10 lg:mt-0">
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
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    className="navbarButton rounded-lg"
                  >
                    <Link href="/contactus" className="">
                      Get Started
                    </Link>
                  </motion.button>
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
