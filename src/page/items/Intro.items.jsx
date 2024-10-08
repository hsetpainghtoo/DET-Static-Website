import React from "react";
import { useTranslation } from "react-i18next";
import tech_company from "../../../public/static/assets/Tech Company.svg"
import shape from "../../../public/static/assets/background-shape.png"

const IntroItems = () => {
  const {t, i18n} = useTranslation();
  return (
    <div className="flex max-lg:flex-col gap-14 pt-4 justify-center items-center">
      <img
        src={tech_company}
        className="w-[30%] max-lg:hidden pt-14 z-10"
      />
      <img
        src={shape}
        className=" absolute max-lg:hidden left-8 max-xl:-left-1 animate-[linear_bounceY_infinite_10s] w-[600px] max-xl:w-[500px]  "
      />

      <div className=" h-[300px] my-auto duration-300 text-[#2F4F4F] w-[50%] max-lg:w-[90%] p-8">
        <h1 className="text-5xl max-xl:text-[38px] max-lg:text-[46px] max-md:text-[30px]  leading-normal font-bold mb-7 ">
          {/* Your Dream Starts With <br /> Our IoT Products */}
          {t('ITEMS.TITLE')}
        </h1>
        <p className="text-xl max-sm:text-[15px] leading-10 max-sm:leading-loose text-justify">
          {t('ITEMS.DESC')}
        </p>
      </div>

      <img
        src={tech_company}
        className="w-[30%] max-lg:w-[40%] max-[800px]:w-[50%] max-sm:w-[60%] max-[450px]:w-[70%] lg:hidden pt-20 max-sm:pt-6 max-[550px]:mt-20 max-[400px]:mt-36 max-[370px]:mt-44 z-10 pb-20 max-lg:pb-0 max-sm:pb-10"
      />
      <img
        src={shape}
        className="max-sm:hidden absolute lg:hidden max-lg:top-[30rem]  max-[400px]:-bottom-24 max-[360px]:-bottom-8 animate-[linear_bounceY_infinite_10s] w-[500px]  max-[820px]:w-[490px] max-md:w-[500px] max-sm:w-[390px]"
      />
    </div>
  );
};

export default IntroItems;
