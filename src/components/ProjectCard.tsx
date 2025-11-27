import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../data/projectsData';
import { icons } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
    const LucideIcon = icons[project.icon];
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <motion.button
            type="button"
            onClick={onClick}
            whileHover={isMobile ? undefined : { y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full text-left touch-manipulation"
        >
            <div className="hidden md:block absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-3xl opacity-0 blur group-hover:opacity-100 group-hover:blur-xl transition duration-500"></div>
            <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-8 flex flex-col gap-4 sm:gap-6 overflow-hidden">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="relative">
                            <div className="hidden md:block absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 blur-md opacity-60"></div>
                            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center text-white">
                                {LucideIcon ? <LucideIcon className="w-6 h-6 sm:w-8 sm:h-8" /> : null}
                            </div>
                        </div>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 md:group-hover:text-white transition-colors">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M7 7h10v10" />
                        </svg>
                    </div>
                </div>
                <div className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight md:group-hover:text-transparent md:group-hover:bg-gradient-to-r md:group-hover:from-purple-300 md:group-hover:via-pink-200 md:group-hover:to-cyan-200 md:group-hover:bg-clip-text transition-all">
                        {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed flex-1">
                        {project.shortDescription}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="text-xs uppercase tracking-wide bg-white/5 border border-white/10 text-gray-200 px-3 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.button>
    );
};

export default ProjectCard;
