import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">MHB</div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-gray-300 hover:text-emerald-400 transition-colors">Anasayfa</a>
              <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors">Hakkımda</a>
              <a href="#skills" className="text-gray-300 hover:text-emerald-400 transition-colors">Yetenekler</a>
              <a href="#projects" className="text-gray-300 hover:text-emerald-400 transition-colors">Projeler</a>
              <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">İletişim</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Mehmet Halit
            <span className="block text-emerald-400">Barut</span>
          </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8">
            Ankara Yıldırım Beyazıt Üniversitesi
              <span className="block text-emerald-400 font-semibold mt-2">Yazılım Mühendisliği Öğrencisi</span>
          </p>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Full-stack geliştirme, mobil uygulamalar, oyun geliştirme ve yapay zeka teknolojileri konularında tutkulu bir geliştiriciyim.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://github.com/halitbarut" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Profilim
              </a>
              <a 
                href="#contact" 
                className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                İletişime Geç
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Hakkımda</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Merhaba! Ben Mehmet Halit Barut, Ankara Yıldırım Beyazıt Üniversitesi'nde Yazılım Mühendisliği okuyan tutkulu bir geliştiriciyim.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Full-stack web geliştirmeden mobil uygulamalara, Unity ile oyun geliştirmeden yapay zeka destekli uygulamalara kadar geniş bir yelpazede projeler üzerinde çalışıyorum.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Teknolojinin sürekli gelişen doğasına ayak uydurmayı ve yeni araçları keşfetmeyi seviyorum. Her proje benim için yeni bir öğrenme fırsatı.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 lg:p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-emerald-500/50">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Full-Stack</h3>
                <p className="text-gray-400 text-sm">Web Development</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 lg:p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500/50">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Mobile Dev</h3>
                <p className="text-gray-400 text-sm">Android Apps</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 lg:p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-purple-500/50">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Game Dev</h3>
                <p className="text-gray-400 text-sm">Unity 3D</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 lg:p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-yellow-500/50">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Enthusiast</h3>
                <p className="text-gray-400 text-sm">Machine Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Yeteneklerim</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-emerald-500/50 hover:shadow-2xl">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Backend Development</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Python FastAPI</li>
                <li>• REST API Design</li>
                <li>• Database Design</li>
                <li>• Server Architecture</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 hover:shadow-2xl">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mobile Development</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Kotlin</li>
                <li>• Jetpack Compose</li>
                <li>• Android Studio</li>
                <li>• Material Design</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-purple-500/50 hover:shadow-2xl">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Game Development</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Unity 3D Engine</li>
                <li>• C# Programming</li>
                <li>• 2D/3D Game Design</li>
                <li>• Physics & Animation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-yellow-500/50 hover:shadow-2xl">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• AI Tools Testing</li>
                <li>• Machine Learning</li>
                <li>• OpenAI APIs</li>
                <li>• Data Analysis</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-green-500/50 hover:shadow-2xl">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Frontend Development</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• React & TypeScript</li>
                <li>• Modern CSS & Tailwind</li>
                <li>• Responsive Design</li>
                <li>• UI/UX Principles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Projelerim</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-emerald-500/50 hover:shadow-2xl group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 mb-6 flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">TicaretApp</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Full-stack e-ticaret platformu. Modern backend API'si ve kullanıcı dostu arayüzü ile kapsamlı online alışveriş deneyimi sunar.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-600/30">Python</span>
                <span className="text-xs bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-600/30">FastAPI</span>
                <span className="text-xs bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-600/30">PostgreSQL</span>
                <span className="text-xs bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-600/30">React</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-purple-500/50 hover:shadow-2xl group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 mb-6 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Perpetua</h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full border border-yellow-600/30">Geliştirme Aşamasında</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">AI destekli dil öğrenme platformu. Yapay zeka teknolojileri kullanarak kişiselleştirilmiş öğrenme deneyimi sunan full-stack uygulama.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full border border-purple-600/30">Python</span>
                <span className="text-xs bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full border border-purple-600/30">FastAPI</span>
                <span className="text-xs bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full border border-purple-600/30">OpenAI API</span>
                <span className="text-xs bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full border border-purple-600/30">React</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 hover:shadow-2xl group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 mb-6 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">ZigZag</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Unity 3D ile geliştirilmiş platform oyunu. Dinamik level tasarımı ve akıcı oynanış mekaniği ile eğlenceli oyun deneyimi sunar.</p>
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">İletişim</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8 lg:space-y-10">
              <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">E-posta</h3>
                  <a href="mailto:mhbarut66@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    mhbarut66@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">GitHub</h3>
                  <a href="https://github.com/halitbarut" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                    github.com/halitbarut
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Konum</h3>
                  <p className="text-blue-400">Ankara, Türkiye</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 lg:p-10 rounded-2xl border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-8">Mesaj Gönder</h3>
              <form className="space-y-6 lg:space-y-8">
                <input
                  type="text"
                  className="w-full px-6 py-4 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Adınız Soyadınız"
                />
                <input
                  type="email"
                  className="w-full px-6 py-4 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="ornek@email.com"
                />
                <textarea
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-4 px-8 rounded-xl transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-lg"
                >
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
            <a 
              href="https://github.com/halitbarut" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="mailto:mhbarut66@gmail.com"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-lg mb-2">© 2024 Mehmet Halit Barut. Tüm hakları saklıdır.</p>
          <p className="text-gray-500 text-base">
            "Teknoloji tutkusu ve sürekli öğrenme arzusu ile geleceği şekillendiriyorum."
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;