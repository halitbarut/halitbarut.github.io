import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const name = "Mehmet Halit".split("");
    const surname = "Barut".split("");

    const sentenceVariants = {
        hover: {
            transition: {
                staggerChildren: 0.05,
            },
        },
        initial: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const letterVariants = {
        initial: {
            y: 0,
            color: "#FFFFFF",
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        },
        hover: {
            y: -10,
            color: "#778DA9",
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        },
    };

    const surnameLetterVariants = {
        ...letterVariants,
        initial: {
            ...letterVariants.initial,
            color: "#778DA9"
        }
    }

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-highlight/10 via-transparent to-accent/10"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <div>
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight cursor-pointer"
                        variants={sentenceVariants}
                        whileHover="hover"
                        initial="initial"
                    >
                        {name.map((letter, index) => (
                            <motion.span key={`name-${index}`} variants={letterVariants} className="inline-block">
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                        <span className="block">
              {surname.map((letter, index) => (
                  <motion.span key={`surname-${index}`} variants={surnameLetterVariants} className="inline-block">
                      {letter}
                  </motion.span>
              ))}
            </span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl lg:text-3xl text-text-primary mb-8">
                        Ankara Yıldırım Beyazıt Üniversitesi
                        <span className="block text-highlight font-semibold mt-2">Yazılım Mühendisliği Öğrencisi</span>
                    </p>
                    <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
                        Fikirleri koda dönüştürerek somut çözümler üreten; web, mobil, oyun ve yapay zeka alanlarında sürekli öğrenen bir geliştiriciyim.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="https://github.com/halitbarut" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-highlight text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            GitHub Profilim
                        </a>
                        <a href="#contact" className="border-2 border-highlight text-highlight hover:bg-highlight hover:text-primary px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                            İletişime Geç
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;