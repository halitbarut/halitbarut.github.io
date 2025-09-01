import React from 'react';
import { Project } from '../data/projectsData';
import { icons } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
    const LucideIcon = icons[project.icon];

    return (
        <div
            onClick={onClick}
            className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 cursor-pointer
                 h-full flex flex-col {/* Kartların aynı boyda kalması için */}
                 hover:transform hover:scale-105 transition-all duration-300
                 border border-accent hover:border-highlight/50 hover:shadow-2xl group relative z-10"
        >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-highlight to-accent mb-6 flex items-center justify-center shadow-lg group-hover:shadow-highlight/25">
                {LucideIcon ? <LucideIcon className="w-8 h-8 text-white" /> : null}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-text-primary mb-6 leading-relaxed flex-grow">{/* Açıklamanın esneyerek boşluğu doldurması için */}
                {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">{/* Teknolojilerin her zaman en altta kalması için */}
                {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs bg-highlight/20 text-highlight px-3 py-1 rounded-full border border-highlight/30">
            {tech}
          </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;