import React from 'react';
import { motion } from 'framer-motion';
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
        <footer className="relative bg-[#040313]/80 border-t-2 border-white/10 backdrop-blur-2xl">
            <div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
            <div className="container mx-auto px-6 py-12 text-center">
                <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                    {links.map(({ href, icon: Icon, label }, index) => (
                        <motion.a
                            key={href}
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative w-14 h-14 rounded-full border-2 border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-purple-400/50 transition-all overflow-hidden"
                            aria-label={label}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Icon className="relative w-6 h-6" />
                        </motion.a>
                    ))}
                </div>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-white text-lg mb-3 font-semibold"
                >
                    © {new Date().getFullYear()} Mehmet Halit Barut. {t('footer.copyright')}
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-base font-medium"
                >
                    {t('footer.quote')}
                </motion.p>
            </div>
        </footer>
    );
};

export default Footer;
