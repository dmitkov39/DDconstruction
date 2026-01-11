import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Value {
  id: number;
  title: string;
  description: string;
  iconName: keyof typeof import('@heroicons/react/24/outline');
}

interface CompanyValuesProps {
  values: Value[];
}

const CompanyValues = ({ values }: CompanyValuesProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Нашите Ценности
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Принципите, които ръководят работата ни всеки ден
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={value.iconName} size={32} className="text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {value.title}
              </h3>
              
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;