'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeroSection from './HeroSection';
import ServiceCapabilities from './ServiceCapabilities';
import ProcessTimeline from './ProcessTimeline';
import CTASection from './CTASection';
import Footer from './Footer';

const ExcavationInteractive = () => {
  const router = useRouter();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleContactClick = () => {
    if (!isHydrated) return;
    window.location.href = 'tel:+359881234567';
  };

  const handleQuoteClick = () => {
    if (!isHydrated) return;
    router?.push('/quick-quote');
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <HeroSection onContactClick={() => {}} onQuoteClick={() => {}} />
        <ServiceCapabilities />
        <ProcessTimeline />
        <CTASection onContactClick={() => {}} onQuoteClick={() => {}} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onContactClick={handleContactClick} onQuoteClick={handleQuoteClick} />
      <ServiceCapabilities />
      <ProcessTimeline />
      <CTASection onContactClick={handleContactClick} onQuoteClick={handleQuoteClick} />
      <Footer />
    </div>
  );
};

export default ExcavationInteractive;