import React from "react";
import "./about.css";
import candado from "../../assets/lock-outline.svg";
import calendario from "../../assets/calendar-outline.svg";
import heart from "../../assets/heart-outline.svg";
import meet from "../../assets/meetabout.svg";
import i18n from "../../../i18n.config";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="container-about" id="about">
      <div className="text-about">
        <div className="text">
          <div className="text-line">
            <p className="line-about"></p>
            <h1>
              <span>{i18n.t("sobre")}</span> {i18n.t("nosotrosTitle")}
            </h1>
          </div>
          <p>{i18n.t("aboutUs")}</p>
        </div>
        <img alt="meet icon" className="img-about" src={meet}></img>
      </div>

      <div className="container-cards">
        <div className="card">
          <img alt="padlock icon" src={candado}></img>
          <h2>{i18n.t("confidencialidad")}</h2>
          <p>{i18n.t("confText")}</p>
        </div>
        <div className="card">
          <img alt="calendar icon" src={calendario}></img>
          <h2>{i18n.t("entregaPuntual")}</h2>
          <p>{i18n.t("puntualText")}</p>
        </div>
        <div className="card">
          <img alt="heart icon" src={heart}></img>

          <h2>{i18n.t("hechoAmor")}</h2>
          <p>{i18n.t("amorText")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
