'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xpqqznry';

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
    message: '',
  });

  // ...
};

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
    'Спешно почистване',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('idle');

  const endpoint =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xpqqznry';

  try {
    const fd = new FormData();
    fd.append('name', formData.name);
    fd.append('phone', formData.phone);
    fd.append('email', formData.email);
    fd.append('serviceType', formData.serviceType);
    fd.append('area', formData.area);
    fd.append('message', formData.message);
    fd.append('page', typeof window !== 'undefined' ? window.location.href : 'unknown');

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: fd,
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      console.error('Formspree error:', data);
      setSubmitStatus('error');
      return;
    }

    setSubmitStatus('success');
    setFormData({ name: '', phone: '', email: '', serviceType: '', area: '', message: '' });
    setTimeout(() => setSubmitStatus('idle'), 5000);
  } catch (err) {
    console.error(err);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
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
                  <>
                    {submitStatus === 'error' && (
                      <div className="mb-6 p-4 border border-destructive rounded-lg">
                        <p className="font-bold text-destructive">Неуспешно изпращане</p>
                        <p className="text-sm text-muted-foreground">
                          Моля, опитайте отново или се обадете директно.
                        </p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* ... останалия ти JSX за input-ите остава същия ... */}
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
                  </>
                )}
              </div>

              {/* Дясната колона “Свържете се директно” може да си остане както е */}
              <div className="lg:col-span-2 bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12 flex flex-col justify-center">
                {/* ... */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
