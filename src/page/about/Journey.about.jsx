import React from "react";
import { useTranslation } from "react-i18next";
import about_us from "../../../public/static/assets/About us.svg"
import shape from "../../../public/static/assets/background-shape.png"

const JourneyAbout = () => {
  const {t,i18n} = useTranslation();
  return (
    <div className="flex max-lg:flex-col gap-10  justify-center items-center">
      <img
        src={about_us}
        alt=""
        className="w-[30%] max-lg:hidden pt-14 z-10"
      />
      <img
        src={shape}
        className=" absolute max-lg:hidden -left-8 max-lg:-left-6 animate-[linear_bounceY_infinite_10s] w-[600px] max-xl:w-[500px] max-lg:w-[360px] "
      />

      <div className=" h-[300px]  duration-300 text-[#2F4F4F] w-[60%] max-lg:w-[90%] p-8">
        <div className="text-center max-md:text-start">
          <h1 className="text-[39px]  max-md:text-[38px] max-[500px]:text-[33px] leading-normal font-bold mb-7 ">
            {t('ABOUT.PAGE.JOURNEY')}
          </h1>
          <p className="text-xl max-lg:text-lg  max-sm:text-[15px] lg:leading-loose max-lg:leading-loose indent-9 text-justify">
            {t('ABOUT.DESC')}
          </p>
        </div>
      </div>

      <img
        src={about_us}
        alt=""
        className=" lg:hidden w-[60%] max-sm:w-[80%] mx-auto max-lg:mt-28 max-sm:mt-24 max-[450px]:mt-48  z-10 "
      />
      <img
        src={shape}
        className="max-sm:hidden lg:hidden max-lg:top-[30rem] max-md:-bottom-8 absolute animate-[linear_bounceY_infinite_10s] w-[600px] max-md:w-[500px] max-sm:w-[400px]"
      />
    </div>
  );
};

export default JourneyAbout;
