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
    const { t, i18n } = useTranslation();

    return (
        <div className="relative min-h-screen bg-[#030014] text-text-primary overflow-hidden">
            <Helmet>
                <html lang={i18n.language} />
                <title>{t('seo.title')}</title>
                <meta name="description" content={t('seo.description')} />
                <meta property="og:title" content={t('seo.ogTitle')} />
                <meta property="og:description" content={t('seo.ogDescription')} />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="absolute inset-0">
                <div className="grid-overlay" aria-hidden />
                <div className="absolute -top-32 right-0 w-[520px] h-[520px] bg-gradient-to-br from-purple-700/60 via-transparent to-cyan-500/30 blur-[130px] animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-[420px] h-[420px] bg-gradient-to-br from-cyan-400/30 via-transparent to-purple-700/50 blur-[150px] animate-[pulse_12s_ease-in-out_infinite]"></div>
                <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full border border-white/10 opacity-50 animate-[spin_40s_linear_infinite]" />
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
