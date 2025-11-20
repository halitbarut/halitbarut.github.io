import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

function App() {
    const { t } = useTranslation();
    
    return (
        <div className="relative min-h-screen bg-[#030014] text-text-primary overflow-hidden">
            <Helmet>
                <title>{t('meta.title')}</title>
                <meta name="description" content={t('meta.description')} />
                <meta property="og:title" content={t('meta.ogTitle')} />
                <meta property="og:description" content={t('meta.ogDescription')} />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="absolute inset-0">
                <div className="grid-overlay" aria-hidden />
                
                <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-700/60 via-pink-600/30 to-cyan-500/30 blur-[130px] animate-pulse" />
                
                <div className="absolute -bottom-10 -left-10 w-[520px] h-[520px] bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-purple-700/50 blur-[150px] animate-[pulse_12s_ease-in-out_infinite]" />
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-yellow-500/15 via-orange-500/10 to-pink-500/15 blur-[100px] rounded-full animate-[pulse_15s_ease-in-out_infinite]" />
            </div>
            
            <div className="noise-overlay" aria-hidden />

            <Header />
            <main className="relative z-10 flex flex-col gap-20 lg:gap-24 pt-32 pb-16">
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
