import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'en', label: 'English', flag: '🇬🇧' },
        { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
        { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    ];

    const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

    const handleLanguageChange = (langCode: string) => {
        i18n.changeLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group w-11 h-11 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:border-purple-500/30 transition-colors"
                aria-label="Change language"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/20 group-hover:to-cyan-500/20 rounded-full transition-all duration-300"></div>
                <Globe className="w-5 h-5 text-gray-300 relative z-10" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="absolute top-full right-0 mt-2 w-48 rounded-2xl bg-[#0a0a1f]/95 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden z-50"
                        >
                            <div className="p-2">
                                {languages.map((lang) => (
                                    <motion.button
                                        key={lang.code}
                                        onClick={() => handleLanguageChange(lang.code)}
                                        whileHover={{ x: 4 }}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                                            currentLanguage.code === lang.code
                                                ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white'
                                                : 'text-gray-300 hover:bg-white/5'
                                        }`}
                                    >
                                        <span className="text-2xl">{lang.flag}</span>
                                        <span className="font-medium">{lang.label}</span>
                                        {currentLanguage.code === lang.code && (
                                            <motion.div
                                                layoutId="activeLanguage"
                                                className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSwitcher;
