import React from "react";
import { useTranslation } from "react-i18next";
import service from "../../../public/static/assets/Services.svg"
import shape from "../../../public/static/assets/background-shape.png"

const IntroService = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex max-lg:flex-col gap-14 pt-6 justify-center items-center">
      <div className=" h-[300px] text-[#2F4F4F] w-[50%] max-lg:w-[90%] max-sm:w-[95%] p-8">
        <h1 className="text-4xl  max-lg:text-5xl max-[670px]:text-[40px] max-sm:text-[31px] leading-normal max-lg:leading-tight max-sm:leading-[3rem]  font-bold mb-7 ">
          {t("SERVICE_PAGE.INTRO.title")}
        </h1>
        <p className="text-xl max-lg:text-[18px] max-[500px]:text-[15px] leading-loose text-justify">
          {t("SERVICE_PAGE.INTRO.desc")}
        </p>
      </div>

      <img
        src={service}
        className="lg:hidden w-[60%] mx-auto mt-28  max-[400px]:mt-40  z-10 "
      />

      <img
        // src="https://usercontent.one/wp/www.norderbergs.com/wp-content/uploads/2020/09/background-shapes-png-1-Images-PNG-Transparent.png"
        src={shape}
        className="max-sm:hidden lg:hidden max-lg:-bottom-10 absolute  animate-[linear_bounceY_infinite_10s] w-[600px] max-sm:w-[400px]"
      />

      <img
        src={service}
        className="w-[30%] pt-14 max-lg:pb-20 z-10 max-lg:hidden"
      />
      <img
        src={shape}
        className=" absolute max-lg:hidden right-1  animate-[linear_bounceY_infinite_10s] w-[600px] max-xl:w-[500px] max-lg:w-[350px]"
      />
    </div>
  );
};

export default IntroService;
