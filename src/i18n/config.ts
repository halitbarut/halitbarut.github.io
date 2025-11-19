import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import de from './de.json';
import tr from './tr.json';

type ResourceKey = 'en' | 'de' | 'tr';

const languageSwitcherTranslations: Record<ResourceKey, { label: string; languages: Record<ResourceKey, string> }> = {
    en: {
        label: 'Language selection',
        languages: {
            en: 'English',
            de: 'German',
            tr: 'Turkish',
        },
    },
    de: {
        label: 'Sprachauswahl',
        languages: {
            en: 'Englisch',
            de: 'Deutsch',
            tr: 'Türkisch',
        },
    },
    tr: {
        label: 'Dil seçimi',
        languages: {
            en: 'İngilizce',
            de: 'Almanca',
            tr: 'Türkçe',
        },
    },
};

const resources = {
    en: { translation: { ...en, languageSwitcher: languageSwitcherTranslations.en } },
    de: { translation: { ...de, languageSwitcher: languageSwitcherTranslations.de } },
    tr: { translation: { ...tr, languageSwitcher: languageSwitcherTranslations.tr } },
};

export const LANGUAGE_OPTIONS = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'tr', label: 'TR' },
] as const;

export type SupportedLanguage = (typeof LANGUAGE_OPTIONS)[number]['code'];

const DEFAULT_LANGUAGE: SupportedLanguage = 'en';

const isSupportedLanguage = (value: string | null | undefined): value is SupportedLanguage => {
    return Boolean(value && Object.prototype.hasOwnProperty.call(resources, value));
};

const getInitialLanguage = (): SupportedLanguage => {
    if (typeof window === 'undefined') {
        return DEFAULT_LANGUAGE;
    }

    const storedLanguage = window.localStorage.getItem('language');
    if (isSupportedLanguage(storedLanguage)) {
        return storedLanguage;
    }

    const browserLanguage = window.navigator.language.split('-')[0];
    if (isSupportedLanguage(browserLanguage)) {
        return browserLanguage;
    }

    return DEFAULT_LANGUAGE;
};

const initialLanguage = getInitialLanguage();

void i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: initialLanguage,
        fallbackLng: DEFAULT_LANGUAGE,
        supportedLngs: Object.keys(resources),
        interpolation: {
            escapeValue: false,
        },
    });

if (typeof window !== 'undefined') {
    i18n.on('languageChanged', (lng) => {
        window.localStorage.setItem('language', lng);
    });
}

export default i18n;
