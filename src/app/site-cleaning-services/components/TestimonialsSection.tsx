'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  project: string;
  rating: number;
  text: string;
  date: string;
}

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Иван Петров',
      company: 'Строител ЕООД',
      project: 'Почистване на жилищен комплекс',
      rating: 5,
      text: 'Изключително професионална работа! Почистиха целия обект за 3 дни, както обещаха. Всички отпадъци бяха извозени с документи. Препоръчвам топло!',
      date: '15.11.2024'
    },
    {
      id: 2,
      name: 'Мария Георгиева',
      company: 'Инвест Груп АД',
      project: 'Изчистване на промишлен терен',
      rating: 5,
      text: 'Имахме сложен проект с демонтаж на стари конструкции. Екипът на D&D се справи перфектно. Собствената им техника беше огромно предимство.',
      date: '22.10.2024'
    },
    {
      id: 3,
      name: 'Георги Димитров',
      company: 'Офис Център',
      project: 'Почистване след ремонт',
      rating: 5,
      text: 'Финалното почистване на офис сградата беше безупречно. Всичко блестеше! Цената беше коректна, а качеството - отлично.',
      date: '08.12.2024'
    },
    {
      id: 4,
      name: 'Стоян Стоянов',
      company: 'Морски Проекти ООД',
      project: 'Почистване на строителна площадка',
      rating: 5,
      text: 'Работихме с тях на няколко обекта. Винаги точни, бързи и качествени. Екологичното управление на отпадъците е на високо ниво.',
      date: '30.11.2024'
    }
  ];

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Какво казват нашите клиенти
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реални отзиви от реални проекти - качеството на работата ни говори само за себе си
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 relative">
            <div className="absolute top-8 left-8 text-primary opacity-20">
              <Icon name="ChatBubbleLeftRightIcon" size={64} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, index) => (
                  <Icon key={index} name="StarIcon" size={24} className="text-warning" variant="solid" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-foreground text-center mb-8 leading-relaxed italic">
                "{currentTestimonial.text}"
              </p>

              <div className="text-center mb-8">
                <h4 className="text-lg font-heading font-bold text-foreground mb-1">
                  {currentTestimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-1">
                  {currentTestimonial.company}
                </p>
                <p className="text-xs text-muted-foreground">
                  Проект: {currentTestimonial.project}
                </p>
              </div>

              <div className="flex items-center justify-center space-x-2 mb-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))
                  }
                  className="flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <Icon name="ChevronLeftIcon" size={20} />
                  <span className="text-sm font-heading font-semibold">Предишен</span>
                </button>

                <span className="text-sm text-muted-foreground">{currentTestimonial.date}</span>

                <button
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))
                  }
                  className="flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <span className="text-sm font-heading font-semibold">Следващ</span>
                  <Icon name="ChevronRightIcon" size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">250+</div>
              <p className="text-sm text-muted-foreground">Завършени проекта</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Доволни клиенти</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">15+</div>
              <p className="text-sm text-muted-foreground">Години опит</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Поддръжка</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;