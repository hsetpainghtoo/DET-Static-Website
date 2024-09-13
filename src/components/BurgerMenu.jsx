import React from "react";
import { Dropdown } from "flowbite-react";
import { IoHome } from "react-icons/io5";
import { MdRoomService } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Language from "./Language";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const BurgerMenu = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  return (
    <>
      
      <Dropdown
        className="!bg-[#003366]  border-2 shadow-xl rounded-xl flex justify-center items-center w-[150px]"
        dismissOnClick={false}
        label=""
        renderTrigger={() => (
          <svg
            xmlns="#"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      >
        {location.pathname === "/" ? (
          <>
            <Dropdown.Item
              href="#"
              icon={IoHome}
              className="text-white text-[16px] !bg-[#003366] hover:!bg-[#042b52]"
            >
              {t("N_HOME")}
            </Dropdown.Item>
          </>
        ) : (
          <>
            <Dropdown.Item
              icon={IoHome}
              className="text-white text-[16px] !bg-[#003366] hover:!bg-[#042b52]"
            >
              <Link to="/">{t("N_HOME")}</Link>
            </Dropdown.Item>
          </>
        )}

        
        <Dropdown.Item
          className="text-white text-[16px] !bg-[#003366] hover:!bg-[#042b52]"
          icon={MdRoomService}
        >
          <Link to="/services">{t("N_SER")}</Link>
        </Dropdown.Item>
        <Dropdown.Item
          className="text-white text-[16px] !bg-[#003366] hover:!bg-[#042b52]"
          icon={AiFillProduct}
        >
          <Link to="/items">{t("N_PRO")}</Link>
        </Dropdown.Item>
        <Dropdown.Item
          className="text-white text-[16px] !bg-[#003366] hover:!bg-[#042b52]"
          icon={FaUserGroup}
        >
          <Link to="/about">{t("N_ABOUT")}</Link>
        </Dropdown.Item>
        {/* <Dropdown.Item
          className="text-white text-[16px] !bg-[#003366] hover:!bg-[#042b52]"
          as="a"
          href="#contact"
          icon={RiCustomerService2Fill}
        >
          {t('N_CONTACT')}
        </Dropdown.Item> */}
        {location.pathname === "/" && (
          <Dropdown.Item
            className="text-white text-[16px] !bg-[#003366] hover:!bg-[#042b52]"
            as="a"
            href="#contact"
            icon={RiCustomerService2Fill}
          >
            {t("N_CONTACT")}
          </Dropdown.Item>
        )}
        <Dropdown.Item className="text-white text-[16px] !bg-[#003366] hover:!bg-[#042b52]">
          <Language />
        </Dropdown.Item>
      </Dropdown>
    </>
  );
};

export default BurgerMenu;
