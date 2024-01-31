"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RevealUp from "./utils/RevealUp";
import RevealLeft from "./utils/RevealLeft";
const Footer = () => {
  return (
    <footer className=" p-6 bg-white sm:pt-16 shadow-3xl">
      <hr className="py-6" />

      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <RevealUp sequence={2}>
            <div className="mb-12 md:mb-0  flex flex-col gap-4 items-start">
              <Link href="/" className="flex items-center ">
                <Image
                  src="./public/next.svg"
                  className="mr-3 h-8"
                  width={32}
                  height={32}
                  alt="FlowBite Logo"
                />
                <span className="self-center text-4xl font-bold whitespace-nowrap text-black">
                  Digital Fry
                </span>
              </Link>
              <div className=" text-gray-500 text-[0.85rem] leading-4 ">
                With profound expertise in cutting-edge technologies,
                <br /> market trends, and user behavior, we meticulously
                engineer <br /> digital marketing solutions designed for
                scalability and impact.
              </div>
              {/* icons- list */}
              <div className="flex  mt-4 space-x-6 sm:justify-center sm:mt-0">
                {/* facebook */}
                <Link
                  href="https://www.facebook.com/profile.php?id=100083335640634"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-black"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h1.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h1.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/digitalfry.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-black"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                {/* linked In */}
                <Link
                  href="https://www.linkedin.com/in/digital-fry-5baa72276/"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-black"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </Link>
              </div>
            </div>
          </RevealUp>

          <div className="grid grid-cols-2 gap-8 sm:w-1/2 sm:grid-cols-2">
            <div>
              <RevealLeft sequence={3}>
                <div>
                  <h1 className="mb-3 text-lg font-semibold text-gray-900 ">
                    Services
                  </h1>
                  <div className="text-gray-600 dark:text-gray-400 gap-2">
                    <div className="">
                      <Link
                        href="/services"
                        className="hover:underline text-sm"
                      >
                        Social Media Management
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="/services"
                        className="hover:underline text-sm"
                      >
                        Content Marketing
                      </Link>
                    </div>
                    <div className="">
                      <Link
                        href="/services"
                        className="hover:underline text-sm"
                      >
                        Search Engine Optimization ( SEO )
                      </Link>
                    </div>
                    <div className="">
                      <Link
                        href="/services"
                        className="hover:underline text-sm"
                      >
                        Paid Advertising
                      </Link>
                    </div>
                    <div className="">
                      <Link
                        href="/services"
                        className="hover:underline text-sm"
                      >
                        Email Marketing
                      </Link>
                    </div>
                    <div className="">
                      <Link
                        href="/services"
                        className="hover:underline text-sm"
                      >
                        Web Design and Development
                      </Link>
                    </div>
                    <div className="">
                      <Link
                        href="/services"
                        className="hover:underline text-sm"
                      >
                        Label and Logo Design
                      </Link>
                    </div>
                    <div className="">
                      <Link
                        href="/services"
                        className="hover:underline text-sm"
                      >
                        Ecommerce Management
                      </Link>
                    </div>
                    <div className="">
                      <Link
                        href="/services"
                        className="hover:underline text-sm"
                      >
                        Brand Story Telling
                      </Link>
                    </div>
                  </div>
                </div>
              </RevealLeft>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <RevealLeft sequence={3}>
                  <div>
                    <h1 className="mb-3 text-lg font-semibold text-gray-900 ">
                      Company
                    </h1>
                    <div className="text-gray-600 dark:text-gray-400 gap-2">
                      <div className="">
                        <Link
                          href="/aboutus"
                          className="hover:underline text-sm"
                        >
                          About
                        </Link>
                      </div>
                      <div>
                        <Link href="/blog" className="hover:underline text-sm">
                          Blog
                        </Link>
                      </div>
                      {/* <div className="">
                        <Link
                          href="/career"
                          className="hover:underline text-sm"
                        >
                          Career
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </RevealLeft>
              </div>
              <div>
                <RevealLeft sequence={7}>
                  <div>
                    <h1 className="mb-3 text-lg font-semibold text-gray-900 ">
                      Legals
                    </h1>
                    <div className="text-gray-600 dark:text-gray-400">
                      <div className="">
                        <Link
                          href="https://drive.google.com/file/d/1Hcw_FxnPFAK_Lpo6rZslXQcK6KVcjh_K/view?usp=drive_link"
                          className="hover:underline text-sm"
                        >
                          Privacy Policy
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="https://drive.google.com/file/d/1iMSBpH8zMn4HuiA1N3ogluve-L6M0lkr/view?usp=drive_link"
                          className="hover:underline text-sm"
                        >
                          Terms &amp; Conditions
                        </Link>
                      </div>
                    </div>
                  </div>
                </RevealLeft>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
