import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactHero from './components/ContactHero';
import ContactInfo from './components/ContactInfo';
import ContactFormSection from './components/ContactFormSection';
import ServiceAreaMap from './components/ServiceAreaMap';
import QuickQuoteCalculator from './components/QuickQuoteCalculator';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Контакти - D&D Construction',
  description: 'Свържете се с D&D Construction за професионални строителни услуги. Обадете се на +359 878 827 128/+359 885 078 098 или изпратете запитване онлайн. Бързо време за отговор и безплатни оферти.',
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