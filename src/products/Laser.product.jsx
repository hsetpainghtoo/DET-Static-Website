import { HR, Modal } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosCloseCircleOutline } from "react-icons/io";

const LaserProduct = () => {
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
          <IoIosCloseCircleOutline
            className="absolute animate-pulse top-5 right-5 text-white hover:scale-110 active:scale-95 duration-200 size-10"
            onClick={() => setOpenModal(false)}
          />
          <div className="my-2 flex justify-evenly items-center">
            <img
              className="w-[43%] max-sm:w-[80%] rounded-xl shadow-xl hover:scale-105 duration-200"
              src="public\static\assets\laser.jpg"
            />
            <img src="public\static\assets\detlogo-ZWBJPo-I.png" className="w-[35%] max-sm:hidden" />
          </div>
            <div className="flex gap-3 justify-center items-center w-[90%] mx-auto">
              <HR.Trimmed className="bg-white rounded-lg max-[500px]:hidden" />
              <h1 className="text-[31px] max-[420px]:text-[29px] py-4 w-[80%] max-[500px]:w-full font-semibold text-white text-center">
                Laser Security Alert System
              </h1>
              <HR.Trimmed className="bg-white rounded-lg max-[500px]:hidden" />
            </div>
            <p className="indent-8 leading-loose text-justify text-xl max-sm:text-[15px] text-white w-[90%] mx-auto">
            {t('PRODUCT.CARD.desc_2')}
            </p>
          
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LaserProduct;
