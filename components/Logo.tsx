import Image from "next/image";
const Logo = ({ Logo }: any) => {
  return (
    <div key={Logo.title} className="group relative   h-[450px] w-[450px]">
      Hello
      <Image
        src={Logo.imgUrl}
        alt="Description of your image"
        layout="fill"
        className="absolute  inset-0 z-10  transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  );
};

export default Logo;
