'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleCallClick = () => {
    if (isHydrated && typeof window !== 'undefined') {
      window.location.href = 'tel:+359878827128';
    }
  };

  return (
    <section className={`relative bg-gradient-to-br from-background via-muted to-background overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10 border-black">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 -mt-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Icon name="CheckBadgeIcon" size={20} className="text-primary" variant="solid" />
              <span className="text-sm font-heading font-semibold text-foreground">
                Над 5 години опит в строителството
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground leading-tight">
              Изкопни услуги и ВиК в София{' '}
              <span className="text-primary">– терен готов за следващия етап</span> –{' '}
              <span className="text-conversion">в договорен срок и без забавяния</span>
            </h1>

            <p className="text-lg lg:text-xl text-black-300 font-sans leading-relaxed">
              Цялостни изкопни работи, ВиК услуги и подготовка на терени –
              изграждане на канализация, септични ями и водопроводни връзки,
              изпълнени в договорен срок и готови за следващия етап от строителството.
              Поемаме цялата отговорност – от изкопа до готов терен. При забавяне по наша вина, всеки допълнителен ден, не се заплаща.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleCallClick}
                className="flex items-center justify-center space-x-3 px-8 py-4 bg-destructive text-destructive-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">

                <Icon name="PhoneIcon" size={24} variant="solid" />
                <span>Обадете се сега</span>
              </button>

              <Link
                href="/quick-quote"
                className="flex items-center justify-center space-x-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">

                <Icon name="DocumentTextIcon" size={24} variant="solid" />
                <span>Безплатна оферта</span>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground font-sans mt-1">Завършени проекти без забавяне</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground font-sans mt-1">Години опит и работата по реални строителни графици</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-success">100%</div>
                <div className="text-sm text-muted-foreground font-sans mt-1">Удовлетворени и повтарящи се клиенти</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <AppImage
                src="/assets/images/image-1767986966482.png"
                alt="Строителни работници в изкоп с багер по време на изкопни дейности в София"
                className="w-full h-[500px] object-cover" />

              <div className="absolute inset-0 from-foreground/60 via-transparent to-transparent bg-[rgba(247,151,151,0)]"></div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;
