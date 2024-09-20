import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import KyawSan from "../../../public/static/assets/KyawSan.png"
import Zion from "../../../public/static/assets/Zion.png"
import SeinHlaNanda from "../../../public/static/assets/SeinHlaNanda.png"
import  ShweSinSetkyar from "../../../public/static/assets/ShweSinSetkyar.png"
import IoTHouse from "../../../public/static/assets/IoTHouse.png"
import SanThit from "../../../public/static/assets/SanThit.png"
import Dwin from "../../../public/static/assets/Dwin.png"
import JLCPCB from "../../../public/static/assets/JLCPCB.png"

const PartnersItems = () => {
  return (
    <>
      {/* <h1 className="text-center text-4xl max-sm:text-[27px] text-[#2F4F4F] font-bold mb-10 mt-12">
        Our Clients and Partners
      </h1> */}
      <Swiper
        watchSlidesProgress={true}
        grabCursor={true}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="my-5 mt-44 max-xl:mt-56 max-lg:mt-[8rem] max-sm:mt-20"
      >
        <SwiperSlide>
          <div className=" w-full max-sm:mt-2">
            <img
              className="rounded-lg mt-2 w-20 max-sm:w-12 mx-auto"
              src={KyawSan}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full mt-1">
            <img
              className="rounded-lg w-28 max-sm:w-16 mx-auto"
              src={Zion}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full ">
            <img
              className="rounded-lg w-24 max-sm:w-14 mx-auto"
              src={SeinHlaNanda}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full mt-4 max-sm:mt-6">
            <img
              className="rounded-lg w-56 max-sm:w-56 mx-auto"
              src={ShweSinSetkyar}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full ">
            <img
              className="rounded-lg w-24 max-sm:w-14 mx-auto"
              src={IoTHouse}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full mt-3">
            <img
              className="rounded-lg w-24 max-sm:w-12 mx-auto"
              src={SanThit}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full">
            <img
              className="rounded-lg w-32 mt-4 max-sm:w-16 mx-auto"
              src={Dwin}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full mt-3 max-sm:mt-2">
            <img
              className="rounded-lg w-56 pt-4 mx-auto"
              src={JLCPCB}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PartnersItems;
