import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const Hero = () => {
  return (
    <div className="relative flex bg-gradient-to-b from-white to-light-green-200 justify-center px-10 gap-14 lg:px-24 py-14 text-nutricare-green">
      <img
        src="illustration/article.svg"
        alt="Anatomy"
        className="h-72 hidden lg:block xl:block"
      />
      <div className="max-w-xl">
        <div>
          <div>
            <Typography variant="h1" className="mb-4 max-w-lg">
              Welcome to{" "}
              <span className="text-nutricare-orange">NutriCare Article</span>
            </Typography>
          </div>
          <div>
            <Typography variant="paragraph" className="text-lg">
              NutriCare's{" "}
              <span className="text-nutricare-orange">Health Articles</span>{" "}
              Hub, your go-to resource for a holistic approach to well-being.
              Immerse yourself in a diverse collection of articles meticulously
              crafted to empower you on your journey to a{" "}
              <span className="text-nutricare-orange">healthier lifestyle</span>
              .
            </Typography>
          </div>
          <div>
            <div className="mt-4 gap-x-6">
              <a href="#">
                <Button className="bg-nutricare-green hover:bg-green-500">
                  Scroll Down
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Articles = () => {
  return (
    <div className="relative flex flex-col justify-center bg-light-green-50 text-center px-10 lg:px-24 py-14 text-nutricare-green">
      <div className="max-w-md lg:max-w-3xl mx-auto my-8">
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
      </div>
      <div className="grid place-content-center lg:grid-cols-4 gap-y-4">
        <Card className="w-64 shadow-lg">
          <CardHeader floated={false} color="blue-gray">
            <img src="https://picsum.photos/500" alt="Article Thumbnail"></img>
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
        <Card className="w-64 shadow-lg">
          <CardHeader floated={false} color="blue-gray">
            <img src="https://picsum.photos/500" alt="Article Thumbnail"></img>
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
        <Card className="w-64 shadow-lg">
          <CardHeader floated={false} color="blue-gray">
            <img src="https://picsum.photos/500" alt="Article Thumbnail"></img>
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
        <Card className="w-64 shadow-lg">
          <CardHeader floated={false} color="blue-gray">
            <img src="https://picsum.photos/500" alt="Article Thumbnail"></img>
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
        <Card className="w-64 shadow-lg">
          <CardHeader floated={false} color="blue-gray">
            <img src="https://picsum.photos/500" alt="Article Thumbnail"></img>
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
    </div>
  );
};

export const Article = () => {
  return (
    <>
      <Hero />
      <Articles />
    </>
  );
};

export default Article;
