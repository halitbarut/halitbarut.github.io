import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary text-text-primary">
            <Header />
            <main>
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