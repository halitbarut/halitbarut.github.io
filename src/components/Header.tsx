import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '#hero', label: 'Anasayfa' },
        { href: '#about', label: 'Hakkımda' },
        { href: '#skills', label: 'Yetenekler' },
        { href: '#projects', label: 'Projeler' },
        { href: '#contact', label: 'İletişim' }
    ];

    return (
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
            <nav className="container mx-auto px-6 py-5">
                <div className="flex items-center justify-between">
                    <motion.a
                        href="#hero"
                        aria-label="Anasayfaya dön"
                        whileHover={{ scale: 1.15, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="relative group"
                    >
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-[3px] shadow-2xl">
                            <div className="w-full h-full rounded-full bg-primary/95 flex items-center justify-center">
                                <img src="/favicon-32x32.png" alt="MHB Logo" className="w-7 h-7" />
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
                                whileHover={{ scale: 1.08, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative px-5 py-2.5 text-sm font-semibold text-text-secondary hover:text-white transition-colors duration-300 rounded-full group"
                            >
                                <span className="relative z-10">{item.label}</span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    layoutId="navHighlight"
                                />
                                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="hidden md:block w-12 h-12"
                    ></motion.div>
                </div>
            </nav>
        </motion.header>
    );
};

export default Header;
