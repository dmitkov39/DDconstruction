'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import ServiceAreaMap from './ServiceAreaMap';
import Footer from './Footer';

interface ServiceArea {
  id: number;
  region: string;
  cities: string[];
  responseTime: string;
}

const MaterialTransportInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const serviceAreas: ServiceArea[] = [
    {
      id: 1,
      region: 'София - централна градска част',
      cities: ['Център', 'Лозенец', 'Витоша', 'Младост', 'Люлин'],
      responseTime: '1-2 часа'
    },
    {
      id: 2,
      region: 'София - околни райони',
      cities: ['Банкя', 'Нови хан', 'Костинброд', 'Божурище'],
      responseTime: '2-3 часа'
    },
    {
      id: 3,
      region: 'Софийска област - изток',
      cities: ['Ихтиман', 'Елин Пелин', 'Горна Малина'],
      responseTime: '2-4 часа'
    },
    {
      id: 4,
      region: 'Софийска област - запад/юг',
      cities: ['Перник', 'Самоков', 'Владая', 'Кладница'],
      responseTime: '2-4 часа'
    }
  ];

  const handleContactClick = () => {
    if (!isHydrated) return;
    window.location.href = '/contact';
  };

  const handleQuoteClick = () => {
    if (!isHydrated) return;
    window.location.href = '/quick-quote';
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse space-y-8 pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="h-12 bg-muted rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-6 bg-muted rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>);
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        onContactClick={handleContactClick}
        onQuoteClick={handleQuoteClick} />
      <ServiceAreaMap serviceAreas={serviceAreas} />
      <Footer />
    </div>
  );
};

export default MaterialTransportInteractive;
