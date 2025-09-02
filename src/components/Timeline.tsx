import React from 'react';
import { motion } from 'framer-motion';
import { Puzzle, Smartphone, Gamepad2, GraduationCap, KanbanSquare, Sparkles } from 'lucide-react';

type TimelineEvent = {
    year: string;
    title: string;
    description: string;
    icon: React.ElementType;
};

const timelineData: TimelineEvent[] = [
    {
        year: '~2016-2019',
        title: 'Merak ve İlk Fırsatlar',
        description: 'Her fırsatı değerlendirerek, erişim sağlayabildiğim kaynaklarla ve dönemin donanım koşullarıyla Code.org ve Python temellerini öğrendim. Bu dönem, problem çözme tutkumun başlangıcı oldu.',
        icon: Puzzle,
    },
    {
        year: '2021',
        title: 'Kariyer Kararı: Mobil Geliştirme',
        description: 'Kotlin ile ilk dinamik mobil uygulamamı geliştirerek programlamanın gücünü kavradım ve yazılım mühendisliğini bir kariyer olarak seçtim.',
        icon: Smartphone,
    },
    {
        year: '2022',
        title: 'Oyun Geliştirme Dünyasına Adım',
        description: 'Unity ve C# ile 3D oyunlar geliştirerek farklı bir teknoloji yığınında problem çözme yeteneklerimi kanıtladım.',
        icon: Gamepad2,
    },
    {
        year: '2023-2024',
        title: 'Akademik Temel ve Ufuk Genişletme',
        description: 'Üniversite hazırlık yılında Java, Git gibi temel teknolojilerde derinleştim ve BTK Yapay Zeka Zirvesi ile AI\'a olan ilgim arttı. Bu dönem, teorik bilgimin temelini attım.',
        icon: GraduationCap,
    },
    {
        year: '2025',
        title: 'Proje Üretimi ve Yetkinlik Gelişimi',
        description: 'Google Yapay Zeka ve Teknoloji Akademisi ile TicaretApp\'i geliştirdim, projeleri buluta taşırken Linux (Ubuntu/Fedora) tecrübesi kazandım. BTK Hackathon\'unda Perpetua ve Çıkmış gibi AI destekli projelerle takım çalışmasını öğrendim.',
        icon: KanbanSquare,
    },
    {
        year: 'Bugün & Gelecek',
        title: 'Sürekli Öğrenme ve İleri Yapay Zeka',
        description: 'Makine öğrenmesi eğitimime devam ederken, Üretken Yapay Zeka ve LLM Atölyesi gibi etkinliklerle yapay zekayı bir güçlendirici olarak kullanmayı öğreniyorum. Hedefim, AI destekli, ölçeklenebilir ve sağlam altyapılara sahip sistemler geliştirmek.',
        icon: Sparkles,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

const TimelineItem = ({ event, isLast }: { event: TimelineEvent; isLast: boolean }) => {
    const Icon = event.icon;
    return (
        <motion.div variants={itemVariants} className="flex gap-x-3 relative">
            {!isLast && (
                <div className="absolute left-[19px] top-12 -bottom-3 w-px bg-slate-600"></div>
            )}
            <div className="relative flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-highlight to-accent ring-8 ring-secondary">
                    <Icon className="h-5 w-5 text-white" />
                </div>
            </div>
            <div className="py-1.5">
                <div className="flex items-center gap-x-2">
                    <p className="text-base leading-none text-text-secondary">{event.year}</p>
                </div>
                <h3 className="text-lg font-semibold text-white mt-2">{event.title}</h3>
                <p className="mt-1 text-base text-text-primary">{event.description}</p>
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
        >
            {timelineData.map((event, index) => (
                <TimelineItem
                    key={index}
                    event={event}
                    isLast={index === timelineData.length - 1}
                />
            ))}
        </motion.div>
    );
};

export default Timeline;