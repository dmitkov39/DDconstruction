'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ServiceArea {
  city: string;
  coverage: string;
  responseTime: string;
}

const ServiceAreaMap = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const serviceAreas: ServiceArea[] = [
    {
      city: 'София',
      coverage: 'Пълно покритие',
      responseTime: '30 мин'
    },
    {
      city: 'Перник',
      coverage: 'Пълно покритие',
      responseTime: '45 мин'
    },
    {
      city: 'Благоевград',
      coverage: 'Регионално покритие',
      responseTime: '1-2 часа'
    },
    {
      city: 'Кюстендил',
      coverage: 'Регионално покритие',
      responseTime: '1-2 часа'
    }
  ];

  const mapCenter = {
    lat: 42.6977,
    lng: 23.3219
  };

  if (!isHydrated) {
    return (
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/2 mx-auto mb-12"></div>
              <div className="h-96 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Зони на обслужване
            </h2>
            <p className="text-lg text-muted-foreground">
              Обслужваме София и региона с бързо време за реакция
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="bg-background rounded-lg overflow-hidden border-2 border-border shadow-md h-96">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="D&D Construction Service Area - Sofia, Bulgaria"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${mapCenter.lat},${mapCenter.lng}&z=10&output=embed`}
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            <div className="space-y-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-background p-4 rounded-lg border-2 border-border hover:border-primary transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full flex-shrink-0">
                      <Icon name="MapPinIcon" size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-heading font-bold text-foreground mb-1">
                        {area.city}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {area.coverage}
                      </p>
                      <div className="flex items-center space-x-2">
                        <Icon name="ClockIcon" size={16} className="text-accent" />
                        <span className="text-sm font-semibold text-accent">
                          {area.responseTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/5 border-2 border-primary/30 rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-14 h-14 bg-primary rounded-full">
                  <Icon name="TruckIcon" size={28} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    Извън зоните на покритие?
                  </h3>
                  <p className="text-muted-foreground">
                    Свържете се с нас за индивидуална оферта и график
                  </p>
                </div>
              </div>
              <a
                href="tel:+359878827128"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-bold hover:bg-opacity-90 transition-all duration-300 hover:shadow-md whitespace-nowrap"
              >
                Обадете се сега
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;