import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-24 md:py-32 relative bg-transparent ${className}`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-16 md:mb-20 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              {title}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#39ff14] via-[#2563eb] to-[#1e3a8a] mx-auto mt-6 rounded-full" />
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
