import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import i18n from "../../../i18n.config";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nqpfwws",
        "template_8dajtag",
        e.target,
        "1JvbpOanm5pE3pBwp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { currentLanguage } = useLanguage();
  return (
    <div className="contact-container" id="contact">
      <div className="text-contact">
        <h2>
          {i18n.t("ponteEn")}
          <span>{i18n.t("contactoSpan")}</span>
        </h2>
        <p>{i18n.t("subtituloContacto")}</p>
      </div>
      <div className="container-form">
        <div className="border-form">
          {/* <h1>{i18n.t("tituloForm")}</h1> */}
          <form onSubmit={handleSubmit} className="form-contact">
            <div className="form-group">
              <label htmlFor="name">{i18n.t("nombre")}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{i18n.t("email")}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">{i18n.t("asunto")}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{i18n.t("mensaje")}</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="container-button">
              <button className="button-contact">
                {i18n.t("enviar")}
                <div className="hoverEffect">
                  <div></div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
