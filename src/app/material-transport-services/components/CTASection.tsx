import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  onContactClick: () => void;
  onQuoteClick: () => void;
}

const CTASection = ({ onContactClick, onQuoteClick }: CTASectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/20 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
            <Icon name="RocketLaunchIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Готови да започнем?
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Нуждаете се от надежден транспорт на материали?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свържете се с нас днес за безплатна консултация и оферта. Нашият екип е на разположение 24/7 за спешни доставки.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="tel:+359878827128"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-destructive text-destructive-foreground rounded-lg font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Icon name="PhoneIcon" size={20} />
              <span>Обадете се: +359 878 827 128</span>
            </a>
            <button
              onClick={onQuoteClick}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Безплатна оферта
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'ClockIcon',
                title: 'Бърза реакция',
                description: 'Отговор в рамките на 30 минути',
              },
              {
                icon: 'ShieldCheckIcon',
                title: 'Гарантирана безопасност',
                description: 'Пълна застраховка на товара',
              },
              {
                icon: 'TruckIcon',
                title: 'Навременна доставка',
                description: '99% доставки в срок',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Icon
                  name={feature.icon as any}
                  size={32}
                  className="text-primary mx-auto mb-3"
                />
                <h3 className="font-heading font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;