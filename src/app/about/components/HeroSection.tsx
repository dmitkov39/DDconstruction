import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  backgroundAlt: string;
}

const HeroSection = ({ title, subtitle, backgroundImage, backgroundAlt }: HeroSectionProps) => {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <AppImage
          src={backgroundImage}
          alt={backgroundAlt}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-sans">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;