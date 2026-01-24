'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import SeasonalGuide from './SeasonalGuide';
import Footer from './Footer';

const LandLevelingInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse">
          <div className="h-96 bg-muted"></div>
          <div className="container mx-auto px-4 py-20">
            <div className="space-y-4">
              <div className="h-8 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SeasonalGuide />
      <Footer />
    </div>
  );
};

export default LandLevelingInteractive;
