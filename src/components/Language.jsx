import React from "react";
import { useTranslation } from "react-i18next";
import myanmar from "../../public/static/assets/myanmar.png"
import united_states from "../../public/static/assets/united-states.png"

const Language = () => {
  const { t, i18n } = useTranslation();
  // console.log(i18n)
  // console.log(t("BTN"))
  // i18n.language=="en-US"?console.log(i18n.store.data.en.translation.HOME.TITLE):console.log();
  return (
    <>
      <button
        // className="border-2 border-white rounded-xl p-2 "
        onClick={
          i18n.language == "mm"
            ? () => i18n.changeLanguage("en")
            : () => i18n.changeLanguage("mm")
        }
      >
        <div className="flex justify-center items-center gap-3 text-white font-semibold">
          {i18n.language == "en" ? (
            <img src={myanmar} className="w-6"/>
          ) : (
            <img src={united_states} className="w-6"/>
          )}
          {t("LANGUAGE")}
        </div>
      </button>
    </>
  );
};

export default Language;
