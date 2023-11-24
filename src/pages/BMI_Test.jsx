import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Button,
  Chip,
} from "@material-tailwind/react";
import React from "react";
import Description from "../components/content/description";

function Guidance() {
  return (
    <div className="relative flex flex-col justify-center text-center my-16 text-nutricare-green">
      <div className="mb-4">
        <Typography variant="h1" className="mb-2">
          Guidance for{" "}
          <span className="text-nutricare-orange">BMI Calculate</span>
        </Typography>
        <Typography variant="paragraph" className="text-lg">
          Pay attention for the guidance below for doing{" "}
          <span className="text-nutricare-orange">BMI Calculate</span>.
        </Typography>
      </div>
      <div className="flex justify-center flex-row gap-8 mt-8">
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
      </div>
    </div>
  );
}

function Test() {
  return (
    <div className="relative flex flex-col justify-center text-center my-16 py-8 bg-nutricare-greenMudaFade text-nutricare-green">
      <div className="mb-4">
        <Typography variant="h1" className="mb-2">
          Calculate BMI <span className="text-nutricare-orange">Here</span>
        </Typography>
        <Typography variant="paragraph" className="text-lg">
          Make sure you input the data correctly
        </Typography>
      </div>
      <form action="" className="flex flex-col justify-center">
        <div className="flex justify-center gap-10">
          <Radio
            name="gender"
            color="green"
            ripple={true}
            label="Male"
            defaultChecked
          />
          <Radio name="gender" color="green" ripple={true} label="Female" />
        </div>
        <div className="flex justify-center gap-6 my-4">
          <div className="flex flex-col gap-1">
            <Typography variant="paragraph" className="text-left text-medium">
              Age (years)
            </Typography>
            <Input
              placeholder="ex: 20"
              className="!border-nutricare-green focus:!border-nutricare-green"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            ></Input>
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="paragraph" className="text-left text-medium">
              Height (cm)
            </Typography>
            <Input
              placeholder="ex: 170"
              className="!border-nutricare-green focus:!border-nutricare-green"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            ></Input>
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="paragraph" className="text-left text-medium">
              Weight (kg)
            </Typography>
            <Input
              placeholder="ex: 60"
              className="!border-nutricare-green focus:!border-nutricare-green"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            ></Input>
          </div>
        </div>
        <div>
          <Button className="bg-nutricare-green hover:bg-green-500 mt-2">
            Calculate!
          </Button>
        </div>
      </form>
    </div>
  );
}

function Result() {
  return (
    <div className="relative mx-auto max-w-6xl rounded-3xl flex flex-col justify-center text-center my-32 py-8 text-nutricare-green border-2 border-nutricare-green">
      <div className="mb-4">
        <Typography variant="h1" className="mb-2">
          The <span className="text-nutricare-orange">Result</span>
        </Typography>
      </div>
      <div className="flex justify-center gap-32 mr-32">
        <img src="illustration/pana.png" alt="Anatomy" />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-start gap-2">
            <Typography>Your BMI Status</Typography>
            <Chip
              size="lg"
              className="bg-nutricare-greenTuaFade text-xs"
              value="Unknown"
            />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <Typography>Calorie Needs</Typography>
            <Chip
              size="lg"
              className="bg-nutricare-greenTuaFade text-xs"
              value="Unknown"
            />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <Typography>Protein Needs</Typography>
            <Chip
              size="lg"
              className="bg-nutricare-greenTuaFade text-xs"
              value="Unknown"
            />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <Typography>Fat Needs</Typography>
            <Chip
              size="lg"
              className="bg-nutricare-greenTuaFade text-xs"
              value="Unknown"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BMITest() {
  return (
    <>
      <Description />
      <Guidance />
      <Test />
      <Result />
    </>
  );
}

export default BMITest;
