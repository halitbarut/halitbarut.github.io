import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-transparent overflow-visible">
      {/* 1. Subtle Tech Background Grid with Radial Mask */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)]" 
      />

      {/* 2. Floating Ambient Glow Orbs */}
      {/* Neon Green top-left */}
      <div 
        className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-[#39ff14] opacity-30 blur-[90px] rounded-full pointer-events-none animate-float-slow" 
      />
      {/* Royal Blue center-right */}
      <div 
        className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#2563eb] opacity-35 blur-[100px] rounded-full pointer-events-none animate-float-reverse" 
      />
      
      {/* 3. Layered Text Aura directly behind typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[750px] h-[350px] bg-gradient-to-r from-[#39ff14]/15 via-[#2563eb]/20 to-[#1e3a8a]/20 blur-[110px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-7"
        >
          {/* Badge pill */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-5 py-2 rounded-full text-xs sm:text-sm font-medium text-muted-foreground border border-[#39ff14]/30 bg-[#39ff14]/5 backdrop-blur-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#39ff14] mr-3 animate-pulse shadow-[0_0_8px_#39ff14]"></span>
            {t('hero.badge')}
          </motion.div>
          
          {/* Name with 3-stop rich gradient */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-tight tracking-tight drop-shadow-sm"
          >
            <span className="text-foreground">{t('profile.firstName', { defaultValue: 'Mehmet Halit' })}</span>
            <br />
            <span className="gradient-text">{t('profile.lastName', { defaultValue: 'Barut' })}</span>
          </motion.h1>
          
          {/* University */}
          <motion.p 
            variants={itemVariants}
            className="text-[#2563eb] font-semibold text-base sm:text-lg tracking-wide uppercase"
          >
            {t('profile.university')}
          </motion.p>
          
          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {t('profile.introduction')}
          </motion.p>

          {/* 4. Key Capability Glass Badges */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 pt-2 pb-2"
          >
            <div className="glass-panel px-4 py-2 rounded-xl flex items-center gap-2.5 border border-white/10 hover:border-[#39ff14]/50 transition-all duration-300 group hover:scale-105 shadow-sm">
              <span className="text-sm sm:text-base">⚡</span>
              <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-[#39ff14] transition-colors">
                {t('hero.badges.ai', { defaultValue: 'Yapay Zeka & LLM' })}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse"></span>
            </div>

            <div className="glass-panel px-4 py-2 rounded-xl flex items-center gap-2.5 border border-white/10 hover:border-[#2563eb]/50 transition-all duration-300 group hover:scale-105 shadow-sm">
              <span className="text-sm sm:text-base">📱</span>
              <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-[#2563eb] transition-colors">
                {t('hero.badges.mobile', { defaultValue: 'Mobil Geliştirme' })}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-pulse"></span>
            </div>

            <div className="glass-panel px-4 py-2 rounded-xl flex items-center gap-2.5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105 shadow-sm">
              <span className="text-sm sm:text-base">🌐</span>
              <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-cyan-400 transition-colors">
                {t('hero.badges.web', { defaultValue: 'Modern Web Mimarisi' })}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            </div>
          </motion.div>

          {/* 5. CTAs with Enhanced Pulsing Glow Ring */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3"
          >
            <div className="relative group w-full sm:w-auto">
              {/* Shimmering/Pulsing Glow Ring */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#39ff14] via-[#2563eb] to-[#1e3a8a] rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse" />
              <a 
                href={t('profile.social.github', { defaultValue: '#' })} 
                target="_blank" 
                rel="noreferrer" 
                className="relative w-full sm:w-auto btn-primary text-base px-8 py-4 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>{t('hero.viewProjects')}</span>
              </a>
            </div>
            
            <a href="#contact" className="w-full sm:w-auto btn-secondary text-base px-8 py-4">
              {t('hero.contactMe')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
