import React from "react";

const FounderSection = () => {
  return (
    <div className="bg-black/70 py-20 rounded-2xl  mb-32 md:my-16 bg-backdrop-[8px] ">
      <div className="xl:container mx-auto px-6 md:px-12">
        <div className="mb-28">
          <h2 className="mb-4 text-center text-2xl font-bold text-white md:text-4xl">
            Founders Forging Futures
          </h2>
          <p className="text-center text-gray-100 lg:mx-auto lg:w-8/12 text-xs md:text-base lg:text-xl">
            Meet the visionaries of Digital Fry, a dynamic marketing firm that
            drives digital greatness. Our founders offer knowledge, creativity,
            and passion to every project, developing creative methods that stand
            out in the digital landscape. With a focus on client success,
            Digital Fry's founders oversee a team dedicated to producing
            appealing marketing solutions that combine strategy and creativity
            to fry up success for digital businesses.
          </p>
        </div>
        <div className="grid ">
          {/* <div className=" text-center">
            <div className="mx-auto h-56 w-56 rotate-45 overflow-hidden rounded-[4rem] md:h-40 md:w-40 lg:h-56 lg:w-56">
              <img
                className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                src="/images/FounderSushilSir.png"
                alt="founder"
                loading="lazy"
                width={640}
                height={805}
              />
            </div>
            <div className="py-8 ">
              <h4 className="text-2xl text-white">Sushil Kantya</h4>
              <span className="block text-sm text-white">CEO-Founder</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
