import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../ui/Section';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactSchema = z.object({
    name: z.string().min(2, { message: t('contact.nameRequired') }),
    email: z.string().email({ message: t('contact.emailRequired') }),
    message: z.string().min(10, { message: t('contact.messageRequired') }),
  });

  type ContactFormValues = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        { from_name: data.name, reply_to: data.email, message: data.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-transparent">
      {/* Ambient glows: Neon Green (top-right, drift 2) + Royal Blue (bottom-left, drift 3) */}
      <div className="absolute top-0 -right-20 w-[450px] h-[450px] bg-[#39ff14] opacity-25 blur-[90px] rounded-full pointer-events-none animate-orb-2" />
      <div className="absolute bottom-0 -left-20 w-[450px] h-[450px] bg-[#2563eb] opacity-35 blur-[100px] rounded-full pointer-events-none animate-orb-3" />

      <Section id="contact" title={t('sections.contact')} className="bg-transparent">
        <div className="max-w-3xl mx-auto">
          <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-heading font-bold text-foreground mb-4 text-center">
                {t('contact.title')}
              </h3>
              <p className="text-muted-foreground mb-10 text-lg text-center max-w-lg mx-auto">
                {t('contact.subtitle')}
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className={`w-full px-5 py-4 rounded-xl bg-background/60 border text-foreground focus:outline-none focus:ring-2 focus:ring-[#39ff14]/50 transition-colors placeholder:text-muted-foreground/40 ${
                      errors.name ? 'border-destructive' : 'border-border'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className={`w-full px-5 py-4 rounded-xl bg-background/60 border text-foreground focus:outline-none focus:ring-2 focus:ring-[#39ff14]/50 transition-colors placeholder:text-muted-foreground/40 ${
                      errors.email ? 'border-destructive' : 'border-border'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    className={`w-full px-5 py-4 rounded-xl bg-background/60 border text-foreground focus:outline-none focus:ring-2 focus:ring-[#39ff14]/50 transition-colors resize-none placeholder:text-muted-foreground/40 ${
                      errors.message ? 'border-destructive' : 'border-border'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-400 text-sm font-medium text-center border border-emerald-500/20">
                    {t('contact.success')}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-destructive/10 text-destructive text-sm font-medium text-center border border-destructive/20">
                    {t('contact.error')}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-base py-4"
                >
                  {isSubmitting ? t('contact.sending') : t('contact.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
