import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import {
  CloudService,
  Dongle,
  ItemsIntro,
  ItemsPartners,
  ItemsServers,
  TouchController,
} from "./items";
import Footer from "../components/Footer";
import { useEffect } from "react";
import Language from "../components/Language";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";

const ItemsPage = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#E0F7FA] min-h-[2900px]">
      {/* <div className=" w-full z-30 flex items-center sticky top-0 justify-between px-9 py-2 bg-[#003366] backdrop-blur-lg shadow-2xl">
        <img src="public\static\assets\detlogo-ZWBJPo-I.png" className="w-48" />

        <div className="text-white flex gap-5 text-lg font-semibold">
          <Language />
          <Link to="/">
            <IoHome
              size={30}
              className="hover:scale-125 active:scale-95 duration-200"
            />
          </Link>
        </div>
      </div> */}

      <Header/>

      {/* Items Intro Section */}
      <section>
        <ItemsIntro />
      </section>

      {/* Partners Section */}
      <section>
        <ItemsPartners />
      </section>

      {/* POS Servers Section */}
      <section className="scroll-mt-32 w-[90%]  mt-10 mx-auto">
        <div className="w-[73%] max-xl:w-[90%] max-lg:w-[300px]  mx-auto">
          <ItemsServers />
        </div>

        <div className="w-full mt-12 text-center space-y-4">
          <h1 className="font-bold text-[38px] max-md:text-[32px] text-[#2F4F4F] font-sans">
            {t("ITEMS.PAGE.SERVERS.title")}
          </h1>
          <p className="leading-loose text-xl max-sm:text-[16px] font-sans text-[#2F4F4F]">
            {t("ITEMS.PAGE.SERVERS.desc")}
          </p>
        </div>
      </section>

      {/* Wireless Dongle Section */}
      <section className="text-[#2F4F4F]">
        <Dongle />
      </section>

      {/* Touch Controller Section */}
      <section className="text-[#2F4F4F]">
        <TouchController />
      </section>

      {/* Cloud Service Section */}
      <section className="text-[#2F4F4F] pb-20">
        <CloudService />
      </section>

      <Footer />
    </div>
  );
};

export default ItemsPage;
