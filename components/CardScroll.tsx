import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import SimpleReveal from "./utils/Simple Reveal";

const CardScroll = () => {
  const CardScroll = [
    {
      step: "1 :  Capture",
      content:
        "Cosign utilizes your device's camera to capture sign language gestures.",
      imgUrl:
        "https://img.freepik.com/free-vector/huge-camera-tiny-people-taking-pictures-photographer-with-camera-photos-landscapes-flat-vector-illustration-photography-occupation-concept-banner-website-design-landing-web-page_74855-23089.jpg",
    },
    {
      step: "2 : Recognition",
      content:
        "Our powerful algorithms analyze the captured gestures in real-time, converting them into meaningful expressions.",
      imgUrl:
        "https://media.istockphoto.com/id/1134031844/vector/gesture-recognition-concept-vector-illustration.jpg?s=170667a&w=0&k=20&c=1ohkwzztpMVuEAcwAiRDOiU-26khntT-dfcoA6Kf_fg=",
    },
    {
      step: "3 : Feedback and Learning",
      content:
        "Users receive instant feedback, allowing them to refine their signing skills. Cosign also provides a range of learning resources to enhance proficiency.",
      imgUrl:
        "https://img.freepik.com/free-vector/organic-flat-feedback-concept_23-2148961193.jpg?size=626&ext=jpg&ga=GA1.1.403761969.1695825916&semt=ais",
    },
  ];

  return (
    <motion.div className="flex flex-col justify-center  items-center  md:p-24  w-full h-[250vh] gap-[50vh] mb-[50vh] md:mb-[30vh] lg:mb-[50vh]">
      <motion.div className="flex flex-col   justify-center  items-center  relative w-full  top-[40vh] md:top-0  h-[350vh] md:mt-[23%] md:pt-[23%] ">
        {/* CardScroll rendering  */}

        {CardScroll.map((item) => {
          return <Card {...item} key={item.step} />;
        })}
      </motion.div>
    </motion.div>
  );
};

export default CardScroll;
