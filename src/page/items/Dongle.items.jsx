import React from "react";
import { useTranslation } from "react-i18next";

const DongleItems = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="pt-24 w-[85%] mx-auto">
      <h1 className="text-center text-4xl max-md:text-[32px] font-bold mb-9">
        {t("ITEMS.PAGE.DONGLE.title")}
      </h1>

      <div className="flex max-lg:flex-col gap-16 ">
        <img
          src="../../public/static/assets/POS_Donge.png"
          className="w-full max-lg:w-[50%] max-sm:w-[70%] mx-auto h-72 max-lg:h-full"
        />
        <div className="text-xl max-sm:text-[16px] leading-loose text-justify indent-9">
          <p>{t("ITEMS.PAGE.DONGLE.desc_1")}</p>
          <p>{t("ITEMS.PAGE.DONGLE.desc_2")}</p>
        </div>
      </div>
    </div>
  );
};

export default DongleItems;
