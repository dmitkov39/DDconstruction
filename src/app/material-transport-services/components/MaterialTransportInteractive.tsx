import React from 'react';
import HeroSection from './HeroSection';
import ServiceAreaMap from './ServiceAreaMap';
import Footer from './Footer';

interface ServiceArea {
  id: number;
  region: string;
  cities: string[];
  responseTime: string;
}

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

const MaterialTransportInteractive = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServiceAreaMap serviceAreas={serviceAreas} />
      <Footer />
    </div>
  );
};

export default MaterialTransportInteractive;
