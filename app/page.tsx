"use client";
import About from "@/components/About";
import Clients from "@/components/Clients";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import LatestWorks from "@/components/LatestWorks";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Services from "@/components/Services";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [pathname, setPathname] = useState("");
  const currentPathname = usePathname();

  useEffect(() => {
    setPathname(currentPathname);
    console.log(currentPathname);
  }, [pathname]);

  return (
    <div className="px-8 py-0 flex flex-col gap-4">
      <Profile />
      <Clients />
      <About />
      <Services />
      <LatestWorks />
      <ContactUs />
    </div>
  );
}
