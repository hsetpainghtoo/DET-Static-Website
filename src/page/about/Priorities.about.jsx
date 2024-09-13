import { List } from "flowbite-react";
import React from "react";
import { useTranslation } from "react-i18next";

const PrioritiesAbout = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="text-[#2F4F4F]">
      <h1 className="text-3xl font-bold pb-3">
        {t("ABOUT.PAGE.PRIORITIES.title")}
      </h1>
      <List className="text-[18px] max-sm:text-[17px] leading-loose text-justify">
        <List.Item>{t("ABOUT.PAGE.PRIORITIES.desc_1")}</List.Item>
        <List.Item>{t("ABOUT.PAGE.PRIORITIES.desc_2")}</List.Item>
      </List>
    </div>
  );
};

export default PrioritiesAbout;
