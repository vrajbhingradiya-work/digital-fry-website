"use client";
import Features from "@/components/servicesPage/Features";
import Gallery from "@/components/servicesPage/Gallery";
import { useParams } from "next/navigation";
import Image from "next/image";
import { servicesCardsInfo } from "@/components/Data/ServicesInfo";
import RevealLeft from "@/components/utils/RevealLeft";
import { useState } from "react";
import ImageModal from "@/components/servicesPage/ImageModal";
export default function service() {
  const params = useParams();
  const service = servicesCardsInfo.find(
    (obj) => obj.title.replace(/\s/g, "").toLowerCase() === params.id
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCardProject, setSelectedCardProject] = useState(null);
  return (
    <>
      <ImageModal
        project={selectedCardProject}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div>
        {service ? (
          <div className=" xl:mt-32 mt-16 overflow-hidden w-full">
            <div className="w-full">
              {/* Container for demo purpose */}
              <div className=" xl:px-6 w-full overflow-hidden">
                {/* Section: Design Block */}
                <section className=" p-2 w-full">
                  <RevealLeft sequence={2}>
                    <h2 className="mb-8 w-full text-left md:text-3xl text-2xl font-bold text-black">
                      {service.title}
                    </h2>
                  </RevealLeft>
                  <div className="flex flex-col w-full items-center">
                    <div
                      className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] h-[35vh] lg:h-[40vh] w-full"
                      data-te-ripple-init=""
                      data-te-ripple-color="dark"
                    >
                      <Image
                        src={service.imgUrl}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                        className="w-full align-middle transition duration-300 hover:ease-linear"
                      />
                    </div>
                    {/* features section */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                      {/* services card */}
                      {service.features.map((feature, index: Number) => {
                        return <Features key={index} feature={feature} />;
                      })}
                    </div>
                  </div>

                  <Gallery
                    setIsOpen={setIsOpen}
                    setSelectedCardProject={setSelectedCardProject}
                    Projects={service.projects}
                  />
                </section>
              </div>
            </div>
          </div>
        ) : (
          <p>Processing</p>
        )}
      </div>
    </>
  );
}
