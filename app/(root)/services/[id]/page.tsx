"use client";
import Gallery from "@/components/servicesPage/Gallery";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Image from "next/image";
import { servicesCardsInfo } from "@/components/Data/ServicesInfo";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    console.log(selectedCardProject);
  }, [selectedCardProject]);
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
          {service.pageData.section1.title ? (
            <SimpleReveal sequence={6}>
              <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden  items-center w-full  lg:my-8 ">
                <div className="w-full h-full flex flex-col gap-4 md:gap-12 p-4 py-12 lg:py-24 md:p-8 lg:p-16 xl:p-24 bg-blue-200">
                  <div className="text-xl md:text-2xl xl:text-3xl font-black px-2 lg:px-0 ">
                    {service?.pageData?.section1.title}
                  </div>
                  <div className="text-sm px-2 lg:px-0 mb-6 ">
                    {service.pageData.section1.content}
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    className="text-[0.5rem] w-[150px] rounded-2xl border-2 border-dashed border-black bg-white px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ml-2 xl:ml-0"
                  >
                    <Link href="/contactus">Get Started</Link>
                  </motion.button>
                </div>
                <div className="  w-full xl:h-[60vh] h-[40vh]  ">
                  <div className=" w-full relative h-full">
                    <Image
                      src={service.pageData.section1.imgUrl}
                      alt="image"
                      objectFit="contain"
                      layout="fill"
                      className="w-full align-middle transition duration-300 hover:ease-linear "
                    />
                  </div>
                </div>
              </div>
            </SimpleReveal>
          ) : (
            <></>
          )}

          {/* section2 */}
          {service.pageData.section2.title ? (
            <SimpleReveal sequence={4}>
              <div className="justify-center flex items-center py-8 font-black text-xl md:text-2xl lg:text-3xl text-center px-6 lg:px-0  ">
                <p>{service?.pageData?.section2.title}</p>
              </div>
            </SimpleReveal>
          ) : (
            <></>
          )}
          {/* section3 */}
          {service.pageData.section3.title ? (
            <SimpleReveal sequence={4}>
              <div className="grid grid-cols-1 lg:grid-cols-2  items-center p-2 md:p-4 xl:p-24">
                <div className="w-full md:gap-8 flex flex-col gap-4  p-4 py-12 lg:py-24 md:p-8 lg:p-16 xl:p-24 ">
                  <div className="text-xl md:text-2xl xl:text-3xl font-black px-2 lg:px-0">
                    {service?.pageData?.section3.title}
                  </div>
                  <div className="text-sm px-2 lg:px-0 mb-6">
                    {service?.pageData?.section3?.content}
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    className="text-[0.5rem] w-[150px] rounded-2xl border-2 border-dashed border-black bg-white px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ml-2 xl:ml-0"
                  >
                    <Link href="/contactus">Get Started</Link>
                  </motion.button>
                </div>
                <div className="rounded-lg xl:h-[60vh] h-[40vh]  lg:mr-16 xl:mr-24   overflow-hidden w-full lg:h-full ">
                  <div className="h-full w-full relative">
                    <Image
                      src={service?.pageData?.section3?.imgUrl}
                      alt="image"
                      objectFit="contain"
                      layout="fill"
                      className="w-full align-middle transition duration-300 hover:ease-linear "
                    />
                  </div>
                </div>
              </div>
            </SimpleReveal>
          ) : (
            <></>
          )}
          {/* section4 */}
          {service.pageData.section4.title ? (
            <SimpleReveal sequence={4}>
              <div className="grid grid-cols-1 lg:grid-cols-2  items-center p-2 md:p-4 xl:p-24">
                <div className="w-full md:gap-8 flex flex-col gap-4  p-4 py-12 lg:py-24 md:p-8 lg:p-16 xl:p-24 ">
                  <div className="text-xl md:text-2xl xl:text-3xl font-black px-2 lg:px-0">
                    {service?.pageData?.section4.title}
                  </div>
                  <div className="text-sm px-2 lg:px-0 mb-6">
                    {service?.pageData?.section4?.content}
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    className="text-[0.5rem] w-[150px] rounded-2xl border-2 border-dashed border-black bg-white px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ml-2 xl:ml-0"
                  >
                    <Link href="/contactus">Get Started</Link>
                  </motion.button>
                </div>
                <div className="rounded-lg  xl:h-[60vh] h-[40vh]  lg:mr-16 xl:mr-24   overflow-hidden w-full lg:h-full ">
                  <div className="h-full w-full relative">
                    <Image
                      src={service?.pageData?.section4?.imgUrl}
                      alt="image"
                      objectFit="contain"
                      layout="fill"
                      className="w-full align-middle transition duration-300 hover:ease-linear "
                    />
                  </div>
                </div>
              </div>
            </SimpleReveal>
          ) : (
            <></>
          )}
          {/* section-5 */}
          {service.pageData.section5.title ? (
            <SimpleReveal sequence={4}>
              <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden  items-center w-full h-[80vh] my-12 bg-blue-100">
                <div className="w-full h-full flex flex-col gap-4 md:gap-12 p-4 py-12 lg:py-24 md:p-8 lg:p-16 xl:p-24 bg-blue-200">
                  <div className="text-xl md:text-2xl xl:text-3xl font-black px-2 lg:px-0">
                    {service?.pageData?.section5.title}
                  </div>
                  <div className="text-sm px-2 lg:px-0 mb-6">
                    {service?.pageData?.section5?.content}
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    className="text-[0.5rem] w-[150px] rounded-2xl border-2 border-dashed border-black bg-white px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ml-2 xl:ml-0"
                  >
                    <Link href="/contactus">Get Started</Link>
                  </motion.button>
                </div>
                <div className=" w-full xl:h-full p-16 h-[40vh]">
                  <div className="h-full w-full relative">
                    <Image
                      src={service.pageData.section1.imgUrl}
                      alt="image"
                      objectFit="contain"
                      layout="fill"
                      className="w-full align-middle transition duration-300 hover:ease-linear "
                    />
                  </div>
                </div>
              </div>
            </SimpleReveal>
          ) : (
            <></>
          )}
          {/* SECTION-6 */}
          {service.pageData.section6.title ? (
            <SimpleReveal sequence={4}>
              <div className="justify-center flex items-center py-8 font-black text-xl md:text-2xl lg:text-3xl text-center px-6 lg:px-0  ">
                <p>{service?.pageData?.section6.title}</p>
              </div>
            </SimpleReveal>
          ) : (
            <></>
          )}
          {/* section-7 */}
          {service.pageData.section7.title ? (
            <SimpleReveal sequence={4}>
              <div className="grid grid-cols-1 lg:grid-cols-2  items-center p-2 md:p-4 xl:p-24">
                <div className="rounded-lg  xl:h-[60vh] h-[40vh]     overflow-hidden">
                  <div className="h-full w-full relative">
                    <Image
                      src={service?.pageData?.section7?.imgUrl}
                      alt="image"
                      objectFit="contain"
                      layout="fill"
                      className="w-full align-middle transition duration-300 hover:ease-linear "
                    />
                  </div>
                </div>
                <div className="w-full md:gap-8 flex flex-col gap-4  p-4 py-12 lg:py-24 md:p-8 lg:p-16 xl:p-24 ">
                  <div className="text-xl md:text-2xl xl:text-3xl font-black px-2 lg:px-0">
                    {service?.pageData?.section7.title}
                  </div>
                  <div className="text-sm px-2 lg:px-0 mb-6">
                    {service?.pageData?.section7?.content}
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    className="text-[0.5rem] w-[150px] rounded-2xl border-2 border-dashed border-black bg-white px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ml-2 xl:ml-0"
                  >
                    <Link href="/contactus">Get Started</Link>
                  </motion.button>
                </div>
              </div>
            </SimpleReveal>
          ) : (
            <></>
          )}
          {/* section-8 */}
          {service.pageData.section8.title ? (
            <SimpleReveal sequence={4}>
              <div className="justify-center flex items-center py-8 font-black text-xl md:text-2xl lg:text-3xl text-center px-6 lg:px-0  ">
                <p>{service?.pageData?.section8.title}</p>
              </div>
            </SimpleReveal>
          ) : (
            <></>
          )}
          {/* section-9 */}
          {service.pageData.section9.title ? (
            <SimpleReveal sequence={4}>
              <div className="grid grid-cols-1 lg:grid-cols-2  items-center p-2 md:p-4 xl:p-24">
                <div className="rounded-lg  xl:h-[60vh] h-[40vh]     overflow-hidden">
                  <div className="h-full w-full relative">
                    <Image
                      src={service?.pageData?.section9?.imgUrl}
                      alt="image"
                      objectFit="contain"
                      layout="fill"
                      className="w-full align-middle transition duration-300 hover:ease-linear "
                    />
                  </div>
                </div>
                <div
                  className="w-full md:gap-8 
              {service.pageData.section1.title ? (flex flex-col gap-4  p-4 py-12 lg:py-24 md:p-8 lg:p-16 xl:p-24 "
                >
                  <div className="text-xl md:text-2xl xl:text-3xl font-black px-2 lg:px-0 mb-6">
                    {service?.pageData?.section9.title}
                  </div>
                  <div className="text-sm px-2 lg:px-0 mb-6">
                    {service?.pageData?.section9?.content}
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    className="text-[0.5rem] w-[150px] rounded-2xl border-2 border-dashed border-black bg-white px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ml-2 xl:ml-0"
                  >
                    <Link href="/contactus">Get Started</Link>
                  </motion.button>
                </div>
              </div>
            </SimpleReveal>
          ) : (
            <></>
          )}
          {/* section-10 */}
          {service.pageData.section10.title ? (
            <SimpleReveal sequence={4}>
              <div className="grid grid-cols-1 lg:grid-cols-2  items-center p-2 md:p-4 xl:p-24">
                <div className="rounded-lg  xl:h-[60vh] h-[40vh]     overflow-hidden">
                  <div className="h-full w-full relative">
                    <Image
                      src={service?.pageData?.section10?.imgUrl}
                      alt="image"
                      objectFit="contain"
                      layout="fill"
                      className="w-full align-middle transition duration-300 hover:ease-linear "
                    />
                  </div>
                </div>
                <div className="w-full md:gap-8 flex flex-col gap-4  p-4 py-12 lg:py-24 md:p-8 lg:p-16 xl:p-24 ">
                  <div className="text-xl md:text-2xl xl:text-3xl font-black px-2 lg:px-0">
                    {service?.pageData?.section10.title}
                  </div>
                  <div className="text-sm px-2 lg:px-0 mb-6">
                    {service?.pageData?.section10?.content}
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    className="text-[0.5rem] w-[150px] rounded-2xl border-2 border-dashed border-black bg-white px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ml-2 xl:ml-0"
                  >
                    <Link href="/contactus">Get Started</Link>
                  </motion.button>
                </div>
              </div>
            </SimpleReveal>
          ) : (
            <></>
          )}
          {/* section-11 */}
          {service?.projects && (
            <SimpleReveal sequence={4}>
              <Gallery
                setIsOpen={setIsOpen}
                setSelectedCardProject={setSelectedCardProject}
                Projects={service?.projects}
              />
            </SimpleReveal>
          )}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
