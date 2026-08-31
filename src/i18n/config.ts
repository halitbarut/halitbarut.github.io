import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '../../content/en/common.json';
import trCommon from '../../content/tr/common.json';
import deCommon from '../../content/de/common.json';

const resources = {
  en: {
    translation: enCommon
  },
  tr: {
    translation: trCommon
  },
  de: {
    translation: deCommon
  }
};

// Always default to Turkish. Only use saved preference if user explicitly changed it.
const savedLang = localStorage.getItem('app_language') || 'tr';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false 
    },
    // Disable browser language detection — always start with Turkish unless saved
    detection: undefined,
  });

// Synchronize the HTML document lang attribute immediately and on language change
if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language || savedLang;
  i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
  });
}

export default i18n;
