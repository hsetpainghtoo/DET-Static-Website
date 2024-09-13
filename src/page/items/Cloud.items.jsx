import React from "react";
import { useTranslation } from "react-i18next";

const CloudItems = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="pt-24 w-[85%] mx-auto">
      <h1 className="text-center text-4xl max-md:text-[32px] font-bold mb-9">
        {t("ITEMS.PAGE.CLOUD.title")}
      </h1>

      <div className="flex max-lg:flex-col gap-20 max-xl:gap-10">
        <div className="w-full max-lg:w-[80%] max-sm:w-full mx-auto h-[400px] max-xl:h-[340px] relative">
          <img
            src="../src/assets/Login.png"
            className="w-[70%] max-lg:w-[60%] max-md:w-[20rem] max-[570px]:w-[19rem] max-[500px]:w-[17rem] max-[430px]:w-[16rem] max-[500px]:top-4 absolute"
          />
          <img
            src="../src/assets/PPRD.png"
            className="w-[70%] max-lg:w-[60%] max-md:w-[20rem] max-[570px]:w-[19rem] max-[500px]:w-[17rem] max-[430px]:w-[16rem] absolute bottom-0 right-0 max-[570px]:bottom-10"
          />
        </div>
        <div className="text-xl max-sm:text-[16px] text-justify leading-loose indent-9 w-full">
          <p>{t("ITEMS.PAGE.CLOUD.desc_1")}</p>
          <p>{t("ITEMS.PAGE.CLOUD.desc_2")}</p>
        </div>
      </div>
    </div>
  );
};

export default CloudItems;
