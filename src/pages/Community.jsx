import React from "react";
import { Button, Typography } from "@material-tailwind/react";

const Hero = () => {
  return (
    <div className="relative flex bg-gradient-to-b from-white to-light-green-200 justify-center px-10 gap-14 lg:px-24 py-14 text-nutricare-green">
      <img
        src="illustration/rafiki.svg"
        alt="Anatomy"
        className="h-72 hidden lg:block xl:block"
      />
      <div className="max-w-xl">
        <div>
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
              <a href="#">
                <Button className="bg-nutricare-green hover:bg-green-500">
                  Join Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="relative flex px-10 gap-14 lg:px-24 py-14 text-nutricare-green">
      <div className="lg:w-screen">
        <div className="flex justify-between items-center pb-4 border-b-4">
          <div className="w-40 lg:w-full">
            <Typography variant="h3">Let's Discuss</Typography>
            <Typography variant="paragraph">
              Discuss anything, ask questions, find supports, and connect with
              others.
            </Typography>
          </div>
          <Button className="bg-nutricare-green w-32 lg:w-100 h-full">
            New Discussion
          </Button>
        </div>
        <div className="flex gap-4 my-4">
          <div>
            <input
              class="sr-only peer"
              type="radio"
              value="yes"
              name="sort"
              id="all"
              defaultChecked
            />
            <label
              class="flex py-3 px-6 uppercase font-bold text-xs bg-white border border-nutricare-green rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-nutricare-green peer-checked:text-white"
              for="all"
            >
              All
            </label>
          </div>
          <div>
            <input
              class="sr-only peer"
              type="radio"
              value="no"
              name="sort"
              id="Latest"
            />
            <label
              class="flex py-3 px-6 uppercase font-bold text-xs bg-white border border-nutricare-green rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-nutricare-green peer-checked:text-white"
              for="Latest"
            >
              Latest
            </label>
          </div>
          <div>
            <input
              class="sr-only peer"
              type="radio"
              value="no"
              name="sort"
              id="Popular"
            />
            <label
              class="flex py-3 px-6 uppercase font-bold text-xs bg-white border border-nutricare-green rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-nutricare-green peer-checked:text-white"
              for="Popular"
            >
              Popular
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-4">
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
      </div>
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
