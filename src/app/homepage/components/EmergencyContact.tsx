'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const EmergencyContact = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleCallClick = () => {
    if (isHydrated && typeof window !== 'undefined') {
      window.location.href = 'tel:+359878827128';
    }
  };

  const handleEmergencyClick = () => {
    if (isHydrated && typeof window !== 'undefined') {
      window.location.href = 'tel:+359885078098';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-conversion via-primary to-conversion relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Icon name="PhoneIcon" size={20} className="text-white" variant="solid" />
              <span className="text-sm font-heading font-semibold text-white">
                Свържете се с нас
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-6">
              Готови сме да започнем вашия проект
            </h2>
            
            <p className="text-lg text-white/90 font-sans">
              Обадете се сега за безплатна консултация или спешна помощ 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Icon name="PhoneIcon" size={32} className="text-primary" variant="solid" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    Основен телефон
                  </h3>
                  <p className="text-white/80 font-sans text-sm mb-4">
                    Понеделник - Петък: 08:00 - 18:00
                  </p>
                  <button
                    onClick={handleCallClick}
                    className="text-2xl font-heading font-bold text-white hover:text-primary transition-colors duration-300"
                  >
                    +359 878 827 128
                  </button>
                </div>
              </div>
            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/quick-quote"
              className="bg-white rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Icon name="DocumentTextIcon" size={32} className="text-primary group-hover:text-white" variant="solid" />
              </div>
              <h4 className="text-lg font-heading font-bold text-foreground mb-2">
                Бърза оферта
              </h4>
              <p className="text-sm text-muted-foreground font-sans">
                Получете оферта за 24 часа
              </p>
            </Link>

            <Link
              href="/contact"
              className="bg-white rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Icon name="EnvelopeIcon" size={32} className="text-accent group-hover:text-white" variant="solid" />
              </div>
              <h4 className="text-lg font-heading font-bold text-foreground mb-2">
                Изпратете запитване
              </h4>
              <p className="text-sm text-muted-foreground font-sans">
                Попълнете контактна форма
              </p>
            </Link>

            <Link
              href="/projects-portfolio"
              className="bg-white rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-success group-hover:scale-110 transition-all duration-300">
                <Icon name="PhotoIcon" size={32} className="text-success group-hover:text-white" variant="solid" />
              </div>
              <h4 className="text-lg font-heading font-bold text-foreground mb-2">
                Вижте проекти
              </h4>
              <p className="text-sm text-muted-foreground font-sans">
                Разгледайте нашата работа
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContact;