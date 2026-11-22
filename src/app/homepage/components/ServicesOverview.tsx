import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Stage {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  href: string;
  items: string[];
  green?: boolean;
}

const stages: Stage[] = [
  {
    id: 1,
    title: 'Подготовка',
    subtitle: 'Освобождаваме терена',
    image: '/assets/images/545049544_24365191263140385_3919223684628122068_n-1767987421018.jpg',
    alt: 'Минибагер и камион при почистване на дворна площ в Ихтиман',
    href: '/site-cleaning-services',
    items: [
      'Почистване на растителност и отпадъци',
      'Премахване на стари бетон и павета',
      'Събаряне на стари постройки',
      'Извозване на отпадъците',
    ],
  },
  {
    id: 2,
    title: 'Основа',
    subtitle: 'Изкопи и правилни нива',
    image: '/assets/images/0-02-05-b720259af2452fa2f490ffcb09886d1126e4f80890c8f0481228f3ca637cceb8_649b9accf554154d-1766601999717.jpg',
    alt: 'Скид-стий товарач Gehl 4240E при заравняване на двор в Нови хан',
    href: '/land-leveling-services',
    items: [
      'Изкопи с мини багер',
      'Заравняване и нивелиране',
      'Терасиране на наклонени терени',
      'Насипване и уплътняване',
    ],
  },
  {
    id: 3,
    title: 'Конструкции и инсталации',
    subtitle: 'Това, което не се вижда, но държи двора',
    image: '/assets/images/kanali4.jpg',
    alt: 'Монтиран отводнителен канал пред жилищна сграда в София',
    href: '/landscaping-services',
    items: [
      'Подпорни стени',
      'Дренаж и отводняване',
      'ВиК връзки и канализация',
      'Поливна система',
      'Основи за огради и кабели',
    ],
  },
  {
    id: 4,
    green: true,
    title: 'Довършване',
    subtitle: 'Готов двор за живеене',
    image: '/assets/images/ozelenyavane-hero.jpg',
    alt: 'Двор с терасирани лехи, подпорни стени от камък и чакълена пътека',
    href: '/landscaping-services',
    items: [
      'Бетонни и павирани настилки',
      'Пътеки и площадки',
      'Засаждане на трева',
      'Растения и по-сложно озеленяване',
    ],
  },
];

const singleServices = [
  { name: 'Изкопни работи', href: '/excavation-services' },
  { name: 'ВиК услуги', href: '/vik-services' },
  { name: 'Почистване на обекти', href: '/site-cleaning-services' },
  { name: 'Заравняване на терени', href: '/land-leveling-services' },
  { name: 'Транспорт на материали', href: '/material-transport-services' },
  { name: 'Събаряне на стари постройки', href: '/demolition-services' },
];

const ServicesOverview = () => {
  return (
    <section id="kak-rabotim" className="py-16 lg:py-24 bg-white scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="BriefcaseIcon" size={20} className="text-primary" variant="solid" />
            <span className="text-sm font-heading font-semibold text-foreground">
              Как работим
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-foreground mb-6">
            От първия изкоп до{' '}
            <span className="text-success">готов двор</span> – в 4 етапа
          </h2>

          <p className="text-lg text-muted-foreground font-sans">
            Един екип и една отговорност във всеки етап. Не търсите различни фирми за изкопа,
            стените и настилките и не сте посредник между тях.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stages.map((stage) => (
            <Link
              key={stage.id}
              href={stage.href}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={stage.image}
                  alt={stage.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 w-12 h-12 ${stage.green ? 'bg-success' : 'bg-primary'} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-2xl font-heading font-bold text-primary-foreground">{stage.id}</span>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div>
                  <h3 className={`text-xl font-heading font-bold text-foreground transition-colors duration-300 ${stage.green ? 'group-hover:text-success' : 'group-hover:text-primary'}`}>
                    {stage.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans mt-1">{stage.subtitle}</p>
                </div>

                <ul className="space-y-2 flex-1">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-start space-x-2">
                      <Icon name="CheckCircleIcon" size={18} className="text-success mt-0.5 flex-shrink-0" variant="solid" />
                      <span className="text-base text-foreground font-sans">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className={`flex items-center space-x-2 font-heading font-semibold text-base pt-2 ${stage.green ? 'text-success' : 'text-primary'}`}>
                  <span>Научете повече</span>
                  <Icon name="ArrowRightIcon" size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/quick-quote"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <Icon name="DocumentTextIcon" size={24} variant="solid" />
            <span>Поискайте безплатен оглед и оферта</span>
          </Link>
        </div>

        <div className="max-w-5xl mx-auto mt-16 pt-12 border-t border-border text-center">
          <h3 className="text-xl font-heading font-bold text-foreground mb-6">
            Нужна ви е само една услуга?
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {singleServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-5 py-3 rounded-full border border-border bg-card text-foreground font-heading font-semibold hover:border-primary hover:text-primary transition-colors duration-300"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
