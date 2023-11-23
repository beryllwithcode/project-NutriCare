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
import React from "react";
import ScrollCarousel from "scroll-carousel-react";

const Description = () => {
  return (
    <div className="relative flex gap-14 justify-center px-10 lg:px-24 py-14 text-green-800">
      <img
        src="illustration/pana.png"
        alt="Anatomy"
        className="h-72 hidden lg:block xl:block"
      ></img>
      <div className="max-w-2xl">
        <Typography variant="h1" className="mb-4">
          What is Body-Mass Index
          <br />
          (BMI)?
        </Typography>
        <Typography variant="paragraph" className="text-lg">
          <span className="text-orange-500">NutriCare</span> is your one-stop
          destination for achieving a healthier lifestyle through proper
          nutrition. Our platform is designed to empower you with the knowledge
          and tools needed to make informed decisions about your diet and
          overall well-being. Whether you're looking to manage your weight,
          improve your eating habits, or simply understand the nutritional
          content of your meals,{" "}
          <span className="text-orange-500">NutriCare</span> has you covered.
        </Typography>
        <div className="mt-4 gap-x-6">
          <a href="#">
            <Button className="bg-green-800 hover:bg-green-500">
              Read More
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };

const Services = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center text-center my-16 text-green-800">
        <div className="mb-4">
          <Typography variant="h1" className="mb-2">
            Our <span className="text-orange-500">Services</span>
          </Typography>
          <Typography variant="paragraph" className="text-lg">
            <span className="text-orange-500">NutriCare</span> provides several
            services. Below is the details.
          </Typography>
        </div>
        <ScrollCarousel
          onReady={() => console.log("I am ready")}
          className="h-full"
        >
          <Card className="mx-auto w-64 shadow-lg">
            <CardBody>
              <img src="icons/body.svg" className="mx-auto mb-2"></img>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                BMI Calculate
              </Typography>
              <Typography>
                Calculate your Body Mass Index (BMI) effortlessly and receive
                insights into your weight and overall health status. Take the
                first step toward a healthier you ...
              </Typography>
            </CardBody>
          </Card>
          <Card className="mx-auto w-64 shadow-lg">
            <CardBody>
              <img src="icons/article.svg" className="mx-auto mb-2 mt-2"></img>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Article
              </Typography>
              <Typography>
                Our articles cover a wide range of topics to empower you with
                knowledge and tips for making positive choices in your daily
                life. Stay informed and inspired ...
              </Typography>
            </CardBody>
          </Card>
          <Card className="mx-auto w-64 shadow-lg">
            <CardBody>
              <img src="icons/chat.svg" className="mx-auto mb-2 mt-2 "></img>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Community Forum
              </Typography>
              <Typography>
                Discuss your experiences, seek advice, and provide support to
                others. Together, we create a supportive space for achieving
                better health.
              </Typography>
            </CardBody>
          </Card>
          <Card className="mx-auto w-64 shadow-lg">
            <CardBody>
              <img src="icons/nutrient.svg" className="mx-auto mb-2"></img>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Food Nutrient Details
              </Typography>
              <Typography>
                Discover the nutrient content of various foods to make informed
                dietary choices. Whether you're tracking calories,
                macronutrients, or specific vitamins...
              </Typography>
            </CardBody>
          </Card>
        </ScrollCarousel>
      </div>
    </>
  );
};
const Test = () => {
  return (
    <>
      <div className="relative bg-light-green-50 rounded-ss-full rounded-se-full px-10 lg:px-24 py-16 "></div>
      <div className="relative flex bg-light-green-50 justify-center px-10 gap-14 lg:px-24 pb-14 text-green-800">
        <img
          src="illustration/Character.svg"
          alt="Illustration"
          className="h-72 hidden lg:block xl:block"
        ></img>
        <div className="max-w-xl">
          <Typography variant="h1" className="mb-4">
            Calculate your <span className="text-orange-500">Body-Mass</span>{" "}
            Index here.
          </Typography>
          <Typography variant="paragraph" className="text-lg">
            Unlock a deeper understanding of your body's health with our{" "}
            <span className="text-orange-500">BMI Test</span>. Calculate your
            Body Mass Index (BMI) effortlessly and receive insights into your
            weight and overall health status. Take the first step toward a
            healthier you by knowing your BMI.
          </Typography>
          <div className="mt-4 gap-x-6">
            <a href="#">
              <Button className="bg-green-800 hover:bg-green-500">
                Test BMI
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
const Articles = () => {
  return (
    <div className="relative flex flex-col justify-center bg-light-green-50 text-center px-10 lg:px-24 py-14 text-green-800">
      <div className="max-w-md lg:max-w-3xl mx-auto">
        <Typography variant="h1" className="mb-2">
          <span className="text-orange-500">NutriCare</span> Articles
        </Typography>
        <Typography variant="paragraph" className="text-lg">
          Explore a wealth of knowledge on{" "}
          <span className="text-orange-500">NutriCare's article</span> hub,
          covering topics ranging from{" "}
          <span className="text-orange-500">healthy lifestyles</span> to{" "}
          <span className="text-orange-500">nutritious foods</span>. Enhance
          your well-being by staying informed about the latest trends and tips
          for a healthier life.
        </Typography>
      </div>
      <div className="flex justify-center max-w-xs lg:max-w-2xl mx-auto">
        <Carousel
          className="rounded-xl mt-6"
          loop={true}
          navigation={false}
          autoplay={true}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 text-green-800 hidden lg:block xl:block -translate-y-2/4"
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
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 text-green-800 hidden lg:block xl:block -translate-y-2/4"
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
          <div className="flex gap-4 justify-center">
            <Card className="w-64 shadow-lg">
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
                  className="bg-green-800 hover:bg-green-500"
                  fullWidth={true}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-64 shadow-lg overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
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
                  className="bg-green-800 hover:bg-green-500"
                  fullWidth={true}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex gap-4 justify-center">
            <Card className="w-64 shadow-lg">
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
                  className="bg-green-800 hover:bg-green-500"
                  fullWidth={true}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-64 shadow-lg overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
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
                  className="bg-green-800 hover:bg-green-500"
                  fullWidth={true}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex gap-4 justify-center">
            <Card className="w-64 shadow-lg">
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
                  className="bg-green-800 hover:bg-green-500"
                  fullWidth={true}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-64 shadow-lg overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
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
                  className="bg-green-800 hover:bg-green-500"
                  fullWidth={true}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
const Community = () => {
  return (
    <div className="relative flex bg-light-green-50 justify-center px-10 gap-14 lg:px-24 py-14 text-green-800">
      <img
        src="illustration/rafiki.svg"
        alt="Anatomy"
        className="h-72 hidden lg:block xl:block"
      ></img>
      <div className="max-w-xl">
        <Typography variant="h1" className="mb-4">
          NutriCare <span className="text-orange-500">Community</span>
        </Typography>
        <Typography variant="paragraph" className="text-lg">
          Join our vibrant{" "}
          <span className="text-orange-500">community forum</span> and connect
          with users who share their health and wellness journeys. Discuss your
          experiences, seek advice, and provide support to others. Together, we
          create a supportive space for achieving better health.
        </Typography>
        <div className="mt-4 gap-x-6">
          <a href="#">
            <Button className="bg-green-800 hover:bg-green-500">
              Join Us!
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
const FoodNutrient = () => {
  return (
    <>
      <div className="relative flex bg-light-green-50 text-right justify-center px-10 gap-14 lg:px-24 pt-14 text-green-800">
        <div className="max-w-xl">
          <Typography variant="h1" className="mb-4">
            <span className="text-orange-500">Food Nutrient</span> Details
          </Typography>
          <Typography variant="paragraph" className="text-lg">
            Access a comprehensive database of food items with{" "}
            <span className="text-orange-500">
              detailed nutritional information
            </span>
            . Discover the nutrient content of various foods to make informed
            dietary choices. Whether you're tracking calories, macronutrients,
            or specific vitamins and minerals, we've got you covered. Make every
            meal a healthier one with our Food Nutrient Details.
          </Typography>
          <div className="mt-4 gap-x-6">
            <a href="#">
              <Button className="bg-green-800 hover:bg-green-500">More</Button>
            </a>
          </div>
        </div>
        <img
          src="illustration/salad.svg"
          alt="Anatomy"
          className="h-72 hidden lg:block xl:block"
        ></img>
      </div>
      <div className="relative bg-light-green-50 rounded-es-full rounded-ee-full px-10 lg:px-24 py-16"></div>
    </>
  );
};

const Geser = () => {
  return (
    <>
      <h1>This is my component page</h1>
      <p>Now i am showing my creation scroll carousel</p>
      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        speed={7}
        onReady={() => console.log("I am ready")}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
          <div
            key={item}
            className="bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48"
          >
            {item}
          </div>
        ))}
      </ScrollCarousel>
    </>
  );
};

const Content = () => {
  return (
    <div>
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
