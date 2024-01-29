import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import image from "../public/images/services/socialMediaManagement.webp";
import RevealLeft from "./utils/RevealLeft";

const card = (item: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  //   const scaleProgress = useTransform(
  //     scrollYProgress,
  //     [0, 0.45, 1],
  //     [0.2, 0.3, 1]
  //   );
  const opacityProgress = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [0, 1.5, 0.5]
  );
  const relativeProgress = useTransform(
    scrollYProgress,

    [0, 1.2],
    ["relative", ""]
  );
  const itemDesc = item.desc.split(" ");
  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityProgress,
        position: relativeProgress,
      }}
      key={item.title}
      className="bg-black flex items-center gap-12 rounded-3xl sticky flex-col lg:flex-row shadow-xl md:w-full h-[80vh] lg:h-[70vh] overflow-hidden px-6 py-4 top-[7rem] lg:top-[22vh] mb-36 "
    >
      <div className="relative bg-transparent   lg:items-start md:justify-start flex flex-col gap-4 text-Right w-full ">
        <RevealLeft sequence={2}>
          <div className=" text-2xl  lg:text-3xl font-bold">{item.title}</div>
        </RevealLeft>
        <div className=" text-lg font-base">
          {itemDesc.map((el: any, i: any) => (
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.25,
                  delay: i / 25,
                },
              }}
              viewport={{ once: true }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </div>
      </div>
      {/* image  */}
      <div className="card-image w-full md:w-full rounded-xl overflow-hidden ">
        <Image src={image} width={500} height={500} alt="services picture" />
      </div>
    </motion.div>
  );
};

export default card;
