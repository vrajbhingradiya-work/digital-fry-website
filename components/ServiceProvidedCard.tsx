import SimpleReveal from "./utils/Simple Reveal";
const ServiceProvidedCard = ({ icon, title, details }: any) => {
  return (
    <div className="rounded-[20px] bg-gray-300 p-10  shadow-sm hover:shadow-lg md:px-7 xl:px-10 w-[90vw] md:w-[60vw]  h-[80vh] md:h-[80vh] flex flex-col items-center text-center ">
      <SimpleReveal sequence={5}>
        <div className="mb-8 flex md:h-[70px] w-full h-1/2 md:w-[70px] items-center justify-center rounded-2xl bg-blue-600">
          {icon}
        </div>
      </SimpleReveal>
      <SimpleReveal sequence={6}>
        <h4 className="mb-[14px] text-2xl font-semibold text-black  w-full  ">
          {title}
        </h4>
      </SimpleReveal>
      <SimpleReveal sequence={8}>
        <p className="text-black mb-10 w-full ">{details}</p>
      </SimpleReveal>
      <hr />
      <div className="h-1 w-full hover:block hover:h-10  bg-black rounded-xl"></div>
    </div>
  );
};

export default ServiceProvidedCard;
