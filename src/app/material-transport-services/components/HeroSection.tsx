import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onContactClick: () => void;
  onQuoteClick: () => void;
}

const HeroSection = ({ onContactClick, onQuoteClick }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
            <Icon name="TruckIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Професионален транспорт на материали
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            Транспорт на материали с{' '}
            <span className="text-primary">гарантирана точност</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Специализиран транспорт на строителни материали, земни маси и оборудване с модерен автопарк и професионални водачи. Навременна доставка за вашия строителен обект.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="tel:+359878827128"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-destructive text-destructive-foreground rounded-lg font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <Icon name="PhoneIcon" size={20} />
              <span>Обадете се сега</span>
            </a>
            <button
              onClick={onQuoteClick}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Безплатна оферта
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
            { icon: 'ClockIcon', label: '24/7 Наличност', value: 'Денонощно' },
            { icon: 'MapPinIcon', label: 'Покритие', value: 'Цяла България' },
            { icon: 'ShieldCheckIcon', label: 'Застраховка', value: 'Пълна' }].
            map((stat, index) => {}














            )}
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;