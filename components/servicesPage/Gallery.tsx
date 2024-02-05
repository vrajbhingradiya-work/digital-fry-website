import Image from "next/image";
import React, { useState } from "react";

const Gallery = ({ Projects, setIsOpen, setSelectedCardProject }: any) => {
  return (
    <>
      {/* Container for demo purpose */}
      <div className="container my-24 mx-auto md:px-6">
        {/* Section: Design Block */}
        <section className="mb-32">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n      .zoom:hover img {\n        transform: scale(1.1);\n      }\n    ",
            }}
          />
          <h2 className="mb-12 text-center text-3xl font-bold text-blue-600">
            Projects we are proud of...
          </h2>
          <div className="grid gap-6 xl:grid-cols-3">
            {/* card */}
            {Projects.map((project: any, index: number) => {
              return (
                <ProjectCards
                  setSelectedCardProject={setSelectedCardProject}
                  setIsOpen={setIsOpen}
                  key={index}
                  project={project}
                />
              );
            })}
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
      {/* Container for demo purpose */}
    </>
  );
};

export default Gallery;

function ProjectCards({ project, setIsOpen, setSelectedCardProject }: any) {
  setSelectedCardProject(project);
  return (
    <div
      onClick={() => setIsOpen(true)}
      className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] h-[30vh] xl:h-[30vh] w-full xl:w-[300px]"
      data-te-ripple-init=""
      data-te-ripple-color="dark"
    >
      <Image
        src={project.imgUrl}
        alt={project.title}
        layout="fill"
        objectFit="cover"
        className="w-full align-middle transition duration-300 hover:ease-linear"
      />

      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
        <div className="flex h-full items-end justify-start">
          <h5 className="m-6 text-lg font-bold text-white">{project.title}</h5>
        </div>
      </div>
      <div>
        <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
      </div>
    </div>
  );
}
