import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../ui/Section';

interface SkillCategory {
  category: string;
  icon: string;
  items: string[];
}

const iconColors = [
  { bg: 'bg-[#39ff14]/15', text: 'text-[#39ff14]', glow: 'bg-[#39ff14]' },
  { bg: 'bg-[#2563eb]/15', text: 'text-blue-400', glow: 'bg-[#2563eb]' },
  { bg: 'bg-[#1e3a8a]/20', text: 'text-blue-300', glow: 'bg-[#1e3a8a]' },
  { bg: 'bg-indigo-600/15', text: 'text-indigo-400', glow: 'bg-indigo-600' },
  { bg: 'bg-[#39ff14]/15', text: 'text-[#39ff14]', glow: 'bg-[#39ff14]' },
  { bg: 'bg-[#2563eb]/15', text: 'text-blue-400', glow: 'bg-[#2563eb]' },
];

const iconSvgs: Record<string, JSX.Element> = {
  server: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />,
  code: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
  smartphone: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
  brain: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
  cloud: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />,
  gamepad: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m-4-6v2m0 4v2M5 5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" />,
};

export default function Skills() {
  const { t } = useTranslation();
  const skills: SkillCategory[] = t('skills', { returnObjects: true }) as SkillCategory[];

  return (
    <div className="relative bg-transparent">
      {/* Background Glows: Royal Blue (top-left) + Neon Green (bottom-right) */}
      <div className="absolute top-0 -left-20 w-[450px] h-[450px] bg-[#2563eb] opacity-35 blur-[100px] rounded-full pointer-events-none animate-float-slow" />
      <div className="absolute bottom-0 -right-20 w-[450px] h-[450px] bg-[#39ff14] opacity-25 blur-[90px] rounded-full pointer-events-none animate-float-reverse" />
      
      <Section id="skills" title={t('sections.skills')} className="bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(skills) && skills.map((skillGroup, idx) => {
            const color = iconColors[idx % iconColors.length];
            const iconKey = skillGroup.icon || 'code';
            return (
              <div 
                key={idx} 
                className="glass-panel glass-panel-hover rounded-2xl p-8 transition-transform duration-300"
              >
                {/* Icon with glow */}
                <div className="relative mb-6 inline-block">
                  <div className={`absolute inset-0 ${color.glow} rounded-xl blur-xl opacity-40`}></div>
                  <div className={`relative w-14 h-14 rounded-xl ${color.bg} flex items-center justify-center`}>
                    <svg className={`w-7 h-7 ${color.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {iconSvgs[iconKey] || iconSvgs.code}
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-heading font-semibold mb-5 text-foreground">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-muted-foreground text-sm leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
