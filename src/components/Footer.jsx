import React from "react";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex justify-between items-center mt-6 w-full bg-[#003366] backdrop-blur-lg shadow-2xl px-7 py-3 sm:flex sm:items-center sm:justify-between">
      <div className="flex text-white text-xs">
        <FaRegCopyright className="text-xs mt-[2px]" /> &nbsp;
        <span className="max-[640px]:hidden">2024 Digital Engineering Tech Ltd. All Rights Reserved</span>
        <span className="sm:hidden  max-sm:text-[10px]">2024 Digital Engineering Tech Ltd.<br/> All Rights Reserved</span>
      </div>

      <div className="  flex space-x-4 sm:mt-0 sm:justify-center text-white text-2xl">
        <a href="https://www.facebook.com/digitalengineeringtech?mibextid=ZbWKwL" className="hover:scale-110 duration-300 active:scale-95">
          <BsFacebook size={25}/>
        </a>
        <a href="http://www.youtube.com/@digitalengineeringtech" className="hover:scale-110 duration-300 active:scale-95 pt-[2px]">
          <BsYoutube size={25}/>
        </a>
        <a href="https://www.linkedin.com/company/digital-engineering-tech-ltd/" className=" hover:scale-110 duration-300 active:scale-95">
          <AiFillLinkedin size={27}/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
