import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
// import required modules
import { EffectCards } from "swiper/modules";
import { ATG, Farm, FMS, HandWash, Laser, Room, Water } from "../products";
import { useTranslation } from "react-i18next";
import fms from "../../public/static/assets/FMS.jpg"
import laser from "../../public/static/assets/laser.jpg"
import smartfarm from "../../public/static/assets/SmartFarm.jpg"
import handwash from "../../public/static/assets/handwash.jpg"
import atg from "../../public/static/assets/ATG.jpg"

const Products = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Swiper
        loop={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-full px-[21rem] max-2xl:px-[11rem] max-xl:px-[19rem] max-lg:px-[10rem] max-[990px]:px-[13rem] max-[810px]:px-[9rem] max-md:px-[12rem] max-sm:px-[9rem] max-[580px]:px-[7rem] max-[540px]:px-[6rem] max-[510px]:px-[2rem] max-[380px]:px-[0.7rem] py-8 hover:scale-105 duration-300"
      >
        <SwiperSlide>
          <div className="pt-8 h-3/5 w-[320px] px-5 pb-4 bg-[#19072B20] backdrop-blur-lg shadow-xl rounded-xl">
            <div className="bg-[#003366] p-5 rounded-xl">
              <img
                className="w-64 absolute rounded-xl  right-[33px] bottom-60"
                // src="https://i.pinimg.com/564x/e0/8b/88/e08b88403de92610f30f491261b71025.jpg"
                src={fms}
              />
              <h1 className="text-lg font-bold mt-36 mb-1 text-white">
                Real-Time Fuel Station Management System
              </h1>
              <p className="line-clamp-3 text-white">
                {t("PRODUCT.CARD.desc_1")}
              </p>

              <FMS />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-8 h-3/5 w-[320px] px-5 pb-4 bg-[#19072B20] backdrop-blur-lg shadow-xl rounded-xl">
            <div className="bg-[#003366] p-5 rounded-xl">
              <img
                className="w-64 absolute rounded-xl  right-[33px] bottom-[230px]"
                // src="https://i.pinimg.com/564x/be/1e/96/be1e96b3ce81ff907d5bd96b1087a764.jpg"
                src={laser}
              />
              <h1 className="text-lg font-bold mt-28 mb-1 text-white">
                Laser Security Alert System
              </h1>
              <p className="line-clamp-3 text-white">
                {t("PRODUCT.CARD.desc_2")}
              </p>

              <Laser />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-8 h-3/5 w-[320px] px-5 pb-4 bg-[#19072B20] backdrop-blur-lg shadow-xl rounded-xl">
            <div className="bg-[#003366] p-5 rounded-xl">
              <img
                className="w-[260px] absolute rounded-xl  right-[31px] bottom-56"
                // src="https://i.pinimg.com/564x/ee/1f/cb/ee1fcb4cde6388d5b4c959931cf15aa3.jpg"
                src={smartfarm}
              />
              <h1 className="text-lg font-bold mt-36 mb-1 text-white">
                Smart Farm System
              </h1>
              <p className="line-clamp-3 text-white">
                {t("PRODUCT.CARD.desc_3")}
              </p>

              <Farm />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-8 h-3/5 w-[320px] px-5 pb-4 bg-[#19072B20] backdrop-blur-lg shadow-xl rounded-xl">
            <div className="bg-[#003366] p-5 rounded-xl">
              <img
                className="w-[250px] absolute rounded-xl  right-[35px] bottom-52"
                // src="https://www.hopkinsmedicine.org/-/media/patient-safety/images/hands2.jpg"
                src={handwash}
              />
              <h1 className="text-lg font-bold mt-36 mb-1 text-white">
                Automatic Hand Wash
              </h1>
              <p className="line-clamp-3 text-white">
                {t("PRODUCT.CARD.desc_4")}
              </p>

              <HandWash />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-8 h-3/5 w-[320px] px-5 pb-4 bg-[#19072B20] backdrop-blur-lg shadow-xl rounded-xl">
            <div className="bg-[#003366] p-5 rounded-xl">
              <img
                className="w-[260px] absolute rounded-xl  right-[31px] bottom-56"
                src="https://cdn.news2day.co.kr/data2/content/image/2024/06/27/.cache/512/20240627500198.png"
                
              />
              <h1 className="text-lg font-bold mt-36 mb-1 text-white">
                Smart Room Controller
              </h1>
              <p className="line-clamp-3 text-white">
                {t("PRODUCT.CARD.desc_5")}
              </p>

              <Room />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-8 h-3/5 w-[320px] px-5 py-4 bg-[#19072B20] backdrop-blur-lg shadow-xl rounded-xl">
            <div className="bg-[#003366] p-5 rounded-xl">
              <img
                className="w-[244px] absolute rounded-xl  right-[38px] bottom-[230px]"
                // src="https://i.pinimg.com/564x/ac/cd/b5/accdb5d182e5670e287e0cdbd2426847.jpg"
                src={atg}
              />
              <h1 className="text-lg font-bold mt-36 mb-1 text-white">
                Automatic Tank Gauge System (ATG)
              </h1>
              <p className="line-clamp-3 text-white">
                {t("PRODUCT.CARD.desc_6")}
              </p>

              <ATG />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-8 h-3/5 w-[320px] px-5 py-4 bg-[#19072B20] backdrop-blur-lg shadow-xl rounded-xl">
            <div className="bg-[#003366] p-5 rounded-xl">
              <img
                className="w-[244px] absolute rounded-xl  right-[38px] bottom-[220px]"
                src="https://b3553652.smushcdn.com/3553652/wp-content/uploads/2020/10/10-418-In-situ-01.jpg?lossy=2&strip=1&webp=1"
                
              />
              <h1 className="text-lg font-bold mt-36 mb-1 text-white">
                Smart Water Controller
              </h1>
              <p className="line-clamp-3 text-white">
                {t("PRODUCT.CARD.desc_7")}
              </p>

              <Water />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Products;
