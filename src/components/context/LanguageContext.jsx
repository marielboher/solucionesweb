import React, { createContext, useContext, useState } from 'react';
import i18n from "../../../i18n.config"; 

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.locale);

  const handleChangeLanguage = (language) => {
    i18n.locale = language;
    setCurrentLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, handleChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
