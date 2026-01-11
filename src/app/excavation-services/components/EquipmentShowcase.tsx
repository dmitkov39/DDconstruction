import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Equipment {
  id: number;
  name: string;
  model: string;
  image: string;
  alt: string;
  specifications: {
    label: string;
    value: string;
  }[];
  capabilities: string[];
}

const equipment: Equipment[] = [
{
  id: 1,
  name: 'Мини багер',
  model: 'Caterpillar 305.5E2',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d8be20da-1766584860483.png",
  alt: 'Compact yellow mini excavator with tracks on construction site ready for digging',
  specifications: [
  { label: 'Тегло', value: '5.2 тона' },
  { label: 'Дълбочина', value: '3.5 метра' },
  { label: 'Обхват', value: '6.2 метра' }],

  capabilities: ['Тесни пространства', 'Градски условия', 'Прецизни работи']
},
{
  id: 2,
  name: 'Среден багер',
  model: 'Komatsu PC210LC',
  image: "https://images.unsplash.com/photo-1675583116144-7a93fd8efd57",
  alt: 'Medium-sized orange excavator with extended arm digging deep foundation trench',
  specifications: [
  { label: 'Тегло', value: '21 тона' },
  { label: 'Дълбочина', value: '6.5 метра' },
  { label: 'Обхват', value: '10.1 метра' }],

  capabilities: ['Универсални работи', 'Средни обекти', 'Висока производителност']
},
{
  id: 3,
  name: 'Голям багер',
  model: 'Volvo EC380EL',
  image: "https://images.unsplash.com/photo-1582612054245-b34587355af6",
  alt: 'Large yellow excavator with massive bucket working on industrial construction site',
  specifications: [
  { label: 'Тегло', value: '38 тона' },
  { label: 'Дълбочина', value: '8.2 метра' },
  { label: 'Обхват', value: '12.5 метра' }],

  capabilities: ['Големи обекти', 'Индустриални проекти', 'Максимална мощност']
}];


const EquipmentShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Icon name="TruckIcon" size={20} className="text-accent" />
            <span className="text-sm font-heading font-semibold text-foreground">Нашата техника</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Модерно <span className="text-accent">оборудване</span> за всеки проект
          </h2>

          <p className="text-lg text-muted-foreground">
            Разполагаме с най-новата техника от водещи производители, поддържана в отлично състояние и готова за работа
          </p>
        </div>

        <div className="space-y-12">
          {equipment.map((item, index) =>
          <div
            key={item.id}
            className={`grid lg:grid-cols-2 gap-8 items-center ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`
            }>

              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <AppImage
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />

                  <div className="absolute top-4 right-4 bg-card px-4 py-2 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                      <span className="text-sm font-heading font-semibold text-foreground">Налична</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-lg text-primary font-heading font-semibold">{item.model}</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {item.specifications.map((spec, idx) =>
                <div key={idx} className="bg-card p-4 rounded-lg border border-border">
                      <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                      <div className="text-lg font-heading font-bold text-foreground">{spec.value}</div>
                    </div>
                )}
                </div>

                <div>
                  <h4 className="text-lg font-heading font-semibold text-foreground mb-4">Приложение:</h4>
                  <div className="flex flex-wrap gap-3">
                    {item.capabilities.map((capability, idx) =>
                  <div
                    key={idx}
                    className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">

                        <Icon name="CheckCircleIcon" size={16} className="text-primary" variant="solid" />
                        <span className="text-sm font-sans text-foreground">{capability}</span>
                      </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default EquipmentShowcase;