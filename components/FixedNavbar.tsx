"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const FixedNavbar = () => {
  const Reveal = {
    hidden: {
      opacity: 0,
      y: 11,
    },
    visible: {
      opacity: [0, 0.3, 0.6, 0.9, 1],
      y: [10, 8, 6, 4, 2, 0],
      transition: {
        delay: 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        ease: "easeInOut",
      },
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };
  return (
    <nav className=" flex justify-between w-full px-8 py-4 ">
      <div className="flex items-center gap-2 text-white">
        <svg
          className="rotate-180"
          width={15}
          height={15}
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
        <motion.p
          variants={Reveal}
          initial="hidden"
          animate={{
            opacity: [0, 0.3, 0.6, 0.9, 1],
            y: [10, 8, 6, 4, 2, 0],
            transition: {
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            },
          }}
          className="text-xl text-gray-600"
        >
          Digital Fry
        </motion.p>
      </div>
      <div className="flex items-center gap-6 ">
        <motion.div
          variants={Reveal}
          initial="hidden"
          animate="visible"
          className="navbarItem"
        >
          <Link href="/">Home</Link>
        </motion.div>
        <motion.div
          variants={Reveal}
          initial="hidden"
          animate={{
            opacity: [0, 0.3, 0.6, 0.9, 1],
            y: [10, 8, 6, 4, 2, 0],
            transition: {
              delay: 0.4,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            },
          }}
          className="navbarItem"
        >
          <Link href="/about">About</Link>
        </motion.div>
        <motion.div
          variants={Reveal}
          initial="hidden"
          animate={{
            opacity: [0, 0.3, 0.6, 0.9, 1],
            y: [10, 8, 6, 4, 2, 0],
            transition: {
              delay: 0.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            },
          }}
          className="navbarItem"
        >
          <Link href="/services">Services</Link>
        </motion.div>
        <motion.div
          variants={Reveal}
          initial="hidden"
          animate={{
            opacity: [0, 0.3, 0.6, 0.9, 1],
            y: [10, 8, 6, 4, 2, 0],
            transition: {
              delay: 0.8,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            },
          }}
          className="navbarItem"
        >
          <Link href="/blog">Blog</Link>
        </motion.div>
      </div>
      <motion.div
        variants={Reveal}
        initial="hidden"
        animate={{
          opacity: [0, 0.3, 0.6, 0.9, 1],
          y: [10, 8, 6, 4, 2, 0],
          transition: {
            delay: 1,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          },
        }}
        className=" "
      >
        <Link href="/contactus" className="navbarButton rounded-lg">
          Contact Us
        </Link>
      </motion.div>
    </nav>
  );
};

export default FixedNavbar;
