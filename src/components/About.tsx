import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Timeline from './Timeline';

const About = () => {
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const paragraphVariants = {
        hidden: { opacity: 0, y: isMobile ? 20 : 40 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * (isMobile ? 0.1 : 0.2),
                duration: isMobile ? 0.4 : 0.6,
                ease: 'easeOut'
            }
        })
    };

    return (
        <section id="about" className="py-16 sm:py-24 relative">
            <div className="absolute inset-0">
                <div className="hidden md:block absolute top-0 left-1/3 w-72 h-72 rounded-full bg-purple-600/20 blur-3xl" />
                <div className="hidden md:block absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-cyan-500/20 blur-[120px]" />
            </div>
            <div className="container mx-auto px-4 sm:px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: isMobile ? 0.4 : 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gray-400 mb-3 sm:mb-4">{t('about.subtitle')}</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-4 sm:mb-6">
                        {t('about.title')}
                    </h2>
                    <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: isMobile ? -20 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: isMobile ? 0.15 : 0.3 }}
                        transition={{ duration: isMobile ? 0.4 : 0.6 }}
                        className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl"
                    >
                        {[0, 1, 2].map((index) => (
                            <motion.p
                                key={index}
                                variants={paragraphVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6 last:mb-0"
                            >
                                {index === 0 && t('about.paragraph1')}
                                {index === 1 && t('about.paragraph2')}
                                {index === 2 && t('about.paragraph3')}
                            </motion.p>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: isMobile ? 20 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: isMobile ? 0.15 : 0.3 }}
                        transition={{ duration: isMobile ? 0.4 : 0.6 }}
                        className="relative"
                    >
                        <div className="hidden md:block absolute -inset-1 bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-500 rounded-3xl blur-xl opacity-30"></div>
                        <div className="relative rounded-3xl bg-[#05051d]/70 border border-white/10 backdrop-blur-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
                            <Timeline />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
