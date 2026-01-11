'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface QuoteData {
  service: string;
  area: string;
  duration: string;
  equipment: string;
}

const QuickQuoteCalculator = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [quoteData, setQuoteData] = useState<QuoteData>({
    service: '',
    area: '',
    duration: '',
    equipment: ''
  });
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [showEstimate, setShowEstimate] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const services = [
    { value: 'excavation', label: 'Изкопни дейности', basePrice: 150 },
    { value: 'cleaning', label: 'Почистване на обекти', basePrice: 100 },
    { value: 'leveling', label: 'Заравняване на терени', basePrice: 120 },
    { value: 'transport', label: 'Транспорт на материали', basePrice: 80 }
  ];

  const areas = [
    { value: 'small', label: 'До 100 кв.м', multiplier: 1 },
    { value: 'medium', label: '100-500 кв.м', multiplier: 2.5 },
    { value: 'large', label: '500-1000 кв.м', multiplier: 5 },
    { value: 'xlarge', label: 'Над 1000 кв.м', multiplier: 8 }
  ];

  const durations = [
    { value: '1', label: '1 ден', multiplier: 1 },
    { value: '3', label: '2-3 дни', multiplier: 2 },
    { value: '7', label: '1 седмица', multiplier: 4 },
    { value: '14', label: '2+ седмици', multiplier: 7 }
  ];

  const equipment = [
    { value: 'basic', label: 'Основна техника', multiplier: 1 },
    { value: 'advanced', label: 'Специализирана техника', multiplier: 1.5 },
    { value: 'heavy', label: 'Тежка техника', multiplier: 2 }
  ];

  const calculateEstimate = () => {
    if (!quoteData.service || !quoteData.area || !quoteData.duration || !quoteData.equipment) {
      return;
    }

    const selectedService = services.find(s => s.value === quoteData.service);
    const selectedArea = areas.find(a => a.value === quoteData.area);
    const selectedDuration = durations.find(d => d.value === quoteData.duration);
    const selectedEquipment = equipment.find(e => e.value === quoteData.equipment);

    if (selectedService && selectedArea && selectedDuration && selectedEquipment) {
      const basePrice = selectedService.basePrice;
      const total = basePrice * selectedArea.multiplier * selectedDuration.multiplier * selectedEquipment.multiplier;
      setEstimatedPrice(Math.round(total));
      setShowEstimate(true);
    }
  };

  const handleChange = (field: keyof QuoteData, value: string) => {
    setQuoteData(prev => ({ ...prev, [field]: value }));
    setShowEstimate(false);
  };

  if (!isHydrated) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg shadow-md p-8 border border-border">
              <div className="animate-pulse space-y-6">
                <div className="h-8 bg-muted rounded w-2/3"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="h-12 bg-muted rounded"></div>
                  <div className="h-12 bg-muted rounded"></div>
                  <div className="h-12 bg-muted rounded"></div>
                  <div className="h-12 bg-muted rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Бърз калкулатор за оферта
            </h2>
            <p className="text-lg text-muted-foreground">
              Получете предварителна оценка за вашия проект за секунди
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-md p-8 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                  Вид услуга
                </label>
                <select
                  value={quoteData.service}
                  onChange={(e) => handleChange('service', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors duration-200 bg-background"
                >
                  <option value="">Изберете услуга</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                  Площ на обекта
                </label>
                <select
                  value={quoteData.area}
                  onChange={(e) => handleChange('area', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors duration-200 bg-background"
                >
                  <option value="">Изберете площ</option>
                  {areas.map((area) => (
                    <option key={area.value} value={area.value}>
                      {area.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                  Продължителност
                </label>
                <select
                  value={quoteData.duration}
                  onChange={(e) => handleChange('duration', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors duration-200 bg-background"
                >
                  <option value="">Изберете период</option>
                  {durations.map((duration) => (
                    <option key={duration.value} value={duration.value}>
                      {duration.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                  Необходима техника
                </label>
                <select
                  value={quoteData.equipment}
                  onChange={(e) => handleChange('equipment', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors duration-200 bg-background"
                >
                  <option value="">Изберете техника</option>
                  {equipment.map((eq) => (
                    <option key={eq.value} value={eq.value}>
                      {eq.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={calculateEstimate}
              disabled={!quoteData.service || !quoteData.area || !quoteData.duration || !quoteData.equipment}
              className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <Icon name="CalculatorIcon" size={20} />
              <span>Изчисли оценка</span>
            </button>

            {showEstimate && estimatedPrice !== null && (
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/5 border-2 border-primary rounded-lg">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Предварителна оценка
                  </p>
                  <p className="text-5xl font-heading font-bold text-foreground mb-2">
                    {estimatedPrice.toLocaleString('bg-BG')} лв. / €{Math.round(estimatedPrice / 1.96).toLocaleString('bg-BG')}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    *Цените са ориентировъчни и могат да варират в зависимост от специфичните условия на обекта.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="tel:+359878827128"
                      className="flex items-center space-x-2 px-6 py-3 bg-destructive text-destructive-foreground rounded-lg font-cta font-bold hover:bg-opacity-90 transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                      <Icon name="PhoneIcon" size={20} />
                      <span>Обадете се</span>
                    </a>
                    <a
                      href="#contact-form"
                      className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-bold hover:bg-opacity-90 transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                      <Icon name="DocumentTextIcon" size={20} />
                      <span>Поискайте оферта</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
              <Icon name="InformationCircleIcon" size={24} className="text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Това е автоматична оценка базирана на средни цени. Крайната цена зависи от специфичните условия на обекта, достъпност, сложност и други фактори. За точна оферта моля свържете се с нас.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickQuoteCalculator;