import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Vehicle {
  id: number;
  name: string;
  type: string;
  capacity: string;
  image: string;
  alt: string;
  specifications: string[];
  availability: string;
}

interface FleetShowcaseProps {
  vehicles: Vehicle[];
}

const FleetShowcase = ({ vehicles }: FleetShowcaseProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="TruckIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Нашият автопарк
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Модерна техника за всяка задача
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Разполагаме с разнообразен автопарк от специализирани превозни средства за транспорт на всякакви видове материали
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <AppImage
                  src={vehicle.image}
                  alt={vehicle.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  {vehicle.availability}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{vehicle.type}</p>
                  </div>
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <Icon name="TruckIcon" size={24} className="text-accent" />
                  </div>
                </div>

                <div className="bg-primary/5 p-3 rounded-lg mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="ScaleIcon" size={20} className="text-primary" />
                    <span className="text-sm font-semibold text-foreground">
                      Товароносимост: {vehicle.capacity}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground mb-2">
                    Спецификации:
                  </p>
                  {vehicle.specifications.map((spec, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon
                        name="CheckCircleIcon"
                        size={16}
                        className="text-success mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-muted-foreground">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetShowcase;