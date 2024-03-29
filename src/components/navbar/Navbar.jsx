import React, { useState } from "react";
import "./navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import { HiBars3 } from "react-icons/hi2";
import { VscChromeClose } from "react-icons/vsc";
import { useLanguage } from "../context/LanguageContext";
import i18n from "../../../i18n.config";
import LanguageSwitch from "../languageSwitch/LanguageSwitch";
import logo from "../../assets/logo2.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { currentLanguage } = useLanguage();
  return (
    <div className="container-nav">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="language">
        <LanguageSwitch />
      </div>
      <div className="menu-button-container">
        <button className="menu-button" onClick={toggleMenu}>
          {isOpen ? (
            <VscChromeClose className="menu-close" />
          ) : (
            <HiBars3 className="menu-open" />
          )}
        </button>
      </div>
      
      <div className="nav">
        <ul className={`nav-ul ${isOpen ? "open" : ""}`}>
          <li>
            <Link to={`#home`} onClick={toggleMenu}>
              {i18n.t("inicio")}
            </Link>
          </li>
          <li>
            <Link to={`#about`} onClick={toggleMenu}>
              {i18n.t("nosotros")}
            </Link>
          </li>
          <li>
            <Link to={`#services`} onClick={toggleMenu}>
              {i18n.t("servicios")}
            </Link>
          </li>
          <li>
            <Link to={`#contact`} onClick={toggleMenu}>
              {i18n.t("contacto")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
