import React from "react";
import { Typography } from "@material-tailwind/react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative px-6 lg:px-8 mt-12 bottom-0 text-nutricare-green">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-20 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-x-3 mb-4">
              <img
                src="/logo/logo192.png"
                className="h-12 w-auto"
                alt="NutriCare"
              />
              <Typography
                className="mr-4 py-1.5 font-semibold tracking-widest"
                variant="h3"
              >
                <span className="font-light text-orange-400">Nutri</span>Care
              </Typography>
            </div>
            <Typography variant="paragraph">
              Whether you're looking to manage your weight, improve your eating
              habits, or simply understand the nutritional content of your
              meals, NutriCare has you covered.
            </Typography>
          </div>
          <div className="justify-between gap-4">
            <Typography className="mr-4 py-1.5 font-semibold" variant="h4">
              About <span className="text-orange-400">Us</span>
            </Typography>
            <ul>
              <li>F156YB030 - Beryll Pradana Ramadhan</li>
              <li>F193YB044 - Bernard Andrean Sianturi</li>
              <li>F014YA282 - Ketut Agus Cahyadi Nanda</li>
              <li>F204YB352 - Imam Syiva Hidayat</li>
              <li>S461YB478 - Husain Abdullah</li>
            </ul>
          </div>
          <div className="justify-between gap-4">
            <Typography className="mr-4 py-1.5 font-semibold " variant="h4">
              Random{" "}
              <span className="font-semibold text-orange-400">Quote</span>
            </Typography>
            <Typography
              className="mr-4 py-1.5 font-semibold "
              variant="paragraph"
            >
              "<span className="text-orange-400">Empowering</span> individuals
              to take control of their health through informed choices, one{" "}
              <span className="text-orange-400">nutrient</span> at a time"
            </Typography>
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-green-800 py-6">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">NutriCare</a>. All Rights
            Reserved. |{" "}
            <span className="font-semibold">
              Dicoding Capstone Project 2023
            </span>
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
