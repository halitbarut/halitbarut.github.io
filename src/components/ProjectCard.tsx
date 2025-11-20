import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../data/projectsData';
import { icons } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
    const LucideIcon = icons[project.icon];

    return (
        <motion.button
            type="button"
            onClick={onClick}
            whileHover={{ y: -12, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative w-full text-left"
        >
            <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-3xl opacity-0 blur-xl group-hover:opacity-100 transition duration-500"
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <div className="relative h-full rounded-3xl border-2 border-white/10 bg-white/[0.06] backdrop-blur-2xl p-8 flex flex-col gap-6 overflow-hidden group-hover:border-white/20 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                        <motion.div 
                            className="relative"
                            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div 
                                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 blur-lg opacity-70"
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <div className="relative w-18 h-18 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center text-white text-2xl shadow-2xl p-4">
                                {LucideIcon ? <LucideIcon className="w-10 h-10" /> : null}
                            </div>
                        </motion.div>
                    </div>
                    <motion.div 
                        className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-cyan-400/50 transition-all bg-white/5"
                        whileHover={{ rotate: 45, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M7 7h10v10" />
                        </svg>
                    </motion.div>
                </div>
                <div className="space-y-4 flex-1 flex flex-col relative z-10">
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-200 group-hover:via-pink-200 group-hover:to-cyan-200 group-hover:bg-clip-text transition-all">
                        {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed flex-1 group-hover:text-gray-100 transition-colors">
                        {project.shortDescription}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 relative z-10">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="text-xs font-semibold uppercase tracking-wide bg-white/10 border border-white/20 text-gray-100 px-4 py-2 rounded-full group-hover:bg-white/15 group-hover:border-purple-400/30 transition-all shadow-lg"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.button>
    );
};

export default ProjectCard;
