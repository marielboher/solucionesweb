import "./footer.css";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import i18n from "../../../i18n.config";
import { useLanguage } from "../context/LanguageContext";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  const { language } = useLanguage();
  return (
    <div className="container-footer">
      <div className="text-footer">
        <h3>Solucionesweb</h3>
        <p className="line-footer"></p>
        <div className="container-list">
          <div className="lista-nav">
            <ul>
              <li>
                <Link to={`#home`}>{i18n.t("inicio")}</Link>
              </li>
              <li>
                <Link to={`#about`}>{i18n.t("nosotros")}</Link>
              </li>
              <li>
                <Link to={`#services`}>{i18n.t("servicios")}</Link>
              </li>
              <li>
                <Link to={`#contact`}>{i18n.t("contacto")}</Link>
              </li>
            </ul>
          </div>
          <p>© 2024 All rights reserved.</p>
        </div>
      </div>
      <div className="container-icons">
        <div className="icons">
          <img src={linkedin}></img>
          <img src={instagram}></img>
          <img src={facebook}></img>
        </div>
        <div className="support">
          <p>{i18n.t("soporte")}solucionesweb.soporte@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
