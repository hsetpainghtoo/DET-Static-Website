import { HR, Modal } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosCloseCircleOutline } from "react-icons/io";

const HandwashProduct = () => {
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
          <div className="relative flex justify-evenly items-center gap-6 w-[95%] mx-auto">
            <img
              className="w-[50%] max-sm:w-[80%] rounded-xl shadow-xl hover:scale-105 duration-200"
              src="../src/assets/hands.jpg"
            />

            <img src="../src/assets/detlogo-ZWBJPo-I.png" className="w-[40%] max-sm:hidden" />
          </div>
          <IoIosCloseCircleOutline
            className="absolute animate-pulse top-5 right-5 text-white hover:scale-110 active:scale-95 duration-200 size-10"
            onClick={() => setOpenModal(false)}
          />
          <div className="pt-5">
            <div className="flex gap-3 justify-center items-center w-[92%] mx-auto">
              <HR.Trimmed className="bg-white rounded-lg max-[500px]:hidden" />
              <h1 className="text-[31px] max-[420px]:text-[26px] pb-4 w-[80%] max-[500px]:w-full font-semibold text-white text-center">
                Automatic Hand Wash System
              </h1>
              <HR.Trimmed className="bg-white rounded-lg max-[500px]:hidden" />
            </div>
            <p className="indent-8 leading-loose text-justify text-xl max-sm:text-[16px] text-white w-[93%] mx-auto">
            {t('PRODUCT.CARD.desc_4')}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HandwashProduct;
