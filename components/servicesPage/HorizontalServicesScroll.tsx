import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { servicesCardsInfo } from "../Data/ServicesInfo";
import Logo from "../Logo";
import HoverDevCards from "./HoverDevCards";

const HorizontalServicesScroll = () => {
  const serviceData = servicesCardsInfo;
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0.1%", "-96%"]);
  return (
    <section ref={targetRef} className=" relative h-[800vh] w-full">
      <div className="sticky top-32 md:top-40 h-[70vh] md:h-[60vh] flex items-center overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-64 absolute p-4">
          {serviceData.map((service) => {
            return <HoverDevCards service={service} key={service.title} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalServicesScroll;