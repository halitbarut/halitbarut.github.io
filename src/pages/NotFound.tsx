import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/layout/SEO';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <SEO title={t('error.404', { defaultValue: '404 - Page Not Found' })} />
      <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 gradient-text">404</h1>
      <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4 text-foreground">
        {t('error.404', { defaultValue: 'Page Not Found' })}
      </h2>
      <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto">
        {t('error.404message', { defaultValue: "The page you are looking for doesn't exist or has been moved." })}
      </p>
      <Link to="/" className="btn-primary inline-flex items-center">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {t('error.returnHome', { defaultValue: 'Return Home' })}
      </Link>
    </div>
  );
}
