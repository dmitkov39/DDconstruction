import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Equipment {
  id: number;
  name: string;
  category: string;
  specifications: string[];
  image: string;
  alt: string;
}

interface EquipmentShowcaseProps {
  equipment: Equipment[];
}

const EquipmentShowcase = ({ equipment }: EquipmentShowcaseProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="WrenchScrewdriverIcon" size={32} className="text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Нашата Техника
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Модерно оборудване за всеки тип строителен проект
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <AppImage
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-cta font-bold">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  {item.name}
                </h3>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-heading font-bold text-muted-foreground mb-2">
                    Технически характеристики:
                  </h4>
                  <ul className="space-y-2">
                    {item.specifications.map((spec, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon
                          name="CheckCircleIcon"
                          size={16}
                          className="text-success mt-1 flex-shrink-0"
                        />
                        <span className="text-sm text-muted-foreground font-sans">
                          {spec}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentShowcase;