import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Hakkımda</h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-highlight to-accent mx-auto rounded-full"></div>
                </div>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <p className="text-lg md:text-xl text-text-primary leading-relaxed">
                            Merhaba! Ben Mehmet Halit Barut, Ankara Yıldırım Beyazıt Üniversitesi'nde Yazılım Mühendisliği okuyan tutkulu bir geliştiriciyim.
                        </p>
                        <p className="text-lg md:text-xl text-text-primary leading-relaxed">
                            Full-stack web geliştirmeden mobil uygulamalara, Unity ile oyun geliştirmeden yapay zeka destekli uygulamalara kadar geniş bir yelpazede projeler üzerinde çalışıyorum.
                        </p>
                        <p className="text-lg md:text-xl text-text-primary leading-relaxed">
                            Teknolojinin sürekli gelişen doğasına ayak uydurmayı ve yeni araçları keşfetmeyi seviyorum. Her proje benim için yeni bir öğrenme fırsatı.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6 lg:gap-8">
                        <div className="bg-gradient-to-br from-primary to-secondary p-6 lg:p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300 border border-accent hover:border-highlight/50">
                            <div className="w-16 h-16 bg-gradient-to-r from-highlight to-accent rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Full-Stack</h3>
                            <p className="text-text-secondary text-sm">Web Development</p>
                        </div>
                        <div className="bg-gradient-to-br from-primary to-secondary p-6 lg:p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300 border border-accent hover:border-blue-500/50">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Mobile Dev</h3>
                            <p className="text-text-secondary text-sm">Android Apps</p>
                        </div>
                        <div className="bg-gradient-to-br from-primary to-secondary p-6 lg:p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300 border border-accent hover:border-purple-500/50">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Game Dev</h3>
                            <p className="text-text-secondary text-sm">Unity 3D</p>
                        </div>
                        <div className="bg-gradient-to-br from-primary to-secondary p-6 lg:p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300 border border-accent hover:border-yellow-500/50">
                            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">AI Enthusiast</h3>
                            <p className="text-text-secondary text-sm">Machine Learning</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;