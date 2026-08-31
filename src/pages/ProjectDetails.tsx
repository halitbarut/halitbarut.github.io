import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ProjectData } from '../components/sections/Projects';
import SEO from '../components/layout/SEO';
import { motion } from 'framer-motion';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const projects: ProjectData[] = t('projects', { returnObjects: true }) as ProjectData[];
  
  const project = Array.isArray(projects) ? projects.find(p => p.id === id) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-heading font-bold mb-4 text-foreground">
          {t('error.projectNotFound', { defaultValue: 'Project Not Found' })}
        </h1>
        <Link to="/" className="btn-primary">
          {t('error.returnHome', { defaultValue: 'Return Home' })}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <SEO 
        title={`${project.name} - Project Details`} 
        description={project.shortDescription} 
        image={project.imageUrl} 
        url={`https://halitbarut.github.io/project/${project.id}`}
      />
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Link to="/#projects" className="inline-flex items-center text-primary hover:underline mb-8 font-medium">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t('project.backToHome', { defaultValue: 'Back to Home' })}
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">{project.name}</h1>
            <p className="text-xl text-muted-foreground">{project.shortDescription}</p>
          </div>

          {project.imageUrl && project.imageUrl !== '[PROJECT IMAGE URL]' && (
            <div className="aspect-video w-full rounded-2xl overflow-hidden glass-panel">
              <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="flex flex-wrap gap-4 justify-center">
            {project.liveUrl && project.liveUrl !== '[LIVE DEMO URL]' && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
                {t('project.liveDemo', { defaultValue: 'Live Demo' })}
              </a>
            )}
            {project.githubUrl && project.githubUrl !== '[GITHUB REPOSITORY URL]' && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                {t('project.viewCode', { defaultValue: 'View Code' })}
              </a>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-10">
              {project.problem && project.problem !== '[PROBLEM BEING SOLVED]' && (
                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">{t('project.problem', { defaultValue: 'Problem' })}</h2>
                  <p className="text-foreground leading-relaxed bg-muted/30 p-6 rounded-xl border border-border">{project.problem}</p>
                </section>
              )}
              
              {project.solution && project.solution !== '[SOLUTION / APPROACH]' && (
                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">{t('project.solution', { defaultValue: 'Solution' })}</h2>
                  <p className="text-foreground leading-relaxed bg-card p-6 rounded-xl border border-border shadow-sm">{project.solution}</p>
                </section>
              )}

              {project.architecture && project.architecture !== '[ARCHITECTURE SUMMARY]' && (
                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">{t('project.architecture', { defaultValue: 'Architecture' })}</h2>
                  <p className="text-foreground leading-relaxed">{project.architecture}</p>
                </section>
              )}
              
              {project.technicalChallenges && project.technicalChallenges !== '[TECHNICAL CHALLENGES]' && (
                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">{t('project.challenges', { defaultValue: 'Technical Challenges' })}</h2>
                  <p className="text-foreground leading-relaxed">{project.technicalChallenges}</p>
                </section>
              )}

              {project.lessonsLearned && project.lessonsLearned !== '[LESSONS LEARNED]' && (
                <section>
                  <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">{t('project.lessons', { defaultValue: 'Lessons Learned' })}</h2>
                  <p className="text-foreground leading-relaxed bg-primary/5 p-6 rounded-xl border border-primary/20">{project.lessonsLearned}</p>
                </section>
              )}
            </div>

            <div className="space-y-8">
              {project.technologies && project.technologies.length > 0 && (
                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-lg font-heading font-bold mb-4 text-primary">{t('project.technologies', { defaultValue: 'Technologies' })}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-sm font-medium px-3 py-1 bg-background text-foreground border border-border rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.features && project.features.length > 0 && project.features[0] !== '[FEATURE 1]' && (
                <div className="glass-panel p-6 rounded-xl">
                  <h3 className="text-lg font-heading font-bold mb-4 text-primary">{t('project.features', { defaultValue: 'Features' })}</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}
