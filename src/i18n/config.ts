import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import de from './locales/de.json';
import tr from './locales/tr.json';

// Safely access localStorage only in browser environment
const getSavedLanguage = () => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        return localStorage.getItem('language') || 'en';
    }
    return 'en';
};

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        de: { translation: de },
        tr: { translation: tr },
    },
    lng: getSavedLanguage(),
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

i18n.on('languageChanged', (lng) => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        localStorage.setItem('language', lng);
    }
});

export default i18n;
