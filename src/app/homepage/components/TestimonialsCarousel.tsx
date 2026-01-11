'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';


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
  company: 'Жилищна сграда София',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18b21ef66-1763294858765.png",
  alt: 'Middle-aged Bulgarian man in business casual attire smiling confidently',
  rating: 5,
  text: 'Изключително професионална работа! Екипът на D&D Construction завърши изкопните работи за основите на нашата сграда точно в срок и с перфектно качество. Препоръчвам ги без колебание.',
  project: 'Изкопи за жилищна сграда',
  date: '15.11.2024'
},
{
  id: 2,
  name: 'Мария Георгиева',
  role: 'Архитект',
  company: 'Георгиева Дизайн ЕООД',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_113afeee2-1763295097732.png",
  alt: 'Professional Bulgarian woman architect in white blouse with blueprints',
  rating: 5,
  text: 'Работим с D&D Construction вече година. Винаги са точни, отговорни и използват най-модерна техника. Изключителен професионализъм.',
  project: 'Заравняване на 5 обекта',
  date: '28.10.2024'
},
{
  id: 3,
  name: 'Георги Димитров',
  role: 'Собственик',
  company: 'Къща',
  image: "https://images.unsplash.com/photo-1541888722643-c48051cd3059",
  alt: 'Bulgarian construction contractor in safety vest and hard hat on site',
  rating: 5,
  text: 'изключително бързи и коректни. Истински професионалисти.',
  project: 'Къща - костенец',
  date: '05.06.2025'
},
{
  id: 4,
  name: 'Елена Стоянова',
  role: 'Собственик',
  company: 'Частна вила Пловдив',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16d42e3d6-1767984832669.png",
  alt: 'Elegant Bulgarian woman homeowner in casual attire smiling warmly',
  rating: 5,
  text: 'Изградихме басейн в двора с помощта на D&D Construction. От изкопите до финалното заравняване - всичко беше направено перфектно. Много сме доволни от резултата!',
  project: 'Изкоп и подготовка за басейн',
  date: '20.09.2024'
}];


const TestimonialsCarousel = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  const handlePrevious = () => {
    if (!isHydrated) return;
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    if (!isHydrated) return;
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    if (!isHydrated) return;
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="ChatBubbleLeftRightIcon" size={20} className="text-primary" variant="solid" />
            <span className="text-sm font-heading font-semibold text-foreground">
              Отзиви от клиенти
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-foreground mb-6">
            Какво казват нашите{' '}
            <span className="text-primary">клиенти</span>
          </h2>
          
          <p className="text-lg text-muted-foreground font-sans">
            Над 30 успешно завършени проекта и стотици доволни клиенти в цяла България
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-card rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 lg:p-12 relative">
              <div className="absolute top-8 right-8 text-primary/10">
                <Icon name="ChatBubbleLeftIcon" size={80} variant="solid" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) =>
                  <Icon key={i} name="StarIcon" size={24} className="text-primary" variant="solid" />
                  )}
                </div>

                <blockquote className="text-lg lg:text-xl text-foreground font-sans leading-relaxed mb-8">
                  "{currentTestimonial.text}"
                </blockquote>

                <div className="space-y-4">
                  <div>
                    <div className="font-heading font-bold text-xl text-foreground">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground font-sans">
                      {currentTestimonial.role} • {currentTestimonial.company}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 pt-4 border-t border-border">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="BriefcaseIcon" size={16} />
                      <span className="font-sans">{currentTestimonial.project}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="CalendarIcon" size={16} />
                      <span className="font-sans">{currentTestimonial.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
              <button
                onClick={handlePrevious}
                className="w-12 h-12 bg-card hover:bg-primary rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonial">

                <Icon name="ChevronLeftIcon" size={24} className="text-foreground hover:text-primary-foreground" />
              </button>

              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) =>
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ?
                  'bg-primary w-8' : 'bg-muted hover:bg-primary/50'}`
                  }
                  aria-label={`Go to testimonial ${index + 1}`} />

                )}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 bg-card hover:bg-primary rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Next testimonial">

                <Icon name="ChevronRightIcon" size={24} className="text-foreground hover:text-primary-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsCarousel;