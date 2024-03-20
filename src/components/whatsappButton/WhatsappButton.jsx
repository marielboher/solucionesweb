import React from "react";
import whatsapp from "../../assets/whatsapp.png";
import "./whatsappbutton.css";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/+5493585069301"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsapp} />
    </a>
  );
};

export default WhatsappButton;
