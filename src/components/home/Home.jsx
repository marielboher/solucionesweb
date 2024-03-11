import LanguageSwitch from "../languageSwitch/LanguageSwitch";
import "./home.css";
import { useLanguage } from "../context/LanguageContext";
import i18n from "../../../i18n.config"; 
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  const { currentLanguage } = useLanguage(); 
  return (
    <div className="home" id="home">
       <div className="switch">
        <LanguageSwitch />
      </div>
      <div className="home-title">
        <h1>
          SOLUCIONES <span>WEB</span>
        </h1>
        <p className="line"></p>
      </div>
      <div className="container-home">
        <h4>{i18n.t("potencia")}</h4>
        <p>
         {i18n.t("potenciaDesc")}
        </p>
        <Link to={`#services`} className="cssbuttons-io-button">
          {i18n.t("verServicios")}
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
