import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

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
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1.5]);
  const relativeProgress = useTransform(
    scrollYProgress,

    [0, 1],
    ["relative", ""]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityProgress,
        position: relativeProgress,
      }}
      key={item.step}
      className="bg-black flex items-center gap-12 rounded-3xl sticky flex-col lg:flex-row shadow-xl md:w-full h-[80vh] lg:h-[70vh] overflow-hidden px-6 py-4 top-[7rem] lg:top-[22vh] mb-36 "
    >
      <div className=" bg-transparent  lg:items-start md:justify-start flex flex-col gap-4 text-left w-full ">
        <div className=" text-2xl  lg:text-3xl font-bold">{item.step}</div>
        <div className=" text-lg font-base">{item.content}</div>
      </div>
      {/* image  */}
      <div className="card-image w-full md:w-full rounded-xl overflow-hidden ">
        <img className=" object-contain " src={item.imgUrl} />
      </div>
    </motion.div>
  );
};

export default card;
