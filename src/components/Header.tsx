import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navItems = [
        { href: '#hero', label: t('nav.home') },
        { href: '#about', label: t('nav.about') },
        { href: '#skills', label: t('nav.skills') },
        { href: '#projects', label: t('nav.projects') },
        { href: '#contact', label: t('nav.contact') }
    ];

    const handleMobileNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                    isScrolled
                        ? 'bg-primary/70 backdrop-blur-3xl border-b border-white/10 shadow-2xl'
                        : 'bg-transparent'
                }`}
            >
                <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
                    <div className="flex items-center justify-between">
                        <motion.a
                            href="#hero"
                            aria-label={t('nav.backHome')}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="relative group"
                        >
                            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
                            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-[3px] shadow-2xl">
                                <div className="w-full h-full rounded-full bg-primary/95 flex items-center justify-center">
                                    <img src="/favicon-32x32.png" alt="MHB Logo" className="w-6 h-6 sm:w-7 sm:h-7" />
                                </div>
                            </div>
                        </motion.a>

                        <div className="hidden md:flex items-center gap-2 px-4 py-3 rounded-full bg-white/5 backdrop-blur-xl border-2 border-white/10 shadow-xl">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative px-5 py-2.5 text-sm font-semibold text-text-secondary hover:text-white transition-colors duration-300 rounded-full group"
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </motion.a>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <LanguageSwitcher />
                            </motion.div>

                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white touch-manipulation"
                                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                            >
                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </motion.button>
                        </div>
                    </div>
                </nav>
            </motion.header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        <div 
                            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-[#0D1B2A]/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl"
                        >
                            <div className="flex flex-col h-full pt-24 px-6">
                                <nav className="flex flex-col gap-2">
                                    {navItems.map((item, index) => (
                                        <motion.button
                                            key={item.href}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            onClick={() => handleMobileNavClick(item.href)}
                                            className="w-full text-left px-6 py-4 text-lg font-semibold text-text-secondary hover:text-white transition-colors rounded-2xl hover:bg-white/5 active:bg-white/10 touch-manipulation"
                                        >
                                            {item.label}
                                        </motion.button>
                                    ))}
                                </nav>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
