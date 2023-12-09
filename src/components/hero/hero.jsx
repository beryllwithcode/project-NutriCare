import { Button } from "@material-tailwind/react";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollRef = useRef(null);
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
        type: "spring",
        stiffness: 150,
      },
    },
  };
  return (
    <div className="relative isolate px-6 lg:px-8 bg-gradient-to-b from-white to-light-green-200">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden sm:-top-80"
        aria-hidden="true"
      ></div>
      <div className="flex justify-between placeholder: mx-auto max-w-6xl py-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ root: scrollRef }}
          variants={variants}
          className="max-w-2xl"
        >
          <motion.h1
            variants={item}
            className="text-5xl lg:text-6xl tracking-tight font-bold text-nutricare-green"
          >
            NutriCare: Empowering Your{" "}
            <span className="text-nutricare-orange">Health</span> Through{" "}
            <span className="text-nutricare-orange">Nutrition</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 text-lg leading-8 text-nutricare-green"
          >
            <span className="text-nutricare-orange">NutriCare</span> is your
            one-stop destination for achieving a healthier lifestyle through
            proper nutrition. Our platform is designed to empower you with the
            knowledge and tools needed to make informed decisions about your
            diet and overall well-being. Whether you're looking to manage your
            weight, improve your eating habits, or simply understand the
            nutritional content of your meals,{" "}
            <span className="text-nutricare-orange">NutriCare</span> has you
            covered.
          </motion.p>
          <motion.div variants={item} className="mt-4 gap-x-6">
            <a href="#content">
              <Button className="bg-nutricare-green hover:bg-nutricare-orange">
                Read More
              </Button>
            </a>
          </motion.div>
        </motion.div>
        <div>
          <motion.img
            initial={{ opacity: 0, x: "100px" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ root: scrollRef }}
            transition={{
              delay: 0.25,
              duration: 0.75,
              type: "spring",
              stiffness: 150,
            }}
            src="/illustration/amico.svg"
            className="max-w-sm h-auto hidden lg:block xl:block"
            alt="NutriCare illustration"
          ></motion.img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
