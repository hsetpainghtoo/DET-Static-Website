import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { AboutUsPage } from "../page";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const {t,i18n} = useTranslation();
  return (
    <div className="hover:scale-105 duration-300 text-white border border-[#0C193B] rounded-2xl w-[80%] mx-auto bg-[#003366]  shadow-2xl p-8">
      <div className=" text-center">
        <h1 className="text-4xl font-bold mb-4 ">{t('ABOUT.TITLE')}</h1>
        <p className="text-lg leading-loose max-md:text-[16px]">
          {t('ABOUT.DESC')}
        </p>

        <Link to="/about">
          <button className="bg-[#007BFF] p-3 rounded-lg mt-5 hover:scale-105 active:scale-95 duration-200 font-bold">
            {t('BTN')}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
