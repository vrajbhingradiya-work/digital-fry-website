"use client";
import About from "@/components/About";
import ClientsHorizontalScroll from "@/components/ClientsHorizontalScroll";
import ContactUs from "@/components/ContactUs";
import LatestWorks from "@/components/LatestWorks";
import Profile from "@/components/Profile";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="px-4  flex flex-col gap-4">
      <Profile />
      <ClientsHorizontalScroll />
      <About />
      <Services />
      <LatestWorks />
      <ContactUs />
    </div>
  );
}
