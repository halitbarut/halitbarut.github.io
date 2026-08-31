import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title,
  description,
  type = "website",
  name,
  image = "/og-image.jpg",
  url = "https://halitbarut.github.io"
}: SEOProps) {
  const { t } = useTranslation();

  const finalTitle = title || t('meta.title', { defaultValue: 'Mehmet Halit Barut | Yazılım Mühendisi' });
  const finalDescription = description || t('meta.description', { defaultValue: 'Fikirleri koda dönüştürerek somut çözümler üreten; web, mobil, oyun ve yapay zeka alanlarında sürekli öğrenen bir geliştirici.' });
  const finalName = name || t('profile.name', { defaultValue: 'Mehmet Halit Barut' });

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {/* Open Graph metadata */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:site_name" content={finalName} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      {/* Twitter metadata */}
      <meta name="twitter:creator" content={finalName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
