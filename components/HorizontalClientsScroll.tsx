import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Logo from "./Logo";
import { ClientLogosList } from "./Data/ClientsLogos";

const HorizontalScrollCarousel = () => {
  const ClientLogos = ClientLogosList.slice(0, 8);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-62%"]);
  return (
    <section ref={targetRef} className=" relative h-[300vh] ">
      <div className="sticky md:top-56 top-36 h-[35vh] flex items-center  overflow-hidden ">
        <motion.div style={{ x }} className="flex  gap-12 md:gap-36 absolute">
          {ClientLogos.map((logo) => {
            return <Logo Logo={logo} key={logo.title} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
