import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, languageNames, languageFlags } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Default language is English, but check localStorage first
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'en';
  });

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Get translation function
  const t = (path) => {
    const keys = path.split('.');
    let result = translations[language];
    
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        // Fallback to English if translation not found
        result = translations['en'];
        for (const k of keys) {
          if (result && typeof result === 'object' && k in result) {
            result = result[k];
          } else {
            return path; // Return the path if translation not found
          }
        }
        break;
      }
    }
    
    return result || path;
  };

  const value = {
    language,
    setLanguage,
    t,
    languages: Object.keys(translations),
    languageNames,
    languageFlags
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
