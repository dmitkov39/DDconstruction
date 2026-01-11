import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface WasteCategory {
  id: number;
  icon: string;
  title: string;
  description: string;
  disposal: string;
  recycling: string;
}

const WasteManagement = () => {
  const wasteCategories: WasteCategory[] = [
    {
      id: 1,
      icon: 'CubeIcon',
      title: 'Строителни отпадъци',
      description: 'Бетон, тухли, керемиди, мазилки',
      disposal: 'Депониране или рециклиране',
      recycling: '85% рециклируеми'
    },
    {
      id: 2,
      icon: 'Square3Stack3DIcon',
      title: 'Дървени материали',
      description: 'Дървени греди, палети, скеле',
      disposal: 'Рециклиране или биогориво',
      recycling: '90% рециклируеми'
    },
    {
      id: 3,
      icon: 'BoltIcon',
      title: 'Метални отпадъци',
      description: 'Арматура, профили, скрап',
      disposal: 'Предаване на скрапджии',
      recycling: '100% рециклируеми'
    },
    {
      id: 4,
      icon: 'BeakerIcon',
      title: 'Опасни отпадъци',
      description: 'Бои, разтворители, азбест',
      disposal: 'Специализирано третиране',
      recycling: 'Контролирано депониране'
    }
  ];

  const certifications = [
    {
      id: 1,
      icon: 'ShieldCheckIcon',
      title: 'ISO 14001',
      description: 'Екологичен мениджмънт'
    },
    {
      id: 2,
      icon: 'DocumentCheckIcon',
      title: 'Лиценз за отпадъци',
      description: 'РИОСВ разрешение'
    },
    {
      id: 3,
      icon: 'TruckIcon',
      title: 'Транспортна лиценз',
      description: 'За опасни товари'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Управление на отпадъци
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Екологично и законосъобразно третиране на всички видове строителни отпадъци с пълна документация
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {wasteCategories.map((category) => (
            <div
              key={category.id}
              className="bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={category.icon as any} size={28} className="text-primary" />
              </div>
              
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                {category.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {category.description}
              </p>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <Icon name="ArrowPathIcon" size={16} className="text-success flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-foreground">{category.disposal}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="CheckBadgeIcon" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-foreground">{category.recycling}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Нашите сертификати и разрешения
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={cert.icon as any} size={32} className="text-success" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-foreground mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-xl p-6">
              <h4 className="text-lg font-heading font-bold text-foreground mb-4 flex items-center space-x-2">
                <Icon name="DocumentTextIcon" size={24} className="text-primary" />
                <span>Документация и отчетност</span>
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Транспортни документи за всеки товар отпадъци</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Сертификати за депониране от лицензирани депа</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Отчети за рециклирани материали и тегло</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Пълна проследимост на отпадъците до крайната дестинация</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WasteManagement;