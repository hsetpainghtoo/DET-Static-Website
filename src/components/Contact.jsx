import React from "react";
import { Button, Card, Label, Textarea, TextInput } from "flowbite-react";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {t,i18n} = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });

  const handleChanges = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(handleChanges());

  return (
    <>
      <div className="w-full text-center">
        <h1 className="text-4xl max-sm:text-3xl max-[500px]:text-[28px] text-[#2F4F4F] font-bold mt-14 mb-4">
          {t('CONTACT.TITLE')}
        </h1>
      </div>
      <div className=" mx-16 max-md:mx-8 py-12 px-16 max-md:px-7 max-sm:px-3 bg-[#19072B20] backdrop-blur-lg shadow-2xl rounded-2xl">
        <div className="w-[90%] mx-auto gap-10 space-y-9">
          <div className="flex justify-between items-center">
            <Card className=" w-[50%] max-lg:w-[95%] max-md:w-full max-lg:mx-auto rounded-xl bg-[#003366] backdrop-blur-lg shadow-2xl">
              <form action="https://formsubmit.co/hsetpainghtoo218@gmail.com" method="POST" className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2 ">
                  <TextInput
                    className="col-span-1 "
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChanges}
                    type="text"
                    placeholder={t('CONTACT.FORM.F')}
                    required
                  />
                  <TextInput
                    className="col-span-1 "
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChanges}
                    type="text"
                    placeholder={t('CONTACT.FORM.L')}
                    required
                  />
                </div>
                <TextInput
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChanges}
                  placeholder={t('CONTACT.FORM.EMAIL')}
                  required
                />

                <Textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChanges}
                  placeholder={t('CONTACT.FORM.TEXT')}
                  rows={4}
                />

                <button
                  // href="mailto:hsetpainghtoo218@gmail.com"
                  className="bg-[#007BFF] text-white p-3 rounded-lg mt-2 hover:scale-105 active:scale-95 duration-200 font-bold"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </Card>

            <div className="w-[40%] flex justify-center max-lg:hidden">
              <dotlottie-player
                src="https://lottie.host/f8225803-4413-489e-97c5-b2cc5e72161f/9OpcaKmkyw.json"
                background="transparent"
                speed={1}
                style={{ width: 300, height: 300 }}
                loop
                autoPlay
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="w-[40%] flex justify-center max-lg:hidden">
              <dotlottie-player
                src="https://lottie.host/ebac8ade-cad2-42eb-a3bb-ffdbf83613f2/6HRNplhlbj.json"
                background="transparent"
                speed={1}
                style={{ width: 300, height: 300 }}
                loop
                autoPlay
              />
            </div>

            <div className="w-[70%] max-lg:w-[95%] max-md:w-full max-lg:mx-auto  text-white bg-[#003366] backdrop-blur-lg shadow-2xl rounded-2xl p-6 border border-white">
              <h2 className="text-3xl max-[500px]:text-[28px] font-semibold mb-2">{t('CONTACT.INFO.TITLE')}</h2>
              <span className="min-[320px]:leading-loose max-[500px]:text-[15px]">{t('CONTACT.INFO.SUBTITLE')}</span>
              <div className="flex-col justify-around">
                <ol className="mt-8">
                  <li className="flex gap-6">
                    <FaMapLocationDot className="text-3xl mt-2" />
                    <span className="text-[17px] max-md:text-[14px] max-2xl:mt-3 max-xl:mt-0">
                      No.15 / 1921, 12th Street, Paung Laung 2 Wardz, Pyinmana,
                      Naypyitaw
                    </span>
                  </li>
                  <li className="flex gap-6 my-6">
                    <MdEmail className="text-2xl " />{" "}
                    <span className="text-[17px] max-md:text-[14px] max-lg:hidden">
                      digitalengineeringtech.mm@gmail.com
                    </span>
                    <span className="text-[17px] max-md:text-[14px] lg:hidden">
                      digitalengineeringtech .mm@gmail.com
                    </span>
                  </li>
                  <li className="flex gap-6">
                    <BiSolidPhoneCall className="text-2xl mt-1" />{" "}
                    <span className="text-[17px] max-md:text-[14px]">
                      +959-988-340-001
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
