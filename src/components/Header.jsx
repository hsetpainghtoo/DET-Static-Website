import React from "react";
import { FaEye } from "react-icons/fa";
import BurgerMenu from "./BurgerMenu";
import Language from "./Language";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import detlogo from "../../public/static/assets/detlogo-ZWBJPo-I.png"

// import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className=" z-30 w-full flex items-center justify-between sticky top-0 px-9 py-2 bg-[#003366] backdrop-blur-lg shadow-2xl">
        <img src={detlogo} className="w-48" />

        <ul
          id="navbar"
          className="text-white flex justify-center items-center gap-9 text-lg font-semibold max-lg:hidden"
        >
          {location.pathname === "/" ? (
            <>
              <li>
                <a href="#">{t("N_HOME")}</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">{t("N_HOME")}</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/services">{t("N_SER")}</Link>
          </li>
          <li>
            <Link to="/items">{t("N_PRO")}</Link>
          </li>
          <li>
            <Link to="/about">{t("N_ABOUT")}</Link>
          </li>
          {/* <li>
            <a href="#contact">{t("N_CONTACT")}</a>
          </li> */}
          {location.pathname === "/" && (
            <li>
              <a href="#contact">{t("N_CONTACT")}</a>
            </li>
          )}
          <li className="pt-2">
            <Language />
          </li>
        </ul>

        <div className="text-white lg:hidden">
          <BurgerMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
