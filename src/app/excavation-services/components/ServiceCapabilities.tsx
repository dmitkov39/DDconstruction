import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Capability {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const capabilities: Capability[] = [
  {
    id: 1,
    icon: 'CubeIcon',
    title: 'Изкопи за основи',
    description: 'Прецизни изкопи за фундаменти на жилищни и търговски сгради',
    features: ['Дълбочина до 2м', 'Точност ±3см']
  },
  {
    id: 2,
    icon: 'HomeModernIcon',
    title: 'Изкопи за басейни',
    description: 'Специализирани изкопи за плувни басейни с перфектна геометрия',
    features: ['Всякакви форми', 'Дренажна система', 'Подготовка за хидроизолация']
  },
  {
    id: 3,
    icon: 'TruckIcon',
    title: 'Траншеи и канали',
    description: 'Изкопи за комуникации, водопровод и канализация',
    features: ['Ширина от 20см', 'Дълбочина до 2м', 'Прецизни наклони']
  },
  {
    id: 4,
    icon: 'BuildingOffice2Icon',
    title: 'Водоотвеждане',
    description: 'Изкопи и създаване на равни платформи на наклонени терени',
    features: ['Подпорни стени', 'Дренажни системи', 'Стабилизация']
  },
  {
    id: 5,
    icon: 'MapIcon',
    title: 'Изкопи за паркинги',
    description: 'Подземни и надземни паркинги с оптимална планировка',
    features: ['Многоетажни', 'Рампи и достъп', 'Водоотвеждане']
  },
  {
    id: 6,
    icon: 'WrenchScrewdriverIcon',
    title: 'Демонтаж и разрушаване',
    description: 'Контролирано премахване на съществуващи конструкции',
    features: ['Бетонни основи', 'Стари фундаменти']
  }
];

const ServiceCapabilities = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="WrenchScrewdriverIcon" size={20} className="text-primary" />
            <span className="text-sm font-heading font-semibold text-foreground">Нашите възможности</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Пълен спектър от <span className="text-primary">изкопни услуги</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Разполагаме с техника и експертиза за всякакви видове изкопни работи - от малки жилищни проекти до големи индустриални обекти
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="bg-background p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={capability.icon as any} size={32} className="text-primary" />
              </div>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {capability.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {capability.description}
              </p>

              <ul className="space-y-3">
                {capability.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" variant="solid" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCapabilities;