'use client';

import React, { useRef } from 'react';
import HeroSection from './HeroSection';
import ServicesOverview from './ServicesOverview';
import PricingTimeline from './PricingTimeline';

const SiteCleaningInteractive = () => {
  const contactFormRef = useRef<HTMLDivElement>(null);

  const scrollToContactForm = () => {
    contactFormRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <HeroSection onGetQuote={scrollToContactForm} />
      <ServicesOverview />
      <PricingTimeline />
      <div ref={contactFormRef}>
        <ContactForm />
      </div>
    </>
  );
};

export default SiteCleaningInteractive;
