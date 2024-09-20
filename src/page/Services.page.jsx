import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import {
  Benefits,
  Consult,
  Data,
  Experience,
  Intro,
  OtherServices,
  Strategy,
} from "./services";
import { HR } from "flowbite-react";
import Footer from "../components/Footer";
import { useEffect } from "react";
import Language from "../components/Language";
import Header from "../components/Header";
import consulting from "../../public/static/assets/Consulting.svg"
import data from "../../public/static/assets/Data.svg"
import strategy from "../../public/static/assets/Strategy.svg"


const ServicesPage = () => {
  
  useEffect(() => {
    window.scrollTo(0,0)
  },[]);
  
  return (

    <div className="bg-[#E0F7FA] min-h-[5000px]">
      {/* <div className=" w-full z-30 flex items-center sticky top-0 justify-between px-9 py-2 bg-[#003366] backdrop-blur-lg shadow-2xl">
        <img src="../../public/static/assets/detlogo-ZWBJPo-I.png" className="w-48" />

        <div className="text-white flex gap-5 text-lg font-semibold">
          <Language/>
          <Link to="/">
            <IoHome
              size={30}
              className="hover:scale-125 active:scale-95 duration-200"
            />
          </Link>
        </div>
      </div> */}

      <Header/>

      {/* ServiceIntro Section */}
      <section className="max-2xl:mb-48 max-md:mb-20 max-sm:mb-10">
        <Intro />
      </section>

      {/* Consulting Section */}
      <section className="w-[90%] flex max-md:flex-col gap-20 max-md:gap-0 mx-auto mb-24">
        <img
          src={consulting}
          className="w-[40%] max-md:hidden mx-auto hover:-translate-y-2 duration-200"
        />
        <div className="w-[50%] max-md:w-[95%] mx-auto">
          <Consult />
        </div>
        <img
          src={consulting}
          className="w-[40%] md:hidden max-md:w-[80%] mx-auto hover:-translate-y-2 duration-200"
        />
      </section>

      {/* Data Section */}
      <section className="w-[90%] flex max-md:flex-col gap-20 max-md:gap-9 mx-auto mb-20">
        <div className="w-[50%]  max-md:w-[85%] mx-auto">
          <Data />
        </div>
        <img
          src={data}
          className="w-[40%] max-md:w-[70%] mx-auto hover:-translate-y-2 duration-200"
        />
      </section>

      {/* Strategy Section */}
      <section className="w-[90%] flex max-md:flex-col gap-20 max-md:gap-9 mx-auto mb-20">
        <img
          src={strategy}
          className="w-[40%] max-md:hidden hover:-translate-y-2 duration-200"
        />

        <div className="w-[50%]  max-md:w-[85%] mx-auto">
          <Strategy />
        </div>

        <img
          src={strategy}
          className="w-[70%] md:hidden mx-auto hover:-translate-y-2 duration-200"
        />
      </section>

      {/* OtherService Section */}
      <section className="w-[80%] max-md:w-[90%] mx-auto mb-28">
        <OtherServices />
      </section>

      {/* Benefits Section */}
      <section className="w-[90%] mx-auto mb-20">
        <Benefits />
      </section>

      {/* Experience Section */}
      <section>
        <Experience />
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
