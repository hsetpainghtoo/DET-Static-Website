import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import KyawSan from "../../public/static/assets/KyawSan.png"
import Zion from "../../public/static/assets/Zion.png"
import SeinHlaNanda from "../../public/static/assets/SeinHlaNanda.png"
import  ShweSinSetkyar from "../../public/static/assets/ShweSinSetkyar.png"
import IoTHouse from "../../public/static/assets/IoTHouse.png"
import SanThit from "../../public/static/assets/SanThit.png"
import Dwin from "../../public/static/assets/Dwin.png"
import JLCPCB from "../../public/static/assets/JLCPCB.png"


const Partners = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <h1 className="text-3xl max-[500px]:text-[27px] text-[#2F4F4F] font-bold mb-9 mt-20">
        {t("PARTNERS.CLIENTS")}
      </h1>
      <Swiper
        dir="rtl"
        watchSlidesProgress={true}
        grabCursor={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className=" w-full max-sm:mt-2">
            <img
              className="rounded-lg w-24 max-sm:w-20 max-[420px]:w-16 mx-auto"
              src={KyawSan}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full mt-1">
            <img
              className="rounded-lg w-32 max-sm:w-28 max-[420px]:w-24 mx-auto"
              src={Zion}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full ">
            <img
              className="rounded-lg w-28 max-sm:w-24 max-[420px]:w-20 mx-auto"
              src={SeinHlaNanda}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full mt-4 max-sm:mt-6">
            <img
              className="rounded-lg w-60 max-sm:w-56 mx-auto"
              src={ShweSinSetkyar}
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <p className="text-3xl max-sm:text-[27px] text-[#2F4F4F] font-bold mb-8 mt-10">
        {t("PARTNERS.SUPPLIERS")}
      </p>
      <Swiper
        watchSlidesProgress={true}
        grabCursor={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="my-5"
      >
        <SwiperSlide>
          <div className=" w-full ">
            <img
              className="rounded-lg w-28 max-sm:w-24 max-[420px]:w-20 mx-auto"
              src={IoTHouse}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full mt-1">
            <img
              className="rounded-lg w-32 max-sm:w-24 max-[420px]:mt-2 max-[420px]:w-20 mx-auto"
              src={SanThit}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full">
            <img
              className="rounded-lg w-40 mt-2 max-sm:w-32 max-[420px]:w-28 mx-auto"
              src={Dwin}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full mt-4 max-sm:mt-2">
            <img
              className="rounded-lg w-60 pt-4 mx-auto"
              src={JLCPCB}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Partners;
