'use client';

import React from 'react';
import HeroSection from './HeroSection';
import ServicesOverview from './ServicesOverview';
import PricingTimeline from './PricingTimeline';
import Footer from '@/app/homepage/components/Footer';

const SiteCleaningInteractive = () => {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <PricingTimeline />
      <Footer />
    </>
  );
};

export default SiteCleaningInteractive;
