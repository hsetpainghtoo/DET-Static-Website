import { HR } from "flowbite-react";
import React from "react";
import { useTranslation } from "react-i18next";
import WebDevelopment from "../../../public/static/assets/WebDevelopment.png"
import AppDevelopment from "../../../public/static/assets/AppDevelopment.png"
import SoftwareDevelopment from "../../../public/static/assets/SoftwareDevelopment.png"
import POSSystemDevelopment from "../../../public/static/assets/POSSystemDevelopment.png"
import ServerMaintenance from "../../../public/static/assets/ServerMaintenance.png"

const OtherService = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <div className="flex justify-center items-center mb-8">
        <HR.Trimmed className="bg-[#003366] max-md:hidden" />
        <h1 className="text-center text-[#2F4F4F] text-4xl max-sm:text-2xl font-bold">{t('SERVICE_PAGE.OTHER_SERVICES')}</h1>
        <HR.Trimmed className="bg-[#003366] max-md:hidden" />
      </div>

      <div className="text-[#2F4F4F]">
        <div className="flex gap-6 text-center justify-around pb-9">
          <div>
            <img
              src={WebDevelopment}
              className="w-24 max-sm:w-[4rem] mx-auto pb-2 hover:-translate-y-2 duration-200"
            />
            <span className="font-semibold text-lg xl:text-xl max-md:text-sm max-sm:text-xs">Web Development</span>
          </div>
          <div>
            <img
              src={AppDevelopment}
              className="w-24 max-sm:w-[4rem] mx-auto pb-2 hover:-translate-y-2 duration-200"
            />
            <span className="font-semibold text-lg xl:text-xl max-md:text-sm max-sm:text-xs">App Development</span>
          </div>
          <div>
            <img
              src={SoftwareDevelopment}
              className="w-24 max-sm:w-[4rem] mx-auto pb-2 hover:-translate-y-2 duration-200"
            />
            <span className="font-semibold text-lg xl:text-xl max-md:text-sm max-sm:text-xs">Software Development</span>
          </div>
        </div>
        <div className="flex gap-4 text-center justify-evenly">
          <div>
            <img
              src={POSSystemDevelopment}
              className="w-24 max-sm:w-[4rem] mx-auto pb-2 hover:-translate-y-2 duration-200"
            />
            <span className="font-semibold text-lg xl:text-xl max-md:text-sm max-sm:text-xs">POS System Development</span>
          </div>
          <div>
            <img
              src={ServerMaintenance}
              className="w-24 max-sm:w-[4rem] mx-auto pb-2 hover:-translate-y-2 duration-200"
            />
            <span className="font-semibold text-lg xl:text-xl max-md:text-sm max-sm:text-xs">Server Maintenance Services</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherService;
