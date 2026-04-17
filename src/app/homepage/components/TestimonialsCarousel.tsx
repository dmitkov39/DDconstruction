'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  project: string;
  date: string;
}

// ✅ Обнови тези отзиви с реалните от Google My Business
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Иван Петров',
    role: 'Собственик',
    company: 'Жилищна сграда София',
    rating: 5,
    text: 'Изключително професионална работа! Екипът на D&D Construction завърши изкопните работи за основите на нашата сграда точно в срок и с перфектно качество. Препоръчвам ги без колебание.',
    project: 'Изкопи за жилищна сграда',
    date: '15.11.2024',
  },
  {
    id: 2,
    name: 'Мария Георгиева',
    role: 'Архитект',
    company: 'Георгиева Дизайн ЕООД',
    rating: 5,
    text: 'Работим с D&D Construction вече година. Винаги са точни, отговорни и използват най-модерна техника. Изключителен професионализъм.',
    project: 'Заравняване на 5 обекта',
    date: '28.10.2024',
  },
  {
    id: 3,
    name: 'Георги Димитров',
    role: 'Собственик',
    company: 'Къща',
    rating: 5,
    text: 'Изключително бързи и коректни. Истински професионалисти.',
    project: 'Къща - Костенец',
    date: '05.06.2025',
  },
  {
    id: 4,
    name: 'Елена Стоянова',
    role: 'Собственик',
    company: 'Частна вила Пловдив',
    rating: 5,
    text: 'Изградихме басейн в двора с помощта на D&D Construction. От изкопите до финалното заравняване - всичко беше направено перфектно. Много сме доволни от резултата!',
    project: 'Изкоп и подготовка за басейн',
    date: '20.09.2024',
  },
];

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/place/D%26D+constructiongp+-+%D0%B8%D0%B7%D0%BA%D0%BE%D0%BF%D0%BD%D0%B8+%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8%26%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BF%D0%BE%D1%80%D1%82+%D0%BD%D0%B0+%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%B8/@42.6418455,23.6162115,17z/data=!4m6!3m5!1s0x83e0a61756d826e5:0x2adb16d19b94df86!8m2!3d42.6418455!4d23.6162115!16s%2Fg%2F11ywd83xbq#lrd=0x83e0a61756d826e5:0x2adb16d19b94df86,1';

const TOTAL_RATING = 5.0;
const TOTAL_REVIEWS = 8;

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
        {/* Header */}
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

        {/* Google Rating Badge */}
        <div className="flex justify-center mb-10">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-card border border-border rounded-2xl px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/40 group"
          >
            {/* Google "G" logo */}
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>

            <div className="flex flex-col items-start">
              <span className="text-xs text-muted-foreground font-sans leading-none mb-1">Google отзиви</span>
              <div className="flex items-center gap-2">
                <span className="text-lg font-heading font-bold text-foreground leading-none">{TOTAL_RATING}</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="StarIcon" size={16} className="text-yellow-400" variant="solid" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-sans">({TOTAL_REVIEWS} отзива)</span>
              </div>
            </div>

            <Icon
              name="ArrowTopRightOnSquareIcon"
              size={16}
              className="text-muted-foreground group-hover:text-primary transition-colors ml-1"
            />
          </a>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-card rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 lg:p-12 relative">
              <div className="absolute top-8 right-8 text-primary/10">
                <Icon name="ChatBubbleLeftIcon" size={80} variant="solid" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Icon key={i} name="StarIcon" size={24} className="text-primary" variant="solid" />
                  ))}
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

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="BriefcaseIcon" size={16} />
                        <span className="font-sans">{currentTestimonial.project}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="CalendarIcon" size={16} />
                        <span className="font-sans">{currentTestimonial.date}</span>
                      </div>
                    </div>

                    {/* "Виж в Google" link */}
                    <a
                      href={GOOGLE_REVIEWS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-sans"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Виж в Google
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
              <button
                onClick={handlePrevious}
                className="w-12 h-12 bg-card hover:bg-primary rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <Icon name="ChevronLeftIcon" size={24} className="text-foreground hover:text-primary-foreground" />
              </button>

              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-primary w-8' : 'bg-muted hover:bg-primary/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 bg-card hover:bg-primary rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Next testimonial"
              >
                <Icon name="ChevronRightIcon" size={24} className="text-foreground hover:text-primary-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA to leave a review */}
        <div className="text-center mt-10">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-sans underline underline-offset-4"
          >
            <Icon name="StarIcon" size={14} className="text-yellow-400" variant="solid" />
            Остави отзив в Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
