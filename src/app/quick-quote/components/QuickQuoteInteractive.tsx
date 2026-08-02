'use client';

import React, { useState, useEffect } from 'react';
import ServiceSelector from './ServiceSelector';
import CalculatorForm from './CalculatorForm';
import EstimateDisplay from './EstimateDisplay';
import ContactForm from './ContactForm';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
  fields: FormField[];
  basePrice: number;
  pricePerUnit: number;
  timeline: string;
}

interface FormField {
  id: string;
  label: string;
  type: 'number' | 'select' | 'text';
  unit?: string;
  options?: { value: string; label: string }[];
  placeholder?: string;
  min?: number;
  step?: number;
}

const QuickQuoteInteractive: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [estimate, setEstimate] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const services: Service[] = [
    {
      id: 'excavation',
      name: 'Изкопни Дейности',
      icon: 'WrenchScrewdriverIcon',
      description: 'Изкопи за основи, басейни, канализация',
      basePrice: 92.5,
      pricePerUnit: 11.5,
      timeline: '1-7 работни дни',
      fields: [
        {
          id: 'area',
          label: 'Площ на изкопа',
          type: 'number',
          unit: 'кв.м',
          placeholder: '100',
          min: 1,
          step: 1,
        },
        {
          id: 'depth',
          label: 'Дълбочина на изкопа',
          type: 'number',
          unit: 'м',
          placeholder: '2',
          min: 0.1,
          step: 0.1,
        },
        {
          id: 'soilType',
          label: 'Тип почва',
          type: 'select',
          options: [
            { value: 'soft', label: 'Мека почва (1.0x)' },
            { value: 'medium', label: 'Средна почва (1.2x)' },
            { value: 'hard', label: 'Твърда почва/скала (1.4x)' },
          ],
        },
        {
          id: 'access',
          label: 'Достъп до обекта',
          type: 'select',
          options: [
            { value: 'easy', label: 'Лесен достъп (1.0x)' },
            { value: 'moderate', label: 'Среден достъп (1.1x)' },
            { value: 'difficult', label: 'Труден достъп (1.3x)' },
          ],
        },
      ],
    },
    {
      id: 'cleaning',
      name: 'Почистване Обекти',
      icon: 'SparklesIcon',
      description: 'Почистване след строителство, разрушаване',
      basePrice: 67.5,
      pricePerUnit: 6.5,
      timeline: '1-7 работни дни',
      fields: [
        {
          id: 'area',
          label: 'Площ за почистване',
          type: 'number',
          unit: 'кв.м',
          placeholder: '200',
          min: 1,
          step: 1,
        },
        {
          id: 'wasteType',
          label: 'Тип отпадъци',
          type: 'select',
          options: [
            { value: 'light', label: 'Леки отпадъци (1.0x)' },
            { value: 'mixed', label: 'Смесени отпадъци (1.3x)' },
            { value: 'heavy', label: 'Тежки отпадъци/бетон (1.5x)' },
          ],
        },
        {
          id: 'wasteVolume',
          label: 'Обем на отпадъците',
          type: 'select',
          options: [
            { value: 'small', label: 'До 10 куб.м (1.0x)' },
            { value: 'medium', label: '10-30 куб.м (1.2x)' },
            { value: 'large', label: 'Над 30 куб.м (1.4x)' },
          ],
        },
      ],
    },
    {
      id: 'leveling',
      name: 'Заравняване Терени',
      icon: 'ArrowsPointingOutIcon',
      description: 'Нивелиране, подготовка на терен',
      basePrice: 93.5,
      pricePerUnit: 11.5,
      timeline: '2-5 работни дни',
      fields: [
        {
          id: 'area',
          label: 'Площ на терена',
          type: 'number',
          unit: 'кв.м',
          placeholder: '500',
          min: 1,
          step: 1,
        },
        {
          id: 'levelDifference',
          label: 'Разлика в нивото',
          type: 'select',
          options: [
            { value: 'minimal', label: 'До 0.5м (1.0x)' },
            { value: 'moderate', label: '0.5-1.5м (1.2x)' },
            { value: 'significant', label: 'Над 1.5м (1.5x)' },
          ],
        },
        {
          id: 'compaction',
          label: 'Уплътняване',
          type: 'select',
          options: [
            { value: 'none', label: 'Без уплътняване (1.0x)' },
            { value: 'light', label: 'Леко уплътняване (1.2x)' },
            { value: 'heavy', label: 'Тежко уплътняване (1.5x)' },
          ],
        },
      ],
    },
    {
      id: 'transport',
      name: 'Транспорт Материали',
      icon: 'TruckIcon',
      description: 'Доставка на материали, извозване на отпадъци',
      basePrice: 45.5,
      pricePerUnit: 25.5,
      timeline: '1-2 работни дни',
      fields: [
        {
          id: 'trips',
          label: 'Брой курсове',
          type: 'number',
          unit: 'курса',
          placeholder: '5',
          min: 1,
          step: 1,
        },
        {
          id: 'distance',
          label: 'Разстояние (едната посока)',
          type: 'number',
          unit: 'км',
          placeholder: '20',
          min: 1,
          step: 1,
        },
        {
          id: 'materialType',
          label: 'Тип материал',
          type: 'select',
          options: [
            { value: 'light', label: 'Леки материали (1.0x)' },
            { value: 'medium', label: 'Средни материали (1.2x)' },
            { value: 'heavy', label: 'Тежки материали (1.4x)' },
          ],
        },
      ],
    },
  ];

  const calculateEstimate = () => {
    if (!selectedService) return;

    const service = services.find((s) => s.id === selectedService);
    if (!service) return;

    setIsCalculating(true);

    setTimeout(() => {
      let total = service.basePrice;
      const area = parseFloat(formData.area || '0');
      const trips = parseFloat(formData.trips || '0');

      if (selectedService === 'transport') {
        const distance = parseFloat(formData.distance || '0');
        total += trips * service.pricePerUnit * (distance / 10);
      } else {
        total += area * service.pricePerUnit;
      }

      const soilMultiplier =
        formData.soilType === 'medium'
          ? 1.3
          : formData.soilType === 'hard'
          ? 1.8
          : 1.0;
      const accessMultiplier =
        formData.access === 'moderate'
          ? 1.2
          : formData.access === 'difficult'
          ? 1.5
          : 1.0;
      const wasteMultiplier =
        formData.wasteType === 'mixed'
          ? 1.4
          : formData.wasteType === 'heavy'
          ? 1.8
          : 1.0;
      const volumeMultiplier =
        formData.wasteVolume === 'medium'
          ? 1.3
          : formData.wasteVolume === 'large'
          ? 1.6
          : 1.0;
      const levelMultiplier =
        formData.levelDifference === 'moderate'
          ? 1.4
          : formData.levelDifference === 'significant'
          ? 1.9
          : 1.0;
      const compactionMultiplier =
        formData.compaction === 'light'
          ? 1.2
          : formData.compaction === 'heavy'
          ? 1.5
          : 1.0;
      const materialMultiplier =
        formData.materialType === 'medium'
          ? 1.2
          : formData.materialType === 'heavy'
          ? 1.5
          : 1.0;

      if (selectedService === 'excavation') {
        total *= soilMultiplier * accessMultiplier;
        const depth = parseFloat(formData.depth || '0');
        if (depth > 3) {
          total *= 1.3;
        }
      } else if (selectedService === 'cleaning') {
        total *= wasteMultiplier * volumeMultiplier;
      } else if (selectedService === 'leveling') {
        total *= levelMultiplier * compactionMultiplier;
      } else if (selectedService === 'transport') {
        total *= materialMultiplier;
      }

      setEstimate(parseFloat(total.toFixed(2)));
      setIsCalculating(false);
    }, 1000);
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setFormData({});
    setEstimate(null);
  };

  const handleFieldChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }));
  };

  const handleContactSubmit = (data: any) => {
    console.log('Contact form submitted:', data);
  };

  useEffect(() => {
    if (selectedService && Object.keys(formData).length > 0) {
      const hasRequiredFields = services
        .find((s) => s.id === selectedService)
        ?.fields.every((field) => formData[field.id]);

      if (hasRequiredFields) {
        calculateEstimate();
      }
    }
  }, [formData, selectedService]);

  const currentService = services.find((s) => s.id === selectedService);

  return (
    <div className="min-h-screen bg-background">
      <div className="h-20"></div>

      <section className="py-16 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
              <Icon name="CalculatorIcon" size={40} className="text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Бърза Оферта Калкулатор
            </h1>
            <p className="text-xl text-white opacity-90 font-sans">
              Получете предварителна оценка за вашия проект за секунди
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4 text-center">
                Изберете Услуга
              </h2>
              <p className="text-center text-muted-foreground font-sans mb-8">
                Започнете като изберете типа услуга, която ви интересува
              </p>
              <ServiceSelector
                services={services}
                selectedService={selectedService}
                onServiceSelect={handleServiceSelect}
              />
            </div>

            {selectedService && currentService && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-card rounded-lg shadow-md p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Icon
                          name={currentService.icon as any}
                          size={24}
                          className="text-primary-foreground"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-foreground">
                          {currentService.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-sans">
                          {currentService.description}
                        </p>
                      </div>
                    </div>

                    <CalculatorForm
                      fields={currentService.fields}
                      formData={formData}
                      onFieldChange={handleFieldChange}
                    />
                  </div>

                  <div className="bg-muted rounded-lg p-6">
                    <div className="flex items-start space-x-3">
                      <Icon
                        name="InformationCircleIcon"
                        size={24}
                        className="text-primary flex-shrink-0 mt-1"
                      />
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-2">
                          Важна Информация
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                          <li className="flex items-start space-x-2">
                            <span className="text-primary mt-1">•</span>
                            <span>
                              Цените са ориентировъчни и могат да варират в зависимост от
                              специфичните условия на обекта
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-primary mt-1">•</span>
                            <span>
                              Окончателната оферта се изготвя след оглед на място от нашия
                              екип
                            </span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-primary mt-1">•</span>
                            <span>
                              Всички цени са посочени в евро(€)
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <EstimateDisplay
                    estimate={estimate}
                    timeline={currentService.timeline}
                    isCalculating={isCalculating}
                  />

                  {estimate !== null && (
                    <ContactForm
                      estimate={estimate}
                      selectedService={selectedService}
                      onSubmit={handleContactSubmit}
                    />
                  )}
                </div>
              </div>
            )}

            {!selectedService && (
              <div className="mt-16 bg-card rounded-lg shadow-md p-12 text-center">
                <Icon
                  name="CursorArrowRaysIcon"
                  size={64}
                  className="text-muted-foreground mx-auto mb-6"
                />
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                  Изберете Услуга за Начало
                </h3>
                <p className="text-muted-foreground font-sans max-w-md mx-auto">
                  Кликнете на една от услугите по-горе, за да започнете изчисляването на
                  вашата предварителна оферта
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Защо Да Изберете D&D Construction?
              </h2>
              <p className="text-muted-foreground font-sans">
                Професионализъм и качество във всеки проект
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="ClockIcon" size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  Бързо Обслужване
                </h3>
                <p className="text-sm text-muted-foreground font-sans">
                  Отговаряме в рамките на 24 часа и започваме работа според вашия график
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="ShieldCheckIcon" size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  Гарантирано Качество
                </h3>
                <p className="text-sm text-muted-foreground font-sans">
                  Всички проекти са с гаранция и застраховка за вашето спокойствие
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CurrencyDollarIcon" size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  Прозрачни Цени
                </h3>
                <p className="text-sm text-muted-foreground font-sans">
                  Без скрити такси - цената, която виждате, е цената, която плащате
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-secondary to-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
              Готови Да Започнете Вашия Проект?
            </h2>
            <p className="text-xl text-white opacity-90 font-sans mb-8">
              Свържете се с нас днес за безплатна консултация и детайлна оферта
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+359878827128"
                className="w-full sm:w-auto px-8 py-4 bg-destructive text-destructive-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Icon name="PhoneIcon" size={24} />
                <span>+359 878 827 128</span>
              </a>
              <a
                href="tel:+359885078098"
                className="w-full sm:w-auto px-8 py-4 bg-destructive text-destructive-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Icon name="PhoneIcon" size={24} />
                <span>+359 885 078 098</span>
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Icon name="EnvelopeIcon" size={24} />
                <span>Изпратете Запитване</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuickQuoteInteractive;
