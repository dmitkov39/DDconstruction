import React from 'react';
import Icon from '@/components/ui/AppIcon';

const SeasonalGuide = () => {
  const seasons = [
    {
      season: 'Пролет (Март - Май)',
      icon: 'SunIcon',
      rating: 'Отлично',
      ratingColor: 'text-success',
      advantages: [
        'Оптимална влажност на почвата',
        'Умерени температури за работа',
        'Добри условия за уплътняване',
        'Подходящо за всички видове терени'
      ],
      considerations: [
        'Възможни пролетни дъждове',
        'Необходимо предварително планиране'
      ]
    },
    {
      season: 'Лято (Юни - Август)',
      icon: 'FireIcon',
      rating: 'Добро',
      ratingColor: 'text-warning',
      advantages: [
        'Суха почва - лесно копане',
        'Дълъг работен ден',
        'Бързо изсъхване след дъжд',
        'Стабилни метеорологични условия'
      ],
      considerations: [
        'Високи температури',
        'Необходимост от поливане',
        'Прахообразуване',
        'Възможна твърда почва при суша'
      ]
    },
    {
      season: 'Есен (Септември - Ноември)',
      icon: 'CloudIcon',
      rating: 'Много добро',
      ratingColor: 'text-success',
      advantages: [
        'Отлични условия за работа',
        'Умерени температури',
        'Добра влажност на почвата',
      ],
      considerations: [
        'Възможни есенни дъждове',
        'Скъсяващ се ден',
        'Необходимост за бързо завършване'
      ]
    },
    {
      season: 'Зима (Декември - Февруари)',
      icon: 'CloudIcon',
      rating: 'Ограничено',
      ratingColor: 'text-destructive',
      advantages: [
        'Наличност на техника',
        'Възможност при благоприятно време'
      ],
      considerations: [
        'Замръзнала почва',
        'Снеговалежи и студ',
        'Ограничени работни дни',
        'Невъзможност за уплътняване',
        'Риск от забавяне'
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Сезонен справочник
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Кога е най-подходящо да заравните терена си в България
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {seasons.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-sm p-6 border border-border hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    {item.season}
                  </h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${item.ratingColor} bg-current/10`}>
                  {item.rating}
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide flex items-center space-x-2">
                    <Icon name="CheckCircleIcon" size={16} className="text-success" />
                    <span>Предимства</span>
                  </h4>
                  <ul className="space-y-2">
                    {item.advantages.map((advantage, advIndex) => (
                      <li key={advIndex} className="flex items-start space-x-2">
                        <Icon name="PlusIcon" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-foreground text-sm">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide flex items-center space-x-2">
                    <Icon name="ExclamationTriangleIcon" size={16} className="text-warning" />
                    <span>Съображения</span>
                  </h4>
                  <ul className="space-y-2">
                    {item.considerations.map((consideration, consIndex) => (
                      <li key={consIndex} className="flex items-start space-x-2">
                        <Icon name="MinusIcon" size={16} className="text-warning mt-1 flex-shrink-0" />
                        <span className="text-foreground text-sm">{consideration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-primary/10 border border-primary/20 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <Icon name="LightBulbIcon" size={24} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-heading font-bold text-foreground mb-2">
                Препоръка на експертите
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Най-добрите периоди за заравняване на терени в България са пролетта (април-май) и есента (септември-октомври). През тези месеци почвата има оптимална влажност, температурите са умерени и условията за уплътняване са идеални. Планирайте проекта си поне 2-3 седмици предварително.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalGuide;