import React from "react";
import { useTranslation } from "react-i18next";

const IntroItems = () => {
  const {t, i18n} = useTranslation();
  return (
    <div className="flex max-lg:flex-col gap-14 pt-4 justify-center items-center">
      <img
        src="public\assets\Tech Company.svg"
        className="w-[30%] max-lg:hidden pt-14 z-10"
      />
      <img
        src="public\assets\background-shape.png"
        className=" absolute max-lg:hidden left-8 max-xl:-left-1 animate-[linear_bounceY_infinite_10s] w-[600px] max-xl:w-[500px]  "
      />

      <div className=" h-[300px] my-auto duration-300 text-[#2F4F4F] w-[50%] max-lg:w-[90%] p-8">
        <h1 className="text-5xl max-xl:text-[40px] max-lg:text-[46px] max-md:text-[32px] leading-tight font-bold mb-7 ">
          {/* Your Dream Starts With <br /> Our IoT Products */}
          {t('ITEMS.TITLE')}
        </h1>
        <p className="text-xl max-sm:text-[16px] leading-loose text-justify">
          {t('ITEMS.DESC')}
        </p>
      </div>

      <img
        src="public\assets\Tech Company.svg"
        className="w-[30%] max-lg:w-[40%] max-[800px]:w-[50%] max-sm:w-[60%] max-[450px]:w-[70%] lg:hidden pt-20 max-sm:pt-6 max-[550px]:pt-32 max-[420px]:pt-56 max-[350px]:mt-20 z-10 pb-20 max-lg:pb-0 max-sm:pb-10"
      />
      <img
        src="https://usercontent.one/wp/www.norderbergs.com/wp-content/uploads/2020/09/background-shapes-png-1-Images-PNG-Transparent.png"
        className="max-sm:hidden absolute lg:hidden max-lg:top-[30rem]  max-[400px]:-bottom-24 max-[360px]:-bottom-8 animate-[linear_bounceY_infinite_10s] w-[500px]  max-[820px]:w-[490px] max-md:w-[500px] max-sm:w-[390px]"
      />
    </div>
  );
};

export default IntroItems;
