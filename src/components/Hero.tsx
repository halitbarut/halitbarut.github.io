import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const name = "Mehmet Halit".split("");
    const surname = "Barut".split("");

    // Parent (cümle) için varyantlar
    const sentenceVariants = {
        // Üzerine gelince (hover) her bir harf arasında gecikme uygula
        hover: {
            transition: {
                staggerChildren: 0.05,
            },
        },
        // Geri çekilince (initial) her bir harf arasında gecikme uygula
        initial: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1, // Animasyonun tersten başlamasını sağlar
            },
        },
    };

    // Child (harf) için varyantlar
    const letterVariants = {
        // Başlangıç/geri dönüş durumu
        initial: {
            y: 0,
            color: "#FFFFFF",
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        },
        // Üzerine gelme durumu
        hover: {
            y: -10,
            color: "#778DA9", // Highlight rengi
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        },
    };

    // Soyadındaki harfler için farklı bir varyant (başlangıç rengi farklı)
    const surnameLetterVariants = {
        ...letterVariants,
        initial: { // Soyadının başlangıç/geri dönüş durumu
            ...letterVariants.initial,
            color: "#778DA9" // Rengini highlight olarak ayarla
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
                    {/* ... (paragraflar ve butonlar aynı kalıyor) ... */}
                    <p className="text-xl md:text-2xl lg:text-3xl text-text-primary mb-8">
                        Ankara Yıldırım Beyazıt Üniversitesi
                        <span className="block text-highlight font-semibold mt-2">Yazılım Mühendisliği Öğrencisi</span>
                    </p>
                    <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
                        Full-stack geliştirme, mobil uygulamalar, oyun geliştirme ve yapay zeka teknolojileri konularında tutkulu bir geliştiriciyim.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="https://github.com/halitbarut" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-highlight text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111. `...` "></path></svg>
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