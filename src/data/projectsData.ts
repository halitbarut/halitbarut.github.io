import { icons } from 'lucide-react';
import i18n from '../i18n/config';

export interface Project {
    id: number;
    title: string;
    icon: keyof typeof icons;
    shortDescription: string;
    longDescription: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
    status?: string;
}

export const getProjects = (): Project[] => [
    {
        id: 1,
        title: i18n.t('projects.project1.title'),
        icon: 'ShoppingCart',
        shortDescription: i18n.t('projects.project1.shortDescription'),
        longDescription: i18n.t('projects.project1.longDescription'),
        image: 'https://via.placeholder.com/1280x720/1B263B/FFFFFF?text=TicaretApp',
        technologies: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'TailwindCSS'],
        githubUrl: 'https://github.com/halitbarut/ticaretapp',
        liveUrl: '#',
    },
    {
        id: 2,
        title: i18n.t('projects.project2.title'),
        icon: 'BrainCircuit',
        shortDescription: i18n.t('projects.project2.shortDescription'),
        longDescription: i18n.t('projects.project2.longDescription'),
        image: 'https://via.placeholder.com/1280x720/1B263B/FFFFFF?text=Perpetua',
        technologies: ['Python', 'FastAPI', 'OpenAI API', 'React', 'Next.js'],
        githubUrl: 'https://github.com/halitbarut/perpetua',
    },
    {
        id: 3,
        title: i18n.t('projects.project3.title'),
        icon: 'Gamepad2',
        shortDescription: i18n.t('projects.project3.shortDescription'),
        longDescription: i18n.t('projects.project3.longDescription'),
        image: 'https://via.placeholder.com/1280x720/1B263B/FFFFFF?text=ZigZag',
        technologies: ['Unity 3D', 'C#', 'Game Design', 'Physics', 'Animation'],
        githubUrl: 'https://github.com/halitbarut/zigzag',
    },
];

export const projects = getProjects();
