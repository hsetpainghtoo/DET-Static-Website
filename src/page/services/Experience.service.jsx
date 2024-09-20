import { Blockquote, HR, List } from "flowbite-react";
import React from "react";
import { useTranslation } from "react-i18next";
import detlogo from "../../../public/static/assets/detlogo.png"

const ExperienceService = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className=" pt-8 md:pt-12 pb-10 text-[#2F4F4F]">
      <div className="flex px-11">
        <HR.Trimmed className="bg-[#003366] w-[20%] max-sm:w-[10%] max-sm:mt-7 max-md:mt-12 mt-2" />
        <img
          src={detlogo}
          className="w-[30%] max-lg:w-[50%] max-md:w-[60%] max-sm:w-[70%] "
        />
        <HR.Trimmed className="bg-[#003366] w-[20%] max-sm:w-[10%] max-sm:mt-7 max-md:mt-12 mt-2" />
      </div>
      <h1 className="w-[90%] mx-auto text-[#2F4F4F] leading-10 text-center text-3xl xl:text-4xl max-[500px]:text-[24px] p-3 xl:p-4 font-bold ">
        {t("SERVICE_PAGE.EXPERIENCE.TITLE")}
      </h1>
      <section id="experience" className="experience ">
        <div className="customScrollbar scroll-smooth  w-[90%] h-[688px] mx-auto  rounded-lg overflow-y-scroll  md:p-10">
          <span className="indent-10 text-justify block text-xl max-lg:text-[18px] max-sm:text-[15px] leading-10 xl:leading-10">
            {t("SERVICE_PAGE.EXPERIENCE.DESC")}
          </span>
          <span className="block max-xl:leading-9 text-xl xl:mt-[2rem] xl:text-3xl font-semibold xl:font-bold">
            {t("SERVICE_PAGE.EXPERIENCE.title_1")}
          </span>
          <List className="text-[#2F4F4F] list-square ml-[4rem] xl:ml-[7rem] mt-5 xl:mt-[2rem] text-xl max-lg:text-[18px] max-sm:text-[15px] leading-10 xl:leading-[3rem]">
            <List.Item> {t("SERVICE_PAGE.EXPERIENCE.list_1_1")} </List.Item>
            <List.Item> {t("SERVICE_PAGE.EXPERIENCE.list_1_2")} </List.Item>
            <List.Item> {t("SERVICE_PAGE.EXPERIENCE.list_1_3")}</List.Item>
          </List>

          <span className="block leading-9 mt-5 xl:mt-[2rem] text-xl xl:text-[33px] font-semibold xl:font-bold">
            {t("SERVICE_PAGE.EXPERIENCE.title_2")}
          </span>
          <List className="text-[#2F4F4F] list-square ml-[4rem] xl:ml-[7rem] mt-5 xl:mt-[2rem] text-xl max-lg:text-[18px] max-sm:text-[15px] leading-10 xl:leading-[3rem]">
            <List.Item>{t("SERVICE_PAGE.EXPERIENCE.list_2_1")}</List.Item>
            <List.Item>{t("SERVICE_PAGE.EXPERIENCE.list_2_2")}</List.Item>
            <List.Item>{t("SERVICE_PAGE.EXPERIENCE.list_2_3")}</List.Item>
            <List.Item>{t("SERVICE_PAGE.EXPERIENCE.list_2_4")}</List.Item>
            <List.Item>{t("SERVICE_PAGE.EXPERIENCE.list_2_5")}</List.Item>
          </List>
          <span className="indent-8 text-justify block mt-5 xl:mt-[2rem] text-xl max-lg:text-[18px] max-sm:text-[15px] leading-10 xl:leading-10">
            {t("SERVICE_PAGE.EXPERIENCE.desc_2_1")}
          </span>
          <span className="indent-8 text-justify block mt-5 xl:mt-[2rem] text-xl max-lg:text-[18px] max-sm:text-[15px] leading-10 xl:leading-10">
            {t("SERVICE_PAGE.EXPERIENCE.desc_2_2")}
          </span>
          <span className="indent-8 text-justify block mt-5 ml:mt-[2rem] text-xl max-lg:text-[18px] max-sm:text-[15px] leading-10 xl:leading-10">
            {t("SERVICE_PAGE.EXPERIENCE.desc_2_3")}
          </span>

          <h1 className="leading-9 text-center text-2xl xl:text-4xl font-bold mt-[2rem] xl:mt-[5rem]">
            {t("SERVICE_PAGE.EXPERIENCE.title_3")}
          </h1>
          <span className="indent-8 text-justify block mt-8 xl:mt-[3rem] text-xl max-lg:text-[18px] max-sm:text-[15px] leading-10 xl:leading-10">
            {t("SERVICE_PAGE.EXPERIENCE.desc_3")}
          </span>

          <Blockquote className=" text-center text-2xl xl:text-4xl font-bold mt-[2rem] xl:mt-[5rem]">
            {t("SERVICE_PAGE.EXPERIENCE.title_4")}
          </Blockquote>
          <span className="indent-8 text-justify block mt-8 xl:mt-[3rem] text-xl max-lg:text-[18px] max-sm:text-[15px] leading-10 xl:leading-10">
            {t("SERVICE_PAGE.EXPERIENCE.desc_4_1")}
          </span>
          <span className="indent-8 text-justify block mt-8 xl:mt-[3rem] text-xl max-lg:text-[18px] max-sm:text-[15px] leading-10 xl:leading-10">
            {t("SERVICE_PAGE.EXPERIENCE.desc_4_2")}
          </span>
          <List className="text-[#2F4F4F] list-square ml-[4rem] xl:ml-[7rem] mt-5 xl:mt-[2rem] text-xl max-lg:text-[18px] max-sm:text-[15px] leading-10 xl:leading-[3rem]">
            <List.Item>{t("SERVICE_PAGE.EXPERIENCE.list_4_1")}</List.Item>
            <List.Item>{t("SERVICE_PAGE.EXPERIENCE.list_4_2")}</List.Item>
            <List.Item>{t("SERVICE_PAGE.EXPERIENCE.list_4_3")}</List.Item>
            <List.Item>{t("SERVICE_PAGE.EXPERIENCE.list_4_4")}</List.Item>
            <List.Item>{t("SERVICE_PAGE.EXPERIENCE.list_4_5")}</List.Item>
            <List.Item>{t("SERVICE_PAGE.EXPERIENCE.list_4_6")}</List.Item>
            <List.Item>{t("SERVICE_PAGE.EXPERIENCE.list_4_7")}</List.Item>
          </List>
          <span className="indent-8 text-justify block mt-9 xl:mt-[3rem] text-xl max-lg:text-[18px] max-sm:text-[15px] leading-10 xl:leading-10">
            {t("SERVICE_PAGE.EXPERIENCE.desc_4_3")}
          </span>
          <span className="indent-8 text-justify block mt-9 xl:mt-[3rem] text-xl max-lg:text-[18px] max-sm:text-[15px] leading-10 xl:leading-10">
            {t("SERVICE_PAGE.EXPERIENCE.desc_4_4")}
          </span>
        </div>
      </section>
    </div>
  );
};

export default ExperienceService;
