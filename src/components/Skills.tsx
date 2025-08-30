import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-primary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Yeteneklerim</h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-highlight to-accent mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-accent hover:border-highlight/50 hover:shadow-2xl">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-highlight to-accent flex items-center justify-center mb-6 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Backend Development</h3>
                        <ul className="space-y-3 text-text-primary">
                            <li>• Python FastAPI</li>
                            <li>• REST API Design</li>
                            <li>• Database Design</li>
                            <li>• Server Architecture</li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-accent hover:border-blue-500/50 hover:shadow-2xl">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Mobile Development</h3>
                        <ul className="space-y-3 text-text-primary">
                            <li>• Kotlin</li>
                            <li>• Jetpack Compose</li>
                            <li>• Android Studio</li>
                            <li>• Material Design</li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-accent hover:border-purple-500/50 hover:shadow-2xl">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Game Development</h3>
                        <ul className="space-y-3 text-text-primary">
                            <li>• Unity 3D Engine</li>
                            <li>• C# Programming</li>
                            <li>• 2D/3D Game Design</li>
                            <li>• Physics & Animation</li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-accent hover:border-yellow-500/50 hover:shadow-2xl">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-6 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning</h3>
                        <ul className="space-y-3 text-text-primary">
                            <li>• AI Tools Testing</li>
                            <li>• Machine Learning</li>
                            <li>• OpenAI APIs</li>
                            <li>• Data Analysis</li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-accent hover:border-green-500/50 hover:shadow-2xl">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Frontend Development</h3>
                        <ul className="space-y-3 text-text-primary">
                            <li>• React & TypeScript</li>
                            <li>• Modern CSS & Tailwind</li>
                            <li>• Responsive Design</li>
                            <li>• UI/UX Principles</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;