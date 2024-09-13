import { HR, Modal } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosCloseCircleOutline } from "react-icons/io";

const RoomProduct = () => {
  const {t,i18n} = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="p-2 rounded-lg font-semibold text-white mt-4 bg-[#007BFF] hover:scale-105 active:scale-95 duration-200"
      >
        {t('BTN')}
      </button>

      <Modal size={"5xl"} show={openModal}>
        <Modal.Body className="bg-[#003366] rounded-lg productScrollbar">
          <div className="relative flex justify-evenly items-center">
            <img
              className="w-[50%] max-sm:w-[80%] rounded-xl shadow-xl hover:-translate-y-2 hover:scale-105 duration-200"
              src="https://cdn.news2day.co.kr/data2/content/image/2024/06/27/.cache/512/20240627500198.png"
              // src="../../public/static/assets/smarthome.jpg"
            />
            <IoIosCloseCircleOutline
              className="absolute animate-pulse top-0 right-0 text-white hover:scale-110 active:scale-95 duration-200 size-10"
              onClick={() => setOpenModal(false)}
            />
            <img src="../../public/static/assets/detlogo-ZWBJPo-I.png" className="w-[40%] max-sm:hidden"/>
          </div>
          <div className="pt-5">
            <div className="flex gap-3 justify-center items-center w-[94%] mx-auto">
              <HR.Trimmed className="bg-white rounded-lg max-[500px]:hidden" />
              <h1 className="text-[31px] max-[420px]:text-[28px] pb-4 w-[50%] max-[500px]:w-full font-semibold text-white text-center">
                Smart Room Controller
              </h1>
              <HR.Trimmed className="bg-white rounded-lg max-[500px]:hidden" />
            </div>
            <p className="indent-8 leading-loose text-justify text-xl max-sm:text-[16px] text-white w-[93%] mx-auto">
            {t('PRODUCT.CARD.desc_5')}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RoomProduct;
