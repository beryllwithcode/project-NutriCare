import React, { useRef } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollRef = useRef(null);
  return (
    <div className="relative flex bg-gradient-to-b from-white to-light-green-200 justify-center px-10 gap-14 lg:px-24 py-14 text-nutricare-green">
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
            <Typography variant="h1" className="mb-4">
              Welcome to NutriCare's{" "}
              <span className="text-nutricare-orange">Community</span>
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
              <a href="#discussion">
                <Button className="bg-nutricare-green hover:bg-nutricare-orange">
                  Join Us
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Content = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const NewDiscussion = () => {
    return (
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full">
          <CardBody className="flex flex-col gap-4">
            <div>
              <Typography variant="h4" className="text-nutricare-green">
                Create{" "}
                <span className="text-nutricare-orange">New Discussion</span>
              </Typography>
              <Typography
                className="mb-3 font-normal text-nutricare-green"
                variant="paragraph"
              >
                Enter details for the discussion.
              </Typography>
            </div>
            <Input label="Title" color="green" size="lg" />
            <Textarea label="Description" color="green"></Textarea>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              className="bg-nutricare-green"
              onClick={handleOpen}
              fullWidth
            >
              Create
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    );
  };
  const scrollRef = useRef(null);
  return (
    <div
      className="relative flex px-10 gap-14 lg:px-24 py-14 text-nutricare-green"
      id="discussion"
    >
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
        className="lg:w-screen"
      >
        <div className="flex justify-between items-center mb-5 pb-4 border-b-4">
          <div className="w-40 lg:w-full">
            <Typography variant="h3">Let's Discuss</Typography>
            <Typography variant="paragraph">
              Discuss anything, ask questions, find supports, and connect with
              others.
            </Typography>
          </div>
          <Button
            onClick={handleOpen}
            className="bg-nutricare-green w-32 lg:w-100 h-full"
          >
            New Discussion
          </Button>
          <NewDiscussion />
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <div className="p-5 border-2 rounded-lg flex items-center justify-between">
            <div className="w-52 lg:w-full">
              <Link to="/discussion-detail">
                <Typography variant="h5">
                  Apa yang akan terjadi ketika kamu diet tidak makan karbo?
                </Typography>
              </Link>
              <div className="flex gap-4 lg:gap-8">
                <Typography variant="paragraph" className="text-gray-500">
                  Post by <span className="text-nutricare-orange">Gusnand</span>
                </Typography>
                <Typography variant="paragraph" className="text-gray-500">
                  18 Nov
                </Typography>
              </div>
            </div>
            <div className="flex gap-2 lg:gap-6 flex-col lg:flex-row text-nutricare-greenTuaFade">
              <div className="flex gap-2 items-center">
                <img src="/icons/chat-fade.svg" alt="" className="w-5" />
                <Typography>99</Typography>
              </div>
              <div className="flex gap-2 items-center">
                <img src="/icons/thumb-fade.svg" alt="" className="w-5" />
                <Typography>99</Typography>
              </div>
            </div>
          </div>
          <div className="p-5 border-2 rounded-lg flex items-center justify-between">
            <div className="w-52 lg:w-full">
              <Typography variant="h5">
                Apa yang akan terjadi ketika kamu diet tidak makan karbo?
              </Typography>
              <div className="flex gap-4 lg:gap-8">
                <Typography variant="paragraph" className="text-gray-500">
                  Post by <span className="text-nutricare-orange">Gusnand</span>
                </Typography>
                <Typography variant="paragraph" className="text-gray-500">
                  18 Nov
                </Typography>
              </div>
            </div>
            <div className="flex gap-2 lg:gap-6 flex-col lg:flex-row text-nutricare-greenTuaFade">
              <div className="flex gap-2 items-center">
                <img src="/icons/chat-fade.svg" alt="" className="w-5" />
                <Typography>99</Typography>
              </div>
              <div className="flex gap-2 items-center">
                <img src="/icons/thumb-fade.svg" alt="" className="w-5" />
                <Typography>99</Typography>
              </div>
            </div>
          </div>
          <div className="p-5 border-2 rounded-lg flex items-center justify-between">
            <div className="w-52 lg:w-full">
              <Typography variant="h5">
                Apa yang akan terjadi ketika kamu diet tidak makan karbo?
              </Typography>
              <div className="flex gap-4 lg:gap-8">
                <Typography variant="paragraph" className="text-gray-500">
                  Post by <span className="text-nutricare-orange">Gusnand</span>
                </Typography>
                <Typography variant="paragraph" className="text-gray-500">
                  18 Nov
                </Typography>
              </div>
            </div>
            <div className="flex gap-2 lg:gap-6 flex-col lg:flex-row text-nutricare-greenTuaFade">
              <div className="flex gap-2 items-center">
                <img src="/icons/chat-fade.svg" alt="" className="w-5" />
                <Typography>99</Typography>
              </div>
              <div className="flex gap-2 items-center">
                <img src="/icons/thumb-fade.svg" alt="" className="w-5" />
                <Typography>99</Typography>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

function Community() {
  return (
    <>
      <Hero />
      <Content />
    </>
  );
}

export default Community;
