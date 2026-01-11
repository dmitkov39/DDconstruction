'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  onContactClick: () => void;
  onQuoteClick: () => void;
}

const CTASection = ({ onContactClick, onQuoteClick }: CTASectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-foreground rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-foreground rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Готови ли сте да започнете вашия проект?
          </h2>

          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Свържете се с нас днес за безплатна консултация и оферта. Нашият екип е готов да отговори на всички ваши въпроси и да ви помогне да реализирате проекта си.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={onContactClick}
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-foreground text-background rounded-lg font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl"
            >
              <Icon name="PhoneIcon" size={20} variant="solid" />
              <span>+359 878 827 128</span>
            </button>

            <button
              onClick={onQuoteClick}
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-card text-foreground rounded-lg font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl border-2 border-foreground"
            >
              <Icon name="CalculatorIcon" size={20} />
              <span>Безплатна оферта</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/10 backdrop-blur-sm p-6 rounded-xl border border-foreground/20">
              <Icon name="ClockIcon" size={32} className="text-foreground mx-auto mb-3" />
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                Бърз отговор
              </h3>
              <p className="text-sm text-foreground/80">
                Отговаряме в рамките на 2 часа
              </p>
            </div>

            <div className="bg-card/10 backdrop-blur-sm p-6 rounded-xl border border-foreground/20">
              <Icon name="CurrencyDollarIcon" size={32} className="text-foreground mx-auto mb-3" />
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                Безплатна оценка
              </h3>
              <p className="text-sm text-foreground/80">
                Оглед и оферта без задължения
              </p>
            </div>

            <div className="bg-card/10 backdrop-blur-sm p-6 rounded-xl border border-foreground/20">
              <Icon name="ShieldCheckIcon" size={32} className="text-foreground mx-auto mb-3" variant="solid" />
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                Гаранция
              </h3>
              <p className="text-sm text-foreground/80">
                100% гаранция за качество
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;