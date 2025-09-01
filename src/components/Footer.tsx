import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from 'emailjs-com';
import { Github, Linkedin, Instagram } from 'lucide-react'; // Linkedin ve Instagram ikonlarını import et

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
                        {/* ... E-posta kartı ... */}
                        <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-secondary to-primary rounded-2xl border border-accent hover:border-highlight/50 transition-all duration-300">
                            {/* ... E-posta içeriği ... */}
                        </div>

                        {/* LinkedIn Kartı (YENİ) */}
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

                        {/* Instagram Kartı (YENİ) */}
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

                        {/* ... GitHub ve Konum kartları (isteğe bağlı, bunları kaldırabiliriz de) ... */}

                    </div>

                    <div className="bg-gradient-to-br from-secondary to-primary p-8 lg:p-10 rounded-2xl border border-accent">
                        {/* ... Form içeriği ... */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;