import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();
    const links = [
        { href: 'https://github.com/halitbarut', icon: Github, label: 'GitHub Profilim' },
        { href: 'https://www.linkedin.com/in/mehmet-halit-barut/', icon: Linkedin, label: 'LinkedIn Profilim' },
        { href: 'https://instagram.com/halit__barut', icon: Instagram, label: 'Instagram Profilim' },
        { href: 'mailto:mhbarut66@gmail.com', icon: Mail, label: 'E-posta Gönder' },
    ];

    return (
        <footer className="relative bg-[#040313]/80 border-t border-white/5 backdrop-blur-2xl">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="container mx-auto px-6 py-12 text-center">
                <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                    {links.map(({ href, icon: Icon, label }) => (
                        <a
                            key={href}
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="group w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                            aria-label={label}
                        >
                            <Icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
                <p className="text-white text-lg mb-2">© {new Date().getFullYear()} Mehmet Halit Barut. {t('footer.copyright')}</p>
                <p className="text-white/60 text-base">
                    {t('footer.quote')}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
