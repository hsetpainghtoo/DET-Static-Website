import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Products from "../components/Products";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  });
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="bg-[#E0F7FA] min-h-[3000px]">
        

        <header className="sticky top-0 z-20">
          <Header />
        </header>

        {/* Intro Section */}
        <section className=" ">
          
          <div className=" flex justify-evenly items-center my-20">
            <div className="flex-col z-10 w-[40%] max-lg:w-[80%]  ml-36 max-lg:ml-0">
              <Intro />
            </div>
            <div className="max-lg:hidden">
              <dotlottie-player
                src="https://lottie.host/5c746068-8412-458f-8afd-4c4e92984b2c/BJuIDov1Sk.json"
                background="transparent"
                speed={1}
                style={{ width: 550, height: 450 }}
                loop
                autoPlay
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="w-full flex max-lg:flex-col justify-center items-center gap-3 ">
          {/* <Skills /> */}
          <img src="../../public/img/power_supply.jpg" alt="test"/>

          <div className="w-[40%] max-lg:w-[70%] text-center space-y-4 max-lg:mt-5">
            <h1 className="font-bold  text-[45px] max-xl:text-4xl text-[#2F4F4F] font-sans">
              {t("HOME.TITLE_2")}
            </h1>
            <p className="text-xl min-[320px]:leading-loose max-lg:text-lg font-sans text-[#2F4F4F]">
              {t("HOME.DESCRIPTION.SKILLS")}
            </p>
          </div>
        </section>

        {/* Service Section */}
        <section
          id="service"
          className="scroll-mt-56 w-[90%] flex max-xl:flex-col justify-center items-center gap-8 my-24 mx-auto"
        >
          <div className="w-3/4 max-xl:hidden text-center space-y-4">
            <h1 className="font-bold text-[#2F4F4F] text-[45px] font-sans">
              {t("HOME.TITLE_1")}
            </h1>
            <p className="text-xl leading-loose text-[#2F4F4F] font-sans">
              {t("SERVICE.DESC")}
            </p>
            <Link to="/services">
              <button className="mt-3 p-3 rounded-lg text-white font-semibold mx-auto bg-[#003366] hover:scale-105 active:scale-95 duration-200">
                {t("BTN")}
              </button>
            </Link>
          </div>

          <Services />

          <div className="w-3/4 max-xl:w-full max-xl:block text-center space-y-4 xl:hidden">
            <h1 className="font-bold text-[#2F4F4F] text-[40px] font-sans">
              {t("HOME.TITLE_1")}
            </h1>
            <p className="text-xl min-[320px]:leading-loose max-lg:text-lg text-[#2F4F4F] font-sans">
              {t("SERVICE.DESC")}
            </p>
            <Link to="/services">
              <button className="mt-3 p-3 rounded-lg text-white font-semibold mx-auto bg-[#003366] hover:scale-105 active:scale-95 duration-200">
                {t("BTN")}
              </button>
            </Link>
          </div>
        </section>

        {/* Products Section */}
        <section
          id="product"
          className="scroll-mt-32 w-[90%] flex max-xl:flex-col gap-5 justify-center items-center  my-10 mx-auto"
        >
          <div className=" w-[51%] max-xl:w-[80%] max-lg:w-[80%] max-md:w-full max-sm:w-full">
            <Products />
          </div>
          <div className="w-[50%] max-lg:w-full max-xl:w-full text-center space-y-4">
            <h1 className="font-bold text-[40px] text-[#2F4F4F] font-sans">
              {t("PRODUCT.TITLE")}
            </h1>
            <p className="text-xl min-[320px]:leading-loose max-lg:text-lg font-sans text-[#2F4F4F]">
              {t("PRODUCT.DESC")}
            </p>
            <Link to="/items">
              <button className="mt-3 p-3 rounded-lg text-white font-semibold mx-auto bg-[#003366] hover:scale-105 active:scale-95 duration-200">
                {t("BTN")}
              </button>
            </Link>
          </div>
        </section>

        {/* Partners Section */}
        <section className="w-[100%] text-center text-black ">
          <Partners />
        </section>

        {/* About Us Section */}
        <section id="about" className="my-24 scroll-mt-36">
          <AboutUs />
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
