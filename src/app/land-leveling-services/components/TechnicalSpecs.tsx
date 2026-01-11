import React from 'react';
import Icon from '@/components/ui/AppIcon';

const TechnicalSpecs = () => {
  const specifications = [
    {
      category: 'Прецизност на нивелиране',
      specs: [
        { label: 'Толеранс', value: '±2 см', icon: 'AdjustmentsHorizontalIcon' },
        { label: 'Площ на ден', value: 'До 2000 м²', icon: 'Square3Stack3DIcon' },
        { label: 'Максимален наклон', value: '1:50 - 1:100', icon: 'ChartBarIcon' }
      ]
    },
    {
      category: 'Дренажни системи',
      specs: [
        { label: 'Дълбочина', value: '0.5 - 2 м', icon: 'ArrowDownIcon' },
        { label: 'Капацитет', value: '50-200 л/мин', icon: 'BeakerIcon' },
        { label: 'Материали', value: 'PVC, Бетон', icon: 'CubeIcon' }
      ]
    },
    {
      category: 'Уплътняване на почва',
      specs: [
        { label: 'Плътност', value: '95-98%', icon: 'ScaleIcon' },
        { label: 'Дълбочина', value: 'До 1.5 м', icon: 'ArrowsPointingInIcon' },
        { label: 'Тестване', value: 'На всеки 500 м²', icon: 'CheckCircleIcon' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Технически спецификации
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Детайлни параметри и стандарти за качество при заравняване на терени
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specifications.map((category, index) => (
            <div key={index} className="bg-card rounded-lg shadow-sm p-6 border border-border">
              <h3 className="text-xl font-heading font-bold text-foreground mb-6 pb-4 border-b border-border">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.specs.map((spec, specIndex) => (
                  <div key={specIndex} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={spec.icon as any} size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-muted-foreground mb-1">
                        {spec.label}
                      </p>
                      <p className="text-lg font-bold text-foreground">
                        {spec.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-primary/10 border border-primary/20 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <Icon name="InformationCircleIcon" size={24} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-heading font-bold text-foreground mb-2">
                Важна информация
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Всички спецификации са съобразени с българските строителни норми и европейските стандарти. Извършваме задължителни тестове на качеството на всеки етап от работата.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;