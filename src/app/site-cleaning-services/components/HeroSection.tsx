import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-accent rounded-lg rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
            <Icon name="SparklesIcon" size={20} className="text-primary" />
            <span className="text-sm font-heading font-semibold text-foreground">
              Професионално почистване на обекти
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            Почистване на строителни обекти
            <span className="block text-primary mt-2">с гарантирано качество</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Комплексни услуги за почистване на строителни обекти, терени и площадки. Професионална техника, екологично управление на отпадъци и бързо изпълнение.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="tel:+359123456789"
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 bg-destructive text-destructive-foreground rounded-lg font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Icon name="PhoneIcon" size={22} />
              <span>Обадете се сега</span>
            </a>
            <button
              onClick={onContactClick}
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Icon name="DocumentTextIcon" size={22} />
              <span>Безплатна оферта</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-card p-4 rounded-lg shadow-sm">
              <Icon name="ClockIcon" size={28} className="text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm font-heading font-semibold text-foreground">Бързо изпълнение</p>
                <p className="text-xs text-muted-foreground">24-48 часа</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-card p-4 rounded-lg shadow-sm">
              <Icon name="ShieldCheckIcon" size={28} className="text-success flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm font-heading font-semibold text-foreground">Гарантирано качество</p>
                <p className="text-xs text-muted-foreground">Сертифицирани</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-card p-4 rounded-lg shadow-sm">
              <Icon name="TruckIcon" size={28} className="text-accent flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm font-heading font-semibold text-foreground">Собствена техника</p>
                <p className="text-xs text-muted-foreground">Модерно оборудване</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;