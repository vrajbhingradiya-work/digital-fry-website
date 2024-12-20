"use client";

import Image from "next/image";
import { ClientLogosList } from "./Data/ClientsLogos";
import { cn } from "./utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  // direction?: "left" | "right";
  direction?: "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "right") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4  py-4 w-max flex-nowrap ",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {ClientLogosList.map((Logo) => (
          <li
            className="mx-8 max-w-full relative rounded-2xl  overflow-hidden flex items-center"
            // style={{
            //   background:
            //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            // }}

            key={Logo.imgUrl}
          >
            <div
              key={Logo.title}
              className={`${Logo.start} ${Logo.size}  overflow-hidden relative`}
            >
              <Image
                src={Logo.imgUrl}
                alt="Description of your image"
                fill
                object-fit="cover"
              />
            </div>
          </li>
        ))}
        {/* <div className="flex items-center">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="60.000000pt"
            height="60.000000pt"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M2275 4305 c-163 -16 -196 -25 -303 -79 -102 -51 -171 -124 -202
-215 -29 -87 -34 -155 -16 -243 28 -144 86 -215 246 -300 36 -20 86 -47 112
-62 52 -29 58 -31 58 -16 0 6 -7 10 -15 10 -8 0 -15 3 -15 8 0 4 -13 13 -28
20 -38 16 -120 96 -159 152 -49 73 -66 139 -61 239 7 124 62 231 145 282 21
13 39 27 41 31 7 15 149 76 216 93 73 18 291 22 356 6 201 -48 423 -206 497
-352 43 -84 73 -180 80 -252 4 -36 10 -56 17 -54 7 2 11 59 11 178 0 169 -6
218 -39 289 -19 42 -128 143 -191 177 -101 52 -161 66 -385 88 -179 17 -203
17 -365 0z"
              />
              <path
                d="M1655 4290 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0
-12 -4 -9 -10z"
              />
              <path
                d="M1765 4252 c44 -15 82 -30 83 -34 2 -5 13 -8 24 -8 17 0 18 3 8 15
-7 8 -21 15 -31 15 -10 0 -21 5 -24 10 -3 6 -17 10 -30 10 -13 0 -27 5 -30 10
-3 6 -23 10 -43 10 -32 -1 -27 -4 43 -28z"
              />
              <path
                d="M2980 4274 c0 -5 24 -19 53 -32 70 -30 167 -109 193 -158 11 -21 30
-55 41 -74 24 -42 29 -72 63 -352 12 -104 29 -452 36 -758 5 -202 14 -284 29
-268 3 2 5 86 5 185 1 126 5 185 13 191 19 16 225 33 489 40 136 4 250 11 254
15 4 4 -13 7 -37 7 -24 0 -74 5 -111 10 -37 5 -187 12 -334 14 -146 3 -268 7
-270 9 -3 3 -7 67 -10 143 -3 77 -14 282 -25 456 -22 366 -24 494 -8 504 37
23 738 42 891 24 268 -31 508 -127 584 -233 47 -66 94 -159 101 -202 3 -20 10
-38 16 -42 7 -4 8 28 3 98 -3 57 -9 173 -13 257 -3 84 -9 155 -13 157 -15 9
-1950 18 -1950 9z"
              />
              <path
                d="M875 4167 c-71 -43 -179 -118 -230 -160 -181 -147 -336 -371 -415
-597 -7 -19 -16 -44 -20 -55 -11 -28 -27 -91 -39 -150 -5 -27 -15 -74 -20
-103 -16 -81 -14 -393 4 -503 22 -139 44 -227 75 -304 75 -185 140 -287 265
-411 109 -108 213 -173 390 -244 31 -13 76 -27 125 -40 25 -6 59 -16 76 -21
38 -11 97 -12 90 0 -3 4 -21 11 -39 14 -57 9 -168 57 -241 104 -71 46 -221
191 -231 224 -4 10 -11 19 -16 19 -5 0 -9 6 -9 14 0 8 -4 16 -8 18 -4 2 -29
44 -54 93 -101 197 -163 394 -184 580 -3 28 -9 72 -12 99 -16 115 11 483 47
641 25 109 120 369 141 385 4 3 22 34 40 70 19 36 61 100 93 143 52 69 81 97
183 174 31 23 23 30 -11 10z"
              />
              <path
                d="M2083 4099 c-13 -5 -23 -11 -23 -14 0 -3 36 -50 80 -104 44 -55 80
-103 80 -109 0 -5 7 -15 15 -22 9 -7 23 -29 32 -49 9 -20 20 -38 23 -41 6 -5
55 -107 83 -170 33 -74 73 -231 83 -324 1 -17 8 -62 14 -101 16 -97 7 -444
-14 -555 -20 -104 -55 -248 -66 -275 -4 -11 -23 -58 -41 -105 -36 -94 -100
-221 -147 -290 -17 -25 -71 -85 -122 -133 -50 -49 -88 -92 -85 -97 3 -5 21
-14 40 -20 32 -11 41 -9 88 16 342 178 554 505 607 934 12 101 9 390 -4 428
-7 19 -5 24 12 29 21 5 21 6 3 22 -10 9 -23 41 -30 71 -70 320 -195 555 -403
756 -61 60 -151 132 -193 156 -5 3 -20 2 -32 -3z"
              />
              <path
                d="M2771 3086 c2 -2 31 -18 64 -35 96 -50 98 -36 2 18 -32 18 -80 30
-66 17z"
              />
              <path
                d="M2950 2991 c0 -6 4 -11 10 -11 5 0 38 -28 72 -63 121 -121 177 -276
177 -492 1 -354 -192 -647 -509 -773 -154 -61 -369 -81 -505 -46 -33 8 -78 20
-100 25 -22 6 -47 16 -55 23 -8 7 -35 21 -60 30 -24 10 -64 31 -88 47 -24 16
-45 29 -48 29 -5 0 -47 36 -117 100 -51 47 -142 162 -168 215 -9 17 -20 39
-26 50 -41 77 -73 172 -73 219 0 14 -4 26 -8 26 -12 0 -22 -701 -11 -721 6
-11 29 -18 76 -23 66 -6 104 -11 278 -36 214 -30 621 -52 810 -44 201 9 378
51 495 117 83 47 191 159 228 237 66 143 92 261 92 418 0 122 -8 171 -47 273
-47 123 -133 216 -313 338 -110 74 -110 74 -110 62z"
              />
              <path
                d="M4975 2000 c-8 -16 -15 -38 -15 -50 0 -31 -54 -153 -92 -208 -72
-105 -143 -147 -303 -181 -57 -12 -344 -8 -570 9 -82 5 -250 14 -373 19 -221
8 -224 8 -249 33 l-25 26 11 113 c9 97 9 134 -2 118 -56 -86 -92 -131 -139
-170 -57 -47 -192 -119 -223 -119 -9 0 -14 -4 -11 -8 3 -5 97 -12 208 -16 112
-3 304 -11 428 -16 752 -33 743 -33 1163 -8 185 11 200 13 206 32 4 11 6 31 4
45 -4 28 -3 326 1 379 3 40 1 40 -19 2z"
              />
              <path
                d="M1560 1560 c0 -5 23 -10 50 -10 28 0 50 5 50 10 0 6 -22 10 -50 10
-27 0 -50 -4 -50 -10z"
              />
              <path
                d="M850 1361 c-19 -4 -72 -14 -118 -21 -45 -7 -99 -19 -120 -27 -35 -13
-33 -13 46 -8 150 11 307 5 397 -15 128 -29 221 -54 230 -61 5 -5 17 -9 27 -9
10 0 26 -4 36 -9 9 -5 65 -32 125 -61 59 -28 149 -75 201 -105 202 -114 368
-191 466 -216 264 -67 504 -45 661 62 63 42 138 122 174 184 32 54 87 187 80
194 -3 2 -20 -13 -38 -34 -88 -107 -207 -189 -342 -236 -128 -44 -432 -27
-562 31 -13 5 -33 14 -45 19 -45 18 -126 53 -243 106 -93 41 -343 135 -362
135 -11 0 -23 4 -29 9 -9 9 -111 35 -174 45 -19 3 -48 9 -65 12 -49 10 -307
14 -345 5z"
              />
              <path
                d="M3259 1347 c-30 -24 -49 -62 -49 -103 0 -48 25 -75 106 -115 56 -29
94 -65 95 -93 3 -45 -3 -62 -29 -83 -25 -21 -25 -23 -6 -23 11 0 35 16 54 35
31 32 34 41 34 90 0 66 -15 84 -109 130 -99 48 -128 96 -85 143 22 23 14 37
-11 19z"
              />
              <path
                d="M3571 1331 c23 -19 24 -23 24 -184 0 -161 -1 -166 -24 -191 l-24 -26
79 0 79 0 -28 26 c-26 24 -28 30 -25 102 l3 77 124 0 123 0 1 -78 c0 -68 -3
-81 -23 -102 l-23 -25 79 0 79 0 -28 26 -28 26 3 165 c3 159 4 165 27 184 l23
19 -77 0 c-76 0 -77 0 -55 -18 20 -16 22 -27 22 -91 0 -40 -2 -74 -4 -76 -2
-2 -48 -4 -103 -5 -167 -2 -148 -12 -143 77 4 64 9 80 28 95 22 18 21 18 -55
18 l-77 0 23 -19z"
              />
              <path
                d="M4675 1334 c18 -13 21 -30 25 -162 5 -149 0 -193 -28 -224 -14 -17
-10 -18 64 -18 l79 1 -27 22 -28 23 0 187 0 187 -52 0 c-50 -1 -52 -2 -33 -16z"
              />
              <path
                d="M4866 1340 c58 -23 73 -114 27 -162 -14 -15 -24 -30 -21 -33 3 -3 26
3 51 14 84 36 91 117 17 169 -18 12 -47 22 -64 21 -27 0 -29 -1 -10 -9z"
              />
              <path
                d="M3409 1310 c10 -14 21 -32 24 -40 3 -8 6 4 6 27 1 39 -1 43 -23 41
-24 -2 -24 -3 -7 -28z"
              />
              <path
                d="M4188 1313 c-18 -15 -36 -33 -41 -40 -4 -7 -13 -18 -20 -25 -7 -7
-19 -35 -27 -61 -21 -76 13 -161 88 -219 44 -35 61 -26 27 14 -14 17 -32 46
-40 65 -28 66 -14 192 26 240 50 61 45 73 -13 26z"
              />
              <path
                d="M4448 1303 c39 -50 52 -93 52 -169 0 -73 -12 -106 -54 -151 -41 -45
-12 -44 41 2 47 40 83 109 83 159 0 65 -52 151 -111 181 -41 22 -43 19 -11
-22z"
              />
              <path
                d="M3190 997 c0 -38 3 -45 23 -50 12 -3 33 -9 47 -13 21 -7 20 -3 -13
25 -20 18 -37 41 -37 51 0 11 -4 22 -10 25 -6 4 -10 -11 -10 -38z"
              />
            </g>
          </svg>
        </div> */}
      </ul>
    </div>
  );
};
