import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const services = [
  { name: 'Изкопни дейности', href: '/excavation-services' },
  { name: 'Почистване обекти', href: '/site-cleaning-services' },
  { name: 'Заравняване терени', href: '/land-leveling-services' },
  { name: 'Транспорт материали', href: '/material-transport-services' }];


  const company = [
  { name: 'За нас', href: '/about' },
  { name: 'Проекти', href: '/projects-portfolio' },
  { name: 'Контакти', href: '/contact' },
  { name: 'Бърза оферта', href: '/quick-quote' }];


  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/homepage" className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M8 32L16 24L24 28L32 20L40 24V40H8V32Z" fill="#F4D03F" />
                  <rect x="12" y="36" width="4" height="4" fill="#566573" />
                  <rect x="20" y="34" width="4" height="6" fill="#566573" />
                  <rect x="28" y="32" width="4" height="8" fill="#566573" />
                  <path d="M4 28L8 24L12 20L16 16L20 12" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="38" cy="10" r="3" fill="#F4D03F" />
                  <path d="M36 8L40 12" stroke="#566573" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-xl font-heading font-bold">D&D Construction</span>
            </Link>
            <p className="text-sm text-background/80 mb-4">
              Професионални услуги за заравняване на терени с модерна техника и опитен екип.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              {services?.map((service) =>
              <li key={service?.name}>
                  <Link
                  href={service?.href}
                  className="text-sm text-background/80 hover:text-primary transition-colors duration-300">

                    {service?.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Компания</h3>
            <ul className="space-y-2">
              {company?.map((item) =>
              <li key={item?.name}>
                  <Link
                  href={item?.href}
                  className="text-sm text-background/80 hover:text-primary transition-colors duration-300">

                    {item?.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Контакти</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Icon name="PhoneIcon" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a
                    href="tel:+359878827128"
                    className="text-sm text-background/80 hover:text-primary transition-colors duration-300">
                    +359 878 827 128
                  </a>
                  <a
                    href="tel:+359885078098"
                    className="text-sm text-background/80 hover:text-primary transition-colors duration-300">
                    +359 885 078 098
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="EnvelopeIcon" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:ddconstruction988@gmail.com" className="text-sm text-background/80 hover:text-primary transition-colors duration-300">
                  ddconstruction988@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="MapPinIcon" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-background/80">
                  1138 София, България
                </span>
              </li>
              <li className="flex items-start space-x-2 mt-4">
                <Icon name="ClockIcon" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-background/90 mb-1">Работно време</span>
                  <span className="text-sm text-background/80">Пон - Пет: 08:00 - 20:00</span>
                  <span className="text-sm text-background/80">Събота: 09:00 - 19:00</span>
                  <span className="text-sm text-background/80">Неделя: 09:00 - 19:00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              © {currentYear} D&D Construction. Всички права запазени.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy-policy" className="text-sm text-background/60 hover:text-primary transition-colors duration-300">
                Поверителност
              </Link>
              <Link href="/terms-and-conditions" className="text-sm text-background/60 hover:text-primary transition-colors duration-300">
                Условия
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;