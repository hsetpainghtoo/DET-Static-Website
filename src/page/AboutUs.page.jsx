import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { Journey, Milestones, Missions, Priorities } from "./about";
import Footer from "../components/Footer";
import { useEffect } from "react";
import Language from "../components/Language";
import Header from "../components/Header";
import milestones from "../../public/static/assets/Milestones.svg"
import missions from "../../public/static/assets/Mission.svg"
import values from "../../public/static/assets/Values.svg"

const AboutUsPage = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  });

  return (
    <div className="bg-[#E0F7FA] min-h-[2700px]">
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

      {/* Journey Section */}
      <section className="mb-10">
        <Journey />
      </section>

      {/* Milestones Section */}
      <section className="w-[90%] flex max-md:flex-col gap-20 mx-auto mb-20 mt-36 max-md:mt-1">
        <img
          src={milestones}
          className="w-[40%] max-md:hidden hover:-translate-y-2 duration-200"
        />

        <div className="w-[50%] max-md:w-[90%] mx-auto text-[#2F4F4F] px-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 duration-200">
          <Milestones />
        </div>

        <img
          src={milestones}
          className="w-[60%] mx-auto md:hidden hover:-translate-y-2 duration-200"
        />
      </section>

      {/* Mission Section */}
      <section id="mission" className="w-[90%] flex max-md:flex-col gap-20 mx-auto mb-20">
        <div className="w-[50%] max-md:w-[90%] mx-auto">
          <Missions />
        </div>

        <img
          src={missions}
          className="w-[40%] max-md:w-[60%] mx-auto hover:-translate-y-2 duration-200"
        />
      </section>

      {/* Priorities Section */}
      <section className="w-[90%] flex max-md:flex-col justify-center items-center gap-20 mx-auto">
        <img
          src={values}
          className="w-[40%] max-md:hidden hover:-translate-y-2 duration-200"
        />

        <div className="w-[50%] max-md:w-[90%]">
          <Priorities />
        </div>

        <img
          src={values}
          className="w-[70%] mx-auto md:hidden hover:-translate-y-2 duration-200"
        />
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
