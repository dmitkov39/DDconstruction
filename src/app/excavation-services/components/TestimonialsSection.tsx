'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  rating: number;
  text: string;
  project: string;
  date: string;
}

const testimonials: Testimonial[] = [
{
  id: 1,
  name: 'Иван Петров',
  role: 'Собственик',
  company: 'Частна къща',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12804d915-1763294560207.png",
  alt: 'Middle-aged Bulgarian man with short gray hair in casual shirt smiling outdoors',
  rating: 5,
  text: 'Изключително професионална работа! Екипът на D&D Construction завърши изкопа за нашата къща точно в срок и с перфектно качество. Техниката беше модерна, а работниците - много внимателни и отговорни. Препоръчвам ги топло!',
  project: 'Изкоп за жилищна сграда',
  date: 'Ноември 2024'
},
{
  id: 2,
  name: 'Мария Димитрова',
  role: 'Архитект',
  company: 'Студио "Модерен дизайн"',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_122a3102f-1763296664834.png",
  alt: 'Professional Bulgarian woman architect with dark hair in business attire at construction site',
  rating: 5,
  text: 'Работим с D&D Construction вече 3 години и винаги са надеждни партньори. Изкопните работи се извършват с прецизност, което е критично важно за нашите проекти. Комуникацията е отлична и винаги спазват графика.',
  project: 'Търговски комплекс',
  date: 'Октомври 2024'
},
{
  id: 3,
  name: 'Георги Стоянов',
  role: 'Мениджър проекти',
  company: 'Строителна фирма "Елит"',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b7e40a0c-1767813710195.png",
  alt: 'Bulgarian construction manager with safety helmet and vest reviewing blueprints on site',
  rating: 5,
  text: 'Най-добрите в бранша! Справиха се отлично с много сложен изкоп в тесен градски терен. Техниката им е първокласна, а екипът знае как да работи безопасно дори в най-трудните условия. Определено ще работим с тях отново.',
  project: 'Подземен паркинг',
  date: 'Септември 2024'
}];


const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-6">
            <Icon name="ChatBubbleLeftRightIcon" size={20} className="text-success" />
            <span className="text-sm font-heading font-semibold text-foreground">Отзиви</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Какво казват <span className="text-success">нашите клиенти</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Реални отзиви от доволни клиенти, които са избрали нашите услуги
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-background rounded-2xl p-8 lg:p-12 border border-border shadow-xl">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                    <AppImage
                      src={currentTestimonial.image}
                      alt={currentTestimonial.alt}
                      className="w-full h-full object-cover" />

                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Icon name="CheckBadgeIcon" size={24} className="text-primary-foreground" variant="solid" />
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                  {currentTestimonial.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{currentTestimonial.role}</p>
                <p className="text-sm text-primary font-heading font-semibold">{currentTestimonial.company}</p>

                <div className="flex items-center space-x-1 mt-4">
                  {[...Array(currentTestimonial.rating)].map((_, idx) =>
                  <Icon key={idx} name="StarIcon" size={20} className="text-primary" variant="solid" />
                  )}
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="relative">
                  <Icon name="ChatBubbleLeftIcon" size={48} className="text-primary/20 absolute -top-4 -left-4" variant="solid" />
                  <p className="text-lg text-foreground leading-relaxed relative z-10">
                    "{currentTestimonial.text}"
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Icon name="BriefcaseIcon" size={18} className="text-primary" />
                    <span className="text-sm text-muted-foreground">{currentTestimonial.project}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="CalendarIcon" size={18} className="text-primary" />
                    <span className="text-sm text-muted-foreground">{currentTestimonial.date}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">

                <Icon name="ChevronLeftIcon" size={24} />
              </button>

              <div className="flex items-center space-x-2">
                {testimonials.map((_, idx) =>
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-primary w-8' : 'bg-muted'}`
                  } />

                )}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">

                <Icon name="ChevronRightIcon" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;