import React from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Project } from '../data/projectsData';
import { X, Github, ExternalLink } from 'lucide-react';

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modalVariants = {
    hidden: {
        opacity: 0,
        y: 60,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, ease: 'easeOut' }
    },
    exit: {
        opacity: 0,
        y: -60,
        scale: 0.95,
        transition: { duration: 0.3, ease: 'easeIn' }
    }
};

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    const { t } = useTranslation();
    if (!project) return null;

    return (
        <Dialog open={!!project} onClose={onClose} className="relative z-50">
            <motion.div
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="fixed inset-0 bg-black/70 backdrop-blur-xl"
            />

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 md:p-8" style={{ perspective: '1500px' }}>
                    <Dialog.Panel
                        as={motion.div}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative w-full max-w-4xl rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-3xl p-0 shadow-[0_20px_120px_rgba(0,0,0,0.6)] overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-60 pointer-events-none"></div>
                        <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-20">
                            <X size={26} />
                        </button>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="h-64 sm:h-80 overflow-hidden"
                            >
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            </motion.div>

                            <div className="relative z-10 -mt-16 px-6 sm:px-10">
                                <div className="p-6 sm:p-10 rounded-[28px] bg-[#060819]/90 border border-white/10 shadow-2xl space-y-6">
                                    <Dialog.Title as="h3" className="text-3xl font-bold text-white">
                                        {project.title}
                                        {project.status && (
                                            <span className="ml-4 text-xs bg-white/10 text-white px-3 py-1 rounded-full border border-white/20 align-middle">
                                                {project.status}
                                            </span>
                                        )}
                                    </Dialog.Title>

                                    <p className="text-lg text-gray-200 leading-relaxed">
                                        {project.longDescription}
                                    </p>

                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-3">{t('projects.technologies')}</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {project.technologies.map(tech => (
                                                <span key={tech} className="text-sm bg-white/5 border border-white/10 text-gray-200 px-4 py-1 rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
                                        >
                                            <Github size={20} />
                                            {t('projects.viewOnGithub')}
                                        </a>
                                        {project.liveUrl && project.liveUrl !== '#' && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition"
                                            >
                                                <ExternalLink size={20} />
                                                {t('projects.viewLiveDemo')}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    );
};

export default ProjectModal;
