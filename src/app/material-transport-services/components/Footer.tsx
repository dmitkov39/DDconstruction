'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date()?.getFullYear()?.toString());
  }, []);

  const footerLinks = {
    services: [
      { name: 'Изкопни дейности', href: '/excavation-services' },
      { name: 'Почистване обекти', href: '/site-cleaning-services' },
      { name: 'Заравняване терени', href: '/land-leveling-services' },
      { name: 'Транспорт материали', href: '/material-transport-services' },
    ],
    company: [
      { name: 'За нас', href: '/about' },
      { name: 'Проекти', href: '/projects-portfolio' },
      { name: 'Контакти', href: '/contact' },
      { name: 'Бърза оферта', href: '/quick-quote' },
    ],
  };

  if (!isHydrated) {
    return (
      <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted/20 rounded w-1/4"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4]?.map((i) => (
                <div key={i} className="space-y-3">
                  <div className="h-4 bg-muted/20 rounded w-3/4"></div>
                  <div className="h-4 bg-muted/20 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/homepage" className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M8 32L16 24L24 28L32 20L40 24V40H8V32Z"
                    fill="#F4D03F"
                  />
                  <rect x="12" y="36" width="4" height="4" fill="#FFFFFF" />
                  <rect x="20" y="34" width="4" height="6" fill="#FFFFFF" />
                  <rect x="28" y="32" width="4" height="8" fill="#FFFFFF" />
                </svg>
              </div>
              <span className="text-xl font-heading font-bold">
                D&D Construction
              </span>
            </Link>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Професионални транспортни услуги за строителната индустрия с модерен автопарк и опитен екип.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Icon name="GlobeAltIcon" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Icon name="GlobeAltIcon" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              {footerLinks?.services?.map((link) => (
                <li key={link?.name}>
                  <Link
                    href={link?.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {link?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Компания</h3>
            <ul className="space-y-2">
              {footerLinks?.company?.map((link) => (
                <li key={link?.name}>
                  <Link
                    href={link?.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {link?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Контакти</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Icon
                  name="PhoneIcon"
                  size={18}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <a
                  href="tel:+359878827128"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  +359 878 827 128
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Icon
                  name="EnvelopeIcon"
                  size={18}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <a
                  href="mailto:info@ddconstruction.bg"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  info@ddconstruction.bg
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Icon
                  name="MapPinIcon"
                  size={18}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <span className="text-sm text-secondary-foreground/80">
                  София, България
                </span>
              </li>
              <li className="flex items-start space-x-3 mt-4">
                <Icon
                  name="ClockIcon"
                  size={18}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
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
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/60">
              © {currentYear} D&D Construction. Всички права запазени.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="#"
                className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-300"
              >
                Политика за поверителност
              </Link>
              <Link
                href="#"
                className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-300"
              >
                Условия за ползване
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;