import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import SimpleRevealUp from "./utils/SimpleRevealUp";
import Logo from "./Logo";
import { servicesCardsInfo } from "./Data/ServicesInfo";

const HorizontalScrollCarousel = () => {
  const serviceData = servicesCardsInfo;
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-96%"]);
  return (
    <section ref={targetRef} className=" relative h-[300vh] ">
      <div className="sticky top-64 h-[25vh] flex items-center  overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-4 absolute">
          {serviceData.map((logo) => {
            return <Logo Logo={logo} key={logo.title} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
