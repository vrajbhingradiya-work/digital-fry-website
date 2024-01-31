import Image from "next/image";
const Logo = ({ Logo }: any) => {
  return (
    <div
      key={Logo.title}
      className="group relative  h-[75px] w-[75px] md:h-[150px] md:w-[150px]  overflow-hidden hover:scale-110 transition-transform duration-300"
    >
      <Image
        src={Logo.imgUrl}
        alt="Description of your image"
        layout="fill"
        className="absolute  inset-0 z-10   "
      />
    </div>
  );
};

export default Logo;
