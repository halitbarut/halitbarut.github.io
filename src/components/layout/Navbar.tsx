import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('app_language', lng);
  };

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex justify-between items-center">
        <Link to="/" className="text-lg md:text-xl font-heading font-bold gradient-text hover:opacity-80 transition-opacity">
          Mehmet Halit Barut
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm hover:text-primary">
              {link.label}
            </a>
          ))}

          <div className="flex items-center border-l border-border pl-6 ml-2 space-x-1">
            {['en', 'tr', 'de'].map((lng) => (
              <button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className={`px-2.5 py-1 rounded text-xs font-semibold uppercase transition-colors ${
                  i18n.language === lng ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {lng}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-border">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-muted-foreground hover:text-foreground transition-colors font-medium hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center space-x-2 pt-4 border-t border-border">
              {['en', 'tr', 'de'].map((lng) => (
                <button
                  key={lng}
                  onClick={() => { changeLanguage(lng); setIsMobileMenuOpen(false); }}
                  className={`px-3 py-1.5 rounded text-xs font-semibold uppercase transition-colors ${
                    i18n.language === lng ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {lng}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
