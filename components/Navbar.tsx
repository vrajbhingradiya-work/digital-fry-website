"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Reveal from "./utils/Reveal";
export default function Navbar() {
  const pathname = usePathname();
  const isPhoneMenuVisible = false;

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
        {isScrolling ? (
          <>
            <NavbarScroll isScrolling={isScrolling} />
            <FixedNavbar />
          </>
        ) : (
          <FixedNavbar pathname={pathname} />
        )}
      </AnimatePresence>
    </>
  );
}

function FixedNavbar({ pathname }: any) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      x: "0%",
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      x: "0%",
      transition: {
        delay: 0.15,
        duration: 0.5,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      x: "100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const navbarOptions = [
    { title: "Home", url: "/" },
    { title: "About", url: "/aboutus" },
    { title: "Services", url: "/services" },
    { title: "Blog", url: "/blog" },
  ];

  return (
    <motion.nav
      initial="closed"
      animate={mobileNavOpen ? "opened" : "closed"}
      className={`${
        pathname === "/"
          ? " text-white fixed bg-white md:bg-transparent md:absolute top-0 md:top-6 z-50 flex justify-between w-full px-8 md:px-16 py-4     "
          : "text-black fixed bg-white md:bg-transparent md:absolute top-0 z-50  flex justify-between w-full px-8 md:px-16 py-4 "
      }`}
    >
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
            variants={hideNavItemsVariant}
            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
        <div className="overflow-y-hidden ">
          <Reveal sequence={1}>
            <motion.h1
              className="text-black text-2xl font-bold"
              variants={hideNavItemsVariant}
            >
              Digital Fry
            </motion.h1>
          </Reveal>
        </div>
      </div>

      {mobileNavOpen ? (
        <AnimatePresence>
          <motion.div
            variants={mobileMenuVariant}
            className="fixed top-0 left-0 h-screen  w-full flex flex-col items-center  bg-black/80 backdrop-blur-[8px] "
          >
            <div className=" flex justify-between items-center p-4 w-full">
              <motion.h1 className="text-white font-bold text-xl">
                Digital Fry
              </motion.h1>

              <motion.button
                className=" flex justify-center items-center"
                variants={fadeInVariant}
                onClick={() => setMobileNavOpen(false)}
              >
                <svg
                  className="fill-white  h-8 w-8 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </motion.button>
            </div>
            <motion.ul className="w-full px-4" variants={ulVariant}>
              {navbarOptions.map((element, i) => {
                return (
                  <Reveal sequence={i + 1} key={element.url}>
                    <motion.button
                      variants={liVariant}
                      whileTap={{ scale: 0.85 }}
                      onClick={() => setMobileNavOpen(false)}
                      className="navbarItem p-3"
                    >
                      <Link
                        className="text-white font-extrabold text-5xl "
                        href={element.url}
                      >
                        {element.title}
                      </Link>
                    </motion.button>
                  </Reveal>
                );
              })}
            </motion.ul>
            <motion.div
              variants={fadeInVariant}
              className="flex justify-center items-center "
            >
              <div
                className=" md:block "
                onClick={() => setMobileNavOpen(false)}
              >
                <Reveal sequence={5}>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={() => setMobileNavOpen(false)}
                    className="p-24"
                  >
                    <Link
                      href="/contactus"
                      onClick={() => setMobileNavOpen(false)}
                      className=" navbarButton rounded-lg"
                    >
                      Contact Us
                    </Link>
                  </motion.button>
                </Reveal>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="hidden md:flex items-center gap-6 ">
          {navbarOptions.map((element, i) => {
            return (
              <Reveal sequence={i + 1} key={element.url}>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="navbarItem"
                >
                  <Link href={element.url}>{element.title}</Link>
                </motion.button>
              </Reveal>
            );
          })}
        </div>
      )}
      <div className="hidden md:block">
        <Reveal sequence={5}>
          <motion.button whileTap={{ scale: 0.85 }} className="p-2">
            <Link href="/contactus" className=" navbarButton rounded-lg">
              Contact Us
            </Link>
          </motion.button>
        </Reveal>
      </div>
      <div className="md:hidden">
        <motion.div
          variants={hideNavItemsVariant}
          onClick={() => setMobileNavOpen(true)}
        >
          {/* set Mobile menu open icon */}
          <svg
            className="fill-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            id="Bold"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path d="M1.5,6h21a1.5,1.5,0,0,0,0-3H1.5a1.5,1.5,0,0,0,0,3Z" />
            <path d="M22.5,8H1.5a1.5,1.5,0,0,0,0,3h21a1.5,1.5,0,0,0,0-3Z" />
            <path d="M22.5,18H1.5a1.5,1.5,0,0,0,0,3h21a1.5,1.5,0,0,0,0-3Z" />
            <path d="M22.5,13H1.5a1.5,1.5,0,0,0,0,3h21a1.5,1.5,0,0,0,0-3Z" />
          </svg>
        </motion.div>
      </div>
    </motion.nav>
  );
}

// scroll navbar

function NavbarScroll({ isScrolling }: any) {
  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="hidden fixed z-50 md:flex right-2 md:right-auto  justify-between px-4 py-2 rounded-full ts-bg md:left-1/2 top-10 border-black text-gray-600 border-2 backdrop-blur-[8px]"
    >
      <div className="hidden md:flex items-center text-black   ">
        <div className="navbarItem">
          <Link href="/">Home</Link>
        </div>
        <div className="navbarItem">
          <Link href="/aboutus">About</Link>
        </div>
        <div className="navbarItem">
          <Link href="/services">Services</Link>
        </div>
        <div className="navbarItem">
          <Link href="/blog">Blog</Link>
        </div>
        <motion.button
          whileTap={{ scale: 0.85 }}
          className="navbarButton rounded-full "
        >
          <Link href="/contactus">Contact us</Link>
        </motion.button>
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
