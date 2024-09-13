import React from "react";
import { useTranslation } from "react-i18next";

const ControllerItems = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="pt-14 w-[85%] mx-auto">
      <h1 className="text-center text-4xl max-md:text-[32px] font-bold mb-10">
        {t("ITEMS.PAGE.CONTROLLER.title")}
      </h1>

      <div className="flex max-lg:flex-col justify-center items-center gap-12 ">
        <img
          src="../src/assets/Touch Controller.png"
          className=" lg:hidden  h-full max-lg:w-[70%] max-sm:w-full "
        />
        <div className="text-xl max-sm:text-[16px] leading-loose text-justify indent-9">
          <p>{t("ITEMS.PAGE.CONTROLLER.desc_1")}</p>
          <p>{t("ITEMS.PAGE.CONTROLLER.desc_2")}</p>
        </div>
        <img
          src="../src/assets/Touch Controller.png"
          className="w-full max-lg:hidden h-72"
        />
      </div>
    </div>
  );
};

export default ControllerItems;
