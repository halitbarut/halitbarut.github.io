import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../ui/Section';

interface EducationData {
  id: string;
  university: string;
  degree: string;
  department: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
}

export default function Education() {
  const { t } = useTranslation();
  const educationList: EducationData[] = t('education', { returnObjects: true }) as EducationData[];

  return (
    <div className="relative bg-transparent">
      {/* Ambient background glows: Royal Blue (center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#2563eb] opacity-35 blur-[100px] rounded-full pointer-events-none animate-float-slow" />

      <Section id="education" title={t('sections.education', { defaultValue: 'Education' })} className="bg-transparent">
        <div className="max-w-4xl mx-auto space-y-8">
          {Array.isArray(educationList) && educationList.map((edu) => (
            <div 
              key={edu.id}
              className="glass-panel p-8 md:p-10 rounded-2xl flex flex-col md:flex-row justify-between gap-6 border-l-4 border-l-[#2563eb] relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563eb]/10 rounded-bl-full blur-2xl"></div>
              
              <div className="flex-1 relative z-10">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">{edu.degree} — {edu.department}</h3>
                <h4 className="text-lg font-medium text-blue-400 mb-4">{edu.university}</h4>
                
                {edu.achievements && edu.achievements.length > 0 && (
                  <ul className="space-y-2">
                    {edu.achievements.map((achieve, achIdx) => (
                      <li key={achIdx} className="flex items-start text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] mt-2 mr-3 flex-shrink-0"></span>
                        {achieve}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div className="flex flex-col items-start md:items-end min-w-max relative z-10">
                <span className="text-sm font-semibold text-muted-foreground bg-surface-elevated border border-border px-4 py-2 rounded-full">
                  {edu.startDate} — {edu.endDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
