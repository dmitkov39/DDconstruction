import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TestimonialCardProps {
  testimonial: {
    id: number;
    clientName: string;
    projectType: string;
    rating: number;
    comment: string;
    date: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-heading font-bold text-foreground">
            {testimonial.clientName}
          </h4>
          <p className="text-sm text-muted-foreground">{testimonial.projectType}</p>
        </div>
        
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, index) => (
            <Icon
              key={index}
              name="StarIcon"
              size={16}
              variant={index < testimonial.rating ? 'solid' : 'outline'}
              className={index < testimonial.rating ? 'text-primary' : 'text-muted'}
            />
          ))}
        </div>
      </div>

      <p className="text-foreground text-sm mb-4 leading-relaxed">
        "{testimonial.comment}"
      </p>

      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
        <Icon name="CalendarIcon" size={14} />
        <span>{testimonial.date}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;