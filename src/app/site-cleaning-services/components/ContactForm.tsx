'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  area: string;
  message: string;
}

const ContactForm = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    area: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const serviceTypes = [
    'Почистване след строителство',
    'Почистване на терени',
    'Управление на отпадъци',
    'Демонтаж и почистване',
    'Спешно почистване'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: '',
      area: '',
      message: ''
    });

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  if (!isHydrated) {
    return (
      <section id="contact-form" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-xl p-8 md:p-12">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Поискайте безплатна оферта
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Попълнете формата и ще се свържем с вас в рамките на 2 часа за безплатен оглед и детайлна оферта
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              <div className="lg:col-span-3 p-8 md:p-12">
                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon name="CheckCircleIcon" size={48} className="text-success" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                      Благодарим за запитването!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Вашето съобщение беше изпратено успешно. Ще се свържем с вас в най-скоро време.
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-sm hover:bg-opacity-90 transition-all duration-300"
                    >
                      Изпрати ново запитване
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-heading font-semibold text-foreground mb-2">
                          Име и фамилия *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                          placeholder="Иван Петров"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-heading font-semibold text-foreground mb-2">
                          Телефон *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                          placeholder="+359 878 827 128"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-heading font-semibold text-foreground mb-2">
                        Имейл
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                        placeholder="ivan@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-heading font-semibold text-foreground mb-2">
                          Вид услуга *
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                        >
                          <option value="">Изберете услуга</option>
                          {serviceTypes.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="area" className="block text-sm font-heading font-semibold text-foreground mb-2">
                          Площ (м²)
                        </label>
                        <input
                          type="text"
                          id="area"
                          name="area"
                          value={formData.area}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                          placeholder="напр. 250"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-heading font-semibold text-foreground mb-2">
                        Допълнителна информация
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                        placeholder="Опишете вашия проект..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                          <span>Изпращане...</span>
                        </>
                      ) : (
                        <>
                          <Icon name="PaperAirplaneIcon" size={20} />
                          <span>Изпрати запитване</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              <div className="lg:col-span-2 bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                  Свържете се директно
                </h3>

                <div className="space-y-6 mb-8">
                  <a
                    href="tel:+359123456789"
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                      <Icon name="PhoneIcon" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-heading font-semibold text-foreground mb-1">
                        Телефон
                      </p>
                      <p className="text-base text-primary font-bold">
                        +359 123 456 789
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@ddconstruction.bg"
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
                      <Icon name="EnvelopeIcon" size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-heading font-semibold text-foreground mb-1">
                        Имейл
                      </p>
                      <p className="text-sm text-muted-foreground">
                        info@ddconstruction.bg
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="ClockIcon" size={24} className="text-success" />
                    </div>
                    <div>
                      <p className="text-sm font-heading font-semibold text-foreground mb-1">
                        Работно време
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Пон-Пет: 08:00 - 18:00
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Събота: 09:00 - 14:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-4 border-l-4 border-primary">
                  <div className="flex items-start space-x-3">
                    <Icon name="InformationCircleIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground">
                      Отговаряме на всички запитвания в рамките на 2 работни часа. За спешни случаи, моля обадете се директно.
                    </p>
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

export default ContactForm;
