import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <h1 className="text-3xl text-[#2F4F4F] font-bold mb-9 mt-6">
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
              src="public\assets\KyawSan.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full mt-1">
            <img
              className="rounded-lg w-32 max-sm:w-28 max-[420px]:w-24 mx-auto"
              src="public\assets\Zion.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full ">
            <img
              className="rounded-lg w-28 max-sm:w-24 max-[420px]:w-20 mx-auto"
              src="public\assets\SeinHlaNanda.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full mt-4 max-sm:mt-6">
            <img
              className="rounded-lg w-60 max-sm:w-56 mx-auto"
              src="public\assets\ShweSinSetkyar.png"
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
              src="public\assets\IoTHouse.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full mt-1">
            <img
              className="rounded-lg w-32 max-sm:w-24 max-[420px]:mt-2 max-[420px]:w-20 mx-auto"
              src="public\assets\SanThit.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full">
            <img
              className="rounded-lg w-40 mt-2 max-sm:w-32 max-[420px]:w-28 mx-auto"
              src="public\assets\Dwin.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full mt-4 max-sm:mt-2">
            <img
              className="rounded-lg w-60 pt-4 mx-auto"
              src="public\assets\JLCPCB.png"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Partners;
