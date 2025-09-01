import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-primary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Yetkinliklerim</h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-highlight to-accent mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-accent hover:border-highlight/50 hover:shadow-2xl">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-highlight to-accent flex items-center justify-center mb-6 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Backend Development</h3>
                        <ul className="space-y-3 text-text-primary">
                            <li>• Python (FastAPI) ile performanslı API'ler</li>
                            <li>• Ölçeklenebilir REST API mimarisi</li>
                            <li>• PostgreSQL ile veritabanı tasarımı</li>
                            <li>• Sunucu tarafı mantık ve iş akışları</li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-accent hover:border-green-500/50 hover:shadow-2xl">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Frontend Development</h3>
                        <ul className="space-y-3 text-text-primary">
                            <li>• React & TypeScript ile modern arayüzler</li>
                            <li>• TailwindCSS ile hızlı ve tutarlı tasarım</li>
                            <li>• Duyarlı (Responsive) tasarım prensipleri</li>
                            <li>• State yönetimi ve component mimarisi</li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-accent hover:border-blue-500/50 hover:shadow-2xl">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Mobile Development</h3>
                        <ul className="space-y-3 text-text-primary">
                            <li>• Kotlin ile native Android geliştirme</li>
                            <li>• Jetpack Compose ile deklaratif UI</li>
                            <li>• Android Studio ve geliştirme araçları</li>
                            <li>• Materyal Tasarım ilkeleri</li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-accent hover:border-purple-500/50 hover:shadow-2xl">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning</h3>
                        <ul className="space-y-3 text-text-primary">
                            <li>• OpenAI gibi LLM API'lerinin entegrasyonu</li>
                            <li>• Üretken Yapay Zeka araçlarının kullanımı</li>
                            <li>• Temel Makine Öğrenmesi ve Veri Bilimi</li>
                            <li>• AI destekli uygulama geliştirme</li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-accent hover:border-yellow-500/50 hover:shadow-2xl">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-6 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">DevOps & Altyapı</h3>
                        <ul className="space-y-3 text-text-primary">
                            <li>• Linux (Ubuntu/Fedora) sunucu yönetimi</li>
                            <li>• Temel Git ve GitHub iş akışları</li>
                            <li>• Uygulamaları bulut ortamına taşıma</li>
                            <li>• Nginx, Docker gibi temel araçlar</li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-accent hover:border-red-500/50 hover:shadow-2xl">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Game Development</h3>
                        <ul className="space-y-3 text-text-primary">
                            <li>• Unity 3D oyun motoru kullanımı</li>
                            <li>• C# ile oyun mekaniği programlama</li>
                            <li>• 3D oyun tasarımı ve fizik entegrasyonu</li>
                            <li>• Animasyon ve karakter kontrolü</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;