import React from 'react';
import { Helmet } from 'react-helmet-async'; // Helmet'i import et
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
            <Helmet>
                <title>Mehmet Halit Barut | Yazılım Mühendisi</title>
                <meta name="description" content="Fikirleri koda dönüştürerek somut çözümler üreten; web, mobil, oyun ve yapay zeka alanlarında sürekli öğrenen bir geliştirici." />
                <meta property="og:title" content="Mehmet Halit Barut | Yazılım Mühendisi Portfolyosu" />
                <meta property="og:description" content="Web, mobil, oyun ve yapay zeka alanlarındaki projelerimi ve yetkinliklerimi keşfedin." />
                {/* og:image meta etiketini daha sonra bir ekran görüntüsü ekleyince kullanabilirsin */}
                {/* <meta property="og:image" content="URL_TO_YOUR_WEBSITE_IMAGE" /> */}
                <meta property="og:type" content="website" />
            </Helmet>

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