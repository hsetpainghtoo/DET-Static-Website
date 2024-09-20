import { HR } from "flowbite-react";
import React from "react";
import { useTranslation } from "react-i18next";

const StrategyService = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className=" text-[#2F4F4F]">
      <h1 className="text-[35.5px] max-lg:text-3xl max-[500px]:text-[23px] leading-loose font-bold pb-4">
        {t("SERVICE_PAGE.STRATEGY.title_1")}
      </h1>
      <p className="text-xl max-lg:text-[18px] max-sm:text-[14px] max-[500px]:text-[15px] leading-loose text-justify indent-9">
        {t("SERVICE_PAGE.STRATEGY.desc_1")}
      </p>

      <HR.Trimmed className="bg-[#003366] w-[60%] my-9" />

      <h1 className="text-4xl max-lg:text-3xl max-[500px]:text-[23px] font-bold pb-4">
        {t("SERVICE_PAGE.STRATEGY.title_2")}
      </h1>
      <div className="text-xl max-lg:text-[18px] max-sm:text-[14px] max-[500px]:text-[15px] leading-loose text-justify indent-9">
        <p>
        {t('SERVICE_PAGE.STRATEGY.desc_2_1')} <br />
        </p>
        <p className="my-3">
        {t('SERVICE_PAGE.STRATEGY.desc_2_2')} <br />
        </p>
        <p>
        {t('SERVICE_PAGE.STRATEGY.desc_2_3')} <br />
        </p>
        <p className="my-3">
        {t('SERVICE_PAGE.STRATEGY.desc_2_4')}
        </p>
      </div>
    </div>
  );
};

export default StrategyService;
