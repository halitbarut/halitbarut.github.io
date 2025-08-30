import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Projelerim</h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-highlight to-accent mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-accent hover:border-highlight/50 hover:shadow-2xl group">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-highlight to-accent mb-6 flex items-center justify-center shadow-lg group-hover:shadow-highlight/25">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">TicaretApp</h3>
                        <p className="text-text-primary mb-6 leading-relaxed">Full-stack e-ticaret platformu. Modern backend API'si ve kullanıcı dostu arayüzü ile kapsamlı online alışveriş deneyimi sunar.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-xs bg-highlight/20 text-highlight px-3 py-1 rounded-full border border-highlight/30">Python</span>
                            <span className="text-xs bg-highlight/20 text-highlight px-3 py-1 rounded-full border border-highlight/30">FastAPI</span>
                            <span className="text-xs bg-highlight/20 text-highlight px-3 py-1 rounded-full border border-highlight/30">PostgreSQL</span>
                            <span className="text-xs bg-highlight/20 text-highlight px-3 py-1 rounded-full border border-highlight/30">React</span>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-accent hover:border-purple-500/50 hover:shadow-2xl group">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 mb-6 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Perpetua</h3>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full border border-yellow-600/30">Geliştirme Aşamasında</span>
                        </div>
                        <p className="text-text-primary mb-6 leading-relaxed">AI destekli dil öğrenme platformu. Yapay zeka teknolojileri kullanarak kişiselleştirilmiş öğrenme deneyimi sunan full-stack uygulama.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-xs bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full border border-purple-600/30">Python</span>
                            <span className="text-xs bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full border border-purple-600/30">FastAPI</span>
                            <span className="text-xs bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full border border-purple-600/30">OpenAI API</span>
                            <span className="text-xs bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full border border-purple-600/30">React</span>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-accent hover:border-blue-500/50 hover:shadow-2xl group">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 mb-6 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">ZigZag</h3>
                        <p className="text-text-primary mb-6 leading-relaxed">Unity 3D ile geliştirilmiş platform oyunu. Dinamik level tasarımı ve akıcı oynanış mekaniği ile eğlenceli oyun deneyimi sunar.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full border border-blue-600/30">Unity 3D</span>
                            <span className="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full border border-blue-600/30">C#</span>
                            <span className="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full border border-blue-600/30">Game Design</span>
                            <span className="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full border border-blue-600/30">Physics</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;