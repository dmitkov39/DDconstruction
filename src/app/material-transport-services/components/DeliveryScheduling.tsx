'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimeSlot {
  id: number;
  time: string;
  available: boolean;
}

interface DeliverySchedulingProps {
  onScheduleRequest: (data: any) => void;
}

const DeliveryScheduling = ({ onScheduleRequest }: DeliverySchedulingProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [materialType, setMaterialType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const timeSlots: TimeSlot[] = [
    { id: 1, time: '08:00 - 10:00', available: true },
    { id: 2, time: '10:00 - 12:00', available: true },
    { id: 3, time: '12:00 - 14:00', available: false },
    { id: 4, time: '14:00 - 16:00', available: true },
    { id: 5, time: '16:00 - 18:00', available: true },
  ];

  const materialTypes = [
    'Пясък',
    'Чакъл',
    'Баластра',
    'Земна маса',
    'Строителни материали',
    'Оборудване',
    'Друго',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHydrated) return;

    const scheduleData = {
      date: selectedDate,
      time: selectedTime,
      materialType,
      quantity,
      deliveryAddress,
    };

    onScheduleRequest(scheduleData);
  };

  if (!isHydrated) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-lg p-8">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="space-y-3 mt-8">
                <div className="h-12 bg-muted rounded"></div>
                <div className="h-12 bg-muted rounded"></div>
                <div className="h-12 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Icon name="CalendarIcon" size={20} className="text-primary" />
              <span className="text-sm font-semibold text-foreground">
                Планиране на доставка
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Заявете вашата доставка
            </h2>
            <p className="text-lg text-muted-foreground">
              Изберете удобна дата и час за доставка на материалите
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Дата на доставка *
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Вид материал *
                  </label>
                  <select
                    value={materialType}
                    onChange={(e) => setMaterialType(e.target.value)}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    required
                  >
                    <option value="">Изберете материал</option>
                    {materialTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Предпочитан час *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => slot.available && setSelectedTime(slot.time)}
                      disabled={!slot.available}
                      className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        selectedTime === slot.time
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : slot.available
                          ? 'bg-muted text-foreground hover:bg-primary/20'
                          : 'bg-muted/50 text-muted-foreground cursor-not-allowed'
                      }`}
                    >
                      {slot.time}
                      {!slot.available && (
                        <span className="block text-xs mt-1">Заето</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Количество *
                  </label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="напр. 10 тона, 5 м³"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Адрес за доставка *
                  </label>
                  <input
                    type="text"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Въведете адрес"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    required
                  />
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="InformationCircleIcon"
                    size={20}
                    className="text-primary mt-0.5 flex-shrink-0"
                  />
                  <p className="text-sm text-foreground">
                    След изпращане на заявката, нашият екип ще се свърже с вас в рамките на 30 минути за потвърждение и уточняване на детайлите.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Icon name="PaperAirplaneIcon" size={20} />
                <span>Изпрати заявка</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryScheduling;