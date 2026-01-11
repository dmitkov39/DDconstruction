import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  icon: string;
  title: string;
  details: string[];
  link?: string;
}

const ContactInfo = () => {
  const contactMethods: ContactMethod[] = [
    {
      icon: 'PhoneIcon',
      title: 'Телефон',
      details: ['+359 878 827 128', '+359 885 078 098'],
      link: 'tel:+359878827128'
    },
    {
      icon: 'EnvelopeIcon',
      title: 'Имейл',
      details: ['ddconstruction988@gmail.com'],
      link: 'mailto:ddconstruction988@gmail.com'
    },
    {
      icon: 'ClockIcon',
      title: 'Работно време',
      details: ['Пон - Пет: 08:00 - 20:00', 'Събота: 09:00 - 19:00', 'Неделя:09:00 - 19:00']
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Информация за контакт
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Изберете най-удобния начин за връзка с нас
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <Icon name={method.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {method.title}
                </h3>
                {method.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground mb-1">
                    {method.link && idx === 0 ? (
                      <a
                        href={method.link}
                        className="hover:text-primary transition-colors duration-200"
                      >
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;