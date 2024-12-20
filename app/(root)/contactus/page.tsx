"use client";
import React from "react";
import Popup from "@/components/utils/PopUp";
import SimpleReveal from "@/components/utils/SimpleReveal";
import SimpleRevealUp from "@/components/utils/SimpleRevealUp";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ContactUsPageSvg from "@/public/images/contactus/ContactUsPage.svg";

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    clientName: "",
    clientNumber: "",
    clientEmailId: "",
    clientMessage: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (
      formData.clientName.length > 0 &&
      formData.clientEmailId.length > 0 &&
      formData.clientNumber.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      setButtonDisabled(true);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName: formData.clientName,
          clientNumber: formData.clientNumber,
          clientEmailId: formData.clientEmailId,
          clientMessage: formData.clientMessage,
        }), // Convert formData to JSON string
      });
      console.log(response);
      alert("Message successfully sent");
      setFormData({
        clientName: "",
        clientNumber: "",
        clientEmailId: "",
        clientMessage: "",
      });
      setButtonDisabled(false);
      setLoading(false);
    } catch (err: any) {
      console.error(err);
      alert("Error, please try resubmitting the form");
      setButtonDisabled(false);
    }
  };

  return (
    <>
      <section className="bg-white mt-24">
        <div className=" px-6 py-12 ">
          <SimpleRevealUp sequence={1}>
            <div className="text-center pb-4">
              <p className="font-medium text-blue-500 ">Contact us</p>
              <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
                We’d love to hear from you
              </h1>
              <p className="mt-3 text-gray-500">Chat to our friendly team.</p>
            </div>
          </SimpleRevealUp>
          <SimpleReveal sequence={1}>
            <div
              className="zoom relative overflow-hidden rounded-xl bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] h-[45vh] lg:h-[80vh] w-[95vw]"
              data-te-ripple-init=""
              data-te-ripple-color="dark"
            >
              <Image
                src={ContactUsPageSvg}
                alt="Footer"
                objectFit="cover"
                className="w-full align-middle transition duration-300 hover:ease-linear  "
              />
            </div>
          </SimpleReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
            <div className="grid grid-cols-1 gap-12 mt-10 w-full ">
              <Popup sequence={1}>
                <div className="p-4 rounded-lg bg-blue-50 md:p-6 ">
                  <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-200/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <h2 className="mt-4 text-base font-medium text-gray-800 ">
                    Chat with us
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 ">
                    Speak to our friendly team.
                  </p>

                  <Link
                    className="mt-2 text-sm text-blue-500 "
                    href="mailto:info@digitalfry.in"
                  >
                    info@digitalfry.in
                  </Link>
                </div>
              </Popup>
              <Popup sequence={3}>
                <div className="p-4 rounded-lg bg-blue-50 md:p-6 ">
                  <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-200/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>
                  <h2 className="mt-4 text-base font-medium text-gray-800 ">
                    Visit us
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 ">
                    Visit our office HQ..
                  </p>
                  <Link href="https://www.google.com/maps/place/6th+Floor+RTech,+DIGITAL+FRY,+Capital+Highstreet+Mall,+Apparel+Park,+Main,+Mahal+Rd,+Jagatpura,+Jaipur,+Shri+Kishanpura,+Rajasthan+302017/@26.7990679,75.8581066,18z/data=!4m9!1m2!2m1!1s6th+Floor+RTech,+DIGITAL+FRY,+Capital+Highstreet+Mall,+Apparel+Park,+Mahal+Road,+Jagatpura,+Jaipur,+Rajasthan!3m5!1s0x396dc91a12f2bf03:0xace078e3184837d6!8m2!3d26.7990679!4d75.8581066!16s%2Fg%2F11t6vymh64">
                    <p className="mt-2 text-sm text-blue-500  hover:underline">
                      6th Floor, RTech Capital Highstreet Mall, Apparel Park,
                      Mahal Rd, Jagatpura, Jaipur, Rajasthan-302017
                    </p>
                  </Link>
                </div>
              </Popup>
              <Popup sequence={5}>
                <div className="p-4 rounded-lg bg-blue-50 md:p-6 ">
                  <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-200/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </span>
                  <h2 className="mt-4 text-base font-medium text-gray-800 ">
                    Call us
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 ">
                    Mon-Sat from 10am to 8pm.
                  </p>
                  <Link href="tel:+919660055044">
                    <p className="mt-2 text-sm text-blue-500 hover:underline ">
                      +91 9660055044
                    </p>
                  </Link>
                </div>
              </Popup>
            </div>
            <div className="mt-8 w-full ">
              <SimpleReveal sequence={20}>
                <form
                  onSubmit={handleSubmit}
                  className="w-full px-8 py-10 mx-auto overflow-hidden bg-[#1F2937] shadow-2xl rounded-xl  lg:max-w-xl"
                >
                  <h1 className="text-xl font-medium text-blue-400 ">
                    Contact Us!
                  </h1>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Ask us everything and we would love to hear from you
                  </p>
                  <div className="mt-6">
                    <div className="flex-1">
                      <label className="block mb-2 text-sm text-[#98A3AF]">
                        Full Name
                      </label>
                      <input
                        value={formData.clientName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            clientName: e.target.value,
                          })
                        }
                        type="text"
                        placeholder="John Doe"
                        className="block w-full px-5 py-3 mt-2 text-white  border border-gray-200 rounded-md  bg-[#111827] dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="flex-1 mt-6">
                      <label className="block mb-2 text-sm text-[#98A3AF]">
                        Email address
                      </label>
                      <input
                        value={formData.clientEmailId}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            clientEmailId: e.target.value,
                          })
                        }
                        type="email"
                        placeholder="johndoe@example.com"
                        className="block w-full px-5 py-3 mt-2 text-white  border border-gray-200 rounded-md  bg-[#111827] dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="flex-1 mt-6">
                      <label className="block mb-2 text-sm text-[#98A3AF]">
                        Phone Number
                      </label>
                      <input
                        value={formData.clientNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            clientNumber: e.target.value,
                          })
                        }
                        type="tel"
                        placeholder="+91 12345 67890"
                        className="block w-full px-5 py-3 mt-2 text-white  border border-gray-200 rounded-md  bg-[#111827] dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="w-full mt-6">
                      <label className="block mb-2 text-sm text-[#98A3AF]">
                        Message
                      </label>
                      <textarea
                        value={formData.clientMessage}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            clientMessage: e.target.value,
                          })
                        }
                        className="block w-full h-32 px-5 py-3 mt-2 text-white placeholder-gray-400  border border-gray-200 rounded-md md:h-48  bg-[#111827] dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    {loading ? (
                      <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-[#98A3AF] capitalize transition-colors duration-300 transdiv bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                        Processing...
                      </button>
                    ) : (
                      <button
                        disabled={buttonDisabled}
                        className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transdiv bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                        type="submit"
                      >
                        get in touch
                      </button>
                    )}
                  </div>
                </form>
              </SimpleReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
