import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2, Monitor, Smartphone, Brain, Server, Gamepad2 } from 'lucide-react';

const Skills = () => {
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
    
    const skills = [
        {
            icon: Server,
            title: t('skills.categories.backend.title'),
            gradient: 'from-purple-500 to-indigo-600',
            borderColor: 'border-purple-500/20 hover:border-purple-400/50',
            items: t('skills.categories.backend.items', { returnObjects: true }) as string[]
        },
        {
            icon: Monitor,
            title: t('skills.categories.frontend.title'),
            gradient: 'from-green-500 to-emerald-600',
            borderColor: 'border-green-500/20 hover:border-green-400/50',
            items: t('skills.categories.frontend.items', { returnObjects: true }) as string[]
        },
        {
            icon: Smartphone,
            title: t('skills.categories.mobile.title'),
            gradient: 'from-blue-500 to-cyan-600',
            borderColor: 'border-blue-500/20 hover:border-blue-400/50',
            items: t('skills.categories.mobile.items', { returnObjects: true }) as string[]
        },
        {
            icon: Brain,
            title: t('skills.categories.ai.title'),
            gradient: 'from-violet-500 to-fuchsia-600',
            borderColor: 'border-violet-500/20 hover:border-violet-400/50',
            items: t('skills.categories.ai.items', { returnObjects: true }) as string[]
        },
        {
            icon: Code2,
            title: t('skills.categories.devops.title'),
            gradient: 'from-yellow-500 to-orange-600',
            borderColor: 'border-yellow-500/20 hover:border-yellow-400/50',
            items: t('skills.categories.devops.items', { returnObjects: true }) as string[]
        },
        {
            icon: Gamepad2,
            title: t('skills.categories.game.title'),
            gradient: 'from-red-500 to-pink-600',
            borderColor: 'border-red-500/20 hover:border-red-400/50',
            items: t('skills.categories.game.items', { returnObjects: true }) as string[]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: isMobile ? 0.08 : 0.1,
                delayChildren: isMobile ? 0.1 : 0.2,
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: isMobile ? 25 : 50,
            rotateX: isMobile ? 0 : -15,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: isMobile ? 150 : 100,
                damping: isMobile ? 20 : 15,
            }
        }
    };

    return (
        <section id="skills" className="py-16 sm:py-24 relative">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: isMobile ? 0.4 : 0.6 }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: isMobile ? 250 : 200, damping: 15 }}
                        className="inline-block mb-3 sm:mb-4"
                    >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                            <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                    </motion.div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-4 sm:mb-6">
                        {t('skills.title')}
                    </h2>
                    <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.title}
                            variants={cardVariants}
                            whileHover={isMobile ? undefined : {
                                y: -12,
                                scale: 1.03,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                            }}
                            className={`group relative glass-panel rounded-3xl p-6 sm:p-8 border-2 ${skill.borderColor} transition-all duration-500 overflow-hidden`}
                        >
                            <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="hidden md:block absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            
                            <motion.div
                                whileHover={isMobile ? undefined : { scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-4 sm:mb-6 shadow-2xl`}
                            >
                                <div className={`hidden md:block absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-xl sm:rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                                <skill.icon className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
                            </motion.div>

                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 md:group-hover:text-transparent md:group-hover:bg-gradient-to-r md:group-hover:bg-clip-text md:group-hover:from-white md:group-hover:via-gray-100 md:group-hover:to-white transition-all">
                                {skill.title}
                            </h3>

                            <ul className="space-y-2 sm:space-y-3 text-gray-300">
                                {skill.items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="text-sm sm:text-base leading-relaxed md:group-hover:text-gray-100 transition-colors flex items-start gap-2"
                                    >
                                        <span className="text-purple-400 mt-0.5 sm:mt-1">▸</span>
                                        <span>{item.replace('• ', '')}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="hidden md:block absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
