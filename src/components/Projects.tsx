import React, { useState } from 'react';
// AnimatePresence import'unu ve kullanımını kaldırıyoruz
import { motion } from 'framer-motion';
import { projects, Project } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

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
            <section id="projects" className="py-24 bg-secondary">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Projelerim</h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-highlight to-accent mx-auto rounded-full"></div>
                    </div>
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={() => openModal(project)}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* <AnimatePresence> sarmalayıcısı buradan tamamen kaldırıldı */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={closeModal}
                />
            )}
        </>
    );
};

export default Projects;