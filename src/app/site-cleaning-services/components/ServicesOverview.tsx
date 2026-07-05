import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const ServicesOverview = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: 'BuildingOffice2Icon',
      title: 'Почистване след строителство',
      description: 'Комплексно почистване на новопостроени или ремонтирани обекти',
      features: [
        'Премахване на строителни отпадъци',
        'Пълна организация на процеса от наша страна'
      ]
    },
    {
      id: 2,
      icon: 'HomeModernIcon',
      title: 'Почистване на терени',
      description: 'Изчистване на терени от растителност, отпадъци и строителни материали',
      features: [
        'Премахване на храсти и дървета',
        'Изкореняване на корени',
        'Събиране на камъни и отпадъци',
        'Подготовка за строителство'
      ]
    },
    {
      id: 3,
      icon: 'WrenchScrewdriverIcon',
      title: 'Демонтаж и почистване',
      description: 'Демонтаж на стари конструкции и последващо почистване',
      features: [
        'Демонтаж на стари сгради',
        'Премахване на бетонни елементи',
        'Изчистване на площадката',
        'Подготовка за ново строителство'
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Нашите услуги за почистване
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Предлагаме пълен спектър от услуги за почистване на строителни обекти и терени с професионална техника и опитен екип
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon
                        name="CheckCircleIcon"
                        size={20}
                        className="text-success flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted px-8 py-4 flex items-center justify-between">
                <span className="text-sm font-heading font-semibold text-foreground">
                  Поискайте оферта
                </span>
                <Icon name="ArrowRightIcon" size={20} className="text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
