const BRAND_NAME = 'D&D Construction';
const SITE_URL = 'https://www.ddconstructiongp.com';

import type { Metadata } from 'next';
import Script from 'next/script';

import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import ClientTypesBanner from './components/ClientTypesBanner';
import ServicesOverview from './components/ServicesOverview';
import TrustIndicators from './components/TrustIndicators';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import Footer from './components/Footer';

const SITE_URL = 'https://www.ddconstructiongp.com';
const BRAND_NAME = 'D&D Construction';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ddconstructiongp.com'),
  title: `Изкопни услуги с мини багер | Заравняване и почистване – ${BRAND_NAME}`,
  description:
    'Изкопни услуги с мини багер: заравняване на терени, почистване на обекти и транспорт на материали. Бързо изпълнение, коректни цени и професионален екип. Запитване онлайн.',
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
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: `Изкопни услуги с мини багер | Заравняване и почистване – ${BRAND_NAME}`,
    description:
      'Изкопни услуги с мини багер: заравняване на терени, почистване на обекти и транспорт на материали. Бързо изпълнение и професионален екип.',
    siteName: BRAND_NAME,
    locale: 'bg_BG',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Изкопни услуги с мини багер | ${BRAND_NAME}`,
    description:
      'Изкопни услуги с мини багер: заравняване на терени, почистване на обекти и транспорт на материали.',
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
  // JSON-LD (Structured Data) – помага на Google да разбере бизнеса и услугите
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND_NAME,
    url: SITE_URL,
    areaServed: 'BG',
    description:
      'Изкопни услуги с мини багер, заравняване на терени, почистване на обекти и транспорт на материали.',
    // Ако имаш телефон/имейл и адрес – добави ги тук за още по-силен локален SEO:
    // telephone: '+359 878 827 128/+359 885 078 098',
    // email: 'ddconstruction988@gmail.com',
    // address: {
    //   '@type': 'PostalAddress',
    //   addressCountry: 'BG',
    //   addressLocality: 'Sofia',
    // },
    serviceType: [
      'Изкопни дейности',
      'Почистване на обекти',
      'Заравняване на терени',
      'Транспорт на материали',
    ],
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
