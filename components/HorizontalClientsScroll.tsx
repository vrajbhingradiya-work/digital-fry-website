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

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-91%"]);
  const xv = useTransform(scrollYProgress, [0, 1], ["-62%", "2%"]);

  return (
    <section
      ref={targetRef}
      className=" relative h-[220vh] md:h-[300vh] flex flex-col gap-32"
    >
      <div className="sticky md:top-[12rem] top-56 h-[15vh] lg:h-[35vh] flex items-center  overflow-hidden flex-col gap-12">
        <motion.div style={{ x }} className="flex  gap-12 md:gap-36 absolute">
          {ClientLogos.map((logo) => {
            return <Logo Logo={logo} key={logo.title} />;
          })}
        </motion.div>
      </div>
      <div className="sticky top-[24rem] h-[15vh]   flex items-center  overflow-hidden ">
        <motion.div
          style={{ x: xv }}
          className="flex  gap-12 md:gap-36 absolute"
        >
          {ClientLogos.map((logo) => {
            return <Logo Logo={logo} key={logo.title} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
