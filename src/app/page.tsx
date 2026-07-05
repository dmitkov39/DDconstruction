const BRAND_NAME = 'D&D Construction';
const SITE_URL = 'https://www.ddconstructiongp.com';

import type { Metadata } from 'next';
import Script from 'next/script';

import Header from '@/components/common/Header';
import HeroSection from '@/app/homepage/components/HeroSection';
import ClientTypesBanner from '@/app/homepage/components/ClientTypesBanner';
import ServicesOverview from '@/app/homepage/components/ServicesOverview';
import TrustIndicators from '@/app/homepage/components/TrustIndicators';
import TestimonialsCarousel from '@/app/homepage/components/TestimonialsCarousel';
import Footer from '@/app/homepage/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `Изкопни услуги с мини багер | Заравняване и почистване – ${BRAND_NAME}`,
  description:
    'Изкопни услуги с мини багер в София и Софийска област: заравняване на терени, почистване на обекти и транспорт на материали. Обслужваме Ихтиман, Банкя, Нови хан и региона. Бързо изпълнение, коректни цени.',
  keywords: [
    'изкопни услуги',
    'мини багер',
    'изкопни работи',
    'заравняване на терени',
    'почистване на обекти',
    'транспорт на материали',
    'строителни услуги',
    'DD Construction',
    'D&D Construction',
    'изкопни услуги София',
    'изкопни работи Ихтиман',
    'мини багер под наем София',
    'заравняване терен Софийска област',
    'почистване двор София',
    'изкопни дейности Банкя',
    'мини багер Нови хан',
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/`,
    title: `Изкопни услуги с мини багер | Заравняване и почистване – ${BRAND_NAME}`,
    description:
      'Изкопни услуги с мини багер в София и Софийска област: заравняване на терени, почистване на обекти и транспорт на материали.',
    siteName: BRAND_NAME,
    locale: 'bg_BG',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Изкопни услуги с мини багер | ${BRAND_NAME}`,
    description:
      'Изкопни услуги с мини багер в София и Софийска област: заравняване на терени, почистване на обекти и транспорт на материали.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function Homepage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND_NAME,
    url: SITE_URL,
    telephone: '+359878827128',
    email: 'ddconstruction988@gmail.com',
    description:
      'Изкопни услуги с мини багер, заравняване на терени, почистване на обекти и транспорт на материали в София и Софийска област.',
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Софийска област',
      },
      {
        '@type': 'City',
        name: 'София',
      },
      {
        '@type': 'City',
        name: 'Ихтиман',
      },
      {
        '@type': 'City',
        name: 'Банкя',
      },
      {
        '@type': 'City',
        name: 'Нови хан',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BG',
      addressRegion: 'Софийска област',
    },
    priceRange: '$$',
    openingHours: 'Mo-Sa 08:00-20:00',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '8',
      bestRating: '5',
      worstRating: '1',
    },
    serviceType: [
      'Изкопни дейности',
      'Почистване на обекти',
      'Заравняване на терени',
      'Транспорт на материали',
      'Канални изкопи',
      'Къртене на бетон',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Строителни услуги',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Изкопни дейности с мини багер',
            description: 'Изкопни работи за основи, канализация, кабели и ВиК с мини багер Takeuchi TB016',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Заравняване на терени',
            description: 'Прецизно заравняване и подготовка на терени за строителство',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Почистване на обекти',
            description: 'Почистване на дворове, строителни обекти и подземни пространства',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Транспорт на материали',
            description: 'Извозване на строителни отпадъци и транспорт на материали',
          },
        },
      ],
    },
  };

  return (
    <main className="min-h-screen">
      <Script
        id="ld-json-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <div className="pt-20">
        <HeroSection />
        <ClientTypesBanner />
        <ServicesOverview />
        <TrustIndicators />
        <TestimonialsCarousel />
        <Footer />
      </div>
    </main>
  );
}
