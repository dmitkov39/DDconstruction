'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Stat {
  id: number;
  value: string;
  label: string;
  iconName: keyof typeof import('@heroicons/react/24/outline');
}

interface StatsSectionProps {
  stats: Stat[];
}

const StatsSection = ({ stats }: StatsSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.iconName} size={32} className="text-primary-foreground" />
                </div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-primary-foreground/90 font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.iconName} size={32} className="text-primary-foreground" />
              </div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/90 font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;