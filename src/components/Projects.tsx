import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projects, Project } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import ScrollReveal from './ScrollReveal'; // ScrollReveal bileşenini import ediyoruz

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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {projects.map((project, index) => (
                            // Her bir kartı kendi ScrollReveal bileşeniyle sarmalıyoruz
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