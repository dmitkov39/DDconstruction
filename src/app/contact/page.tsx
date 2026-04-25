import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactHero from './components/ContactHero';
import ContactInfo from './components/ContactInfo';
import ContactFormSection from './components/ContactFormSection';
import ServiceAreaMap from './components/ServiceAreaMap';
import QuickQuoteCalculator from './components/QuickQuoteCalculator';
import Footer from './components/Footer';

const SITE_URL = 'https://www.ddconstructiongp.com';

export const metadata: Metadata = {
  title: 'Контакти',
  description:
    'Свържете се с D&D Construction за изкопни услуги в София и Софийска област. Обадете се на +359 878 827 128 или изпратете запитване онлайн. Безплатна оферта до 24 часа.',
  keywords: [
    'контакти D&D Construction',
    'изкопни услуги контакт',
    'мини багер оферта София',
    'строителни услуги запитване',
    'телефон изкопни работи',
    'безплатна оферта изкоп',
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/contact`,
    title: 'Контакти | D&D Construction',
    description:
      'Свържете се с D&D Construction за изкопни услуги в София и Софийска област. Безплатна оферта до 24 часа.',
    locale: 'bg_BG',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <ContactHero />
        <ContactInfo />
        <div id="contact-form">
          <ContactFormSection />
        </div>
        <ServiceAreaMap />
        <QuickQuoteCalculator />
        <Footer />
      </div>
    </main>
  );
}
