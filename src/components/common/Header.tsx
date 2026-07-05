'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { name: 'Начало', href: '/' },
    { name: 'Услуги', href: '/excavation-services', hasDropdown: true },
    { name: 'Проекти', href: '/projects-portfolio' },
    { name: 'За D&D', href: '/about' },
    { name: 'Контакт', href: '/contact' },
  ];

  const serviceItems = [
    { name: 'Изкопни работи', href: '/excavation-services' },
    { name: 'Почистване на терени', href: '/site-cleaning-services' },
    { name: 'Нивелиране на терени', href: '/land-leveling-services' },
    { name: 'Транспорт на материали', href: '/material-transport-services' },
    { name: 'Събаряне на стари постройки', href: '/demolition-services'},
  ];

  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card shadow-md' : 'bg-card'
      } ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            onClick={closeMobileMenu}
          >
            <div className="relative w-16 h-16 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
              <AppImage
                src="/assets/images/D_D-1766584629856.png"
                alt="D&D Construction excavator logo - yellow construction equipment silhouette"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-heading font-bold text-foreground leading-none">
                D&D Construction
              </span>
              <span className="text-xs font-mono text-muted-foreground mt-0.5">
                Прецизност в движение
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative group"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className="px-4 py-2 text-base font-heading font-semibold text-foreground hover:text-primary transition-colors duration-300 flex items-center space-x-1"
                    >
                      <span>{item.name}</span>
                      <Icon name="ChevronDownIcon" size={16} />
                    </button>
                    {isServicesOpen && (
                      <div
                        className="absolute top-full left-0 mt-0 w-56 bg-card shadow-md rounded-md py-2 animate-fade-in"
                      >
                        {serviceItems.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-2 text-sm font-sans text-foreground hover:bg-muted hover:text-primary transition-colors duration-200"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-base font-heading font-semibold text-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:+359 885 078 098"
              className="flex items-center space-x-2 px-4 py-2 bg-destructive text-destructive-foreground rounded-md font-cta font-bold text-sm hover:bg-opacity-90 transition-all duration-300 hover:shadow-md"
            >
              <Icon name="PhoneIcon" size={18} />
              <span>Обадете се сега</span>
            </a>
            <Link
              href="/quick-quote"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-cta font-bold text-sm hover:bg-opacity-90 transition-all duration-300 hover:shadow-md animate-pulse-scale"
            >
              Безплатна оферта
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <Icon name="XMarkIcon" size={28} />
            ) : (
              <Icon name="Bars3Icon" size={28} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-card z-40 lg:hidden overflow-y-auto animate-slide-in-right">
          <nav className="container mx-auto px-4 py-6 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-lg font-heading font-semibold text-foreground hover:bg-muted rounded-md transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <Icon
                        name="ChevronDownIcon"
                        size={20}
                        className={`transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isServicesOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-base font-sans text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-lg font-heading font-semibold text-foreground hover:bg-muted rounded-md transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-6 space-y-3 border-t border-border mt-6">
              <a
                href="tel:+359885078098"
                className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-destructive text-destructive-foreground rounded-md font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300"
                onClick={closeMobileMenu}
              >
                <Icon name="PhoneIcon" size={20} />
                <span>Обадете се сега</span>
              </a>
              <Link
                href="/quick-quote"
                onClick={closeMobileMenu}
                className="block text-center w-full px-6 py-3 bg-primary text-primary-foreground rounded-md font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300"
              >
                Безплатна оферта
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
