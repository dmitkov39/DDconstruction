import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Capability {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface ServiceCapabilitiesProps {
  capabilities: Capability[];
}

const ServiceCapabilities = ({ capabilities }: ServiceCapabilitiesProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Icon name="CogIcon" size={20} className="text-accent" />
            <span className="text-sm font-semibold text-foreground">
              Нашите възможности
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Комплексни транспортни решения
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Предлагаме пълен спектър от транспортни услуги за строителната индустрия
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-primary"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-lg flex-shrink-0">
                  <Icon
                    name={capability.icon as any}
                    size={32}
                    className="text-primary"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                {capability.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon
                      name="ArrowRightIcon"
                      size={20}
                      className="text-accent mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCapabilities;