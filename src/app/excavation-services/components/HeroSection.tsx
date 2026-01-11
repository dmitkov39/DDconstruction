import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  onContactClick: () => void;
  onQuoteClick: () => void;
}

const HeroSection = ({ onContactClick, onQuoteClick }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted to-background py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Icon name="CheckBadgeIcon" size={20} className="text-primary" variant="solid" />
              <span className="text-sm font-heading font-semibold text-foreground">Сертифицирани специалисти</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              Професионални <span className="text-primary">изкопни дейности</span> с прецизност
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Разполагаме с модерна техника и опитен екип за всякакви изкопни работи - от малки жилищни проекти до големи търговски обекти. Гарантираме качество, безопасност и спазване на срокове.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onContactClick}
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-destructive text-destructive-foreground rounded-lg font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg">

                <Icon name="PhoneIcon" size={20} variant="solid" />
                <span>Обадете се сега</span>
              </button>

              <button
                onClick={onQuoteClick}
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg">

                <Icon name="CalculatorIcon" size={20} />
                <span>Безплатна оферта</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground mt-1">Години опит</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground mt-1">Проекти</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">Поддръжка</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <AppImage
                src="https://images.unsplash.com/photo-1611795495701-8d028c641323"
                alt="Yellow excavator digging foundation on construction site with operator in cabin"
                className="w-full h-[500px] object-cover" />

              
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Icon name="ShieldCheckIcon" size={24} className="text-success" variant="solid" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Гаранция</div>
                  <div className="text-lg font-heading font-bold text-foreground">100% качество</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;