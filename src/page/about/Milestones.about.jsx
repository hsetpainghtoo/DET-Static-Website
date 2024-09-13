import { Timeline, Button } from "flowbite-react";
import React from "react";
import { useTranslation } from "react-i18next";

const MilestonesAbout = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <h1 className="text-3xl max-md:text-[28px] max-sm:text-3xl text-[#2F4F4F] font-bold text-center pt-6 pb-5">
        {t("ABOUT.PAGE.MILESTONES.title")}
      </h1>

      <p className="pb-5 indent-5 text-xl max-md:text-lg leading-loose text-justify text-[#2F4F4F]">
        {t("ABOUT.PAGE.MILESTONES.desc_1")}
      </p>

      <Timeline className=" text-[#2F4F4F] leading-loose">
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>January 2020</Timeline.Time>
            <Timeline.Title className="text-xl pb-1 text-[#2F4F4F]">
              Laser Security Alert System
            </Timeline.Title>
            <Timeline.Body className="text-[17px] max-sm:text-[15px]  indent-4 text-justify text-[#2F4F4F]">
              {t("ABOUT.PAGE.MILESTONES.desc_2")}
            </Timeline.Body>
            {/* <Button color="gray">Learn More</Button> */}
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>During the COVID-19 Pandemic</Timeline.Time>
            <Timeline.Title className="text-xl pb-1 text-[#2F4F4F]">
              Automatic Hand Wash System
            </Timeline.Title>
            <Timeline.Body className="text-[17px] max-sm:text-[15px] indent-4 text-justify text-[#2F4F4F]">
              {t("ABOUT.PAGE.MILESTONES.desc_3")}
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>January 2022</Timeline.Time>
            <Timeline.Title className="text-xl pb-1 text-[#2F4F4F]">
              Smart Water Controller Project
            </Timeline.Title>
            <Timeline.Body className="text-[17px] max-sm:text-[15px] indent-4 text-justify text-[#2F4F4F]">
              {t("ABOUT.PAGE.MILESTONES.desc_4")}
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>August 2022</Timeline.Time>
            <Timeline.Title className="text-xl pb-1 text-[#2F4F4F]">
              Smart Room Controller Project
            </Timeline.Title>
            <Timeline.Body className="text-[17px] max-sm:text-[15px] indent-4 text-justify  text-[#2F4F4F]">
              {/* We released the "Smart Room Controller Project" for home /
              apartment and hotel use. This project offers an intelligent
              control system that allows users to manage various aspects of
              their room, including lighting,{" "}
              <span className="max-sm:hidden">temperature</span>
              <span className="sm:hidden">tempera- ture</span>, and
              entertainment systems. */}
              {t("ABOUT.PAGE.MILESTONES.desc_5")}
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </>
  );
};

export default MilestonesAbout;
