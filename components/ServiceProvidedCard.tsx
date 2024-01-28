import { motion } from "framer-motion";
const ServiceProvidedCard = ({ icon, title, details }: any) => {
  return (
    <div className="rounded-[20px] bg-gray-300 p-10  shadow-sm hover:shadow-lg md:px-7 xl:px-10 w-[90vw] h-[40vh]">
      <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-blue-600">
        {icon}
      </div>
      <h4 className="mb-[14px] text-2xl font-semibold text-black dark:text-black">
        {title}
      </h4>
      <p className="text-black mb-10">{details}</p>
      <hr />
      <motion.div className="h-1 w-full hover:block hover:h-10  bg-black rounded-xl"></motion.div>
    </div>
  );
};

export default ServiceProvidedCard;
