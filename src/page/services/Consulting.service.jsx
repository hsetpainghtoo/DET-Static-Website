import { HR, List } from "flowbite-react";
import React from "react";
import { useTranslation } from "react-i18next";

const ConsultingService = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className=" text-[#2F4F4F]">
      <h1 className="text-4xl max-lg:text-3xl  max-[500px]:text-[23px] font-bold pb-5">
        {t("SERVICE_PAGE.CONSULTING.title_1")}
      </h1>
      <p className="text-xl max-lg:text-[18px] max-sm:text-[15px] max-[500px]:text-[15px] leading-loose text-justify indent-9">
        {t("SERVICE_PAGE.CONSULTING.desc_1")}
      </p>

      <HR.Trimmed className="bg-[#003366] w-[60%] my-9" />

      <h1 className="text-4xl max-lg:text-3xl  max-[500px]:text-[23px] font-bold pb-5">
        {t("SERVICE_PAGE.CONSULTING.title_2")}
      </h1>
      <p className="text-xl max-lg:text-[18px] max-sm:text-[15px] max-[500px]:text-[15px] leading-loose text-justify indent-9">
        {t("SERVICE_PAGE.CONSULTING.desc_2")}
      </p>
    </div>
  );
};

export default ConsultingService;
