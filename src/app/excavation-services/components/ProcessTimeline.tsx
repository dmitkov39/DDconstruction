import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineStep {
  id: number;
  icon: string;
  title: string;
  description: string;
  duration: string;
  details: string[];
}

const timelineSteps: TimelineStep[] = [
  {
    id: 1,
    icon: 'ClipboardDocumentCheckIcon',
    title: 'Оглед и оценка',
    description: 'Безплатен оглед на терена и изготвяне на детайлна оферта',
    duration: '1-2 дни',
    details: [
      'Анализ на терена и почвата',
      'Оценка на достъпността',
      'Изготвяне на план за работа'
    ]
  },
  {
    id: 2,
    icon: 'DocumentTextIcon',
    title: 'Планиране и разрешения',
    description: 'Подготовка на необходимата документация и координация',
    duration: '1-5 дни',
    details: [
      'Получаване на разрешения',
      'Координация с общината',
      'План за безопасност',
      'График на работа'
    ]
  },
  {
    id: 3,
    icon: 'MapIcon',
    title: 'Маркиране и подготовка',
    description: 'Прецизно маркиране на зоната за изкоп и подготовка на терена',
    duration: '1 ден',
    details: [
      'Геодезическо заснемане',
      'Маркиране на границите',
      'Подготовка на достъпа',
      'Организация на площадката'
    ]
  },
  {
    id: 4,
    icon: 'TruckIcon',
    title: 'Изкопни работи',
    description: 'Професионално извършване на изкопните дейности',
    duration: 'Според проекта',
    details: [
      'Постепенно изкопаване',
      'Контрол на дълбочината',
      'Стабилизация на стените',
      'Извозване на материала'
    ]
  },
  {
    id: 5,
    icon: 'WrenchScrewdriverIcon',
    title: 'Финализация',
    description: 'Завършващи работи и подготовка за следващия етап',
    duration: '1-2 дни',
    details: [
      'Изравняване на дъното',
      'Финален контрол'
    ]
  },
  {
    id: 6,
    icon: 'CheckBadgeIcon',
    title: 'Предаване',
    description: 'Официално предаване на обекта с пълна документация',
    duration: '1 ден',
    details: [
      'Финална проверка',
      'Геодезическо заснемане',
      'Предаване на документи',
    ]
  }
];

const ProcessTimeline = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="ClockIcon" size={20} className="text-primary" />
            <span className="text-sm font-heading font-semibold text-foreground">Нашият процес</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Как <span className="text-primary">работим</span> стъпка по стъпка
          </h2>

          <p className="text-lg text-muted-foreground">
            Прозрачен и структуриран процес, който гарантира качество и спазване на срокове
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:order-2'}`}>
                  <div className="bg-card p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
                    <div className={`flex items-center space-x-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}>
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name={step.icon as any} size={32} className="text-primary" />
                      </div>
                      <div className={`${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-1">
                          {step.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-primary font-heading font-semibold">
                          <Icon name="ClockIcon" size={16} />
                          <span>{step.duration}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {step.description}
                    </p>

                    <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:flex lg:flex-col lg:items-end' : ''}`}>
                      {step.details.map((detail, idx) => (
                        <li key={idx} className={`flex items-start space-x-2 ${index % 2 === 0 ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}>
                          <Icon name="CheckCircleIcon" size={18} className="text-success flex-shrink-0 mt-0.5" variant="solid" />
                          <span className="text-sm text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`hidden lg:flex items-center justify-center ${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                      <span className="text-2xl font-heading font-bold text-primary-foreground">
                        {step.id}
                      </span>
                    </div>
                    {index < timelineSteps.length - 1 && (
                      <div className="absolute top-full left-1/2 w-0.5 h-12 bg-border transform -translate-x-1/2"></div>
                    )}
                  </div>
                </div>

                <div className="lg:hidden flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-lg font-heading font-bold text-primary-foreground">
                      {step.id}
                    </span>
                  </div>
                  {index < timelineSteps.length - 1 && (
                    <div className="flex-1 h-0.5 bg-border"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;