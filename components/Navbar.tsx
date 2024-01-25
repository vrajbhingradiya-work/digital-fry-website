"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight / 2) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrolling ? <NavbarScroll isScrolling={isScrolling} /> : <></>}
      </AnimatePresence>
    </>
  );
}

function NavbarScroll({ isScrolling }: any) {
  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="fixed z-50 flex justify-between px-4 py-2 rounded-full ts-bg left-1/2 top-10 border-black text-gray-600 border-2 backdrop-blur-[8px]"
    >
      <div className="flex items-center text-black">
        <div className="navbarItem">
          <Link href="/">Home</Link>
        </div>
        <div className="navbarItem">
          <Link href="/about">About</Link>
        </div>
        <div className="navbarItem">
          <Link href="/services">Services</Link>
        </div>
        <div className="navbarItem">
          <Link href="/blog">Blog</Link>
        </div>
        <div className="navbarButton rounded-full ">
          <Link href="/contactus">Contact us</Link>
        </div>
      </div>
    </motion.nav>
  );
}

const NavAnimations = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};
