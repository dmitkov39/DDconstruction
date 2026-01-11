import React from 'react';
import Icon from '@/components/ui/AppIcon';

const ProcessTimeline = () => {
  const steps = [
    {
      number: 1,
      title: 'Оглед и анализ',
      description: 'Посещение на обекта, топографско заснемане, анализ на почвата и изготвяне на план за работа',
      duration: '1-2 дни',
      icon: 'MapIcon'
    },
    {
      number: 2,
      title: 'Подготовка',
      description: 'Почистване на растителност, премахване на камъни и отпадъци, маркиране на нива',
      duration: '1-3 дни',
      icon: 'WrenchScrewdriverIcon'
    },
    {
      number: 3,
      title: 'Грубо заравняване',
      description: 'Изравняване с булдозер, формиране на основни наклони, премахване на излишна земя',
      duration: '3-7 дни',
      icon: 'TruckIcon'
    },
    {
      number: 4,
      title: 'Дренажна система',
      description: 'Изкопаване на канали, полагане на тръби, изграждане на дренажна мрежа',
      duration: '2-4 дни',
      icon: 'BeakerIcon'
    },
    {
      number: 5,
      title: 'Фино нивелиране',
      description: 'Прецизно изравняване с грейдер, постигане на окончателни нива и наклони',
      duration: '2-5 дни',
      icon: 'AdjustmentsHorizontalIcon'
    },
    {
      number: 6,
      title: 'Уплътняване',
      description: 'Уплътняване с валяк, тестване на плътността, финални корекции',
      duration: '2-3 дни',
      icon: 'CheckCircleIcon'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Процес на работа
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Стъпка по стъпка към перфектно изравнен терен
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div className="md:w-1/2">
                  <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-all duration-300">
                    <div className="flex items-start space-x-4 md:space-x-0">
                      <div className={`flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center ${
                        index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'
                      }`}>
                        <Icon name={step.icon as any} size={28} className="text-primary-foreground" />
                      </div>
                      
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'}`}>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-3xl font-bold text-primary">{step.number}</span>
                          <h3 className="text-xl font-heading font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        
                        <p className="text-muted-foreground mb-3 leading-relaxed">
                          {step.description}
                        </p>
                        
                        <div className="flex items-center space-x-2 text-sm">
                          <Icon name="ClockIcon" size={16} className="text-primary" />
                          <span className="text-foreground font-semibold">{step.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-foreground px-6 py-3 rounded-lg">
            <Icon name="InformationCircleIcon" size={20} className="text-primary" />
            <span className="font-semibold">Общата продължителност зависи от площта и сложността на терена</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;