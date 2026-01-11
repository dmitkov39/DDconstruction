'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactFormProps {
  estimate: number | null;
  selectedService: string;
  onSubmit: (data: ContactFormData) => void;
}

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  estimate,
  selectedService,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Моля, въведете вашето име';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Моля, въведете телефонен номер';
    } else if (!/^[0-9+\s()-]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Моля, въведете валиден телефонен номер';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Моля, въведете имейл адрес';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Моля, въведете валиден имейл адрес';
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

    setTimeout(() => {
      onSubmit(formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-md p-6 lg:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
          Поискайте Детайлна Оферта
        </h3>
        <p className="text-muted-foreground font-sans">
          Попълнете формата и нашият екип ще се свърже с вас за уточняване на детайлите
        </p>
      </div>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-success bg-opacity-10 border-2 border-success rounded-lg flex items-start space-x-3">
          <Icon name="CheckCircleIcon" size={24} className="text-success flex-shrink-0" />
          <div>
            <p className="font-heading font-semibold text-success">Успешно изпратено!</p>
            <p className="text-sm text-success-foreground mt-1">
              Благодарим ви! Ще се свържем с вас в рамките на 24 часа.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-heading font-semibold text-foreground mb-2"
          >
            Име и Фамилия *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`w-full px-4 py-3 border-2 rounded-lg bg-background text-foreground focus:outline-none transition-colors duration-300 ${
              errors.name ? 'border-error' : 'border-border focus:border-primary'
            }`}
            placeholder="Иван Петров"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-error flex items-center space-x-1">
              <Icon name="ExclamationCircleIcon" size={16} />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-heading font-semibold text-foreground mb-2"
          >
            Телефон *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-lg bg-background text-foreground focus:outline-none transition-colors duration-300 ${
              errors.phone ? 'border-error' : 'border-border focus:border-primary'
            }`}
            placeholder="+359 878 827 128"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-error flex items-center space-x-1">
              <Icon name="ExclamationCircleIcon" size={16} />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-heading font-semibold text-foreground mb-2"
          >
            Имейл *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`w-full px-4 py-3 border-2 rounded-lg bg-background text-foreground focus:outline-none transition-colors duration-300 ${
              errors.email ? 'border-error' : 'border-border focus:border-primary'
            }`}
            placeholder="ivan.petrov@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-error flex items-center space-x-1">
              <Icon name="ExclamationCircleIcon" size={16} />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-heading font-semibold text-foreground mb-2"
          >
            Допълнителна Информация
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border-2 border-border rounded-lg bg-background text-foreground focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
            placeholder="Опишете вашия проект или специфични изисквания..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary-foreground border-t-transparent"></div>
              <span>Изпращане...</span>
            </>
          ) : (
            <>
              <Icon name="PaperAirplaneIcon" size={20} />
              <span>Изпрати Запитване</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;