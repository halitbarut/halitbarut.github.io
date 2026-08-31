import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../ui/Section';

interface ExperienceData {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export default function Experience() {
  const { t } = useTranslation();
  const experiences: ExperienceData[] = t('experience', { returnObjects: true }) as ExperienceData[];

  return (
    <Section id="experience" title={t('sections.experience')} className="bg-transparent">
      <div className="max-w-4xl mx-auto space-y-12">
        {Array.isArray(experiences) && experiences.map((exp) => (
          <div key={exp.id} className="relative pl-10 md:pl-16 border-l-2 border-border group">
            {/* Timeline dot */}
            <div className="absolute top-8 -left-[13px] w-6 h-6 rounded-full bg-surface border-4 border-primary group-hover:bg-primary transition-colors duration-300 z-10"></div>
            
            <div className="glass-panel p-8 md:p-10 rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-3xl font-heading font-bold text-foreground mb-1">{exp.role}</h3>
                  <h4 className="text-xl font-medium text-primary">{exp.company}</h4>
                </div>
                <span className="text-sm font-semibold text-muted-foreground bg-surface-elevated px-4 py-2 rounded-full border border-border whitespace-nowrap">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {exp.description}
              </p>
              
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="text-sm font-medium px-4 py-1.5 bg-background text-muted-foreground border border-border rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
