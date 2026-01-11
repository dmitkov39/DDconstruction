import React from 'react';
import Icon from '@/components/ui/AppIcon';


interface Certification {
  id: number;
  name: string;
  issuer: string;
  icon: string;
  description: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: 'ISO 9001:2015',
    issuer: 'Международна организация по стандартизация',
    icon: 'ShieldCheckIcon',
    description: 'Система за управление на качеството'
  },
  {
    id: 2,
    name: 'ISO 45001:2018',
    issuer: 'Международна организация по стандартизация',
    icon: 'HeartIcon',
    description: 'Управление на здравето и безопасността'
  },
  {
    id: 3,
    name: 'ISO 14001:2015',
    issuer: 'Международна организация по стандартизация',
    icon: 'GlobeEuropeAfricaIcon',
    description: 'Екологично управление'
  },
  {
    id: 4,
    name: 'CE Маркировка',
    issuer: 'Европейски съюз',
    icon: 'CheckBadgeIcon',
    description: 'Съответствие с европейските стандарти'
  }
];

const safetyFeatures = [
  {
    icon: 'UserGroupIcon',
    title: 'Обучен персонал',
    description: 'Всички оператори са с валидни сертификати и редовно обучение'
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Застраховка',
    description: 'Пълна застрахователна покритие за всички проекти'
  },
  {
    icon: 'WrenchScrewdriverIcon',
    title: 'Поддръжка',
    description: 'Редовна профилактика и технически прегледи на техниката'
  },
  {
    icon: 'DocumentCheckIcon',
    title: 'Документация',
    description: 'Пълна документация за безопасност на всеки обект'
  }
];

const SafetyCertifications = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-6">
            <Icon name="ShieldCheckIcon" size={20} className="text-success" variant="solid" />
            <span className="text-sm font-heading font-semibold text-foreground">Безопасност и качество</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Сертификати и <span className="text-success">стандарти</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Работим по най-високите международни стандарти за качество и безопасност
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-card p-6 rounded-xl border border-border hover:border-success transition-all duration-300 hover:shadow-lg text-center group"
            >
              <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-success/20 transition-colors duration-300">
                <Icon name={cert.icon as any} size={40} className="text-success" variant="solid" />
              </div>

              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                {cert.name}
              </h3>

              <p className="text-sm text-primary font-heading font-semibold mb-3">
                {cert.issuer}
              </p>

              <p className="text-sm text-muted-foreground">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
            Нашите мерки за безопасност
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} size={32} className="text-primary" />
                </div>

                <h4 className="text-lg font-heading font-bold text-foreground mb-2">
                  {feature.title}
                </h4>

                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="ExclamationTriangleIcon" size={32} className="text-destructive" variant="solid" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-foreground mb-1">
                    Нулеви инциденти
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Над 500 проекта без трудови злополуки
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="ClipboardDocumentCheckIcon" size={32} className="text-success" variant="solid" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-foreground mb-1">
                    Редовни одити
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Тримесечни проверки от независими експерти
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyCertifications;