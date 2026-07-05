import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
            <Icon name="CheckBadgeIcon" size={20} className="text-primary" variant="solid" />
            <span className="text-sm font-semibold text-foreground">Сертифицирани специалисти</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            Професионално заравняване на терени
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Прецизна подготовка на терени с фокус върху дренаж и стабилност. Използваме модерна техника и доказани методи за перфектно изравнени площи.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+359885078098"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-destructive text-destructive-foreground rounded-lg font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Icon name="PhoneIcon" size={20} variant="solid" />
              <span>Обадете се сега</span>
            </a>
            
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Безплатна оферта
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-card p-4 rounded-lg shadow-sm">
              <Icon name="ClockIcon" size={24} className="text-primary" />
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Наличност</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-card p-4 rounded-lg shadow-sm">
              <Icon name="TruckIcon" size={24} className="text-primary" />
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">3+</p>
                <p className="text-sm text-muted-foreground">Машини</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-card p-4 rounded-lg shadow-sm">
              <Icon name="StarIcon" size={24} className="text-primary" variant="solid" />
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">30+</p>
                <p className="text-sm text-muted-foreground">Проекти</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
