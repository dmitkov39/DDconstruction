'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date()?.getFullYear());
  }, []);

  const services = [
  { name: 'Изкопни дейности', href: '/excavation-services' },
  { name: 'Почистване обекти', href: '/site-cleaning-services' },
  { name: 'Заравняване терени', href: '/land-leveling-services' },
  { name: 'Транспорт материали', href: '/material-transport-services' }];


  const quickLinks = [
  { name: 'Начало', href: '/homepage' },
  { name: 'За нас', href: '/about' },
  { name: 'Проекти', href: '/projects-portfolio' },
  { name: 'Контакти', href: '/contact' },
  { name: 'Бърза оферта', href: '/quick-quote' }];


  if (!isHydrated) {
    return (
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="h-32 bg-muted/20 rounded"></div>
              <div className="h-32 bg-muted/20 rounded"></div>
              <div className="h-32 bg-muted/20 rounded"></div>
              <div className="h-32 bg-muted/20 rounded"></div>
            </div>
          </div>
        </div>
      </footer>);

  }

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/homepage" className="flex items-center space-x-3 mb-4 group">
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:rotate-6">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M8 32L16 24L24 28L32 20L40 24V40H8V32Z" fill="#F4D03F" />
                  <rect x="12" y="36" width="4" height="4" fill="#FFFFFF" />
                  <rect x="20" y="34" width="4" height="6" fill="#FFFFFF" />
                  <rect x="28" y="32" width="4" height="8" fill="#FFFFFF" />
                </svg>
              </div>
              <span className="text-xl font-heading font-bold">D&D Construction</span>
            </Link>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Професионални строителни услуги с над 5 години опит в бранша. Модерна техника, опитен екип и гарантирано качество.
            </p>
            















          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              {services?.map((service, index) =>
              <li key={index}>
                  <Link
                  href={service?.href}
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200">

                    {service?.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Бързи връзки</h3>
            <ul className="space-y-2">
              {quickLinks?.map((link, index) =>
              <li key={index}>
                  <Link
                  href={link?.href}
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200">

                    {link?.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Контакти</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Icon name="MapPinIcon" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-secondary-foreground/80">
                  1138 София, България
                </span>
              </li>
              <li className="flex items-start space-x-2">
  <Icon name="PhoneIcon" size={18} className="text-primary mt-1" />
  <div className="flex flex-col text-sm text-secondary-foreground">
    <a href="tel:+359878827128">+359 878 827 128</a>
    <a href="tel:+359885078098">+359 885 078 098</a>
  </div>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="EnvelopeIcon" size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:ddconstruction988@gmail.com"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200">

                  ddconstruction988@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2 mt-4">
                <Icon name="ClockIcon" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-secondary-foreground/90 mb-1">Работно време</span>
                  <span className="text-sm text-secondary-foreground/80">Пон - Пет: 08:00 - 20:00</span>
                  <span className="text-sm text-secondary-foreground/80">Събота: 09:00 - 19:00</span>
                  <span className="text-sm text-secondary-foreground/80">Неделя: 09:00 - 19:00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-secondary-foreground/60 text-center md:text-left">
              © {currentYear} D&D Construction. Всички права запазени.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-200">

                Поверителност
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-200">

                Условия
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;