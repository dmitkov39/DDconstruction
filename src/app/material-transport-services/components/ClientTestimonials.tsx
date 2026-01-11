import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  image: string;
  alt: string;
  rating: number;
  comment: string;
  projectType: string;
}

interface ClientTestimonialsProps {
  testimonials: Testimonial[];
}

const ClientTestimonials = ({ testimonials }: ClientTestimonialsProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="ChatBubbleLeftRightIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Отзиви от клиенти
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Какво казват нашите клиенти
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реални отзиви от строителни фирми и частни клиенти, които са използвали нашите транспортни услуги
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-primary font-semibold">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Icon
                    key={index}
                    name="StarIcon"
                    size={18}
                    variant={index < testimonial.rating ? 'solid' : 'outline'}
                    className={
                      index < testimonial.rating ? 'text-primary' : 'text-muted'
                    }
                  />
                ))}
              </div>

              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.comment}"
              </p>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Icon name="BriefcaseIcon" size={16} className="text-accent" />
                  <span className="text-sm text-muted-foreground">
                    Проект: {testimonial.projectType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-card px-8 py-6 rounded-xl shadow-md">
            <div className="text-center">
              <p className="text-4xl font-heading font-bold text-primary mb-1">
                98%
              </p>
              <p className="text-sm text-muted-foreground">
                Удовлетвореност
              </p>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <p className="text-4xl font-heading font-bold text-primary mb-1">
                500+
              </p>
              <p className="text-sm text-muted-foreground">
                Доволни клиенти
              </p>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <p className="text-4xl font-heading font-bold text-primary mb-1">
                4.9
              </p>
              <p className="text-sm text-muted-foreground">
                Средна оценка
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;