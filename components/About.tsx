import React from "react";
import { motion } from "framer-motion";
import SimpleReveal from "./utils/SimpleReveal";

const About = () => {
  const text =
    "At Digital Fry, we believe that digital marketing is all about building relationships with your audience. We work closely with our clients to understand their business goals and objectives, as well as their target  audience, to create a customized digital marketing strategy that meets  their specific needs.".split(
      " "
    );

  return (
    <div className="section  rounded-xl  flex flex-col justify-center gap-10  px-4 md:px-16 py-24 -mt-12">
      <div className="text-sm text-blue-600  font-bold">
        <SimpleReveal sequence={1}>
          <p> ABOUT DIGITAL FRY</p>
        </SimpleReveal>
      </div>
      <div className="font-bold text-xl md:text-4xl  text-black">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.25,
                delay: i / 30,
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
