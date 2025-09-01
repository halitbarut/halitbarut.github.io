import React from 'react';
import { Dialog } from '@headlessui/react';
import { Project } from '../data/projectsData';
import { X, Github, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    const isOpen = !!project;

    if (!project) {
        return null; // Proje null ise hiçbir şey render etme
    }

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            {/* Backdrop (Arka Plan Karartması) */}
            <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm modal-backdrop-enter"
                aria-hidden="true"
            />

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-secondary p-8 text-left align-middle shadow-xl border border-accent relative modal-panel-enter">

                        <button onClick={onClose} className="absolute top-4 right-4 text-text-secondary hover:text-white transition-colors z-10">
                            <X size={24} />
                        </button>

                        <div className="flex flex-col gap-6">
                            <div className="overflow-hidden rounded-lg">
                                <img src={project.image} alt={project.title} className="w-full h-auto max-h-[400px] object-cover"/>
                            </div>

                            <div>
                                <Dialog.Title as="h3" className="text-3xl font-bold leading-6 text-white">
                                    {project.title}
                                    {project.status && (
                                        <span className="ml-4 text-xs bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full border border-yellow-600/30 align-middle">
                       {project.status}
                     </span>
                                    )}
                                </Dialog.Title>
                            </div>

                            <p className="text-lg text-text-primary">
                                {project.longDescription}
                            </p>

                            <div>
                                <h4 className="text-xl font-semibold text-white mb-3">Kullanılan Teknolojiler</h4>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="text-sm bg-highlight/20 text-highlight px-4 py-1 rounded-full border border-highlight/30">
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4 border-t border-accent/30">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-highlight/20 border border-accent rounded-lg text-white transition-colors">
                                    <Github size={20} />
                                    Kodu Görüntüle
                                </a>
                                {project.liveUrl && project.liveUrl !== '#' && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-highlight hover:bg-accent text-primary rounded-lg font-semibold transition-colors">
                                        <ExternalLink size={20} />
                                        Canlı Demo
                                    </a>
                                )}
                            </div>
                        </div>

                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    );
};

export default ProjectModal;