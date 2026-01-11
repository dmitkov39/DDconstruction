import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Готови сте да започнете проекта си?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 font-sans">
            Свържете се с нас днес за безплатна консултация и оферта
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+359878827128"
              className="flex items-center space-x-2 px-8 py-4 bg-destructive text-destructive-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg w-full sm:w-auto justify-center"
            >
              <Icon name="PhoneIcon" size={24} />
              <span>+359 878 827 128</span>
            </a>
            
            <a
              href="tel:+359885078098"
              className="flex items-center space-x-2 px-8 py-4 bg-destructive text-destructive-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg w-full sm:w-auto justify-center"
            >
              <Icon name="PhoneIcon" size={24} />
              <span>+359 885 078 098</span>
            </a>

            <Link
              href="/quick-quote"
              className="flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg w-full sm:w-auto justify-center"
            >
              <Icon name="DocumentTextIcon" size={24} />
              <span>Получете Оферта</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;