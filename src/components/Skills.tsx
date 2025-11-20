import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2, Monitor, Smartphone, Brain, Server, Gamepad2 } from 'lucide-react';

const Skills = () => {
    const { t } = useTranslation();
    
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
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            rotateX: -15,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            }
        }
    };

    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="inline-block mb-4"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                            <Code2 className="w-8 h-8 text-white" />
                        </div>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6">
                        {t('skills.title')}
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            variants={cardVariants}
                            whileHover={{
                                y: -12,
                                scale: 1.03,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                            }}
                            className={`group relative glass-panel rounded-3xl p-8 border-2 ${skill.borderColor} transition-all duration-500 overflow-hidden`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-6 shadow-2xl`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                                <skill.icon className="relative w-12 h-12 text-white drop-shadow-lg" />
                            </motion.div>

                            <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:via-gray-100 group-hover:to-white transition-all">
                                {skill.title}
                            </h3>

                            <ul className="space-y-3 text-gray-300">
                                {skill.items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="text-base leading-relaxed group-hover:text-gray-100 transition-colors flex items-start gap-2"
                                    >
                                        <span className="text-purple-400 mt-1">▸</span>
                                        <span>{item.replace('• ', '')}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
