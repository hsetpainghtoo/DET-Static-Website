import { HR, List } from "flowbite-react";
import React from "react";
import { useTranslation } from "react-i18next";

const MissionAbout = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className=" text-[#2F4F4F] ">
      <h1 className="text-3xl font-bold pb-3">
        {t("ABOUT.PAGE.VISION.title")}
      </h1>
      <List className="text-[18px] max-sm:text-[17px] leading-loose text-justify">
        <List.Item>{t("ABOUT.PAGE.VISION.desc_1")}</List.Item>
        <List.Item>{t("ABOUT.PAGE.VISION.desc_2")}</List.Item>
        <List.Item>{t("ABOUT.PAGE.VISION.desc_3")}</List.Item>
      </List>

      <HR.Trimmed className="bg-[#003366] w-[60%] my-9" />

      <h1 className="text-3xl font-bold pb-3">{t('ABOUT.PAGE.MISSION.title')}</h1>
      <List className="text-[18px] max-sm:text-[17px] leading-loose text-justify">
        <List.Item>
        {t('ABOUT.PAGE.MISSION.desc_1')}
        </List.Item>
        <List.Item>
        {t('ABOUT.PAGE.MISSION.desc_2')}
        </List.Item>
        <List.Item>
        {t('ABOUT.PAGE.MISSION.desc_3')}
        </List.Item>
      </List>
    </div>
  );
};

export default MissionAbout;
