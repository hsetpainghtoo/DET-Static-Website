import { Button } from "flowbite-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { HiCode } from "react-icons/hi";

const Intro = () => {
  const {t,i18n} = useTranslation();
  return (
    <>
      <h1 className="text-6xl  font-bold  font-sans text-[#2F4F4F] max-sm:hidden">
        <span className="absolute  w-0 hover:w-[425px] hover:text-white hover:bg-yellow-300 duration-300 rounded-ss-2xl rounded-ee-2xl px-2">
          INNOVATION
        </span>{" "}
        <br />
        <span className="absolute w-0 hover:w-[443px] hover:text-white  hover:bg-green-600 duration-300 rounded-ss-2xl rounded-ee-2xl px-2">
          STARTS&nbsp;WITH
        </span>{" "}
        <br />
        <span className="absolute  w-0 hover:w-[314px] hover:text-white hover:bg-red-600 duration-300 rounded-ss-2xl rounded-ee-2xl px-2">
          A&nbsp;DREAM
        </span>{" "}
        <br />
      </h1>
      <h1 className="text-6xl  max-sm:text-[42px] mx-auto pb-8 max-[400px]:pb-3  font-bold  font-sans text-[#2F4F4F] sm:hidden">
        <span className="hover:text-white hover:bg-yellow-300 duration-300 absolute w-0 hover:w-[294px]  rounded-ss-2xl rounded-ee-2xl px-1  ">
          INNOVATION
        </span>{" "}
        <br />
        <span className=" hover:text-white hover:bg-green-600  duration-300  absolute w-0 hover:w-[308px]    rounded-ss-2xl rounded-ee-2xl px-1">
          STARTS&nbsp;WITH
        </span>{" "}
        <br />
        <span className=" hover:text-white hover:bg-red-600 duration-300 absolute w-0 hover:w-[220px]    rounded-ss-2xl rounded-ee-2xl px-1 ">
          A&nbsp;DREAM
        </span>{" "}
        <br />
      </h1>
      <p className="my-2 min-[320px]:leading-loose text-left font-sans text-[#2F4F4F] text-xl max-lg:text-lg max-sm:text-[15px] ">
        {t('HOME.DESCRIPTION.INTRO')}
      </p>
      <a
        href="#contact"
        className="w-40 mt-5  flex bg-[#003366] hover:scale-110 duration-200 active:scale-95 p-4 rounded-xl text-white font-semibold"
      >
        Contact Us &nbsp; <HiCode className="text-2xl" />
      </a>
    </>
  );
};

export default Intro;
