import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ServiceArea {
  id: number;
  region: string;
  cities: string[];
  responseTime: string;
}

interface ServiceAreaMapProps {
  serviceAreas: ServiceArea[];
}

const ServiceAreaMap = ({ serviceAreas }: ServiceAreaMapProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Icon name="MapIcon" size={20} className="text-accent" />
            <span className="text-sm font-semibold text-foreground">
              Зона на обслужване
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Покритие в цяла България
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Осигуряваме транспортни услуги във всички региони на страната с гарантирани срокове за доставка
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-xl shadow-md p-2 h-96">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="D&D Construction Service Area"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=42.6977,23.3219&z=7&output=embed"
              className="rounded-lg"
            ></iframe>
          </div>

          <div className="space-y-4">
            {serviceAreas.map((area) => (
              <div
                key={area.id}
                className="bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Icon name="MapPinIcon" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground">
                        {area.region}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Време за реакция: {area.responseTime}
                      </p>
                    </div>
                  </div>
                  <div className="bg-success/10 px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-success">
                      Активно
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {area.cities.map((city, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-foreground text-sm rounded-full"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 rounded-xl p-8 border-l-4 border-primary">
          <div className="flex items-start space-x-4">
            <Icon
              name="TruckIcon"
              size={32}
              className="text-primary flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                Специални условия за отдалечени региони
              </h3>
              <p className="text-muted-foreground mb-4">
                За доставки извън основните зони на обслужване предлагаме гъвкави решения и индивидуални оферти. Свържете се с нас за повече информация.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="tel:+359878827128"
                  className="inline-flex items-center space-x-2 text-primary font-semibold hover:underline"
                >
                  <Icon name="PhoneIcon" size={18} />
                  <span>+359 878 827 128</span>
                </a>
                
                <a
                  href="tel:+359885078098"
                  className="inline-flex items-center space-x-2 text-primary font-semibold hover:underline"
                >
                  <Icon name="PhoneIcon" size={18} />
                  <span>+359 885 078 098</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;