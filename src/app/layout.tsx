import React from 'react';
import type { Metadata } from 'next';
import '../styles/index.css';

const SITE_URL = 'https://www.ddconstructiongp.com';
const BRAND_NAME = 'D&D Construction';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Оформяне на дворове и изкопни услуги в София | ${BRAND_NAME}`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    'Цялостно оформяне на дворове в София и Софийска област: изкопи, заравняване, подпорни стени, дренаж, ВиК, настилки и засаждане. Един изпълнител, собствена техника.',
  keywords: [
    'оформяне на двор',
    'озеленяване София',
    'изкопни услуги',
    'мини багер',
    'изкопни работи',
    'заравняване на терени',
    'почистване на обекти',
    'транспорт на материали',
    'строителни услуги',
    'D&D Construction',
    'изкопни услуги София',
    'мини багер под наем',
  ],
  authors: [{ name: BRAND_NAME, url: SITE_URL }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: BRAND_NAME,
    locale: 'bg_BG',
    images: [{ url: '/assets/images/og-image.png', width: 1200, height: 630, alt: 'D&D Construction' }],
    title: `Оформяне на дворове и изкопни услуги в София | ${BRAND_NAME}`,
    description:
      'Цялостно преобразяване на двора – от първия изкоп до готов двор. Изкопи, стени, дренаж, настилки и засаждане от един изпълнител.',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/images/og-image.png'],
    title: `Оформяне на дворове и изкопни услуги в София | ${BRAND_NAME}`,
    description:
      'Цялостно преобразяване на двора в София и региона – от първия изкоп до готов двор.',
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
  verification: {
    // Добави Google Search Console verification кода тук когато го имаш:
    // google: 'твоя-код-тук',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
