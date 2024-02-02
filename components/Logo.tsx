import Image from "next/image";
const Logo = ({ Logo }: any) => {
  return (
    <div
      key={Logo.title}
      className={`group relative  h-[150px] w-[150px]  overflow-hidden hover:scale-110 transition-transform duration-300`}
    >
      <Image
        src={Logo.imgUrl}
        alt="Description of your image"
        fill
        className={`object-cover absolute  inset-0 z-10 scale-[${Logo.scale}]  `}
      />
    </div>
  );
};

export default Logo;
