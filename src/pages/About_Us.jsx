import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";

import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollRef = useRef(null);
  return (
    <div className="relative flex bg-gradient-to-b from-white to-light-green-200  justify-center px-10 gap-14 lg:px-24 py-14 text-nutricare-green">
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
        src="illustration/team.svg"
        alt="Anatomy"
        className="h-72 hidden lg:block xl:block"
      />
      <div className="max-w-xl">
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
        >
          <div>
            <Typography variant="h1" className="mb-4 max-w-lg">
              <span className="text-nutricare-orange">NutriCare</span>
              <br />
              Team Project
            </Typography>
          </div>
          <div>
            <Typography variant="paragraph" className="text-lg">
              Our team comprises dedicated individuals with a{" "}
              <span className="text-nutricare-orange">shared vision</span> — to
              create a platform that goes beyond the conventional, offering more
              than just a{" "}
              <span className="text-nutricare-orange">BMI calculator</span> and
              health articles.
            </Typography>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Developers = () => {
  const scrollRef = useRef(null);
  return (
    <div className="relative flex flex-col justify-center bg-light-green-50 text-center px-10 lg:px-24 py-14 text-nutricare-green">
      <motion.div
        initial={{ opacity: 0, y: "-100px" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{
          delay: 0.25,
          duration: 0.75,
          type: "spring",
          stiffness: 150,
        }}
        className="max-w-md lg:max-w-3xl mx-auto my-8"
      >
        <Typography variant="h1" className="mb-2">
          <span className="text-nutricare-orange">Developer</span> Team
        </Typography>
        <Typography variant="paragraph" className="text-lg">
          As the developers behind{" "}
          <span className="text-nutricare-orange">NutriCare</span>, we want to
          express our deep gratitude for being a part of this journey toward a
          healthier and happier you.{" "}
          <span className="text-nutricare-orange">Say Hi!</span>
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "100px" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{
          delay: 0.25,
          duration: 0.75,
          type: "spring",
          stiffness: 150,
        }}
        className="flex flex-wrap justify-center gap-y-6 gap-x-10"
      >
        <Card className="w-64">
          <CardHeader floated={false} className="">
            <img src="/assets/beryll.jpg" alt="Beryll Pradana Ramadhan" />
          </CardHeader>
          <CardBody className="pb-2 text-center">
            <Typography
              variant="h4"
              className="text-nutricare-orange pb-2 mb-1"
            >
              Beryll Ramadhan
            </Typography>
            <Typography
              variant="small"
              className="font-medium text-nutricare-green m-1"
            >
              Hustler
            </Typography>
            <Typography
              variant="small"
              className="font-medium text-nutricare-green"
            >
              Front-End Developer
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2 pb-6">
            <Tooltip content="LinkedIn">
              <Typography
                as="a"
                href="https://www.linkedin.com/in/beryll-pradana-ramadhan-58044a212/"
                variant="lead"
                className="text-nutricare-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </Typography>
            </Tooltip>
            <Tooltip content="Instagram">
              <Typography
                as="a"
                href="https://www.instagram.com/beryllramadhan/"
                variant="lead"
                className="text-nutricare-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
            <Tooltip content="Github">
              <Typography
                as="a"
                href="https://github.com/BeryllPradanaRamadhan"
                variant="lead"
                className="text-nutricare-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
        <Card className="w-64">
          <CardHeader floated={false} className="">
            <img src="/assets/ber.jpg" alt="Bernard Andrean Sianturi" />
          </CardHeader>
          <CardBody className="pb-2 text-center">
            <Typography
              variant="h4"
              className="text-nutricare-orange pb-2 mb-1"
            >
              Bernard Sianturi
            </Typography>
            <Typography
              variant="small"
              className="font-medium text-nutricare-green m-1"
            >
              Hacker
            </Typography>
            <Typography
              variant="small"
              className="font-medium text-nutricare-green"
            >
              Front-End Developer
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2 pb-6">
            <Tooltip content="LinkedIn">
              <Typography
                as="a"
                href="https://www.linkedin.com/in/bersianturi/"
                variant="lead"
                className="text-nutricare-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </Typography>
            </Tooltip>
            <Tooltip content="Instagram">
              <Typography
                as="a"
                href="https://www.instagram.com/bersianturi_/"
                variant="lead"
                className="text-nutricare-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
            <Tooltip content="Github">
              <Typography
                as="a"
                href="https://github.com/bersianturi"
                variant="lead"
                className="text-nutricare-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
        <Card className="w-64">
          <CardHeader floated={false} className="">
            <img src="/assets/gusnan.jpg" alt="Ketut Agus Cahyadi Nanda" />
          </CardHeader>
          <CardBody className="pb-2 text-center px-0">
            <Typography
              variant="h4"
              className="text-nutricare-orange pb-2 mb-1"
            >
              Agus Nanda
            </Typography>
            <Typography
              variant="small"
              className="font-medium text-nutricare-green m-1"
            >
              Hipster
            </Typography>
            <Typography
              variant="small"
              className="font-medium text-nutricare-green"
            >
              Designer & Front-End Developer
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2 pb-6">
            <Tooltip content="LinkedIn">
              <Typography
                as="a"
                href="https://www.linkedin.com/in/ketutaguscahyadinanda/"
                variant="lead"
                className="text-nutricare-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </Typography>
            </Tooltip>
            <Tooltip content="Instagram">
              <Typography
                as="a"
                href="https://www.instagram.com/floa.tint117/"
                variant="lead"
                className="text-nutricare-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
            <Tooltip content="Github">
              <Typography
                as="a"
                href="https://github.com/Gusnand"
                variant="lead"
                className="text-nutricare-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
        <Card className="w-64">
          <CardHeader floated={false} className="">
            <img src="/assets/imam.jpg" alt="Imam Syiva Hidayat" />
          </CardHeader>
          <CardBody className="pb-2 text-center">
            <Typography
              variant="h4"
              className="text-nutricare-orange pb-2 mb-1"
            >
              Imam Hidayat
            </Typography>
            <Typography
              variant="small"
              className="font-medium text-nutricare-green m-1"
            >
              Hacker
            </Typography>
            <Typography
              variant="small"
              className="font-medium text-nutricare-green"
            >
              Back-End Developer
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2 pb-6">
            <Tooltip content="LinkedIn">
              <Typography
                as="a"
                href="https://www.linkedin.com/in/imam-syiva-hidayat-08567925b"
                variant="lead"
                className="text-nutricare-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </Typography>
            </Tooltip>
            <Tooltip content="Instagram">
              <Typography
                as="a"
                href="https://www.instagram.com/imamsyiva.h/"
                variant="lead"
                className="text-nutricare-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
            <Tooltip content="Github">
              <Typography
                as="a"
                href="https://github.com/imsyh"
                variant="lead"
                className="text-nutricare-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
        <Card className="w-64">
          <CardHeader floated={false} className="">
            <img src="/assets/husain.jpg" alt="Husain Abdullah" />
          </CardHeader>
          <CardBody className="pb-2 text-center">
            <Typography
              variant="h4"
              className="text-nutricare-orange pb-2 mb-1"
            >
              Husain Abdullah
            </Typography>
            <Typography
              variant="small"
              className="font-medium text-nutricare-green m-1"
            >
              Hacker
            </Typography>
            <Typography
              variant="small"
              className="font-medium text-nutricare-green"
            >
              Fullstack Developer
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2 pb-6">
            <Tooltip content="LinkedIn">
              <Typography
                as="a"
                href="https://www.linkedin.com/in/husain-abdullah-b986a2263/"
                variant="lead"
                className="text-nutricare-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </Typography>
            </Tooltip>
            <Tooltip content="Instagram">
              <Typography
                as="a"
                href="https://www.instagram.com/hyuzhen_it/"
                variant="lead"
                className="text-nutricare-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
            <Tooltip content="Github">
              <Typography
                as="a"
                href="https://github.com/HyuZhen13"
                variant="lead"
                className="text-nutricare-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

const Advisor = () => {
  const scrollRef = useRef(null);
  return (
    <div className="relative overflow-y-hidden flex flex-col justify-center bg-light-green-50 text-center px-10 lg:px-24 py-14 text-nutricare-green">
      <motion.div
        initial={{ opacity: 0, y: "-100px" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{
          delay: 0.25,
          duration: 0.75,
          type: "spring",
          stiffness: 150,
        }}
        className="max-w-md lg:max-w-3xl mx-auto my-8"
      >
        <Typography variant="h1" className="mb-2">
          Our <span className="text-nutricare-orange">Advisor</span>
        </Typography>
        <Typography variant="paragraph" className="text-lg">
          The NutriCare development team is thrilled to extend a warm welcome on
          behalf of our{" "}
          <span className="text-nutricare-orange">esteemed advisor</span>. With
          pride, our advisor helped us to craft{" "}
          <span className="text-nutricare-orange">NutriCare</span> as a
          comprehensive resource for health and wellness.
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "100px" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{
          delay: 0.25,
          duration: 0.75,
          type: "spring",
          stiffness: 150,
        }}
        className="flex flex-wrap justify-center gap-y-6 gap-x-10"
      >
        <Card className="w-64">
          <CardHeader floated={false} className="">
            <img src="/assets/shidqi.JPG" alt="" />
          </CardHeader>
          <CardBody className="text-center px-0">
            <Typography variant="h5" className="text-nutricare-orange">
              Shidqi Rifat Pangestu
            </Typography>
            <Typography
              variant="small"
              className="font-medium text-nutricare-green pt-1"
            >
              Advisor
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2 pb-6">
            <Tooltip content="LinkedIn">
              <Typography
                as="a"
                href="https://www.linkedin.com/in/shidqirifatpangestu/"
                variant="lead"
                className="text-nutricare-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </Typography>
            </Tooltip>
            <Tooltip content="Instagram">
              <Typography
                as="a"
                href="https://www.instagram.com/shidqirifat19/"
                variant="lead"
                className="text-nutricare-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
            <Tooltip content="Github">
              <Typography
                as="a"
                href="https://github.com/shidqirifat"
                variant="lead"
                className="text-nutricare-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

function AboutUs() {
  return (
    <>
      <Hero />
      <Developers />
      <Advisor />
    </>
  );
}

export default AboutUs;
