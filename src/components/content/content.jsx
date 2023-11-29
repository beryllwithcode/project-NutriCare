import {
  Typography,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Carousel,
  IconButton,
} from "@material-tailwind/react";
import React, { useRef } from "react";
import ScrollCarousel from "scroll-carousel-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Description from "./description";

const Services = () => {
  const scrollRef = useRef(null);
  return (
    <>
      <div className="relative flex flex-col justify-center text-center my-16 text-nutricare-green">
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
          className="mb-4"
        >
          <Typography variant="h1" className="mb-2">
            Our <span className="text-nutricare-orange">Services</span>
          </Typography>
          <Typography variant="paragraph" className="text-lg mx-8">
            <span className="text-nutricare-orange">NutriCare</span> provides
            several services. Below is the details.
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
        >
          <ScrollCarousel
            autoplay={true}
            autoplaySpeed={5}
            speed={0}
            onReady={() => console.log("I am ready")}
            className="h-full mt-8"
            margin={40}
          >
            <div className="flex flex-row gap-10 ">
              <Card className="w-64 shadow-none bg-nutricare-greenMudaFade">
                <CardBody>
                  <img src="icons/body.svg" className="mx-auto mb-2"></img>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    BMI Calculate
                  </Typography>
                  <Typography>
                    Calculate your Body Mass Index (BMI) effortlessly and
                    receive insights into your weight and overall health status.
                    Take the first step toward a healthier you ...
                  </Typography>
                </CardBody>
              </Card>
              <Card className="mx-auto w-64 shadow-none bg-nutricare-greenMudaFade">
                <CardBody>
                  <img
                    src="icons/article.svg"
                    className="mx-auto mb-2 mt-2"
                  ></img>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Article
                  </Typography>
                  <Typography>
                    Our articles cover a wide range of topics to empower you
                    with knowledge and tips for making positive choices in your
                    daily life. Stay informed and inspired on your wellness
                    journey.
                  </Typography>
                </CardBody>
              </Card>
              <Card className="mx-auto w-64 shadow-none bg-nutricare-greenMudaFade">
                <CardBody>
                  <img src="icons/nutrient.svg" className="mx-auto mb-2"></img>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Community Forum
                  </Typography>
                  <Typography>
                    Discuss your experiences, seek advice, and provide support
                    to others. Together, we create a supportive space for
                    achieving better health.
                  </Typography>
                </CardBody>
              </Card>
              <Card className="mx-auto w-64 shadow-none bg-nutricare-greenMudaFade">
                <CardBody>
                  <img src="icons/nutrient.svg" className="mx-auto mb-2"></img>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Food Nutrient Details
                  </Typography>
                  <Typography>
                    Discover the nutrient content of various foods to make
                    informed dietary choices. Whether you're tracking calories,
                    macronutrients, or specific vitamins...
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </ScrollCarousel>
        </motion.div>
      </div>
    </>
  );
};

