'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  phone: string;
  email: string;
  area: string;
  location: string;
  terrainType: string;
  urgency: string;
  message: string;
}

const ContactForm = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    area: '',
    location: '',
    terrainType: '',
    urgency: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
      area: '',
      location: '',
      terrainType: '',
      urgency: '',
      message: ''
    });
    
    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  if (!isHydrated) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-sm p-8 border border-border">
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Поискайте безплатна оферта
            </h2>
            <p className="text-lg text-muted-foreground">
              Попълнете формата и ще се свържем с вас до 2 часа
            </p>
          </div>
          
          <div className="bg-card rounded-lg shadow-sm p-8 border border-border">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircleIcon" size={48} className="text-success" variant="solid" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                  Благодарим за запитването!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Вашето съобщение е получено. Ще се свържем с вас в рамките на 2 часа.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-bold hover:bg-opacity-90 transition-all duration-300"
                >
                  Изпрати ново запитване
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Име и фамилия *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      placeholder="Иван Петров"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      placeholder="+359 878 827 128"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="ivan@example.com"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="area" className="block text-sm font-semibold text-foreground mb-2">
                      Площ на терена (м²) *
                    </label>
                    <input
                      type="text"
                      id="area"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      placeholder="напр. 2000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-semibold text-foreground mb-2">
                      Локация *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      placeholder="гр. София, кв. Младост"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="terrainType" className="block text-sm font-semibold text-foreground mb-2">
                      Тип терен *
                    </label>
                    <select
                      id="terrainType"
                      name="terrainType"
                      value={formData.terrainType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    >
                      <option value="">Изберете тип</option>
                      <option value="residential">Жилищно строителство</option>
                      <option value="industrial">Индустриален обект</option>
                      <option value="agricultural">Земеделска земя</option>
                      <option value="sports">Спортен терен</option>
                      <option value="other">Друго</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-semibold text-foreground mb-2">
                      Спешност *
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    >
                      <option value="">Изберете срок</option>
                      <option value="urgent">Спешно (до 1 седмица)</option>
                      <option value="normal">Нормално (1-2 седмици)</option>
                      <option value="flexible">Гъвкаво (над 2 седмици)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Допълнителна информация
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                    placeholder="Опишете специфичните изисквания за вашия проект..."
                  ></textarea>
                </div>
                
                <div className="flex items-start space-x-3 bg-primary/10 p-4 rounded-lg">
                  <Icon name="InformationCircleIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    Вашите данни са защитени и ще бъдат използвани само за връзка с вас относно запитването.
                  </p>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Или се свържете директно:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+359878827128"
                className="flex items-center space-x-2 px-6 py-3 bg-destructive text-destructive-foreground rounded-lg font-cta font-bold hover:bg-opacity-90 transition-all duration-300"
              >
                <Icon name="PhoneIcon" size={20} variant="solid" />
                <span>+359 878 827 128</span>
              </a>
              <a
                href="tel:+359885078098"
                className="flex items-center space-x-2 px-6 py-3 bg-destructive text-destructive-foreground rounded-lg font-cta font-bold hover:bg-opacity-90 transition-all duration-300"
              >
                <Icon name="PhoneIcon" size={20} variant="solid" />
                <span>+359 885 078 098</span>
              </a>
              <a
                href="mailto:ddconstruction988@gmail.com"
                className="flex items-center space-x-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-cta font-bold hover:bg-opacity-90 transition-all duration-300"
              >
                <Icon name="EnvelopeIcon" size={20} />
                <span>ddconstruction988@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;