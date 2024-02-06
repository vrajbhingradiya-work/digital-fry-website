"use client";
import Gallery from "@/components/servicesPage/Gallery";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Image from "next/image";
import { servicesCardsInfo } from "@/components/Data/ServicesInfo";
import { useState } from "react";
import Link from "next/link";
import SimpleReveal from "@/components/utils/SimpleReveal";
import ImageModal from "@/components/servicesPage/ImageModal";

export default function services() {
  const params = useParams();
  const service = servicesCardsInfo.find(
    (obj) => obj.title.replace(/\s/g, "").toLowerCase() === params.id
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCardProject, setSelectedCardProject] = useState(null);
  return (
    <div>
      <ImageModal
        project={selectedCardProject}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {service ? (
        <div className="flex flex-col gap-12  items-center p-2  md:p-0  text-black mt-20 xl:mt-32 w-full">
          <SimpleReveal sequence={4}>
            <div className=" text-3xl lg:text-4xl xl:text-6xl font-black text-black my-4 md:my-8 xl:my-12 text-left pl-4 xl:pl-0 xl:text-center">
              {service?.title}
            </div>
          </SimpleReveal>
          {/* section1 */}
          <SimpleReveal sequence={6}>
            <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden  items-center w-full h-[80vh] my-12">
              <div className="w-full h-full flex flex-col gap-4 md:gap-12 p-4 py-12 lg:py-24 md:p-8 lg:p-16 xl:p-24 bg-blue-200">
                <div className="text-xl md:text-2xl xl:text-3xl font-black">
                  {service?.pageData?.section7.title}
                </div>
                <div className="text-sm">
                  {service?.pageData?.section7?.content}
                </div>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="text-[0.5rem] w-[150px] rounded-2xl border-2 border-dashed border-black bg-white px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                >
                  <Link href="/contactus">Get Started</Link>
                </motion.button>
              </div>
              <div className="  w-full lg:h-full h-[40vh] ">
                <div className="h-full w-full relative">
                  <Image
                    src={
                      service?.pageData?.section1?.imgUrl ||
                      "/images/services/SEO.jpg"
                    }
                    alt="image"
                    objectFit="cover"
                    layout="fill"
                    className="w-full align-middle transition duration-300 hover:ease-linear "
                  />
                </div>
              </div>
            </div>
          </SimpleReveal>
          {/* section2 */}
          <SimpleReveal sequence={4}>
            <div className="justify-center flex items-center py-8 font-black text-xl md:text-2xl lg:text-3xl text-center  ">
              <p>
                Sell to your customers where
                <br /> they actually shop...
              </p>
            </div>
          </SimpleReveal>
          {/* section3 */}
          <SimpleReveal sequence={4}>
            <div className="grid grid-cols-1 lg:grid-cols-2  items-center p-2 md:p-4 xl:p-24">
              <div className="w-full md:gap-8 flex flex-col gap-4  p-4 py-12 lg:py-24 md:p-8 lg:p-16 xl:p-24 ">
                <div className="text-xl md:text-2xl xl:text-3xl font-black">
                  {service?.pageData?.section7.title}
                </div>
                <div className="text-sm">
                  {service?.pageData?.section7?.content}
                </div>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="text-[0.5rem] w-[150px] rounded-2xl border-2 border-dashed border-black bg-white px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                >
                  <Link href="/contactus">Get Started</Link>
                </motion.button>
              </div>
              <div className="rounded-lg  md:h-[60vh]  lg:mr-16 xl:mr-24   overflow-hidden w-full lg:h-full h-[40vh]">
                <div className="h-full w-full relative">
                  <Image
                    src={
                      service?.pageData?.section3?.imgUrl ||
                      "/images/services/SEO.jpg"
                    }
                    alt="image"
                    objectFit="cover"
                    layout="fill"
                    className="w-full align-middle transition duration-300 hover:ease-linear "
                  />
                </div>
              </div>
            </div>
          </SimpleReveal>
          {/* section4 */}
          <SimpleReveal sequence={4}>
            <div className="grid grid-cols-1 lg:grid-cols-2  items-center p-2 md:p-4 xl:p-24">
              <div className="w-full md:gap-8 flex flex-col gap-4  p-4 py-12 lg:py-24 md:p-8 lg:p-16 xl:p-24 ">
                <div className="text-xl md:text-2xl xl:text-3xl font-black">
                  {service?.pageData?.section7.title}
                </div>
                <div className="text-sm">
                  {service?.pageData?.section7?.content}
                </div>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="text-[0.5rem] w-[150px] rounded-2xl border-2 border-dashed border-black bg-white px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                >
                  <Link href="/contactus">Get Started</Link>
                </motion.button>
              </div>
              <div className="rounded-lg  md:h-[60vh]  lg:mr-16 xl:mr-24   overflow-hidden w-full lg:h-full h-[40vh]">
                <div className="h-full w-full relative">
                  <Image
                    src={
                      service?.pageData?.section4?.imgUrl ||
                      "/images/services/SEO.jpg"
                    }
                    alt="image"
                    objectFit="cover"
                    layout="fill"
                    className="w-full align-middle transition duration-300 hover:ease-linear "
                  />
                </div>
              </div>
            </div>
          </SimpleReveal>
          {/* section-5 */}
          <SimpleReveal sequence={4}>
            <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden  items-center w-full h-[80vh] my-12 bg-blue-100">
              <div className="w-full h-full flex flex-col gap-4 md:gap-12 p-4 py-12 lg:py-24 md:p-8 lg:p-16 xl:p-24 bg-blue-200">
                <div className="text-xl md:text-2xl xl:text-3xl font-black">
                  {service?.pageData?.section7.title}
                </div>
                <div className="text-sm">
                  {service?.pageData?.section7?.content}
                </div>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="text-[0.5rem] w-[150px] rounded-2xl border-2 border-dashed border-black bg-white px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                >
                  <Link href="/contactus">Get Started</Link>
                </motion.button>
              </div>
              <div className=" w-full xl:h-full p-16 h-[40vh]">
                <div className="h-full w-full relative">
                  <Image
                    src={
                      service?.pageData?.section1?.imgUrl ||
                      "/images/services/SEO.jpg"
                    }
                    alt="image"
                    objectFit="cover"
                    layout="fill"
                    className="w-full align-middle transition duration-300 hover:ease-linear "
                  />
                </div>
              </div>
            </div>
          </SimpleReveal>
          {/* SECTION-6 */}
          <SimpleReveal sequence={4}>
            <div className="justify-center flex items-center py-8 font-black text-xl md:text-2xl lg:text-3xl text-center  ">
              <p>
                Coordinate and publish posts,
                <br /> all from one platform
              </p>
            </div>
          </SimpleReveal>
          {/* section-7 */}
          <SimpleReveal sequence={4}>
            <div className="grid grid-cols-1 lg:grid-cols-2  items-center p-2 md:p-4 xl:p-24">
              <div className="rounded-lg  xl:h-[60vh] h-[40vh]  xl:ml-24   overflow-hidden">
                <div className="h-full w-full relative">
                  <Image
                    src={
                      service?.pageData?.section7?.imgUrl ||
                      "/images/services/SEO.jpg"
                    }
                    alt="image"
                    objectFit="cover"
                    layout="fill"
                    className="w-full align-middle transition duration-300 hover:ease-linear "
                  />
                </div>
              </div>
              <div className="w-full md:gap-8 flex flex-col gap-4  p-4 py-12 lg:py-24 md:p-8 lg:p-16 xl:p-24 ">
                <div className="text-xl md:text-2xl xl:text-3xl font-black">
                  {service?.pageData?.section7.title}
                </div>
                <div className="text-sm">
                  {service?.pageData?.section7?.content}
                </div>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="text-[0.5rem] w-[150px] rounded-2xl border-2 border-dashed border-black bg-white px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                >
                  <Link href="/contactus">Get Started</Link>
                </motion.button>
              </div>
            </div>
          </SimpleReveal>
          {/* section-8 */}
          <SimpleReveal sequence={4}>
            <div className="justify-center flex items-center py-8 font-black text-xl md:text-2xl lg:text-3xl text-center  ">
              <p>
                Use your social channels to drive
                <br />
                engagement and revenue
              </p>
            </div>
          </SimpleReveal>
          {/* section-9 */}
          <SimpleReveal sequence={4}>
            <div className="grid grid-cols-1 lg:grid-cols-2  items-center p-2 md:p-4 xl:p-24">
              <div className="rounded-lg  xl:h-[60vh] h-[40vh]  xl:ml-24   overflow-hidden">
                <div className="h-full w-full relative">
                  <Image
                    src={
                      service?.pageData?.section9?.imgUrl ||
                      "/images/services/SEO.jpg"
                    }
                    alt="image"
                    objectFit="cover"
                    layout="fill"
                    className="w-full align-middle transition duration-300 hover:ease-linear "
                  />
                </div>
              </div>
              <div className="w-full md:gap-8 flex flex-col gap-4  p-4 py-12 lg:py-24 md:p-8 lg:p-16 xl:p-24 ">
                <div className="text-[0.6rem] font-bold ">
                  {service?.title.toUpperCase() || "SOCIAL MEDIA MARKETING"}
                </div>
                <div className="text-xl md:text-2xl xl:text-3xl font-black">
                  {service?.pageData?.section7.title}
                </div>
                <div className="text-sm">
                  {service?.pageData?.section7?.content}
                </div>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="text-[0.5rem] w-[150px] rounded-2xl border-2 border-dashed border-black bg-white px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                >
                  <Link href="/contactus">Get Started</Link>
                </motion.button>
              </div>
            </div>
          </SimpleReveal>
          <SimpleReveal sequence={4}>
            <div className="grid grid-cols-1 lg:grid-cols-2  items-center p-2 md:p-4 xl:p-24">
              <div className="rounded-lg  xl:h-[60vh] h-[40vh]  xl:ml-24   overflow-hidden">
                <div className="h-full w-full relative">
                  <Image
                    src={
                      service?.pageData?.section9?.imgUrl ||
                      "/images/services/SEO.jpg"
                    }
                    alt="image"
                    objectFit="cover"
                    layout="fill"
                    className="w-full align-middle transition duration-300 hover:ease-linear "
                  />
                </div>
              </div>
              <div className="w-full md:gap-8 flex flex-col gap-4  p-4 py-12 lg:py-24 md:p-8 lg:p-16 xl:p-24 ">
                <div className="text-xl md:text-2xl xl:text-3xl font-black">
                  {service?.pageData?.section7.title}
                </div>
                <div className="text-sm">
                  {service?.pageData?.section7?.content}
                </div>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  className="text-[0.5rem] w-[150px] rounded-2xl border-2 border-dashed border-black bg-white px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                >
                  <Link href="/contactus">Get Started</Link>
                </motion.button>
              </div>
            </div>
          </SimpleReveal>
          {/* section-10 */}
          <SimpleReveal sequence={4}>
            <Gallery
              setIsOpen={setIsOpen}
              setSelectedCardProject={setSelectedCardProject}
              Projects={service?.projects}
            />
          </SimpleReveal>
        </div>
      ) : (
        <p>Processing</p>
      )}
    </div>
  );
}
