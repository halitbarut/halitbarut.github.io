import React from 'react';
import Timeline from './Timeline';

const About = () => {
    return (
        <section id="about" className="py-24 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Benim Hikayem</h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-highlight to-accent mx-auto rounded-full"></div>
                </div>
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Sol Taraf: Hikaye ve Paragraflar */}
                    <div className="space-y-6">
                        <p className="text-lg md:text-xl text-text-primary leading-relaxed">
                            Merhaba! Ben Mehmet Halit. Benim için yazılım, bir dergide gördüğüm merakla başlayıp, kısıtlı imkanlara rağmen tutkuyla devam eden bir yolculuk. Her şey, bir bilgisayarım bile yokken bloklarla kod yazmanın heyecanını keşfetmemle başladı ve lisede yazdığım ilk Python satırlarıyla somut bir hedefe dönüştü.
                        </p>
                        <p className="text-lg md:text-xl text-text-primary leading-relaxed">
                            Bu yolculuk boyunca, farklı teknolojileri sadece öğrenmekle kalmadım, aynı zamanda onları problem çözmek için birer araç olarak kullanmayı benimsedim. Kotlin ile mobil dünyanın kapılarını araladım, Unity ile oyun mekaniklerinin ardındaki mantığı çözdüm ve FastAPI ile güçlü backend sistemleri inşa ettim. Her proje, benim için teorik bilgiyi pratiğe dökme ve sürekli gelişme fırsatı oldu.
                        </p>
                        <p className="text-lg md:text-xl text-text-primary leading-relaxed">
                            Bugün, yapay zekayı bir rakip olarak değil, yaratıcılığı artıran bir güçlendirici olarak görüyorum. Sağdaki zaman tüneli, bu öğrenme ve adaptasyon sürecindeki önemli kilometre taşlarını özetliyor.
                        </p>
                    </div>

                    {/* Sağ Taraf: Zaman Tüneli */}
                    <div>
                        <Timeline />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;