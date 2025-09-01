import React, { useState } from 'react'; // HATA BURADAYDI, DÜZELTİLDİ
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from 'emailjs-com';
import { Linkedin, Instagram, Mail, Github } from 'lucide-react';

const contactSchema = z.object({
    from_name: z.string().min(2, { message: 'Adınız en az 2 karakter olmalıdır.' }),
    from_email: z.string().email({ message: 'Lütfen geçerli bir e-posta adresi girin.' }),
    message: z.string().min(10, { message: 'Mesajınız en az 10 karakter olmalıdır.' }),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormInputs>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
        setIsLoading(true);
        setSubmitStatus(null);

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            data,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setSubmitStatus('success');
                reset();
            })
            .catch((err) => {
                console.log('FAILED...', err);
                setSubmitStatus('error');
            })
            .finally(() => {
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
                    <div className="space-y-6">
                        <a href="mailto:mhbarut66@gmail.com" className="flex items-center space-x-6 p-6 bg-gradient-to-r from-secondary to-primary rounded-2xl border border-accent hover:border-highlight/50 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-gradient-to-r from-highlight to-accent rounded-2xl flex items-center justify-center shadow-lg">
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">E-posta</h3>
                                <p className="text-highlight group-hover:text-white transition-colors">
                                    mhbarut66@gmail.com
                                </p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/mehmet-halit-barut/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 p-6 bg-gradient-to-r from-secondary to-primary rounded-2xl border border-accent hover:border-blue-500/50 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <Linkedin className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">LinkedIn</h3>
                                <p className="text-blue-400 group-hover:text-blue-300 transition-colors">
                                    in/mehmet-halit-barut
                                </p>
                            </div>
                        </a>

                        <a href="https://github.com/halitbarut" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 p-6 bg-gradient-to-r from-secondary to-primary rounded-2xl border border-accent hover:border-purple-500/50 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <Github className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">GitHub</h3>
                                <p className="text-purple-400 group-hover:text-purple-300 transition-colors">
                                    github.com/halitbarut
                                </p>
                            </div>
                        </a>

                        <a href="https://instagram.com/halit__barut" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 p-6 bg-gradient-to-r from-secondary to-primary rounded-2xl border border-accent hover:border-pink-500/50 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                                <Instagram className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">Instagram</h3>
                                <p className="text-pink-400 group-hover:text-pink-300 transition-colors">
                                    @halit__barut
                                </p>
                            </div>
                        </a>
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