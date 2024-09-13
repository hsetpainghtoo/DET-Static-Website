import React from "react";
import { useTranslation } from "react-i18next";

const JourneyAbout = () => {
  const {t,i18n} = useTranslation();
  return (
    <div className="flex max-md:flex-col gap-10  justify-center items-center">
      <img
        src="public\assets\About us.svg"
        alt=""
        className="w-[30%] max-md:hidden pt-14 z-10"
      />
      <img
        src="public\assets\background-shape.png"
        className=" absolute max-md:hidden -left-8 max-lg:-left-6 animate-[linear_bounceY_infinite_10s] w-[600px] max-xl:w-[500px] max-lg:w-[360px] "
      />

      <div className=" h-[300px]  duration-300 text-[#2F4F4F] w-[60%] max-md:w-[90%] p-8">
        <div className="text-center max-md:text-start">
          <h1 className="text-[39px]  max-md:text-[38px] leading-normal font-bold mb-7 ">
            {t('ABOUT.PAGE.JOURNEY')}
          </h1>
          <p className="text-xl max-lg:text-lg  max-sm:text-[16px] leading-loose indent-9 text-justify">
            {t('ABOUT.DESC')}
          </p>
        </div>
      </div>

      <img
        src="public\assets\About us.svg"
        alt=""
        className=" md:hidden w-[60%] max-sm:w-[80%] mx-auto max-md:pt-20 max-sm:pt-16 max-[490px]:pt-36 max-[460px]:mt-20 max-[370px]:mt-36 z-10 "
      />
      <img
        src="https://usercontent.one/wp/www.norderbergs.com/wp-content/uploads/2020/09/background-shapes-png-1-Images-PNG-Transparent.png"
        className="max-sm:hidden md:hidden max-md:-bottom-7 absolute  animate-[linear_bounceY_infinite_10s] w-[500px] max-sm:w-[400px]"
      />
    </div>
  );
};

export default JourneyAbout;
