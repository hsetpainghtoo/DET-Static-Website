import { Button, Card } from "flowbite-react";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

import FuelStation from "../../public/static/assets/fuelstation.jpg"
import IoTservice from "../../public/static/assets/iotservice.jpg"
import SmartHome from "../../public/static/assets/smarthome.jpg"
import POS from "../../public/static/assets/pos.jpg";

const ServiceSwiper = () => {
  const { t, i18n } = useTranslation();
  // console.log(t('SERVICE.CARD'))
  return (
    <div className="w-[52%] max-xl:w-[70%] max-md:w-[90%]  hover:scale-105 duration-300  bg-[#19072B20] backdrop-blur-lg shadow-2xl p-6 rounded-xl ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" flex max-lg:flex-col gap-5 h-full bg-[#003366]  p-5 rounded-xl ">
            <img
              className="w-60 max-lg:w-[95%]  max-lg:mx-auto rounded-xl  "
              src={FuelStation}
            />
            <div className="flex-col my-auto">
              <h1 className="text-[26px] max-xl:text-[35px] max-sm:text-[30px] max-[440px]:text-[25px]  mb-3 font-bold text-white">
                {t("SERVICE.Card.title_1")}
              </h1>

              <p className="max-xl:text-lg max-sm:text-[15px] line-clamp-3 text-white">
                {t('SERVICE.DESCRIPTION.desc_1')}
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex max-lg:flex-col gap-5 h-full bg-[#003366]  p-5 rounded-xl ">
            <img
              className="w-60 max-lg:w-[95%] max-lg:mx-auto rounded-xl  "
              src={IoTservice}
            />
            <div className="flex-col my-auto">
              <h1 className="text-[26px] max-xl:text-[35px] max-sm:text-[30px] max-[440px]:text-[25px] mb-3 font-bold text-white">
                {t("SERVICE.Card.title_2")}
              </h1>
              <p className="max-xl:text-lg max-sm:text-[15px] line-clamp-3 text-white">
                {t('SERVICE.DESCRIPTION.desc_2')}
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex max-lg:flex-col gap-5 h-full bg-[#003366]  p-5 rounded-xl ">
            <img
              className="w-60 max-lg:w-[95%] max-lg:mx-auto rounded-xl  "
              src={SmartHome}
            />
            <div className="flex-col my-auto">
              <h1 className="text-[26px] max-xl:text-[35px] max-sm:text-[30px] max-[440px]:text-[25px] mb-3 font-bold text-white">
                {t("SERVICE.Card.title_3")}
              </h1>
              <p className="max-xl:text-lg max-sm:text-[15px] line-clamp-3 text-white">
                {t('SERVICE.DESCRIPTION.desc_3')}
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex max-lg:flex-col gap-5 h-full bg-[#003366]  p-5 rounded-xl ">
            <img
              className="w-60 max-lg:w-[95%] max-lg:mx-auto rounded-xl  "
              src={POS}
            />
            <div className="flex-col my-auto">
              <h1 className="text-[26px] max-xl:text-[35px] max-sm:text-[30px] max-[440px]:text-[25px] mb-3 font-bold text-white">
                {t("SERVICE.Card.title_4")}
              </h1>
              <p className="max-xl:text-lg max-sm:text-[15px] line-clamp-3 text-white">
                {t('SERVICE.DESCRIPTION.desc_4')}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServiceSwiper;
