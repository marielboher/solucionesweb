import "./services.css";
import cart from "../../assets/shopping-bag-outline.svg";
import monitor from "../../assets/monitor-outline.svg";
import mobile from "../../assets/smartphone-outline.svg";
import i18n from "../../../i18n.config";
import { useLanguage } from "../context/LanguageContext";
const Services = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="container-services" id="services">
      <h4>{i18n.t("nuestrosServicios")}</h4>
      <h1>
        {i18n.t("nuestrosServiciosSubtitle")}
        <span>{i18n.t("span")}</span>
      </h1>
      <div className="cards-services-container">
        <div className="card-services">
          <img alt="cart icon" src={cart}></img>
          <h3>E-Commerce</h3>
          <p className="line-services"></p>
          <p>{i18n.t("e-comerce")}</p>
        </div>
        <div className="card-services">
          <img alt="monitor icon" src={monitor}></img>

          <h3>Blogs</h3>
          <p className="line-services"></p>
          <p>{i18n.t("blogs")}</p>
        </div>
        <div className="card-services">
          <img alt="monitor icon" src={monitor}></img>
          <h3>Landing pages</h3>
          <p className="line-services"></p>
          <p>{i18n.t("LandingPages")}</p>
        </div>
        <div className="card-services">
          <img alt="mobile icon" src={mobile}></img>
          <h3>Responsive Desings</h3>
          <p className="line-services"></p>
          <p>{i18n.t("responsiveDesing")}</p>
        </div>
      </div>
      <p className="text-services">{i18n.t("textServices")}</p>
    </div>
  );
};

export default Services;
