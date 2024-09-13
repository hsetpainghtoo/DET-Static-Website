import React from "react";
import { useTranslation } from "react-i18next";

const IntroService = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex max-md:flex-col gap-14 pt-6 justify-center items-center">
      <div className=" h-[300px] text-[#2F4F4F] w-[50%] max-md:w-[90%] max-sm:w-[95%] p-8">
        <h1 className="text-4xl max-lg:text-[35px] max-md:text-5xl max-[670px]:text-[42px] max-sm:text-[31px] leading-normal max-sm:leading-[3rem]  font-bold mb-7 ">
          {t("SERVICE_PAGE.INTRO.title")}
        </h1>
        <p className="text-xl max-lg:text-[15px] leading-loose text-justify">
          {t("SERVICE_PAGE.INTRO.desc")}
        </p>
      </div>

      <img
        src="public\static\assets\Services.svg"
        className="md:hidden w-[60%] mx-auto pt-28 max-sm:pt-32 max-[400px]:mt-28  z-10 "
      />

      <img
        // src="https://usercontent.one/wp/www.norderbergs.com/wp-content/uploads/2020/09/background-shapes-png-1-Images-PNG-Transparent.png"
        src="public\static\assets\background-shape.png"
        className="max-sm:hidden md:hidden max-md:-bottom-28 absolute  animate-[linear_bounceY_infinite_10s] w-[500px] max-sm:w-[400px]"
      />

      <img
        src="public\static\assets\Services.svg"
        className="w-[30%] pt-14 max-lg:pb-20 z-10 max-md:hidden"
      />
      <img
        src="https://usercontent.one/wp/www.norderbergs.com/wp-content/uploads/2020/09/background-shapes-png-1-Images-PNG-Transparent.png"
        className=" absolute max-md:hidden right-1  animate-[linear_bounceY_infinite_10s] w-[600px] max-xl:w-[500px] max-lg:w-[400px]"
      />
    </div>
  );
};

export default IntroService;
