'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState('2024');

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date()?.getFullYear()?.toString());
  }, []);

  const services = [
  { name: 'Изкопни дейности', href: '/excavation-services' },
  { name: 'Почистване на обекти', href: '/site-cleaning-services' },
  { name: 'Заравняване на терени', href: '/land-leveling-services' },
  { name: 'Транспорт на материали', href: '/material-transport-services' }];


  const company = [
  { name: 'За нас', href: '/about' },
  { name: 'Проекти', href: '/projects-portfolio' },
  { name: 'Контакти', href: '/contact' },
  { name: 'Бърза оферта', href: '/quick-quote' }];


  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/homepage" className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full">

                  <path
                    d="M8 32L16 24L24 28L32 20L40 24V40H8V32Z"
                    fill="#FDD835" />

                  <rect x="12" y="36" width="4" height="4" fill="#1976D2" />
                  <rect x="20" y="34" width="4" height="6" fill="#1976D2" />
                  <rect x="28" y="32" width="4" height="8" fill="#1976D2" />
                  <path
                    d="M4 28L8 24L12 20L16 16L20 12"
                    stroke="#1565C0"
                    strokeWidth="2"
                    strokeLinecap="round" />

                  <circle cx="38" cy="10" r="3" fill="#FDD835" />
                  <path
                    d="M36 8L40 12"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round" />

                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold leading-none">
                  D&D Construction
                </span>
                <span className="text-xs font-mono text-white/60 mt-0.5">
                  Precision in Motion
                </span>
              </div>
            </Link>
            <p className="text-white/80 font-sans text-sm leading-relaxed mb-6">
              Професионални строителни услуги с над 5 години опит. Модерна техника, опитен екип и гарантирано качество.
            </p>
            




























          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Услуги</h3>
            <ul className="space-y-3">
              {services?.map((service) =>
              <li key={service?.name}>
                  <Link
                  href={service?.href}
                  className="text-white/80 hover:text-primary font-sans text-sm transition-colors duration-300 flex items-center space-x-2 group">

                    <Icon name="ChevronRightIcon" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{service?.name}</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Компания</h3>
            <ul className="space-y-3">
              {company?.map((item) =>
              <li key={item?.name}>
                  <Link
                  href={item?.href}
                  className="text-white/80 hover:text-primary font-sans text-sm transition-colors duration-300 flex items-center space-x-2 group">

                    <Icon name="ChevronRightIcon" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{item?.name}</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Контакти</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Icon name="MapPinIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/80 font-sans text-sm">
                  1138 София, България
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="PhoneIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:+359878827128" className="text-white/80 hover:text-primary font-sans text-sm transition-colors duration-300 block">
                    +359 878 827 128
                  </a>
                  <a href="tel:+359885078098" className="text-destructive hover:text-primary font-sans text-sm transition-colors duration-300 block">
                    +359 885 078 098 (24/7)
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="EnvelopeIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@ddconstruction.bg" className="text-white/80 hover:text-primary font-sans text-sm transition-colors duration-300">
                  ddconstruction988@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3 mt-4">
                <Icon name="ClockIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white/90 mb-1">Работно време</span>
                  <span className="text-sm text-white/80">Пон - Пет: 08:00 - 20:00</span>
                  <span className="text-sm text-white/80">Събота: 09:00 - 19:00</span>
                  <span className="text-sm text-white/80">Неделя: 09:00 - 19:00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 border-white">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 font-sans text-sm text-center md:text-left">
              &copy; {currentYear} D&D Construction. Всички права запазени.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy-policy" className="text-white/60 hover:text-primary font-sans text-sm transition-colors duration-300">
                Поверителност
              </Link>
              <Link href="/terms-and-conditions" className="text-white/60 hover:text-primary font-sans text-sm transition-colors duration-300">
                Условия
              </Link>
              


            </div>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;