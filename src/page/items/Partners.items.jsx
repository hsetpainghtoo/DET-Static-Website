import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

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
        className="my-5 mt-48 max-lg:mt-[8rem] max-sm:mt-20"
      >
        <SwiperSlide>
          <div className=" w-full max-sm:mt-2">
            <img
              className="rounded-lg mt-2 w-20 max-sm:w-12 mx-auto"
              src="public\assets\KyawSan.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full mt-1">
            <img
              className="rounded-lg w-28 max-sm:w-16 mx-auto"
              src="public\assets\Zion.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full ">
            <img
              className="rounded-lg w-24 max-sm:w-14 mx-auto"
              src="public\assets\SeinHlaNanda.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full mt-4 max-sm:mt-6">
            <img
              className="rounded-lg w-56 max-sm:w-56 mx-auto"
              src="public\assets\ShweSinSetkyar.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full ">
            <img
              className="rounded-lg w-24 max-sm:w-14 mx-auto"
              src="public\assets\IoTHouse.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full mt-3">
            <img
              className="rounded-lg w-24 max-sm:w-12 mx-auto"
              src="public\assets\SanThit.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full">
            <img
              className="rounded-lg w-32 mt-4 max-sm:w-16 mx-auto"
              src="public\assets\Dwin.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full mt-3 max-sm:mt-2">
            <img
              className="rounded-lg w-56 pt-4 mx-auto"
              src="public\assets\JLCPCB.png"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PartnersItems;
