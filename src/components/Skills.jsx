import React from "react";
import { useTranslation } from "react-i18next";
import Innovation from "../../public/static/assets/Innovation.svg"
import Designing from "../../public/static/assets/Designing.svg"
import Developing from "../../public/static/assets/Developing.svg"
import Verified from "../../public/static/assets/verified.svg"

const Skills = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-[40%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[95%] flex justify-center items-center gap-3 ">
      <div className="h-[350px] border-2 border-black hover:border-dashed hover:border-[#003366] bg-black hover:bg-[#19072B20] backdrop-blur-lg shadow-lg shadow-slate-600 w-[17%] duration-200 hover:w-[40%] rounded-[45px]">
        <img
          className="absolute h-full w-full px-2"
          // src="https://www.svgrepo.com/show/233800/light-bulb-idea.svg"
          src={Innovation}
        />
        <p className="font-semibold h-full flex items-end justify-center text-2xl max-[400px]:text-[17px] overflow-hidden py-8">
          {t("SKILLS.INNO")}
        </p>
      </div>

      <div className="h-[350px] mt-7 border-2 border-black hover:border-dashed hover:border-[#003366]  bg-black hover:bg-[#19072B20] backdrop-blur-lg shadow-lg shadow-slate-600 w-[17%] duration-200 hover:w-[40%] rounded-[45px]">
        <img
          className="absolute h-full w-full px-2 "
          src={Designing}
        />
        <p className="font-semibold h-full flex items-end justify-center text-2xl max-[400px]:text-[17px] overflow-hidden py-8">
          {t("SKILLS.DESIGN")}
        </p>
      </div>

      <div className="h-[350px] border-2 border-black hover:border-dashed hover:border-[#003366]  bg-black hover:bg-[#19072B20] backdrop-blur-lg shadow-lg shadow-slate-600 w-[17%] duration-200 hover:w-[40%] rounded-[45px]">
        <img
          className="absolute h-full w-full px-3"
          src={Developing}
        />
        <p className="font-semibold h-full flex items-end justify-center text-2xl max-[400px]:text-[17px] overflow-hidden py-8">
          {t("SKILLS.DEV")}
        </p>
      </div>

      <div className="h-[350px] mt-10 border-2 border-black hover:border-dashed hover:border-[#003366]  bg-black hover:bg-[#19072B20] backdrop-blur-lg shadow-lg shadow-slate-600 w-[17%] duration-200 hover:w-[40%] rounded-[45px]">
        <img
          className="absolute h-full w-full "
          src={Verified}
        />
        <p className="font-semibold h-full flex items-end justify-center text-2xl max-[400px]:text-[17px] overflow-hidden py-8">
          {t("SKILLS.TEST")}
        </p>
      </div>
    </div>
  );
};

export default Skills;
