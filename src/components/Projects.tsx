import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderKanban } from 'lucide-react';
import { projects, Project } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const openModal = (project: Project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <section id="projects" className="py-24 relative">
                <div className="absolute inset-0">
                    <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-purple-600/20 blur-[140px]" />
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-cyan-500/20 blur-[160px]" />
                </div>
                <div className="container mx-auto px-6 relative">
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
                                <FolderKanban className="w-8 h-8 text-white" />
                            </div>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6">
                            Projelerim
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {projects.map((project, index) => (
                            <ScrollReveal key={project.id} delay={index * 0.1}>
                                <ProjectCard
                                    project={project}
                                    onClick={() => openModal(project)}
                                />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={closeModal}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Projects;
