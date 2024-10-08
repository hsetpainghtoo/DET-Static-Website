import { HR, Modal } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosCloseCircleOutline } from "react-icons/io";
import detlogo from "../../public/static/assets/detlogo-ZWBJPo-I.png"
import fms from "../../public/static/assets/FMS.jpg"

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
              className="z-20 absolute animate-pulse top-0 right-0 text-white hover:scale-110 active:scale-95 duration-200 size-10"
              onClick={() => setOpenModal(false)}
            />
            {/* <h1 className="text-6xl font-bold text-white">Our Product</h1> */}
          </div>

          <div className="mb-5 flex justify-evenly items-center">
            <img
              className="w-[40%] max-sm:w-[80%] hover:scale-105 duration-200 rounded-xl shadow-xl "
              src={fms}
            />

            <img
              src={detlogo}
              className="w-[40%] max-sm:hidden"
            />
          </div>
          <div>
            <div className="flex justify-center items-center w-[90%] mx-auto my-3">
              <HR.Trimmed className="bg-white rounded-lg !my-3 w-[40%] max-[500px]:hidden" />
              <h1 className="text-[31px] max-[500px]:text-[22px] mt-4 mb-2 font-semibold text-white text-center">
                Real-Time Fuel Station Management System
              </h1>
              <HR.Trimmed className="bg-white rounded-lg !my-3 w-[40%] max-[500px]:hidden" />
            </div>
            <p className="indent-8 leading-loose text-justify text-xl max-sm:text-[15px] text-white w-[90%] mx-auto">
              {t("PRODUCT.CARD.desc_1")}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FMSProduct;
