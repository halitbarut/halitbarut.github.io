import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-sm">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">MHB</div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#hero" className="text-text-secondary hover:text-highlight transition-colors">Anasayfa</a>
                        <a href="#about" className="text-text-secondary hover:text-highlight transition-colors">Hakkımda</a>
                        <a href="#skills" className="text-text-secondary hover:text-highlight transition-colors">Yetenekler</a>
                        <a href="#projects" className="text-text-secondary hover:text-highlight transition-colors">Projeler</a>
                        <a href="#contact" className="text-text-secondary hover:text-highlight transition-colors">İletişim</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;