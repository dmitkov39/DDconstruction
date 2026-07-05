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
      region: 'София и Софийска област',
      cities: ['София', 'Перник', 'Ботевград', 'Самоков', 'Костинброд'],
      responseTime: '2-4 часа'
    },
    {
      id: 2,
      region: 'Пловдив и Южна България',
      cities: ['Пловдив', 'Пазарджик', 'Асеновград', 'Карлово', 'Хасково'],
      responseTime: '4-6 часа'
    },
    {
      id: 3,
      region: 'Варна и Черноморие',
      cities: ['Варна', 'Бургас', 'Добрич', 'Шумен', 'Несебър'],
      responseTime: '6-8 часа'
    },
    {
      id: 4,
      region: 'Северна България',
      cities: ['Русе', 'Плевен', 'Велико Търново', 'Габрово', 'Разград'],
      responseTime: '6-8 часа'
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
    </div>
  );
};

export default MaterialTransportInteractive;
