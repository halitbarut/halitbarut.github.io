import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../ui/Section';
import { Link } from 'react-router-dom';

export interface ProjectData {
  id: string;
  name: string;
  shortDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  architecture?: string;
  technicalChallenges?: string;
  decisions?: string;
  lessonsLearned?: string;
}

const projectVisuals = [
  { gradient: 'from-[#39ff14]/20 via-blue-900/30 to-[#1e3a8a]/20', iconBg: 'from-[#39ff14] to-[#2563eb]', letter: 'T' },
  { gradient: 'from-[#2563eb]/20 via-slate-900/40 to-[#39ff14]/15', iconBg: 'from-[#2563eb] to-[#39ff14]', letter: 'P' },
  { gradient: 'from-[#1e3a8a]/30 via-blue-900/30 to-[#2563eb]/20', iconBg: 'from-[#1e3a8a] to-[#2563eb]', letter: 'Z' },
];

export default function Projects() {
  const { t } = useTranslation();
  const projects: ProjectData[] = t('projects', { returnObjects: true }) as ProjectData[];

  return (
    <div className="relative bg-transparent">
      {/* Background Glows: Royal Blue (top-right, slow) + Neon Green (bottom-left, medium) */}
      <div className="absolute top-10 -right-20 w-[500px] h-[500px] bg-[#2563eb] opacity-35 blur-[100px] rounded-full pointer-events-none animate-orb-3" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-[#39ff14] opacity-25 blur-[90px] rounded-full pointer-events-none animate-orb-2" />

      <Section id="projects" title={t('sections.projects')} className="bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {Array.isArray(projects) && projects.map((project, idx) => {
            const visual = projectVisuals[idx % projectVisuals.length];
            return (
              <div 
                key={project.id} 
                className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col h-full group transition-all duration-300"
              >
                {/* Animated gradient hero area */}
                <div className={`aspect-video w-full bg-gradient-to-br ${visual.gradient} overflow-hidden relative`}>
                  {project.imageUrl && project.imageUrl !== '' ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center relative">
                      {/* Animated subtle grid pattern */}
                      <div className="absolute inset-0 opacity-[0.04]" style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                      }}></div>
                      {/* Floating accent glow */}
                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br ${visual.iconBg} rounded-2xl blur-2xl opacity-30 animate-pulse-glow`}></div>
                      {/* Large letter */}
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${visual.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <span className="text-3xl font-heading font-extrabold text-white">{visual.letter}</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="text-2xl font-heading font-bold mb-3 text-foreground group-hover:text-[#39ff14] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIdx) => (
                      <span key={techIdx} className="text-xs font-medium px-3 py-1 bg-surface-elevated/80 text-muted-foreground border border-border rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs font-medium px-3 py-1 bg-surface-elevated/80 text-muted-foreground border border-border rounded-md">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <Link 
                      to={`/project/${project.id}`} 
                      className="flex-1 inline-flex items-center justify-center py-3 rounded-xl font-medium transition-all duration-300 text-sm border border-border/50 text-foreground hover:border-[#39ff14]/50 hover:text-[#39ff14]"
                      aria-label={`View details for ${project.name}`}
                    >
                      {t('project.viewCode', { defaultValue: 'View Details' })}
                    </Link>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-shrink-0 w-12 h-12 inline-flex items-center justify-center rounded-xl border border-border/50 text-muted-foreground hover:text-foreground hover:border-white/20 transition-all"
                        aria-label="GitHub"
                      >
                        <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
