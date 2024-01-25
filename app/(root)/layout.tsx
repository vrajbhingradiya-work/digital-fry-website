import FixedNavbar from "@/components/FixedNavbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="text-black">
        {" "}
        <FixedNavbar />
      </div>
      {children}
    </section>
  );
}
