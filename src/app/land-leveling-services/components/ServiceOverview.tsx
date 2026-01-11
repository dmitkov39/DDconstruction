import React from 'react';
import Icon from '@/components/ui/AppIcon';

const ServiceOverview = () => {
  const services = [
    {
      icon: 'ChartBarIcon',
      title: 'Топографски анализ',
      description: 'Прецизно измерване и анализ на терена преди започване на работа. Използваме GPS технология за точни данни.'
    },
    {
      icon: 'BeakerIcon',
      title: 'Тестване на почвата',
      description: 'Проверка на уплътняването и качеството на почвата. Гарантираме стабилност и дълготрайност.'
    },
    {
      icon: 'ArrowsPointingOutIcon',
      title: 'Прецизно нивелиране',
      description: 'Изравняване с толеранс до ±2см. Перфектна основа за всяко строителство.'
    },
    {
      icon: 'CloudIcon',
      title: 'Дренажни системи',
      description: 'Проектиране и изграждане на ефективни дренажни решения за оптимално отводняване.'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Нашите услуги за заравняване
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексни решения за подготовка на терени с фокус върху качество и прецизност
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-border hover:border-primary group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={service.icon as any} size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;