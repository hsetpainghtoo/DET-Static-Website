import { HR, Modal } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosCloseCircleOutline } from "react-icons/io";

const FMSProduct = () => {
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

      <Modal size={"6xl"} show={openModal}>
        <Modal.Body className="bg-[#003366] rounded-lg productScrollbar">
          <div className="relative ">
            <IoIosCloseCircleOutline
              className="absolute animate-pulse top-0 right-0 text-white hover:scale-110 active:scale-95 duration-200 size-10"
              onClick={() => setOpenModal(false)}
            />
            {/* <h1 className="text-6xl font-bold text-white">Our Product</h1> */}
          </div>

          <div className="mb-5 flex justify-evenly items-center">
            <img
              className="w-[40%] max-sm:w-[80%] hover:scale-105 duration-200 rounded-xl shadow-xl "
              src="https://i.pinimg.com/564x/e0/8b/88/e08b88403de92610f30f491261b71025.jpg"
            />

            <img
              src="src\assets\detlogo-ZWBJPo-I.png"
              className="w-[40%] max-sm:hidden"
            />
          </div>
          <div>
            <div className="flex justify-center items-center w-[90%] mx-auto my-3">
              <HR.Trimmed className="bg-white rounded-lg !my-3 w-[40%] max-[500px]:hidden" />
              <h1 className="text-[31px] max-[500px]:text-[28px] my-4 font-semibold text-white text-center">
                Real-Time Fuel Station Management System
              </h1>
              <HR.Trimmed className="bg-white rounded-lg !my-3 w-[40%] max-[500px]:hidden" />
            </div>
            <p className="indent-8 leading-loose text-justify text-xl max-sm:text-[16px] text-white w-[90%] mx-auto">
              {t("PRODUCT.CARD.desc_1")}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FMSProduct;
