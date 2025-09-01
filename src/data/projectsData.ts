import { icons } from 'lucide-react';

export interface Project {
    id: number;
    title: string;
    icon: keyof typeof icons; // İkonun adını string olarak tutacağız
    shortDescription: string;
    longDescription: string;
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
        icon: 'ShoppingCart', // lucide-react ikon adı
        shortDescription: 'Full-stack e-ticaret platformu. Kapsamlı online alışveriş deneyimi sunar.',
        longDescription:
            "TicaretApp, modern bir full-stack e-ticaret platformudur. Python FastAPI ile geliştirilen güçlü bir backend API'si üzerine kurulmuştur. PostgreSQL veritabanı ile ürün, kullanıcı ve sipariş verilerini yönetir. Frontend tarafında ise React ve TypeScript kullanılarak kullanıcı dostu ve dinamik bir arayüz oluşturulmuştur. Bu projede, REST API tasarımı, veritabanı mimarisi ve component tabanlı frontend geliştirme konularında derinlemesine çalıştım.",
        image: 'https://via.placeholder.com/1280x720/1B263B/FFFFFF?text=TicaretApp',
        technologies: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'TailwindCSS'],
        githubUrl: 'https://github.com/halitbarut/ticaretapp',
        liveUrl: '#',
    },
    {
        id: 2,
        title: 'Perpetua',
        icon: 'BrainCircuit', // lucide-react ikon adı
        shortDescription: 'AI destekli, kişiselleştirilmiş dil öğrenme platformu.',
        longDescription:
            "Perpetua, yapay zeka destekli bir dil öğrenme uygulamasıdır. Kullanıcıların öğrenme stillerine ve hızlarına göre adapte olan kişiselleştirilmiş dersler sunar. OpenAI API'sini kullanarak metin üretme, çeviri ve konuşma pratiği gibi özellikler içerir. Proje, dil öğrenimini daha etkileşimli ve verimli hale getirmeyi amaçlamaktadır. Backend FastAPI, frontend ise React ile geliştirilmektedir.",
        image: 'https://via.placeholder.com/1280x720/1B263B/FFFFFF?text=Perpetua',
        technologies: ['Python', 'FastAPI', 'OpenAI API', 'React', 'Next.js'],
        githubUrl: 'https://github.com/halitbarut/perpetua',
    },
    {
        id: 3,
        title: 'ZigZag',
        icon: 'Gamepad2', // lucide-react ikon adı
        shortDescription: 'Unity 3D ile geliştirilmiş dinamik ve eğlenceli bir platform oyunu.',
        longDescription:
            "ZigZag, Unity 3D oyun motoru ve C# kullanılarak geliştirilmiş bir 3D platform oyunudur. Oyuncular, sürekli değişen ve rastgele oluşturulan platformlarda karakterlerini hayatta tutmaya çalışırlar. Proje, dinamik level tasarımı, oyun fiziği, animasyon yönetimi ve mobil oyun optimizasyonu gibi konulara odaklanmaktadır. Akıcı oynanış mekaniği ile keyifli bir oyun deneyimi sunar.",
        image: 'https://via.placeholder.com/1280x720/1B263B/FFFFFF?text=ZigZag',
        technologies: ['Unity 3D', 'C#', 'Game Design', 'Physics', 'Animation'],
        githubUrl: 'https://github.com/halitbarut/zigzag',
    },
];