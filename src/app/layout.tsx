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
    default: `Изкопни услуги с мини багер | ${BRAND_NAME}`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    'Изкопни услуги с мини багер, заравняване на терени, почистване на обекти и транспорт на материали в София и страната. Бързо изпълнение, коректни цени.',
  keywords: [
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: BRAND_NAME,
    locale: 'bg_BG',
    title: `Изкопни услуги с мини багер | ${BRAND_NAME}`,
    description:
      'Изкопни услуги с мини багер, заравняване на терени, почистване на обекти и транспорт на материали. Бързо изпълнение и професионален екип.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Изкопни услуги с мини багер | ${BRAND_NAME}`,
    description:
      'Изкопни услуги с мини багер, заравняване на терени, почистване на обекти и транспорт на материали.',
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
