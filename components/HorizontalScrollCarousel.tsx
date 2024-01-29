import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import SimpleRevealUp from "./utils/SimpleRevealUp";
import Logo from "./Logo";

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
