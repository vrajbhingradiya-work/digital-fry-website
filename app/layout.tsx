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
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${montserrat.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
