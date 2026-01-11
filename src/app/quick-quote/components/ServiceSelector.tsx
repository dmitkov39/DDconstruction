'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface ServiceSelectorProps {
  services: Service[];
  selectedService: string;
  onServiceSelect: (serviceId: string) => void;
}

const ServiceSelector: React.FC<ServiceSelectorProps> = ({
  services,
  selectedService,
  onServiceSelect,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {services.map((service) => (
        <button
          key={service.id}
          onClick={() => onServiceSelect(service.id)}
          className={`p-6 rounded-lg border-2 transition-all duration-300 text-left ${
            selectedService === service.id
              ? 'border-primary bg-primary bg-opacity-10 shadow-lg'
              : 'border-border bg-card hover:border-primary hover:shadow-md'
          }`}
        >
          <div className="flex flex-col items-center text-center space-y-3">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300 ${
                selectedService === service.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              <Icon name={service.icon as any} size={32} variant="outline" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground">
              {service.name}
            </h3>
            <p className="text-sm text-muted-foreground">{service.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ServiceSelector;