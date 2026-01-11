import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
  description: string;
  iconName: keyof typeof import('@heroicons/react/24/outline');
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="ShieldCheckIcon" size={32} className="text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Сертификати и Лицензи
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Гарантирано качество и безопасност на всички етапи
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-primary"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name={cert.iconName} size={24} className="text-primary-foreground" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {cert.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-muted-foreground font-sans">
                      {cert.issuer}
                    </span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm font-cta font-bold text-primary">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground font-sans">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;