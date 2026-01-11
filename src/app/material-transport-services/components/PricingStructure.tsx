import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface PricingTier {
  id: number;
  name: string;
  description: string;
  basePrice: string;
  features: string[];
  discount?: string;
  popular?: boolean;
}

interface PricingStructureProps {
  pricingTiers: PricingTier[];
  onContactClick: () => void;
}

const PricingStructure = ({ pricingTiers, onContactClick }: PricingStructureProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="CurrencyDollarIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Ценова структура
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Прозрачни цени и отстъпки за обем
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Предлагаме конкурентни цени с атрактивни отстъпки за редовни клиенти и големи обеми
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
                tier.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="bg-primary text-primary-foreground text-center py-2 font-semibold text-sm">
                  Най-популярен
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {tier.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-heading font-bold text-foreground">
                      {tier.basePrice}
                    </span>
                    <span className="text-muted-foreground">лв./тон</span>
                  </div>
                  {tier.discount && (
                    <div className="mt-2 inline-flex items-center space-x-1 bg-success/10 px-3 py-1 rounded-full">
                      <Icon name="TagIcon" size={16} className="text-success" />
                      <span className="text-sm font-semibold text-success">
                        {tier.discount}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon
                        name="CheckCircleIcon"
                        size={20}
                        className="text-success flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onContactClick}
                  className={`w-full px-6 py-3 rounded-lg font-cta font-bold text-base transition-all duration-300 ${
                    tier.popular
                      ? 'bg-primary text-primary-foreground hover:bg-opacity-90 hover:shadow-lg'
                      : 'bg-muted text-foreground hover:bg-primary/20'
                  }`}
                >
                  Поискай оферта
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-accent/5 rounded-xl p-8 border-l-4 border-accent">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-start space-x-4">
              <Icon name="CalculatorIcon" size={32} className="text-accent flex-shrink-0" />
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Индивидуални оферти за големи проекти
                </h3>
                <p className="text-muted-foreground">
                  За проекти с обем над 100 тона предлагаме специални условия и персонализирани ценови пакети
                </p>
              </div>
            </div>
            <button
              onClick={onContactClick}
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap"
            >
              Свържи се с нас
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingStructure;