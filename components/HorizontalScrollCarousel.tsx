import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import ServiceProvidedCard from "./ServiceProvidedCard";
import SimpleRevealUp from "./utils/SimpleRevealUp";

const HorizontalScrollCarousel = () => {
  const serviceData = [
    {
      title: "Refreshing Design",
      details:
        "We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.",
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ... SVG Path ... */}
        </svg>
      ),
    },
    {
      title: "Based on Tailwind CSS",
      details:
        "We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.",
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ... SVG Path ... */}
        </svg>
      ),
    },
    {
      title: "100+ Components",
      details:
        "We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.",
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ... SVG Path ... */}
        </svg>
      ),
    },
    {
      title: "Speed Optimized",
      details:
        "We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.",
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ... SVG Path ... */}
        </svg>
      ),
    },
    {
      title: "Fully Customizable",
      details:
        "We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.",
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ... SVG Path ... */}
        </svg>
      ),
    },
    {
      title: "Regular Updates",
      details:
        "We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics.",
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ... SVG Path ... */}
        </svg>
      ),
    },
  ];
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["42.75%", "-65%"]);
  return (
    <section ref={targetRef} className="relative  h-[600vh]">
      <div className="sticky top-24 h-[85vh] flex items-center justify-center overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-24 ">
          {serviceData.map((service: any, index: any) => {
            return (
              <SimpleRevealUp sequence={index}>
                <ServiceProvidedCard key={index} {...service} />
              </SimpleRevealUp>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
