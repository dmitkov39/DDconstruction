import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  className?: string;
}

const ContactHero = ({ className = '' }: ContactHeroProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6 shadow-lg">
            <Icon name="PhoneIcon" size={40} className="text-primary-foreground" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Свържете се с нас
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Готови сме да отговорим на вашите въпроси и да предоставим безплатна оферта за вашия проект. Свържете се с нас по удобен за вас начин.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+359878827128"
              className="flex items-center space-x-3 px-8 py-4 bg-destructive text-destructive-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg w-full sm:w-auto justify-center"
            >
              <Icon name="PhoneIcon" size={24} />
              <span>+359 878 827 128</span>
            </a>
            
            <a
              href="tel:+359885078098"
              className="flex items-center space-x-3 px-8 py-4 bg-destructive text-destructive-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg w-full sm:w-auto justify-center"
            >
              <Icon name="PhoneIcon" size={24} />
              <span>+359 885 078 098</span>
            </a>
            
            <a
              href="mailto:info@ddconstruction.bg"
              className="flex items-center space-x-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg w-full sm:w-auto justify-center"
            >
              <Icon name="EnvelopeIcon" size={24} />
              <span>Изпратете имейл</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;