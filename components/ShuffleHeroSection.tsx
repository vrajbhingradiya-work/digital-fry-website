// import React from "react";
import Link from "next/link";
// import Reveal from "./utils/Reveal";
// import SimpleReveal from "./utils/SimpleReveal";

// const Profile = () => {
//   return (
//     <div className="section mt-24 xl:mt-4  overflow-hidden flex justify-center items-center rounded-xl  relative">
//       <video
//         className="w-full h-[80vh]   md:h-full object-cover min-w-screen"
//         loop
//         preload="auto"
//         autoPlay
//         muted
//       >
//         <source src="/videos/theme.mp4" type="video/mp4" />
//       </video>

//       <div className="flex flex-col items-center justify-center gap-4 text-center absolute ">
//         <div className="  w-4/5 sm:w-5/7 md:w-full  xl:max-w-[880px] responsiveHeading font-black  ">
//           <SimpleReveal sequence={5}>
//             <div className="">Digitalize your Reach!</div>
//           </SimpleReveal>
//         </div>
//         <div className="w-3/5  sm:w-[350px]  text-[0.6rem] sm:text-sm">
//           <Reveal sequence={6}>
//             <div>
//               Maximize online impact with our creative solutions and strategic
//               excellence for unparalleled digital success.
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto mt-16 xl:mt-24">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-black/70">
          Digitalize your Reach!
        </h3>
        <p className="text-base md:text-base text-slate-700 my-4 md:my-6">
          Maximize online impact with our creative solutions and strategic
          excellence for unparalleled digital success.
        </p>
        <motion.button whileTap={{ scale: 0.85 }} className="">
          <Link
            href="/contactus"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm px-5 py-2.5  
                  transition hover:ease-in-out hover:scale-[105%]  hover:shadow-2xl shadow-slate-100 cursor-pointer rounded-lg"
          >
            Get in Touch!
          </Link>
        </motion.button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/images/HeroSection/01.jpg",
  },
  {
    id: 2,
    src: "/images/HeroSection/02.jpg",
  },
  {
    id: 3,
    src: "/images/HeroSection/03.jpg",
  },
  {
    id: 4,
    src: "/images/HeroSection/04.jpg",
  },
  {
    id: 5,
    src: "/images/HeroSection/05.jpg",
  },
  {
    id: 6,
    src: "/images/HeroSection/06.jpg",
  },
  {
    id: 7,
    src: "/images/HeroSection/07.jpg",
  },
  {
    id: 8,
    src: "/images/HeroSection/08.jpg",
  },
  {
    id: 9,
    src: "/images/HeroSection/09.jpg",
  },
  {
    id: 10,
    src: "/images/HeroSection/10.jpg",
  },
  {
    id: 11,
    src: "/images/HeroSection/11.jpg",
  },
  {
    id: 12,
    src: "/images/HeroSection/12.jpg",
  },
  {
    id: 13,
    src: "/images/HeroSection/13.jpg",
  },
  {
    id: 14,
    src: "/images/HeroSection/14.jpg",
  },
  {
    id: 15,
    src: "/images/HeroSection/15.jpg",
  },
  {
    id: 16,
    src: "/images/HeroSection/16.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
