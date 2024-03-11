import React, { useState } from "react";
import i18n from "../../../i18n.config";
import { useLanguage } from "../context/LanguageContext";
import "./languageSwitch.css";

const LanguageSwitch = () => {
  const { currentLanguage, handleChangeLanguage } = useLanguage();

  const toggleLanguage = () => {
    if (currentLanguage === "es") {
      handleChangeLanguage("en");
    } else {
      handleChangeLanguage("es");
    }
  };

  return (
    <div className="btn-container">
      <label className="switch btn-color-mode-switch">
        <input
          type="checkbox"
          id="color_mode"
          name="color_mode"
          checked={currentLanguage === "en"}
          onChange={toggleLanguage}
        />

        <label
          className="btn-color-mode-switch-inner"
          data-off="ES"
          data-on="EN"
          htmlFor="color_mode"
        ></label>
      </label>
    </div>
  );
};

export default LanguageSwitch;
