import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from 'emailjs-com';

// Zod şeması aynı kalıyor
const contactSchema = z.object({
    from_name: z.string().min(2, { message: 'Adınız en az 2 karakter olmalıdır.' }),
    from_email: z.string().email({ message: 'Lütfen geçerli bir e-posta adresi girin.' }),
    message: z.string().min(10, { message: 'Mesajınız en az 10 karakter olmalıdır.' }),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }, // isSubmitting'i artık buradan almayacağız
        reset,
    } = useForm<ContactFormInputs>({
        resolver: zodResolver(contactSchema),
    });

    // YENİ: Gönderim sürecini manuel kontrol etmek için kendi state'imiz
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
        // 1. Gönderim başladığında state'leri ayarla
        setIsLoading(true);
        setSubmitStatus(null);

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceID || !templateID || !publicKey) {
            console.error("EmailJS environment variables are not set!");
            setSubmitStatus('error');
            setIsLoading(false); // Hata durumunda yüklenmeyi durdur
            return;
        }

        emailjs.send(serviceID, templateID, data, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitStatus('success');
                reset();
            })
            .catch((err) => {
                console.log('FAILED...', err);
                setSubmitStatus('error');
            })
            .finally(() => {
                // 2. İşlem başarılı da olsa, başarısız da olsa yüklenme durumunu bitir
                setIsLoading(false);
            });
    };

    return (
        <section id="contact" className="py-24 bg-primary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">İletişim</h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-highlight to-accent mx-auto rounded-full"></div>
                </div>
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-8 lg:space-y-10">
                        {/* Sol taraf (iletişim bilgileri) aynı kalıyor */}
                        {/* ... E-posta, GitHub, Konum kartları ... */}
                        <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-secondary to-primary rounded-2xl border border-accent hover:border-highlight/50 transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-highlight to-accent rounded-2xl flex items-center justify-center shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">E-posta</h3>
                                <a href="mailto:mhbarut66@gmail.com" className="text-highlight hover:text-white transition-colors">
                                    mhbarut66@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-secondary to-primary rounded-2xl border border-accent hover:border-purple-500/50 transition-all duration-300">
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

                        <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-secondary to-primary rounded-2xl border border-accent hover:border-blue-500/50 transition-all duration-300">
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
                    <div className="bg-gradient-to-br from-secondary to-primary p-8 lg:p-10 rounded-2xl border border-accent">
                        <h3 className="text-3xl font-bold text-white mb-8">Mesaj Gönder</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 lg:space-y-8">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Adınız Soyadınız"
                                    {...register('from_name')}
                                    className={`w-full px-6 py-4 bg-primary border rounded-xl text-white placeholder-text-secondary focus:outline-none transition-colors ${
                                        errors.from_name ? 'border-red-500 focus:border-red-500' : 'border-accent focus:border-highlight'
                                    }`}
                                />
                                {errors.from_name && <p className="text-red-500 text-sm mt-2">{errors.from_name.message}</p>}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="ornek@email.com"
                                    {...register('from_email')}
                                    className={`w-full px-6 py-4 bg-primary border rounded-xl text-white placeholder-text-secondary focus:outline-none transition-colors ${
                                        errors.from_email ? 'border-red-500 focus:border-red-500' : 'border-accent focus:border-highlight'
                                    }`}
                                />
                                {errors.from_email && <p className="text-red-500 text-sm mt-2">{errors.from_email.message}</p>}
                            </div>
                            <div>
                <textarea
                    rows={6}
                    placeholder="Mesajınızı buraya yazın..."
                    {...register('message')}
                    className={`w-full px-6 py-4 bg-primary border rounded-xl text-white placeholder-text-secondary focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500 focus:border-red-500' : 'border-accent focus:border-highlight'
                    }`}
                ></textarea>
                                {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                // 3. Butonun disabled durumunu kendi state'imize bağlıyoruz
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-accent to-highlight text-white py-4 px-8 rounded-xl transition-all duration-300 font-semibold text-lg transform
                            hover:from-highlight hover:to-accent hover:scale-105 hover:shadow-lg
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-highlight
                            disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none"
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Gönderiliyor...
                  </span>
                                ) : (
                                    'Mesaj Gönder'
                                )}
                            </button>

                            {/* Gönderim durumu mesajları */}
                            {submitStatus === 'success' && <p className="text-green-400 text-center mt-4">Mesajınız başarıyla gönderildi. Teşekkürler!</p>}
                            {submitStatus === 'error' && <p className="text-red-500 text-center mt-4">Bir hata oluştu. Lütfen daha sonra tekrar deneyin.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;