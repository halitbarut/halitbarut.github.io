import React from 'react';
import { motion } from 'framer-motion';
import Timeline from './Timeline';

const About = () => {
    const paragraphVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: 'easeOut'
            }
        })
    };

    return (
        <section id="about" className="py-24 relative">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-purple-600/20 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-cyan-500/20 blur-[120px]" />
            </div>
            <div className="container mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-4">Hikayem</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6">
                        Benim Hikayem
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="glass-panel rounded-3xl p-10 border border-white/10 shadow-2xl"
                    >
                        {[0, 1, 2].map((index) => (
                            <motion.p
                                key={index}
                                variants={paragraphVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                                className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 last:mb-0"
                            >
                                {index === 0 && 'Merhaba! Ben Mehmet Halit. Benim için yazılım, bir dergide gördüğüm bir merak kıvılcımıyla başlayıp, kod yazabilmek için her fırsatı bir arayışa dönüştürdüğüm bir tutku yolculuğu. Her şey, Code.org ile bloklarla kod yazmanın heyecanını keşfetmemle başladı ve lisede yazdığım ilk Python satırlarıyla somut bir hedefe dönüştü.'}
                                {index === 1 && 'Bu yolculuk boyunca, farklı teknolojileri sadece öğrenmekle kalmadım, aynı zamanda onları problem çözmek için birer araç olarak kullanmayı benimsedim. Kotlin ile mobil dünyanın kapılarını araladım, Unity ile oyun mekaniklerinin ardındaki mantığı çözdüm ve FastAPI ile güçlü backend sistemleri inşa ettim. Her proje, benim için teorik bilgiyi pratiğe dökme ve sürekli gelişme fırsatı oldu.'}
                                {index === 2 && 'Bugün, yapay zekayı bir rakip olarak değil, yaratıcılığı artıran bir güçlendirici olarak görüyorum. Sağdaki zaman tüneli, bu öğrenme ve adaptasyon sürecindeki önemli kilometre taşlarını özetliyor.'}
                            </motion.p>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-500 rounded-3xl blur-xl opacity-30"></div>
                        <div className="relative rounded-3xl bg-[#05051d]/70 border border-white/10 backdrop-blur-2xl p-10 shadow-2xl">
                            <Timeline />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
