import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary py-12 border-t border-accent">
            <div className="container mx-auto px-6 text-center">
                <div className="flex flex-row justify-center items-center gap-6 mb-6">
                    <a href="https://github.com/halitbarut" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-highlight transition-colors" aria-label="GitHub Profilim">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/mehmet-halit-barut/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-highlight transition-colors" aria-label="LinkedIn Profilim">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com/halit__barut" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-highlight transition-colors" aria-label="Instagram Profilim">
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a href="mailto:mhbarut66@gmail.com" className="text-text-secondary hover:text-highlight transition-colors" aria-label="E-posta Gönder">
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
                <p className="text-text-secondary text-lg mb-2">© {new Date().getFullYear()} Mehmet Halit Barut. Tüm hakları saklıdır.</p>
                <p className="text-text-secondary text-base">
                    "Teknoloji tutkusu ve sürekli öğrenme arzusu ile geleceği şekillendiriyorum."
                </p>
            </div>
        </footer>
    );
};

export default Footer;