import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const text =
    "At Digital Fry, we believe that digital marketing is all about building relationships with your audience. We work closely with our clients to understand their business goals and objectives, as well as their target  audience, to create a customized digital marketing strategy that meets  their specific needs.".split(
      " "
    );

  return (
    <div className="section  bg-gray-600 rounded-xl  flex flex-col justify-center gap-10  px-16 py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.2,
          },
        }}
        viewport={{ once: true }}
        className="text-sm text-blue-600 "
      >
        ABOUT DIGITAL FRY
      </motion.div>
      <div className="font-bold text-4xl  text-white">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.25,
                delay: i / 25,
              },
            }}
            viewport={{ once: true }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default About;
