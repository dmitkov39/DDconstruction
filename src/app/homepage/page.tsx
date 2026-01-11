import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import ClientTypesBanner from './components/ClientTypesBanner';
import ServicesOverview from './components/ServicesOverview';
import TrustIndicators from './components/TrustIndicators';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'D&D Construction - Професионални изкопни работи и строителни услуги',
  description: 'Водеща строителна компания в България с над 15 години опит в изкопни дейности, почистване на обекти, заравняване на терени и транспорт на материали. Модерна техника, опитен екип и гарантирано качество.',
};

export default function Homepage() {
  return (
    <main className="min-h-screen">
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