import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Input,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollRef = useRef(null);
  return (
    <>
      <div className="relative flex bg-gradient-to-b from-white to-light-green-200 text-left lg:text-right justify-center px-10 gap-14 lg:px-24 py-14 text-nutricare-green">
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
            <a href="#foods">
              <Button className="bg-nutricare-green hover:bg-nutricare-orange">
                More
              </Button>
            </a>
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
    </>
  );
};

const Food = () => {
  const [foodsData, setFoodsData] = useState([]);

  useEffect(() => {
    fetchFoodsData()
      .then((foodsResponse) => {
        const promises = foodsResponse.map((foodItem) =>
          fetchNutritionData(foodItem.id)
        );
        Promise.all(promises)
          .then((nutritionResponses) => {
            const foodsWithNutrition = foodsResponse.map((foodItem, index) => ({
              ...foodItem,
              nutrition: nutritionResponses[index],
            }));
            setFoodsData(foodsWithNutrition);
          })
          .catch((error) =>
            console.error("Error fetching nutrition data for foods:", error)
          );
      })
      .catch((error) => console.error("Error fetching foods data:", error));
  }, []);

  const fetchFoodsData = async () => {
    const response = await fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=2a0ac778c9e9427b874293f0f3f1aa4b&number=12"
    );
    const data = await response.json();
    return data.recipes;
  };

  const fetchNutritionData = async (foodId) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${foodId}/nutritionWidget.json?apiKey=2a0ac778c9e9427b874293f0f3f1aa4b`
    );
    const data = await response.json();
    return data;
  };

  return (
    <div
      className="relative flex flex-col justify-center bg-light-green-50 text-center px-10 lg:px-24 py-14 text-nutricare-green"
      id="foods"
    >
      <Card className="lg:mx-7 mb-7 shadow-lg p-4">
        <Input
          placeholder="Search for food here"
          icon={<i className="fas fa-search" />}
          className="!border-nutricare-green focus:!border-nutricare-green text-nutricare-green"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </Card>
      {foodsData.length > 0 && (
        <div className="grid place-content-center lg:grid-cols-3 gap-y-4">
          {foodsData.map((food) => (
            <Card className="lg:w-80 shadow-lg mx-auto">
              <CardHeader floated={false} color="blue-gray">
                <img
                  src={
                    food.image
                      ? food.image
                      : "https://ipsf.net/wp-content/uploads/2021/12/dummy-image-square.webp"
                  }
                  alt="Article Thumbnail"
                ></img>
                <div className="absolute inset-0 h-full w-full" />
              </CardHeader>
              <CardBody className="pb-2">
                <Typography variant="h4" color="orange" className="">
                  {food.title}
                </Typography>
              </CardBody>
              <CardFooter className="pt-2">
                <div className="grid place-content-center grid-cols-2 gap-4">
                  <div>
                    <Typography className="text-nutricare-green">
                      Calories
                    </Typography>
                    <Chip
                      size="lg"
                      value={
                        food.nutrition.calories
                          ? food.nutrition.calories + "kcal"
                          : "UNKNOWN"
                      }
                      className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                    />
                  </div>
                  <div>
                    <Typography className="text-nutricare-green">
                      Carbs
                    </Typography>
                    <Chip
                      size="lg"
                      value={
                        food.nutrition.carbs ? food.nutrition.carbs : "UNKNOWN"
                      }
                      className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                    />
                  </div>
                  <div>
                    <Typography className="text-nutricare-green">
                      Fat
                    </Typography>
                    <Chip
                      size="lg"
                      value={
                        food.nutrition.fat ? food.nutrition.fat : "UNKNOWN"
                      }
                      className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                    />
                  </div>
                  <div>
                    <Typography className="text-nutricare-green">
                      Protein
                    </Typography>
                    <Chip
                      size="lg"
                      value={
                        food.nutrition.protein
                          ? food.nutrition.protein
                          : "UNKNOWN"
                      }
                      className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                    />
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

function FoodNutrient() {
  return (
    <>
      <Hero />
      <Food />
    </>
  );
}

export default FoodNutrient;
