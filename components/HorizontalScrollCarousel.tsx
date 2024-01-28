import { motion, useScroll, useTransform } from "framer-motion";
import Card from "./Card";
import React, { useRef } from "react";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const cards = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 6 },
    { id: 6 },

    { id: 6 },
    { id: 6 },
    { id: 6 },
    { id: 6 },
    { id: 6 },
    { id: 6 },

    { id: 6 },

    { id: 6 },

    { id: 6 },
    { id: 6 },
    { id: 6 },

    { id: 6 },
    { id: 6 },
    { id: 6 },

    { id: 6 },

    { id: 6 },
    { id: 6 },
    { id: 6 },
    { id: 6 },
    { id: 6 },

    { id: 6 },
    { id: 6 },
    { id: 6 },
    { id: 6 },
    { id: 6 },
    { id: 6 },
    { id: 6 },
    { id: 6 },
    { id: 6 },
  ];
  const x = useTransform(scrollYProgress, [0, 2], ["-10%", "-95%"]);
  return (
    <section ref={targetRef} className="relative h-[1200vh] bg-neutral-900">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-purple-500">
        <motion.div style={{ x }} className="flex gap-4 pl-[50vw]">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
