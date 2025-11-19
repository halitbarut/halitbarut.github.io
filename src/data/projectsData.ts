import { icons } from 'lucide-react';

export interface Project {
    id: number;
    title: string;
    icon: keyof typeof icons;
    image: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
    status?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'TicaretApp',
        icon: 'ShoppingCart',
        image: 'https://via.placeholder.com/1280x720/1B263B/FFFFFF?text=TicaretApp',
        technologies: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'TailwindCSS'],
        githubUrl: 'https://github.com/halitbarut/ticaretapp',
        liveUrl: '#',
    },
    {
        id: 2,
        title: 'Perpetua',
        icon: 'BrainCircuit',
        image: 'https://via.placeholder.com/1280x720/1B263B/FFFFFF?text=Perpetua',
        technologies: ['Python', 'FastAPI', 'OpenAI API', 'React', 'Next.js'],
        githubUrl: 'https://github.com/halitbarut/perpetua',
    },
    {
        id: 3,
        title: 'ZigZag',
        icon: 'Gamepad2',
        image: 'https://via.placeholder.com/1280x720/1B263B/FFFFFF?text=ZigZag',
        technologies: ['Unity 3D', 'C#', 'Game Design', 'Physics', 'Animation'],
        githubUrl: 'https://github.com/halitbarut/zigzag',
    },
];