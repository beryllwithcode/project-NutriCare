import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Button,
  Chip,
} from "@material-tailwind/react";
import React, { useState, useRef } from "react";
import Description from "../components/content/description";
import { motion } from "framer-motion";

function Guidance() {
  const scrollRef = useRef(null);
  return (
    <div className="relative flex flex-col justify-center px-10 lg:px-24 text-center my-16 text-nutricare-green">
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
          Guidance for{" "}
          <span className="text-nutricare-orange">BMI Calculate</span>
        </Typography>
        <Typography variant="paragraph" className="text-lg">
          Pay attention for the guidance below for doing{" "}
          <span className="text-nutricare-orange">BMI Calculate</span>.
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
        className="flex flex-col mx-auto lg:flex-row justify-center gap-8 mt-8"
      >
        <Card className="w-64 shadow-none bg-nutricare-greenMudaFade text-nutricare-green">
          <CardBody>
            <img src="icons/device.svg" className="mx-auto mb-2"></img>
            <Typography variant="h5" className="mb-2">
              Prepare your <span className="text-nutricare-orange">Device</span>
            </Typography>
            <Typography>
              Ensure you're using a reliable device, whether it's your{" "}
              <span className="text-nutricare-orange">smartphone</span>,{" "}
              <span className="text-nutricare-orange">tablet</span>, or{" "}
              <span className="text-nutricare-orange">computer</span>. A clear
              screen and a stable internet connection are all you need.
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-64 shadow-none bg-nutricare-greenMudaFade text-nutricare-green">
          <CardBody>
            <img src="icons/keyboard.svg" className="mx-auto my-4"></img>
            <Typography variant="h5" className="mb-2">
              Input <span className="text-nutricare-orange">Correctly</span>
            </Typography>
            <Typography>
              Carefully enter your{" "}
              <span className="text-nutricare-orange">height</span> and{" "}
              <span className="text-nutricare-orange">weight</span> into the
              designated fields. Precision is key to obtaining accurate results,
              so double-check the figures.
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-64 shadow-none bg-nutricare-greenMudaFade text-nutricare-green">
          <CardBody>
            <img src="icons/checklist.svg" className="mx-auto my-6 mt-2"></img>
            <Typography variant="h5" className="mb-2">
              Make <span className="text-nutricare-orange">Sure</span>
            </Typography>
            <Typography>
              Confirm that the input data{" "}
              <span className="text-nutricare-orange">
                aligns with your actual height and weight
              </span>
              . Accurate information is the foundation of an informative BMI
              calculation.
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-64 shadow-none bg-nutricare-greenMudaFade text-nutricare-green">
          <CardBody>
            <img src="icons/calculator.svg" className="mx-auto my-3"></img>
            <Typography variant="h5" className="mb-2">
              Calculate <span className="text-nutricare-orange">Data</span>
            </Typography>
            <Typography>
              When you're confident in the data provided, simply press the{" "}
              <span className="text-nutricare-orange">"Calculate" button</span>.
              In seconds, you'll receive your Body Mass Index (BMI) and gain
              valuable insights into your health.
            </Typography>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}

function Test() {
  const [genderValue, setGenderValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");
  const [calorieNeeds, setCalorieNeeds] = useState("");
  const [proteinNeeds, setProteinsNeeds] = useState("");
  const [fatNeeds, setFatNeeds] = useState("");
  const [bmiIllustration, setBmiIllustration] = useState("");
  const [bmiColor, setBmiColor] = useState("");

  const calculateBmi = () => {
    if (heightValue && weightValue && ageValue && genderValue) {
      const heightInMeters = heightValue / 100;
      const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);

      let message = "";
      let illustration = "";
      let color = "";

      if (bmi < 18.5) {
        message = "Underweight";
        illustration = "worried.svg";
        color = "bg-nutricare-orange";
      } else if (bmi >= 18.5 && bmi < 25) {
        message = "Normal";
        illustration = "healthy.svg";
        color = "bg-nutricare-green";
      } else if (bmi >= 25 && bmi < 30) {
        message = "Overweight";
        illustration = "worried.svg";
        color = "bg-nutricare-orange";
      } else {
        message = "Obese";
        illustration = "worried.svg";
        color = "bg-nutricare-orange";
      }

      let calorie = "";
      let protein = "";
      let fat = "";

      if (genderValue === "Male") {
        calorie = (
          13.397 * weightValue +
          4.799 * heightValue -
          5.677 * ageValue +
          88.362
        ).toFixed();
        protein = (0.8 * weightValue).toFixed();
        fat = (0.25 * calorie).toFixed();
      } else if (genderValue === "Female") {
        calorie =
          9.247 * weightValue + 3.098 * heightValue - 4.33 * ageValue + 447.593;
        protein = 0.8 * weightValue;
        fat = 0.25 * calorie;
      } else {
        setCalorieNeeds("");
        setProteinsNeeds("");
        setFatNeeds("");
      }

      setBmiMessage(message);
      setBmiIllustration(illustration);
      setBmiColor(color);
      setCalorieNeeds(calorie + "kcal/day");
      setProteinsNeeds(protein + "g/day");
      setFatNeeds(fat + "g/day");
    } else {
      setBmiMessage("");
      setBmiIllustration("pana.png");
      setBmiColor("bg-nutricare-greenTuaFade");
      setCalorieNeeds("");
      setProteinsNeeds("");
      setFatNeeds("");
    }
  };

  return (
    <>
      <div className="relative flex flex-col justify-center text-center my-16 py-8 bg-nutricare-greenMudaFade text-nutricare-green">
        <div className="mb-4">
          <Typography variant="h1" className="mb-2">
            Calculate BMI <span className="text-nutricare-orange">Here</span>
          </Typography>
          <Typography variant="paragraph" className="text-lg">
            Make sure you input the data correctly
          </Typography>
        </div>
        <form className="flex flex-col justify-center">
          <div
            className="flex justify-center gap-10"
            onChange={(e) => setGenderValue(e.target.value)}
          >
            <Radio
              name="gender"
              color="green"
              ripple={true}
              label="Male"
              value="Male"
            />
            <Radio
              name="gender"
              value="Female"
              color="green"
              ripple={true}
              label="Female"
            />
          </div>
          <div className="flex flex-col w-72 mx-auto lg:flex-row justify-center gap-6 my-4">
            <div className="flex flex-col gap-1">
              <Typography variant="paragraph" className="text-left text-medium">
                Age (years)
              </Typography>
              <Input
                type="number"
                min={0}
                placeholder="ex: 20"
                className="!border-nutricare-green focus:!border-nutricare-green"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setAgeValue(e.target.value)}
              ></Input>
            </div>
            <div className="flex flex-col gap-1">
              <Typography variant="paragraph" className="text-left text-medium">
                Height (cm)
              </Typography>
              <Input
                type="number"
                min={0}
                placeholder="ex: 170"
                className="!border-nutricare-green focus:!border-nutricare-green"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={heightValue}
                onChange={(e) => setHeightValue(e.target.value)}
              ></Input>
            </div>
            <div className="flex flex-col gap-1">
              <Typography variant="paragraph" className="text-left text-medium">
                Weight (kg)
              </Typography>
              <Input
                type="number"
                min={0}
                placeholder="ex: 60"
                className="!border-nutricare-green focus:!border-nutricare-green"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={weightValue}
                onChange={(e) => setWeightValue(e.target.value)}
              ></Input>
            </div>
          </div>
          <div>
            <Button
              onClick={calculateBmi}
              className="bg-nutricare-green hover:bg-nutricare-orange mt-2"
            >
              Calculate!
            </Button>
          </div>
        </form>
      </div>
      <div className="relative mx-4 lg:mx-auto max-w-6xl rounded-3xl flex flex-col justify-center text-center my-32 py-8 text-nutricare-green border-2 border-nutricare-green">
        <div className="mb-4">
          <Typography variant="h1" className="mb-2">
            The <span className="text-nutricare-orange">Result</span>
          </Typography>
        </div>
        <div className="flex justify-center gap-32 mr-0 lg:mr-32 ">
          <img
            src={
              bmiIllustration
                ? "illustration/" + bmiIllustration
                : "illustration/pana.png"
            }
            alt="Anatomy"
            className="hidden lg:block"
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col justify-start gap-2">
              <Typography>Your BMI Status</Typography>
              <Chip
                size="lg"
                className={
                  bmiColor
                    ? "text-xs " + bmiColor
                    : "text-xs bg-nutricare-greenTuaFade"
                }
                value={bmiMessage ? bmiMessage : "UNKNOWN"}
              />
            </div>
            <div className="flex flex-col justify-start gap-2">
              <Typography>Calorie Needs</Typography>
              <Chip
                size="lg"
                className={
                  bmiMessage
                    ? "bg-nutricare-green text-xs"
                    : "bg-nutricare-greenTuaFade text-xs"
                }
                value={calorieNeeds ? calorieNeeds : "UNKNOWN"}
              />
            </div>
            <div className="flex flex-col justify-start gap-2">
              <Typography>Protein Needs</Typography>
              <Chip
                size="lg"
                className={
                  bmiMessage
                    ? "bg-nutricare-green text-xs"
                    : "bg-nutricare-greenTuaFade text-xs"
                }
                value={proteinNeeds ? proteinNeeds : "UNKNOWN"}
              />
            </div>
            <div className="flex flex-col justify-start gap-2">
              <Typography>Fat Needs</Typography>
              <Chip
                size="lg"
                className={
                  bmiMessage
                    ? "bg-nutricare-green text-xs"
                    : "bg-nutricare-greenTuaFade text-xs"
                }
                value={fatNeeds ? fatNeeds : "UNKNOWN"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BMITest() {
  return (
    <>
      <Description />
      <Guidance />
      <Test />
      {/* <Result /> */}
    </>
  );
}

export default BMITest;
