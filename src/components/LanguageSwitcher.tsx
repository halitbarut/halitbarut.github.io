import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LANGUAGE_OPTIONS } from '../i18n/config';

const LanguageSwitcher = () => {
    const { i18n, t } = useTranslation();

    const changeLanguage = (languageCode: string) => {
        void i18n.changeLanguage(languageCode);
    };

    const normalizedLanguage = i18n.language?.split('-')[0] ?? LANGUAGE_OPTIONS[0].code;
    const currentLanguage = LANGUAGE_OPTIONS.find(lang => lang.code === normalizedLanguage) || LANGUAGE_OPTIONS[0];

    return (
        <Menu as="div" className="relative">
            <Menu.Button
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 transition-colors duration-300"
                aria-label={t('languageSwitcher.label')}
            >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{currentLanguage.label}</span>
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-2xl bg-[#05051d]/95 backdrop-blur-2xl border border-white/10 shadow-2xl focus:outline-none overflow-hidden z-50">
                    <div className="py-1">
                        {LANGUAGE_OPTIONS.map((language) => (
                            <Menu.Item key={language.code}>
                                {({ active }) => (
                                    <button
                                        onClick={() => changeLanguage(language.code)}
                                        className={`${
                                            active ? 'bg-white/10' : ''
                                        } ${
                                            i18n.language === language.code ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20' : ''
                                        } group flex w-full items-center px-4 py-2.5 text-sm text-white transition-colors`}
                                    >
                                        <span className="flex-1 text-left">
                                            {t(`languageSwitcher.languages.${language.code}`)}
                                        </span>
                                        {i18n.language === language.code && (
                                            <span className="ml-2 text-xs text-purple-400">✓</span>
                                        )}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default LanguageSwitcher;
