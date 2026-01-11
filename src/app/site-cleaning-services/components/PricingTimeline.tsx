import React from 'react';
import Icon from '@/components/ui/AppIcon';

const PricingTimeline = () => {
  const timelineSteps = [
    {
      id: 1,
      icon: 'PhoneIcon',
      title: 'Обаждане',
      description: 'Свържете се с нас за оглед',
      time: 'Ден 1'
    },
    {
      id: 2,
      icon: 'ClipboardDocumentCheckIcon',
      title: 'Оглед и оферта',
      description: 'Безплатен оглед и детайлна оферта',
      time: 'Ден 1-2'
    },
    {
      id: 3,
      icon: 'TruckIcon',
      title: 'Започване',
      description: 'Мобилизация на техника и екип',
      time: 'Ден 3'
    },
    {
      id: 4,
      icon: 'CheckBadgeIcon',
      title: 'Завършване',
      description: 'Финално почистване и предаване',
      time: 'Според обема'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-12 text-center">
            Процес на работа
          </h3>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {timelineSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  <div className="bg-card rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                      <Icon name={step.icon as any} size={28} className="text-primary-foreground" />
                    </div>
                    
                    <div className="text-center">
                      <div className="text-xs font-heading font-bold text-primary mb-2">
                        {step.time}
                      </div>
                      <h4 className="text-lg font-heading font-bold text-foreground mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {index < timelineSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 right-0 transform translate-x-1/2">
                      <Icon name="ChevronRightIcon" size={24} className="text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTimeline;