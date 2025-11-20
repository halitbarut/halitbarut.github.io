import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Github, ArrowRight } from 'lucide-react';

const Hero = () => {
    const name = "Mehmet Halit".split("");
    const surname = "Barut".split("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.2,
            },
        },
    };

    const letterVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.5,
            rotateX: -90,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hover: {
            y: -8,
            scale: 1.1,
            color: "#06b6d4",
            textShadow: "0 0 20px rgba(6, 182, 212, 0.8)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
            },
        },
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 lg:px-0">
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/40 via-pink-600/30 to-rose-600/40 blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-600/40 via-blue-600/30 to-indigo-600/40 blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 blur-[80px]"
                />
            </div>

            <div className="container mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 mb-8"
                >
                    <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                    <span className="text-sm text-gray-300 font-medium">Yazılım Mühendisliği Öğrencisi</span>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-8"
                >
                    <motion.h1
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight cursor-default"
                        whileHover="hover"
                    >
                        <div className="inline-block">
                            {name.map((letter, index) => (
                                <motion.span
                                    key={`name-${index}`}
                                    variants={letterVariants}
                                    className="inline-block text-white hover:text-cyan-400 transition-colors"
                                    style={{
                                        display: 'inline-block',
                                        fontWeight: 700,
                                    }}
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </motion.span>
                            ))}
                        </div>
                        <div className="block">
                            {surname.map((letter, index) => (
                                <motion.span
                                    key={`surname-${index}`}
                                    variants={letterVariants}
                                    className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400"
                                    style={{
                                        display: 'inline-block',
                                        fontWeight: 700,
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </div>
                    </motion.h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="space-y-4 mb-12"
                >
                    <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium">
                        Ankara Yıldırım Beyazıt Üniversitesi
                    </p>
                    <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                        Fikirleri koda dönüştürerek somut çözümler üreten; web, mobil, oyun ve yapay zeka alanlarında sürekli öğrenen bir geliştiriciyim.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                >
                    <motion.a
                        href="https://github.com/halitbarut"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-10 py-5 rounded-full font-bold flex items-center gap-3 overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 rounded-full"></div>
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]"></div>
                        <div className="relative flex items-center gap-3 text-white text-lg">
                            <Github className="w-6 h-6" />
                            <span>GitHub Profilim</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                    </motion.a>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.08, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-10 py-5 rounded-full font-bold overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-full border-2 border-white/20"></div>
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-cyan-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        </div>
                        <span className="relative text-white flex items-center gap-2 text-lg">
                            İletişime Geç
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                    </motion.a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 bg-white rounded-full"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
