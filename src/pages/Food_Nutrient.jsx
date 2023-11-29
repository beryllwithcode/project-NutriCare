import React, { useRef } from "react";
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
              <Button className="bg-nutricare-green hover:bg-green-500">
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
      <div className="grid place-content-center lg:grid-cols-3 gap-y-4">
        <Card className="lg:w-80 shadow-lg mx-auto">
          <CardHeader floated={false} color="blue-gray">
            <img src="https://picsum.photos/500" alt="Article Thumbnail"></img>
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          </CardHeader>
          <CardBody className="pb-2">
            <Typography variant="h4" color="orange" className="">
              Kopi
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
                  value="99 kcal"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
              <div>
                <Typography className="text-nutricare-green">Carbs</Typography>
                <Chip
                  size="lg"
                  value="34 g"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
              <div>
                <Typography className="text-nutricare-green">Fat</Typography>
                <Chip
                  size="lg"
                  value="35 g"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
              <div>
                <Typography className="text-nutricare-green">
                  Protein
                </Typography>
                <Chip
                  size="lg"
                  value="11 g"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card className="lg:w-80 shadow-lg mx-auto">
          <CardHeader floated={false} color="blue-gray">
            <img src="https://picsum.photos/500" alt="Article Thumbnail"></img>
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          </CardHeader>
          <CardBody className="pb-2">
            <Typography variant="h4" color="orange" className="">
              Kopi
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
                  value="99 kcal"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
              <div>
                <Typography className="text-nutricare-green">Carbs</Typography>
                <Chip
                  size="lg"
                  value="34 g"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
              <div>
                <Typography className="text-nutricare-green">Fat</Typography>
                <Chip
                  size="lg"
                  value="35 g"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
              <div>
                <Typography className="text-nutricare-green">
                  Protein
                </Typography>
                <Chip
                  size="lg"
                  value="11 g"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card className="lg:w-80 shadow-lg mx-auto">
          <CardHeader floated={false} color="blue-gray">
            <img src="https://picsum.photos/500" alt="Article Thumbnail"></img>
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          </CardHeader>
          <CardBody className="pb-2">
            <Typography variant="h4" color="orange" className="">
              Kopi
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
                  value="99 kcal"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
              <div>
                <Typography className="text-nutricare-green">Carbs</Typography>
                <Chip
                  size="lg"
                  value="34 g"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
              <div>
                <Typography className="text-nutricare-green">Fat</Typography>
                <Chip
                  size="lg"
                  value="35 g"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
              <div>
                <Typography className="text-nutricare-green">
                  Protein
                </Typography>
                <Chip
                  size="lg"
                  value="11 g"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card className="lg:w-80 shadow-lg mx-auto">
          <CardHeader floated={false} color="blue-gray">
            <img src="https://picsum.photos/500" alt="Article Thumbnail"></img>
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          </CardHeader>
          <CardBody className="pb-2">
            <Typography variant="h4" color="orange" className="">
              Kopi
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
                  value="99 kcal"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
              <div>
                <Typography className="text-nutricare-green">Carbs</Typography>
                <Chip
                  size="lg"
                  value="34 g"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
              <div>
                <Typography className="text-nutricare-green">Fat</Typography>
                <Chip
                  size="lg"
                  value="35 g"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
              <div>
                <Typography className="text-nutricare-green">
                  Protein
                </Typography>
                <Chip
                  size="lg"
                  value="11 g"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card className="lg:w-80 shadow-lg mx-auto">
          <CardHeader floated={false} color="blue-gray">
            <img src="https://picsum.photos/500" alt="Article Thumbnail"></img>
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          </CardHeader>
          <CardBody className="pb-2">
            <Typography variant="h4" color="orange" className="">
              Kopi
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
                  value="99 kcal"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
              <div>
                <Typography className="text-nutricare-green">Carbs</Typography>
                <Chip
                  size="lg"
                  value="34 g"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
              <div>
                <Typography className="text-nutricare-green">Fat</Typography>
                <Chip
                  size="lg"
                  value="35 g"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
              <div>
                <Typography className="text-nutricare-green">
                  Protein
                </Typography>
                <Chip
                  size="lg"
                  value="11 g"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card className="lg:w-80 shadow-lg mx-auto">
          <CardHeader floated={false} color="blue-gray">
            <img src="https://picsum.photos/500" alt="Article Thumbnail"></img>
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          </CardHeader>
          <CardBody className="pb-2">
            <Typography variant="h4" color="orange" className="">
              Kopi
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
                  value="99 kcal"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
              <div>
                <Typography className="text-nutricare-green">Carbs</Typography>
                <Chip
                  size="lg"
                  value="34 g"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
              <div>
                <Typography className="text-nutricare-green">Fat</Typography>
                <Chip
                  size="lg"
                  value="35 g"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
              <div>
                <Typography className="text-nutricare-green">
                  Protein
                </Typography>
                <Chip
                  size="lg"
                  value="11 g"
                  className="bg-gradient-to-br from-nutricare-linearStart to-nutricare-linearEnd text-md -uppercase"
                />
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
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
