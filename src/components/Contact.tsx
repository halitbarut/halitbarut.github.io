import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import { Mail, Send, MessageCircle } from 'lucide-react';

type ContactFormInputs = {
    from_name: string;
    from_email: string;
    message: string;
};

const Contact = () => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const contactSchema = useMemo(() => z.object({
        from_name: z.string().min(2, { message: t('contact.validation.nameMin') }),
        from_email: z.string().email({ message: t('contact.validation.emailInvalid') }),
        message: z.string().min(10, { message: t('contact.validation.messageMin') }),
    }), [t]);

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
        <section id="contact" className="py-24 relative">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-purple-600/20 blur-[160px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/20 blur-[160px]" />
            </div>
            <div className="container mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="inline-block mb-4"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                            <MessageCircle className="w-8 h-8 text-white" />
                        </div>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6">
                        {t('contact.title')}
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8 flex flex-col justify-center"
                    >
                        <motion.a
                            href="mailto:mhbarut66@gmail.com"
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative overflow-hidden"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-3xl opacity-0 blur group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative flex items-center gap-6 p-8 rounded-3xl bg-white/5 border-2 border-white/10 backdrop-blur-xl group-hover:border-white/20 transition-all duration-300">
                                <div className="relative flex-shrink-0">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl blur-md opacity-60"></div>
                                    <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl">
                                        <Mail className="w-10 h-10 text-white drop-shadow-lg" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-200 group-hover:to-cyan-200 transition-all">{t('contact.emailMe')}</h3>
                                    <p className="text-gray-300 group-hover:text-white transition-colors font-medium">
                                        mhbarut66@gmail.com
                                    </p>
                                </div>
                            </div>
                        </motion.a>
                        <p className="text-center text-gray-400 text-sm">
                            {t('contact.description')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/30 via-pink-500/30 to-cyan-500/30 rounded-3xl blur-xl"></div>
                        <div className="relative glass-panel rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl">
                            <h3 className="text-3xl font-bold text-white mb-8">{t('contact.subtitle')}</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder={t('contact.form.name')}
                                        {...register('from_name')}
                                        className={`w-full px-6 py-4 bg-white/5 border rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${
                                            errors.from_name
                                                ? 'border-red-500/50 focus:ring-red-500/50'
                                                : 'border-white/10 focus:ring-purple-500/50 focus:border-purple-500/50'
                                        }`}
                                    />
                                    {errors.from_name && (
                                        <p className="text-red-400 text-sm mt-2">{errors.from_name.message}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder={t('contact.form.email')}
                                        {...register('from_email')}
                                        className={`w-full px-6 py-4 bg-white/5 border rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${
                                            errors.from_email
                                                ? 'border-red-500/50 focus:ring-red-500/50'
                                                : 'border-white/10 focus:ring-purple-500/50 focus:border-purple-500/50'
                                        }`}
                                    />
                                    {errors.from_email && (
                                        <p className="text-red-400 text-sm mt-2">{errors.from_email.message}</p>
                                    )}
                                </div>
                                <div>
                                    <textarea
                                        rows={6}
                                        placeholder={t('contact.form.message')}
                                        {...register('message')}
                                        className={`w-full px-6 py-4 bg-white/5 border rounded-2xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all resize-none ${
                                            errors.message
                                                ? 'border-red-500/50 focus:ring-red-500/50'
                                                : 'border-white/10 focus:ring-purple-500/50 focus:border-purple-500/50'
                                        }`}
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-400 text-sm mt-2">{errors.message.message}</p>
                                    )}
                                </div>
                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative w-full py-5 px-8 rounded-2xl font-bold text-white text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden shadow-2xl"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                                    <span className="relative flex items-center justify-center gap-3">
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                {t('contact.form.sending')}
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                                {t('contact.form.send')}
                                            </>
                                        )}
                                    </span>
                                </motion.button>
                                {submitStatus === 'success' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-green-400 text-center"
                                    >
                                        {t('contact.form.success')}
                                    </motion.p>
                                )}
                                {submitStatus === 'error' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-center"
                                    >
                                        {t('contact.form.error')}
                                    </motion.p>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
