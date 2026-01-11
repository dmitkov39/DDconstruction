'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  urgency: string;
  priority: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactFormSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'normal',
    priority: 'normal'
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const services = [
    'Изкопни дейности',
    'Почистване на обекти',
    'Заравняване на терени',
    'Транспорт на материали',
    'Друго'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Моля, въведете вашето име';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Моля, въведете имейл адрес';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Моля, въведете валиден имейл адрес';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Моля, въведете телефонен номер';
    } else if (!/^[+]?[0-9\s()-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Моля, въведете валиден телефонен номер';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Моля, опишете вашия проект';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      urgency: 'normal',
      priority: 'normal'
    });

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (!isHydrated) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg shadow-md p-8 border border-border">
              <div className="animate-pulse space-y-6">
                <div className="h-8 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="space-y-4">
                  <div className="h-12 bg-muted rounded"></div>
                  <div className="h-12 bg-muted rounded"></div>
                  <div className="h-12 bg-muted rounded"></div>
                  <div className="h-32 bg-muted rounded"></div>
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
              Изпратете запитване
            </h2>
            <p className="text-lg text-muted-foreground">
              Попълнете формата и ще се свържем с вас в рамките на 2 часа
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-md p-8 border border-border">
            {submitSuccess && (
              <div className="mb-6 p-4 bg-success/10 border-2 border-success rounded-lg flex items-start space-x-3">
                <Icon name="CheckCircleIcon" size={24} className="text-success flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-bold text-success mb-1">
                    Успешно изпратено!
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Вашето запитване беше получено. Ще се свържем с вас скоро.
                  </p>
                </div>
              </div>
            )}

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
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      errors.name ? 'border-destructive' : 'border-border'
                    } focus:border-primary focus:outline-none transition-colors duration-200`}
                    placeholder="Иван Петров"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                  )}
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
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      errors.phone ? 'border-destructive' : 'border-border'
                    } focus:border-primary focus:outline-none transition-colors duration-200`}
                    placeholder="+359 878 827 128"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-heading font-semibold text-foreground mb-2">
                  Имейл адрес *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.email ? 'border-destructive' : 'border-border'
                  } focus:border-primary focus:outline-none transition-colors duration-200`}
                  placeholder="ivan.petrov@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-heading font-semibold text-foreground mb-2">
                    Интересуваща услуга
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors duration-200 bg-background"
                  >
                    <option value="">Изберете услуга</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-heading font-semibold text-foreground mb-2">
                    Приоритет
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-200 text-foreground"
                  >
                    <option value="normal">Нормална</option>
                    <option value="urgent">Спешна (до 24 часа)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-heading font-semibold text-foreground mb-2">
                  Описание на проекта *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.message ? 'border-destructive' : 'border-border'
                  } focus:border-primary focus:outline-none transition-colors duration-200 resize-none`}
                  placeholder="Опишете вашия проект, местоположение, размери и специфични изисквания..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                )}
              </div>

              <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                <Icon name="InformationCircleIcon" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Вашите данни са защитени и ще бъдат използвани само за връзка относно вашето запитване. Обикновено отговаряме в рамките на 2 часа през работно време.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;