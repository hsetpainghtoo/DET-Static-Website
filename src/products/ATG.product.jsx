import { HR, Modal } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosCloseCircleOutline } from "react-icons/io";
import ATG from "../../public/static/assets/ATG.jpg"
import detlogo from "../../public/static/assets/detlogo-ZWBJPo-I.png"


const ATGProduct = () => {
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
          <div className="relative flex justify-center items-center gap-6">
            <img
              className="w-[52%] max-sm:w-[80%] rounded-xl shadow-xl hover:-translate-y-2 hover:scale-105 duration-200"
              src={ATG}
            />
            <IoIosCloseCircleOutline
              className="absolute animate-pulse top-0 right-0 text-white hover:scale-110 active:scale-95 duration-200 size-10"
              onClick={() => setOpenModal(false)}
            />
            <img src={detlogo} className="w-[40%] max-sm:hidden" />
          </div>
          <div className="pt-5">
            <div className="flex gap-3 justify-center items-center w-[93%] mx-auto">
              <HR.Trimmed className="bg-white rounded-lg max-[500px]:hidden " />
              <h1 className="text-[31px] max-sm:text-[30px] max-[500px]:text-[22px] font-semibold text-white pb-4 text-center">
                Automatic Tank Gauge System (ATG)
              </h1>
              <HR.Trimmed className="bg-white rounded-lg max-[500px]:hidden" />
            </div>
            <p className="indent-8 leading-loose text-justify text-xl max-sm:text-[15px] text-white w-[93%] mx-auto">
            {t('PRODUCT.CARD.desc_6')}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ATGProduct;
