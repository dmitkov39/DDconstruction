import React from 'react';
import HeroSection from './HeroSection';
import SeasonalGuide from './SeasonalGuide';
import Footer from './Footer';

const LandLevelingInteractive = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SeasonalGuide />
      <Footer />
    </div>
  );
};

export default LandLevelingInteractive;
