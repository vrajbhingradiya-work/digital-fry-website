"use client";
import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import LatestWorks from "@/components/LatestWorks";
import Profile from "@/components/Profile";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import SimpleReveal from "@/components/utils/SimpleReveal";

export default function Home() {
  return (
    <div className="px-4  flex flex-col gap-4 w-full">
      <Profile />
      <div className="overflow-hidden w-full text-center mt-16 flex justify-center items-center text-black  text-5xl md:text-6xl lg:text-8xl font-bold  ">
        <SimpleReveal sequence={4}>
          <Clients />
        </SimpleReveal>
      </div>
      <About />
      <Services />
      <LatestWorks />
      <ContactUs />
    </div>
  );
}
