import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
  href: string;
  features: string[];
}

const services: Service[] = [
{
  id: 1,
  title: 'Изкопни дейности за основи до 2 метра',
  description: 'Професионални изкопни работи за основи до 2 метра дълбочина с модерна техника и опитен екип.',
  icon: 'WrenchScrewdriverIcon',
  image: "/assets/images/image-1768042974877.png",
  alt: 'Компактен минибагер Takeuchi TB016 на строителна площадка',
  href: '/excavation-services',
  features: ['Изкопи за основи до 2 метра', 'Прецизно изпълнение', 'Модерна техника']
},

{
  id: 2,
  title: 'Почистване на дворове и земни площи',
  description: 'Професионално почистване на дворове и земни площи от растителност, отпадъци и строителни материали.',
  icon: 'SparklesIcon',
  image: "/assets/images/c02d8a2b-253e-4109-a512-ef341361b5a7-1766585300133.png",
  alt: 'Професионална снимка на жълт GitHub 4240E скид-стий товарач на активен строителен обект с кранове и недовършени сгради на заден план',
  href: '/site-cleaning-services',
  features: ['Почистване на дворове', 'Изчистване на земни площи', 'Извозване на отпадъци']
},

{
  id: 3,
  title: 'Заравняване на дворове и терени',
  description: 'Прецизно заравняване и нивелиране на дворове и терени за строителство, озеленяване или други нужди.',
  icon: 'CubeIcon',
  image: "/assets/images/c02d8a2b-253e-4109-a512-ef341361b5a7-1766585300133.png",
  alt: 'Професионална снимка на жълт GitHub 4240E скид-стий товарач на активен строителен обект с кранове и недовършени сгради на заден план',
  href: '/land-leveling-services',
  features: ['Заравняване на дворове', 'Нивелиране на терени', 'Подготовка за строителство']
},

{
  id: 4,
  title: 'Логистика и транспорт на строителни материали',
  description: 'Бърз и надежден транспорт на строителни материали, земни маси и оборудване до вашия обект.',
  icon: 'TruckIcon',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c19aca00-1766584863325.png",
  alt: 'Тристратен самосвал Mercedes Atego 1222 за транспорт на материали',
  href: '/material-transport-services',
  features: ['Транспорт на материали', 'Извозване на земни маси', 'Доставка на оборудване']
},

{
  id: 5,
  title: 'Подготовка на обекти и обратни насипи',
  description: 'Професионална подготовка на строителни обекти и изпълнение на обратни насипи с качествени материали.',
  icon: 'HomeModernIcon',
  image: "/assets/images/image-1768042974877.png",
  alt: 'Компактен минибагер Takeuchi TB016 на строителна площадка',
  href: '/excavation-services',
  features: ['Подготовка на обекти', 'Обратни насипи', 'Качествени материали']
}];


const ServicesOverview = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="BriefcaseIcon" size={20} className="text-primary" variant="solid" />
            <span className="text-sm font-heading font-semibold text-foreground">
              Нашите услуги
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-foreground mb-6">
            Комплексни решения за вашия{' '}
            <span className="text-primary">строителен проект</span>
          </h2>
          
          <p className="text-lg text-muted-foreground font-sans">
            Предлагаме пълен спектър от специализирани услуги с модерна техника и опитен екип за гарантирано качество и срокове.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) =>
          <Link
            key={service.id}
            href={service.href}
            className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={service.image}
                alt={service.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                
                <div className="absolute top-4 right-4 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Icon name={service.icon as any} size={28} className="text-primary-foreground" variant="solid" />
                </div>
              </div>

              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-base text-muted-foreground font-sans leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, index) =>
                <li key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircleIcon" size={18} className="text-success mt-0.5 flex-shrink-0" variant="solid" />
                      <span className="text-base text-foreground font-sans">{feature}</span>
                    </li>
                )}
                </ul>

                <div className="flex items-center space-x-2 text-primary font-heading font-semibold text-base pt-2">
                  <span>Научете повече</span>
                  <Icon name="ArrowRightIcon" size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          )}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/quick-quote"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105">

            <Icon name="DocumentTextIcon" size={24} variant="solid" />
            <span>Поискайте безплатна оферта</span>
          </Link>
        </div>
      </div>
    </section>);

};

export default ServicesOverview;