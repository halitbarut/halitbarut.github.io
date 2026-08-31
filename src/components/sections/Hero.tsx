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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 bg-transparent">
      {/* Animated ambient glows */}
      {/* Neon Green top-left */}
      <div 
        className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-[#39ff14] opacity-30 blur-[90px] rounded-full pointer-events-none animate-float-slow" 
      />
      {/* Royal Blue center-right */}
      <div 
        className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#2563eb] opacity-35 blur-[100px] rounded-full pointer-events-none animate-float-reverse" 
      />
      
      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge pill */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium text-muted-foreground border border-[#39ff14]/30 bg-[#39ff14]/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#39ff14] mr-3 animate-pulse"></span>
            {t('hero.badge')}
          </motion.div>
          
          {/* Name with gradient */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-tight tracking-tight"
          >
            <span className="text-foreground">{t('profile.firstName', { defaultValue: 'Mehmet Halit' })}</span>
            <br />
            <span className="gradient-text">{t('profile.lastName', { defaultValue: 'Barut' })}</span>
          </motion.h1>
          
          {/* University */}
          <motion.p 
            variants={itemVariants}
            className="text-[#2563eb] font-medium text-lg"
          >
            {t('profile.university')}
          </motion.p>
          
          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {t('profile.introduction')}
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a href={t('profile.social.github', { defaultValue: '#' })} target="_blank" rel="noreferrer" className="w-full sm:w-auto btn-primary text-base px-8 py-4">
              {t('hero.viewProjects')}
            </a>
            <a href="#contact" className="w-full sm:w-auto btn-secondary text-base px-8 py-4">
              {t('hero.contactMe')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
