import React from "react";

const LatestWorksCard = ({ work }: any) => {
  return (
    <>
      <div className=" flex flex-col justify-start items-start rounded-xl overflow-hidden transition hover:scale-[102%] hover:shadow-2xl shadow-black hover:ease-in-out">
        {/* add container image */}
        <div className=" flex justify-center items-center w-full  h-[40vh] bg-gray-400">
          <div className="collage bg-white rounded-xl text-black px-2 py-2  ">
            Image
          </div>
        </div>
        <div className="p-4 text-gray-600">
          <div className=" text-xl font-semibold">{work.title}</div>
          <div className="text-xs ">{work.desc}</div>
        </div>
      </div>
    </>
  );
};

export default LatestWorksCard;
