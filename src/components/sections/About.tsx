import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../ui/Section';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineColors = [
  'from-blue-600 to-indigo-600',
  'from-[#2563eb] to-[#1e3a8a]',
  'from-[#1e3a8a] to-[#2563eb]',
  'from-[#2563eb] to-[#39ff14]',
  'from-[#39ff14] to-emerald-500',
  'from-emerald-500 to-[#2563eb]',
];

export default function About() {
  const { t } = useTranslation();

  const timelineKeys = ['period1', 'period2', 'period3', 'period4', 'period5', 'period6'];
  const timelineItems: TimelineItem[] = timelineKeys.map((key) => ({
    year: t(`timeline.${key}.year`),
    title: t(`timeline.${key}.title`),
    description: t(`timeline.${key}.description`),
  }));

  return (
    <div className="relative bg-transparent">
      {/* Royal Blue (middle-left) + Deep Navy (bottom-right) */}
      <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-[450px] h-[450px] bg-[#2563eb] opacity-35 blur-[100px] rounded-full pointer-events-none animate-orb-2" />
      <div className="absolute bottom-10 -right-20 w-[350px] h-[350px] bg-[#1e3a8a] opacity-30 blur-[90px] rounded-full pointer-events-none animate-orb-3" />

      <Section id="about" title={t('sections.about')} className="bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Story text */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t('about.paragraph1')}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t('about.paragraph2')}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t('about.paragraph3')}
            </p>
          </div>

          {/* Right: Timeline */}
          <div className="space-y-5">
            {timelineItems.map((item, idx) => (
              <div 
                key={idx} 
                className="glass-panel rounded-xl p-5 flex gap-4 items-start group hover:border-[#39ff14]/30 transition-all duration-300"
              >
                {/* Icon circle with glow */}
                <div className="relative flex-shrink-0">
                  <div className={`absolute inset-0 bg-gradient-to-br ${timelineColors[idx]} rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                  <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${timelineColors[idx]} flex items-center justify-center text-white text-xs font-bold`}>
                    {item.year.replace('~', '').substring(0, 4)}
                  </div>
                </div>
                
                {/* Text */}
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-semibold text-[#39ff14]">{item.year}</span>
                  </div>
                  <h4 className="text-foreground font-semibold text-base mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
