import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Certification {
  id: number;
  name: string;
  icon: string;
  description: string;
}

interface Equipment {
  id: number;
  name: string;
  image: string;
  alt: string;
  specs: string;
}

const certifications: Certification[] = [
{
  id: 1,
  name: 'ISO 9001:2015',
  icon: 'ShieldCheckIcon',
  description: 'Сертифицирана система за управление на качеството'
},
{
  id: 2,
  name: 'Застраховка',
  icon: 'DocumentCheckIcon',
  description: 'Пълна застрахователна покритие за всички проекти'
},
{
  id: 3,
  name: 'Безопасност',
  icon: 'ExclamationTriangleIcon',
  description: 'Сертификати за безопасност и охрана на труда'
},
{
  id: 4,
  name: 'ЕС стандарти',
  icon: 'CheckBadgeIcon',
  description: 'Съответствие с европейските строителни норми'
}];


const equipment: Equipment[] = [
{
  id: 1,
  name: 'Takeuchi TB016',
  image: "/assets/images/image-1768042974877.png",
  alt: 'Компактен минибагер Takeuchi TB016 на строителна площадка',
  specs: 'Минибагер 1.6 тона, идеален за тесни пространства'
},
{
  id: 2,
  name: 'Gehl 4240E',
  image: "/assets/images/c02d8a2b-253e-4109-a512-ef341361b5a7-1766585300133.png",
  alt: 'Професионална снимка на жълт Gehl 4240E скид-стий товарач на активен строителен обект с кранове и недовършени сгради на заден план',
  specs: 'Телескопичен товарач, височина 4м, капацитет 2 тона'
},
{
  id: 3,
  name: 'Mercedes Atego 1222',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c19aca00-1766584863325.png",
  alt: 'Тристратен самосвал Mercedes Atego 1222 за транспорт на материали',
  specs: 'Тристратен самосвал, товароносимост 6 тона'
}];


const TrustIndicators = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="StarIcon" size={20} className="text-primary" variant="solid" />
            <span className="text-sm font-heading font-semibold text-foreground">
              Защо да ни изберете
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
            Доверие, качество и{' '}
            <span className="text-primary">професионализъм</span>
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Над 5 години опит, модерна техника и сертификати, които гарантират най-високо качество на услугите.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              Нашата техника
            </h3>
            <p className="text-muted-foreground font-sans">
              Разполагаме с модерно оборудване от водещи световни производители
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {equipment.map((item) =>
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">

                <div className="relative h-64 overflow-hidden">
                  <AppImage
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-xl font-heading font-bold mb-2 text-white text-center">
                    {item.name}
                  </h4>
                  <p className="text-sm opacity-90 font-sans">
                    {item.specs}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ClockIcon" size={32} className="text-primary" variant="solid" />
              </div>
              <h4 className="text-lg font-heading font-bold text-foreground mb-2">
                24/7 Наличност
              </h4>
              <p className="text-sm text-muted-foreground font-sans">
                Винаги на разположение за спешни проекти
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="UserGroupIcon" size={32} className="text-success" variant="solid" />
              </div>
              <h4 className="text-lg font-heading font-bold text-foreground mb-2">
                Опитен екип
              </h4>
              <p className="text-sm text-muted-foreground font-sans">
                Квалифицирани специалисти с дългогодишен опит
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CurrencyDollarIcon" size={32} className="text-accent" variant="solid" />
              </div>
              <h4 className="text-lg font-heading font-bold text-foreground mb-2">
                Конкурентни цени
              </h4>
              <p className="text-sm text-muted-foreground font-sans">
                Най-добро съотношение качество-цена
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TrustIndicators;