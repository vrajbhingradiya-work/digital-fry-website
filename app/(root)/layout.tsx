import Footer from "@/components/Footer";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="flex flex-col items-center">{children}</section>;
}
