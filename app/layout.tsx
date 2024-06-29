import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Digital Fry",
  description: "Digital Marketing Agency",
  // icons: [
  //   {
  //     rel: "apple-touch-icon",
  //     sizes: "180x180",
  //     url: "/apple-touch-icon.png",
  //   },
  //   {
  //     rel: "icon",
  //     type: "image/png",
  //     sizes: "32x32",
  //     url: "/favicon-32x32.png",
  //   },
  //   {
  //     rel: "icon",
  //     type: "image/png",
  //     sizes: "16x16",
  //     url: "/favicon-16x16.png",
  //   },
  //   {
  //     rel: "mask-icon",
  //     color: "#f8893a",
  //     url: "/safari-pinned-tab.svg",
  //   },
  //   {
  //     rel: "shortcut icon",
  //     url: "/favicon.ico",
  //   },
  // ],
  // manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link
          rel="apple-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="any"
        />
      </head>
      <body className={` ${montserrat.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
