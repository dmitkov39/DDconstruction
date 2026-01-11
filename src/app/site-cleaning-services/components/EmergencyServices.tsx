import React from 'react';
import Icon from '@/components/ui/AppIcon';

const EmergencyServices = () => {
  const emergencyFeatures = [
    {
      id: 1,
      icon: 'BoltIcon',
      title: 'Бърза реакция',
      description: 'Мобилизация на екип в рамките на 2-4 часа'
    },
    {
      id: 2,
      icon: 'ClockIcon',
      title: '24/7 Наличност',
      description: 'Работим денонощно, включително празници'
    },
    {
      id: 3,
      icon: 'TruckIcon',
      title: 'Готова техника',
      description: 'Собствена техника винаги на разположение'
    },
    {
      id: 4,
      icon: 'ShieldCheckIcon',
      title: 'Застраховка',
      description: 'Пълна застрахователна покритие'
    }
  ];

  const emergencyCases = [
    'Аварийно почистване след инциденти',
    'Спешно изчистване преди инспекции',
    'Бързо почистване за предаване на обект',
    'Извънредно почистване при природни бедствия'
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-destructive/10 to-warning/10 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-12">
                <div className="inline-flex items-center space-x-2 bg-destructive/20 px-4 py-2 rounded-full mb-6">
                  <Icon name="ExclamationTriangleIcon" size={20} className="text-destructive" />
                  <span className="text-sm font-heading font-semibold text-foreground">
                    Спешни услуги
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Аварийно почистване
                  <span className="block text-destructive mt-2">24/7 готовност</span>
                </h2>

                <p className="text-lg text-muted-foreground mb-8">
                  При спешни ситуации сме на разположение денонощно. Нашият екип и техника могат да бъдат мобилизирани в рамките на часове за аварийно почистване.
                </p>

                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-heading font-bold text-foreground">
                    Кога се нуждаете от спешно почистване:
                  </h3>
                  <ul className="space-y-3">
                    {emergencyCases.map((case_, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircleIcon" size={20} className="text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{case_}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+359123456789"
                    className="flex items-center justify-center space-x-2 px-8 py-4 bg-destructive text-destructive-foreground rounded-lg font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg animate-pulse"
                  >
                    <Icon name="PhoneIcon" size={22} />
                    <span>Спешен контакт</span>
                  </a>
                  <a
                    href="tel:+359885078098"
                    className="flex items-center justify-center space-x-2 px-8 py-4 bg-card text-foreground border-2 border-destructive rounded-lg font-cta font-bold text-base hover:bg-muted transition-all duration-300"
                  >
                    <Icon name="DevicePhoneMobileIcon" size={22} />
                    <span>Мобилен: +359 885 078 098</span>
                  </a>
                </div>
              </div>

              <div className="bg-card p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
                  Защо да изберете нас за спешни случаи
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {emergencyFeatures.map((feature) => (
                    <div key={feature.id} className="text-center">
                      <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={feature.icon as any} size={32} className="text-destructive" />
                      </div>
                      <h4 className="text-base font-heading font-bold text-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-warning/10 rounded-lg p-6 border-l-4 border-warning">
                  <div className="flex items-start space-x-3">
                    <Icon name="InformationCircleIcon" size={24} className="text-warning flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-heading font-bold text-foreground mb-2">
                        Важно за спешните услуги
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Спешните услуги се таксуват с надбавка от 30-50% спрямо стандартните цени поради необходимостта от незабавна мобилизация на ресурси и работа извън работно време.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyServices;