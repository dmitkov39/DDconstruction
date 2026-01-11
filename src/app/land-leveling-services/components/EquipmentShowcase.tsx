import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const EquipmentShowcase = () => {
  const equipment = [
  {
    name: 'Грейдер Caterpillar 140M',
    image: "https://images.unsplash.com/photo-1709934729594-d7d33dcc0614",
    alt: 'Yellow Caterpillar motor grader with large blade on construction site',
    specs: [
    'Ширина на острието: 3.7 м',
    'Мощност: 160 HP',
    'Прецизност: ±1 см'],

    applications: ['Фино нивелиране', 'Изграждане на наклони', 'Пътно строителство']
  },
  {
    name: 'Булдозер Komatsu D65',
    image: "https://images.unsplash.com/photo-1603814744509-57b74d605fc2",
    alt: 'Heavy yellow bulldozer with large blade working on terrain leveling',
    specs: [
    'Мощност: 190 HP',
    'Ширина на острието: 3.9 м',
    'Капацитет: 4.5 м³'],

    applications: ['Груbo заравняване', 'Премахване на растителност', 'Формиране на терен']
  },
  {
    name: 'Валяк Bomag BW 213',
    image: "https://images.unsplash.com/photo-1642936727018-2f48affd7cb3",
    alt: 'Orange and white road roller compacting soil on construction site',
    specs: [
    'Тегло: 13 тона',
    'Ширина: 2.13 м',
    'Уплътняване: 95-98%'],

    applications: ['Уплътняване на почва', 'Подготовка на основи', 'Пътно строителство']
  },
  {
    name: 'Багер-товарач JCB 3CX',
    image: "https://images.unsplash.com/photo-1676057699344-f09384f20e6e",
    alt: 'Yellow JCB backhoe loader with front bucket and rear excavator arm',
    specs: [
    'Дълбочина на копане: 5.7 м',
    'Капацитет кофа: 1 м³',
    'Мощност: 109 HP'],

    applications: ['Изкопи за дренаж', 'Товарене на материали', 'Фино нивелиране']
  }];


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Нашата техника
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Модерно оборудване за перфектно заравняване на всякакви терени
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipment?.map((item, index) =>
          <div
            key={index}
            className="bg-card rounded-lg shadow-sm overflow-hidden border border-border hover:shadow-md transition-all duration-300 group">

              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={item?.image}
                alt={item?.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  Налична
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  {item?.name}
                </h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                    Технически данни
                  </h4>
                  <ul className="space-y-2">
                    {item?.specs?.map((spec, specIndex) =>
                  <li key={specIndex} className="flex items-start space-x-2">
                        <Icon name="CheckIcon" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-foreground">{spec}</span>
                      </li>
                  )}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                    Приложения
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item?.applications?.map((app, appIndex) =>
                  <span
                    key={appIndex}
                    className="px-3 py-1 bg-muted text-foreground text-sm rounded-full">

                        {app}
                      </span>
                  )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-6 py-3 rounded-lg">
            <Icon name="ShieldCheckIcon" size={20} variant="solid" />
            <span className="font-semibold">Всички машини с актуални сертификати и застраховки</span>
          </div>
        </div>
      </div>
    </section>);

};

export default EquipmentShowcase;