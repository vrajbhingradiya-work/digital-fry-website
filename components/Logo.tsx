import Image from "next/image";
const Logo = ({ Logo }: any) => {
  return (
    <div
      key={Logo.title}
      className={`${Logo.start} ${Logo.size}  overflow-hidden relative`}
    >
      <Image
        src={Logo.imgUrl}
        alt="Description of your image"
        fill
        object-fit="cover"
      />
    </div>
  );
};

export default Logo;
