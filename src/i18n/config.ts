import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import de from './locales/de.json';
import tr from './locales/tr.json';

const savedLanguage = localStorage.getItem('language') || 'tr';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        de: { translation: de },
        tr: { translation: tr },
    },
    lng: savedLanguage,
    fallbackLng: 'tr',
    interpolation: {
        escapeValue: false,
    },
});

i18n.on('languageChanged', (lng) => {
    localStorage.setItem('language', lng);
});

export default i18n;
