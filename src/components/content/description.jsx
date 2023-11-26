import { Typography, Button } from "@material-tailwind/react";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const Description = () => {
  const scrollRef = useRef(null);
  return (
    <div className="relative flex gap-14 justify-center px-10 lg:px-24 py-14 text-nutricare-green">
      <motion.img
        initial={{ opacity: 0, x: "-100px" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: scrollRef }}
        transition={{
          delay: 0.25,
          duration: 0.75,
          type: "spring",
          stiffness: 150,
        }}
        src="illustration/pana.png"
        alt="Anatomy"
        className="h-72 hidden lg:block xl:block"
      ></motion.img>
      <motion.div
        initial={{ opacity: 0, x: "100px" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ root: scrollRef }}
        transition={{
          delay: 0.25,
          duration: 0.75,
          type: "spring",
          stiffness: 150,
        }}
        className="max-w-2xl"
      >
        <Typography variant="h1" className="mb-4">
          What is <span className="text-nutricare-orange">Body-Mass Index</span>
          <br />
          (BMI)?
        </Typography>
        <Typography variant="paragraph" className="text-lg">
          <span className="text-nutricare-orange">NutriCare</span> is your
          one-stop destination for achieving a healthier lifestyle through
          proper nutrition. Our platform is designed to empower you with the
          knowledge and tools needed to make informed decisions about your diet
          and overall well-being. Whether you're looking to manage your weight,
          improve your eating habits, or simply understand the nutritional
          content of your meals,{" "}
          <span className="text-nutricare-orange">NutriCare</span> has you
          covered.
        </Typography>
      </motion.div>
    </div>
  );
};

export default Description;