const Test = () => {
  const scrollRef = useRef(null);
  return (
    <>
      <div className="relative bg-light-green-50 rounded-ss-full rounded-se-full px-10 lg:px-24 py-16 "></div>

      <div className="relative flex bg-light-green-50 justify-center px-10 gap-14 lg:px-24 pb-14 text-nutricare-green">
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
          src="illustration/Character.svg"
          alt="Illustration"
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
          className="max-w-xl"
        >
          <Typography variant="h1" className="mb-4">
            Calculate your{" "}
            <span className="text-nutricare-orange">Body-Mass</span> Index here.
          </Typography>
          <Typography variant="paragraph" className="text-lg">
            Unlock a deeper understanding of your body's health with our{" "}
            <span className="text-nutricare-orange">BMI Test</span>. Calculate
            your Body Mass Index (BMI) effortlessly and receive insights into
            your weight and overall health status. Take the first step toward a
            healthier you by knowing your BMI.
          </Typography>
          <div className="mt-4 gap-x-6">
            <Link to="/bmi-test">
              <Button className="bg-nutricare-green hover:bg-green-500">
                Calculate BMI
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

const Articles = () => {
  const scrollRef = useRef(null);
  return (
    <div className="relative flex flex-col justify-center bg-light-green-50 text-center px-8 lg:px-24 py-14 text-nutricare-green">
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
        className="max-w-md lg:max-w-3xl mx-auto"
      >
        <Typography variant="h1" className="mb-2">
          <span className="text-nutricare-orange">NutriCare</span> Articles
        </Typography>
        <Typography variant="paragraph" className="text-lg">
          Explore a wealth of knowledge on{" "}
          <span className="text-nutricare-orange">NutriCare's article</span>{" "}
          hub, covering topics ranging from{" "}
          <span className="text-nutricare-orange">healthy lifestyles</span> to{" "}
          <span className="text-nutricare-orange">nutritious foods</span>.
          Enhance your well-being by staying informed about the latest trends
          and tips for a healthier life.
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
      >
        <div className="flex justify-center max-w-2xl mx-auto">
          <Carousel
            className="rounded-xl mt-6 lg:hidden xl:hidden"
            loop={true}
            navigation={false}
            autoplay={true}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                size="lg"
                ripple={false}
                onClick={handlePrev}
                className="!absolute top-2/4 -left-3 text-nutricare-green hover:bg-transparent active:bg-transparent -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                size="lg"
                ripple={false}
                onClick={handleNext}
                className="!absolute top-2/4 !-right-3 text-nutricare-green hover:bg-transparent active:bg-transparent -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
          >
            <Card className="mx-auto w-64 shadow-none">
              <CardHeader floated={false} color="blue-gray">
                <img
                  src="https://picsum.photos/500"
                  alt="Article Thumbnail"
                ></img>
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="orange" className="mb-2">
                  Lorem Ipsum
                </Typography>
                <Typography>
                  Veniam veniam ullamco anim reprehenderit tempor.
                </Typography>
              </CardBody>
              <CardFooter className="pt-2">
                <Button
                  size="lg"
                  className="bg-nutricare-green hover:bg-green-500"
                  fullWidth={true}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
            <Card className="mx-auto w-64 shadow-none">
              <CardHeader floated={false} color="blue-gray">
                <img
                  src="https://picsum.photos/500"
                  alt="Article Thumbnail"
                ></img>
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="orange" className="mb-2">
                  Lorem Ipsum
                </Typography>
                <Typography>
                  Veniam veniam ullamco anim reprehenderit tempor.
                </Typography>
              </CardBody>
              <CardFooter className="pt-2">
                <Button
                  size="lg"
                  className="bg-nutricare-green hover:bg-green-500"
                  fullWidth={true}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
            <Card className="mx-auto w-64 shadow-none">
              <CardHeader floated={false} color="blue-gray">
                <img
                  src="https://picsum.photos/500"
                  alt="Article Thumbnail"
                ></img>
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="orange" className="mb-2">
                  Lorem Ipsum
                </Typography>
                <Typography>
                  Veniam veniam ullamco anim reprehenderit tempor.
                </Typography>
              </CardBody>
              <CardFooter className="pt-2">
                <Button
                  size="lg"
                  className="bg-nutricare-green hover:bg-green-500"
                  fullWidth={true}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
            <Card className="mx-auto w-64 shadow-none">
              <CardHeader floated={false} color="blue-gray">
                <img
                  src="https://picsum.photos/500"
                  alt="Article Thumbnail"
                ></img>
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="orange" className="mb-2">
                  Lorem Ipsum
                </Typography>
                <Typography>
                  Veniam veniam ullamco anim reprehenderit tempor.
                </Typography>
              </CardBody>
              <CardFooter className="pt-2">
                <Button
                  size="lg"
                  className="bg-nutricare-green hover:bg-green-500"
                  fullWidth={true}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
            <Card className="mx-auto w-64 shadow-none">
              <CardHeader floated={false} color="blue-gray">
                <img
                  src="https://picsum.photos/500"
                  alt="Article Thumbnail"
                ></img>
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="orange" className="mb-2">
                  Lorem Ipsum
                </Typography>
                <Typography>
                  Veniam veniam ullamco anim reprehenderit tempor.
                </Typography>
              </CardBody>
              <CardFooter className="pt-2">
                <Button
                  size="lg"
                  className="bg-nutricare-green hover:bg-green-500"
                  fullWidth={true}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          </Carousel>
        </div>
        <div className="lg:flex gap-4 mt-8 hidden">
          <Card className="mx-auto w-64 shadow-none">
            <CardHeader floated={false} color="blue-gray">
              <img
                src="https://picsum.photos/500"
                alt="Article Thumbnail"
              ></img>
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="orange" className="mb-2">
                Lorem Ipsum
              </Typography>
              <Typography>
                Veniam veniam ullamco anim reprehenderit tempor.
              </Typography>
            </CardBody>
            <CardFooter className="pt-2">
              <Button
                size="lg"
                className="bg-nutricare-green hover:bg-green-500"
                fullWidth={true}
              >
                Read More
              </Button>
            </CardFooter>
          </Card>
          <Card className="mx-auto w-64 shadow-none">
            <CardHeader floated={false} color="blue-gray">
              <img
                src="https://picsum.photos/500"
                alt="Article Thumbnail"
              ></img>
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="orange" className="mb-2">
                Lorem Ipsum
              </Typography>
              <Typography>
                Veniam veniam ullamco anim reprehenderit tempor.
              </Typography>
            </CardBody>
            <CardFooter className="pt-2">
              <Button
                size="lg"
                className="bg-nutricare-green hover:bg-green-500"
                fullWidth={true}
              >
                Read More
              </Button>
            </CardFooter>
          </Card>
          <Card className="mx-auto w-64 shadow-none">
            <CardHeader floated={false} color="blue-gray">
              <img
                src="https://picsum.photos/500"
                alt="Article Thumbnail"
              ></img>
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="orange" className="mb-2">
                Lorem Ipsum
              </Typography>
              <Typography>
                Veniam veniam ullamco anim reprehenderit tempor.
              </Typography>
            </CardBody>
            <CardFooter className="pt-2">
              <Button
                size="lg"
                className="bg-nutricare-green hover:bg-green-500"
                fullWidth={true}
              >
                Read More
              </Button>
            </CardFooter>
          </Card>
          <Card className="mx-auto w-64 shadow-none">
            <CardHeader floated={false} color="blue-gray">
              <img
                src="https://picsum.photos/500"
                alt="Article Thumbnail"
              ></img>
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="orange" className="mb-2">
                Lorem Ipsum
              </Typography>
              <Typography>
                Veniam veniam ullamco anim reprehenderit tempor.
              </Typography>
            </CardBody>
            <CardFooter className="pt-2">
              <Button
                size="lg"
                className="bg-nutricare-green hover:bg-green-500"
                fullWidth={true}
              >
                Read More
              </Button>
            </CardFooter>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};
const Community = () => {
  const scrollRef = useRef(null);
  return (
    <div className="relative flex bg-light-green-50 justify-center px-10 gap-14 lg:px-24 py-14 text-nutricare-green">
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
        src="illustration/rafiki.svg"
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
        className="max-w-xl"
      >
        <Typography variant="h1" className="mb-4">
          NutriCare <span className="text-nutricare-orange">Community</span>
        </Typography>
        <Typography variant="paragraph" className="text-lg">
          Join our vibrant{" "}
          <span className="text-nutricare-orange">community forum</span> and
          connect with users who share their health and wellness journeys.
          Discuss your experiences, seek advice, and provide support to others.
          Together, we create a supportive space for achieving better health.
        </Typography>
        <div className="mt-4 gap-x-6">
          <Link to="/community">
            <Button className="bg-nutricare-green hover:bg-green-500">
              Join Us!
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
const FoodNutrient = () => {
  const scrollRef = useRef(null);
  return (
    <>
      <div className="relative flex bg-light-green-50 text-right justify-center px-10 gap-14 lg:px-24 pt-14 text-nutricare-green">
        <motion.div
          initial={{ opacity: 0, x: "-100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ root: scrollRef }}
          transition={{
            delay: 0.25,
            duration: 0.75,
            type: "spring",
            stiffness: 150,
          }}
          className="max-w-xl"
        >
          <Typography variant="h1" className="mb-4">
            <span className="text-nutricare-orange">Food Nutrient</span> Details
          </Typography>
          <Typography variant="paragraph" className="text-lg">
            Access a comprehensive database of food items with{" "}
            <span className="text-nutricare-orange">
              detailed nutritional information
            </span>
            . Discover the nutrient content of various foods to make informed
            dietary choices. Whether you're tracking calories, macronutrients,
            or specific vitamins and minerals, we've got you covered. Make every
            meal a healthier one with our Food Nutrient Details.
          </Typography>
          <div className="mt-4 gap-x-6">
            <Link to="/food-nutrient">
              <Button className="bg-nutricare-green hover:bg-green-500">
                More
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.img
          src="illustration/salad.svg"
          alt="Anatomy"
          initial={{ opacity: 0, x: "100px" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ root: scrollRef }}
          transition={{
            delay: 0.25,
            duration: 0.75,
            type: "spring",
            stiffness: 150,
          }}
          className="h-72 hidden lg:block xl:block"
        ></motion.img>
      </div>
      <div className="relative bg-light-green-50 rounded-es-full rounded-ee-full px-10 lg:px-24 py-16"></div>
    </>
  );
};

const Content = () => {
  return (
    <div id="content">
      <Description />
      <Services />
      {/* <Geser /> */}
      <Test />
      <Articles />
      <Community />
      <FoodNutrient />
    </div>
  );
};

export default Content;
