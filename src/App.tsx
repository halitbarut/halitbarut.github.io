import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import CustomCursor from './components/CustomCursor';

function App() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen bg-[#030014] text-text-primary overflow-hidden">
            <Helmet>
                <title>Mehmet Halit Barut | Yazılım Mühendisi</title>
                <meta name="description" content="Fikirleri koda dönüştürerek somut çözümler üreten; web, mobil, oyun ve yapay zeka alanlarında sürekli öğrenen bir geliştirici." />
                <meta property="og:title" content="Mehmet Halit Barut | Yazılım Mühendisi Portfolyosu" />
                <meta property="og:description" content="Web, mobil, oyun ve yapay zeka alanlarındaki projelerimi ve yetkinliklerimi keşfedin." />
                <meta property="og:type" content="website" />
            </Helmet>

            <CustomCursor />

            <div className="absolute inset-0">
                <div className="grid-overlay" aria-hidden />
                
                <motion.div 
                    className="absolute -top-32 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-700/70 via-pink-600/40 to-cyan-500/40 blur-[140px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 0.8, 0.6],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        transform: `translateY(${scrollY * 0.15}px)`,
                    }}
                />
                
                <motion.div 
                    className="absolute -bottom-10 -left-10 w-[520px] h-[520px] bg-gradient-to-br from-cyan-400/40 via-blue-500/30 to-purple-700/60 blur-[160px]"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        transform: `translateY(${scrollY * -0.1}px)`,
                    }}
                />
                
                <motion.div 
                    className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-yellow-500/20 via-orange-500/15 to-pink-500/20 blur-[120px] rounded-full"
                    animate={{
                        scale: [1, 1.15, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        transform: `translate(-50%, -50%) translateY(${scrollY * 0.05}px)`,
                    }}
                />
                
                <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full border border-white/10 opacity-30 animate-[spin_40s_linear_infinite]" />
                <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full border border-cyan-500/20 opacity-40 animate-[spin_50s_linear_infinite_reverse]" />
            </div>
            
            <div className="noise-overlay" aria-hidden />

            <Header />
            <main className="relative z-10 flex flex-col gap-32 lg:gap-40 pt-32 pb-24">
                <Hero />
                <ScrollReveal>
                    <About />
                </ScrollReveal>
                <ScrollReveal>
                    <Skills />
                </ScrollReveal>
                <Projects />
                <ScrollReveal>
                    <Contact />
                </ScrollReveal>
            </main>
            <Footer />
        </div>
    );
}

export default App;
