import { HR, List } from "flowbite-react";
import React from "react";
import { useTranslation } from "react-i18next";
import benefits from "../../../public/static/assets/Benefits.svg"

const BenefitsService = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="text-[#2F4F4F] ">
      <h1 className="text-center text-4xl max-sm:text-3xl max-[500px]:text-[23px] font-bold leading-loose">
        {t("SERVICE_PAGE.BENEFITS.title")}
      </h1>
      <div className="flex justify-center items-center mb-8">
        <HR.Trimmed className="bg-[#003366] max-md:hidden" />
        <h1 className="text-center text-4xl font-bold max-md:hidden">
          {t("SERVICE_PAGE.BENEFITS.subtitle")}
        </h1>
        <HR.Trimmed className="bg-[#003366] max-md:hidden" />
      </div>
      <div className="flex max-md:flex-col gap-4">
        <img
          src={benefits}
          className="w-[50%] max-md:w-[80%] mx-auto hover:-translate-y-2 duration-200"
        />
        <div className="text-xl max-sm:text-[15px] max-[500px]:text-[13px] w-[50%] max-md:w-[95%] mx-auto xl:text-xl">
          <p className="indent-11 text-justify leading-loose">
            {t("SERVICE_PAGE.BENEFITS.desc_1")}
          </p>
          <List className="text-[#2F4F4F] leading-loose text-justify">
            <List.Item className="py-3">
              {t("SERVICE_PAGE.BENEFITS.list_1")}
            </List.Item>
            <List.Item>{t("SERVICE_PAGE.BENEFITS.list_2")}</List.Item>
            <List.Item className="py-3">
              {t("SERVICE_PAGE.BENEFITS.list_3")}
            </List.Item>
            <List.Item>{t("SERVICE_PAGE.BENEFITS.list_4")}</List.Item>
          </List>
        </div>
      </div>
      <p className="text-xl max-sm:text-[15px] max-[500px]:text-[13px] max-md:w-[95%] mx-auto leading-loose pt-3 text-justify indent-9">
        {t("SERVICE_PAGE.BENEFITS.desc_2")}
      </p>
    </div>
  );
};

export default BenefitsService;
