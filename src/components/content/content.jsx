import {
  Typography,
  Button,
  Card,
  CardBody,
  CardFooter,
  Carousel,
  IconButton,
} from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
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
            smartSpeed={false}
            className="h-full mt-8"
            margin={40}
          >
            <div className="flex flex-row gap-10 ">
              <Card className="w-64 shadow-none bg-nutricare-greenMudaFade">
                <CardBody>
                  <img
                    src="icons/body.svg"
                    className="mx-auto mb-2"
                    alt="BMI Calculate"
                  ></img>
                  <Typography
                    variant="h5"
                    className="mb-2 text-nutricare-green"
                  >
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
                    alt="Article"
                  ></img>
                  <Typography
                    variant="h5"
                    className="mb-2 text-nutricare-green"
                  >
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
                  <img
                    src="icons/chat.svg"
                    className="mx-auto mb-2"
                    alt="Community Forum"
                  ></img>
                  <Typography
                    variant="h5"
                    className="mb-2 text-nutricare-green"
                  >
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
                  <img
                    src="icons/nutrient.svg"
                    className="mx-auto mb-2"
                    alt="BMI Calculate"
                  ></img>
                  <Typography
                    variant="h5"
                    className="mb-2 text-nutricare-green"
                  >
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
              <Button className="bg-nutricare-green hover:bg-nutricare-orange">
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
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticlesData = () => {
    fetch(process.env.REACT_APP_ARTICLE_API)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.response && data.response.docs) {
          setArticles(data.response.docs);
          localStorage.setItem("article", JSON.stringify(data.response.docs));
        } else {
          // Handle the case where docs is undefined or null
          console.error("Error fetching articles data:", data);
          // You might want to set articles to an empty array or show an error message
          setArticles([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching articles data:", error);
        // Handle the error, for example, set articles to an empty array or show an error message
        setArticles([]);
      })
      .finally(() => {
        // Set loading to false when the API call is complete
        setLoading(false);
      });
  };
  useEffect(() => {
    window.addEventListener("beforeunload", clearLocalStorage);

    const storedArticles = localStorage.getItem("article");
    if (storedArticles) {
      setArticles(JSON.parse(storedArticles));
      setLoading(false);
    } else {
      fetchArticlesData();
    }

    return () => {
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);

  const clearLocalStorage = () => {
    // Clear localStorage on page refresh
    localStorage.removeItem("article");
  };

  console.log(articles);
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
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Carousel
              className="rounded-xl mt-6 lg:hidden xl:hidden"
              navigation={false}
              loop={true}
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
              {articles.slice(0, 4).map((article) => (
                <Card
                  key={article.headline.main}
                  className="mx-auto w-64 shadow-none"
                >
                  <CardBody>
                    <Typography variant="h5" color="orange" className="mb-2">
                      {article.headline.main}
                    </Typography>
                    <Typography>
                      {article.lead_paragraph?.slice(0, 50) + "..." || "-"}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-2">
                    <a href={article.web_url} target="blank">
                      <Button
                        size="lg"
                        className="bg-nutricare-green hover:bg-nutricare-orange"
                        fullWidth={true}
                      >
                        Read More
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </Carousel>
          )}
        </div>
        {loading ? (
          <div className="hidden lg:block">Loading...</div>
        ) : (
          <div className="lg:flex gap-4 mt-8 hidden max-w-6xl mx-auto">
            {articles.slice(0, 4).map((article) => (
              <Card
                key={article.headline.main}
                className="mx-auto w-64 shadow-none"
              >
                <CardBody>
                  <Typography variant="h5" color="orange" className="mb-2">
                    {article.headline.main}
                  </Typography>
                  <Typography>
                    {article.lead_paragraph?.slice(0, 100) + "..." || "-"}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-2">
                  <a href={article.web_url} target="blank">
                    <Button
                      size="lg"
                      className="bg-nutricare-green hover:bg-nutricare-orange"
                      fullWidth={true}
                    >
                      Read More
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
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
            <Button className="bg-nutricare-green hover:bg-nutricare-orange">
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
              <Button className="bg-nutricare-green hover:bg-nutricare-orange">
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
