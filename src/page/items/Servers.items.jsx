import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const ServersItems = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="pt-20 pb-6 gap-6 grid grid-cols-3 max-lg:grid-cols-1"
      >
        {/* <SwiperSlide className="pt-16 pb-5 w-[30%] mx-auto bg-[#19072B20] backdrop-blur-lg  rounded-xl">
          <img
            className="w-48 absolute rounded-xl  left-12 top-4 z-20"
            src="public\static\assets\Raspberry Pi 4 Case.png"
          />
          <div className="pt-5 mx-auto w-[260px] pb-4 pl-3 bg-[#003366]  rounded-xl">
            <h1 className="text-lg font-bold mt-20 mb-1 text-white">
              1st Gen POS Server
            </h1>
            <ul className="text-white pl-5">
              <li className="list-disc">
                CPU - Cortex-A72 (ARM v8) Quad core 1.8GHz
              </li>
              <li className="list-disc">RAM - 4 GB</li>
              <li className="list-disc">SSD - 128 GB</li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide className="pt-16 pb-5 w-[30%] mx-auto bg-[#19072B20] backdrop-blur-lg  rounded-xl ">
          <img
            className="w-44 absolute rounded-xl  left-14 top-1 z-20"
            src="public\static\assets\GMK Server.png"
          />
          <div className="pt-8  mx-auto w-[260px] pb-4 pl-3 bg-[#003366] rounded-xl">
            <h1 className="text-lg font-bold mt-20 mb-1 text-white">
              2nd Gen POS Server
            </h1>
            <ul className="text-white pl-5">
              <li className="list-disc">
                CPU - Intel 12th N100, Quad core 3.4GHz
              </li>
              <li className="list-disc">RAM - 4 GB</li>
              <li className="list-disc">SSD - 128/256 GB</li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide className="pt-12 pb-5 w-[30%] mx-auto bg-[#19072B20] backdrop-blur-lg  rounded-xl">
          <img
            className="w-52 absolute rounded-xl left-11 top-1 z-20"
            src="public\static\assets\Bpi Router.png"
          />
          <div className="pt-8  mx-auto w-[260px] pb-4 pl-3 bg-[#003366]  rounded-xl">
            <h1 className="text-lg font-bold mt-20 mb-1 text-white">
              3rd Gen POS Server
            </h1>
            <ul className="text-white pl-5">
              <li className="list-disc">
                CPU - ARM Cortex-A53 + MT7531A chip Quad core, 2.3GHz
              </li>
              <li className="list-disc">RAM - 4 GB</li>
              <li className="list-disc">SSD - 128 GB</li>
            </ul>
          </div>
        </SwiperSlide> */}

        <SwiperSlide className="pt-16  pb-5 cols-span-1 mx-auto bg-[#003366] rounded-xl">
          <img
            className="w-64 absolute rounded-xl left-4 -top-8 z-20"
            src="public\static\assets\Raspberry Pi 4 Case.png"
          />
          <div className="pt-10 mx-auto w-[260px]  pl-3   rounded-xl">
            <h1 className="text-xl font-bold mt-16 mb-2 text-white ">
              1st Gen POS Server
            </h1>
            <ul className="text-white pl-5">
              <li className="list-disc">
                CPU - Cortex-A72 (ARM v8) Quad core 1.8GHz
              </li>
              <li className="list-disc">RAM - 4 GB</li>
              <li className="list-disc">SSD - 128 GB</li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide className="pt-16 pb-5  cols-span-1 mx-auto bg-[#003366] rounded-xl ">
          <img
            className="w-56 absolute rounded-xl  left-8 -top-16 z-20"
            src="public\static\assets\GMK Server.png"
          />
          <div className="pt-8  mx-auto w-[260px] pb-4 pl-3 rounded-xl">
            <h1 className="text-xl font-bold mt-20 mb-1 text-white">
              2nd Gen POS Server
            </h1>
            <ul className="text-white pl-5">
              <li className="list-disc">
                CPU - Intel 12th N100, Quad core 3.4GHz
              </li>
              <li className="list-disc">RAM - 4 GB</li>
              <li className="list-disc">SSD - 128/256 GB</li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide className="pt-12 pb-5 cols-span-1 mx-auto bg-[#003366] rounded-xl">
          <img
            className="w-68 absolute rounded-xl -top-20 z-20"
            src="public\static\assets\Bpi Router.png"
          />
          <div className="pt-8  mx-auto w-[260px] pb-4 pl-3   rounded-xl">
            <h1 className="text-xl font-bold mt-20 mb-1 text-white">
              3rd Gen POS Server
            </h1>
            <ul className="text-white pl-5">
              <li className="list-disc">
                CPU - ARM Cortex-A53 + MT7531A chip Quad core, 2.3GHz
              </li>
              <li className="list-disc">RAM - 4 GB</li>
              <li className="list-disc">SSD - 128 GB</li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ServersItems;
