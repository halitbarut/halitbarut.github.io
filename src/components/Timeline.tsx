import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Puzzle, Smartphone, Gamepad2, GraduationCap, KanbanSquare, Sparkles } from 'lucide-react';

type TimelineEvent = {
    year: string;
    title: string;
    description: string;
    icon: React.ElementType;
};

const TimelineItem = ({ event, isLast, isMobile }: { event: TimelineEvent; isLast: boolean; isMobile: boolean }) => {
    const Icon = event.icon;
    
    const itemVariants = {
        hidden: { opacity: 0, x: isMobile ? -15 : -30, scale: isMobile ? 0.98 : 0.95 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: isMobile ? 150 : 100,
                damping: isMobile ? 20 : 15,
            },
        },
    };
    
    return (
        <motion.div variants={itemVariants} className="flex gap-x-3 sm:gap-x-4 relative group">
            {!isLast && (
                <div className="absolute left-[19px] sm:left-[23px] top-12 sm:top-14 -bottom-3 w-px bg-gradient-to-b from-purple-500/50 via-pink-500/30 to-transparent"></div>
            )}
            <motion.div
                className="relative flex-shrink-0"
                whileHover={isMobile ? undefined : { scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 ring-2 sm:ring-4 ring-[#05051d] shadow-lg">
                    <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl sm:rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <Icon className="relative h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
            </motion.div>
            <motion.div
                className="pb-8 sm:pb-10 flex-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: isMobile ? 0.1 : 0.2 }}
            >
                <div className="inline-block px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-2 sm:mb-3">
                    <p className="text-xs sm:text-sm font-medium text-purple-300">{event.year}</p>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2 md:group-hover:text-transparent md:group-hover:bg-gradient-to-r md:group-hover:bg-clip-text md:group-hover:from-purple-400 md:group-hover:to-cyan-400 transition-all">
                    {event.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{event.description}</p>
            </motion.div>
        </motion.div>
    );
};

const Timeline = () => {
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    const timelineData: TimelineEvent[] = [
        {
            year: t('timeline.period1.year'),
            title: t('timeline.period1.title'),
            description: t('timeline.period1.description'),
            icon: Puzzle,
        },
        {
            year: t('timeline.period2.year'),
            title: t('timeline.period2.title'),
            description: t('timeline.period2.description'),
            icon: Smartphone,
        },
        {
            year: t('timeline.period3.year'),
            title: t('timeline.period3.title'),
            description: t('timeline.period3.description'),
            icon: Gamepad2,
        },
        {
            year: t('timeline.period4.year'),
            title: t('timeline.period4.title'),
            description: t('timeline.period4.description'),
            icon: GraduationCap,
        },
        {
            year: t('timeline.period5.year'),
            title: t('timeline.period5.title'),
            description: t('timeline.period5.description'),
            icon: KanbanSquare,
        },
        {
            year: t('timeline.period6.year'),
            title: t('timeline.period6.title'),
            description: t('timeline.period6.description'),
            icon: Sparkles,
        },
    ];
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: isMobile ? 0.1 : 0.15,
                delayChildren: isMobile ? 0.05 : 0.1,
            },
        },
    };
    
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
            className="space-y-2"
        >
            {timelineData.map((event, index) => (
                <TimelineItem
                    key={index}
                    event={event}
                    isLast={index === timelineData.length - 1}
                    isMobile={isMobile}
                />
            ))}
        </motion.div>
    );
};

export default Timeline;
