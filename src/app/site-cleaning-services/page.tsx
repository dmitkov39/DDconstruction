import type { Metadata } from 'next';
import ServicePage, { type ServicePageConfig } from '@/components/services/ServicePage';

const SITE_URL = 'https://www.ddconstructiongp.com';
const PAGE_URL = `${SITE_URL}/site-cleaning-services`;

export const metadata: Metadata = {
  title: 'Почистване на терени и строителни обекти',
  description:
    'Разчистване на дворове, парцели и строителни обекти в София и Софийска област: премахване на растителност и отпадъци, товарене и извозване с наша техника.',
  keywords: [
    'почистване на обекти София',
    'почистване на терен след строеж',
    'извозване на строителни отпадъци',
    'почистване двор София',
    'почистване площадка Софийска област',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'Почистване на терени и строителни обекти - D&D Construction',
    description: 'Почистване на строителни обекти, терени и площадки в София и региона.',
    locale: 'bg_BG',
  },
};

const faqs = [
  {
    q: 'Какво почиствате?',
    a: 'Дворове, парцели и строителни обекти – растителност, камъни, строителни и растителни отпадъци, остатъци от събаряне и ремонти.',
  },
  {
    q: 'Извозвате ли отпадъците?',
    a: 'Да. Товарим с минибагер или скид-стий товарач и извозваме със собствения си самосвал.',
  },
  {
    q: 'След почистването заравнявате ли терена?',
    a: 'Да. Ако е нужно, подравняваме терена и го оставяме готов за следващите работи – строителство, настилки или засаждане.',
  },
  {
    q: 'Колко струва почистването?',
    a: 'Цената зависи от площта, вида и количеството на отпадъците. Безплатният оглед ни позволява да ви кажем конкретна сума.',
  },
];

const config: ServicePageConfig = {
  hero: {
    title: 'Почистване на терени и обекти',
    accent: '– разчистваме и извозваме',
    description:
      'Разчистваме дворове, парцели и строителни обекти в София и региона. Премахваме растителност и отпадъци, товарим с наша техника и оставяме терена чист.',
    image: '/assets/images/gallery/dvor-ihtiman.jpg',
    imageAlt: 'Минибагер и камион при разчистване на двор в Ихтиман',
    badges: ['Собствена техника', 'Извозване със собствен самосвал', 'Безплатен оглед и оферта'],
  },
  sections: [
    {
      type: 'features',
      badgeIcon: 'WrenchScrewdriverIcon',
      badge: 'Почистване',
      title: 'Какво',
      accent: 'почистваме',
      subtitle: 'Разчистване на терена преди строителство, заравняване или оформяне на двор.',
      items: [
        {
          icon: 'SparklesIcon',
          title: 'Разчистване на двор и парцел',
          text: 'Премахваме растителност, храсти, камъни и натрупани отпадъци.',
        },
        {
          icon: 'HomeModernIcon',
          title: 'Почистване след строеж',
          text: 'Разчистваме остатъци от строителни материали и отпадъци след ремонти и строеж.',
        },
        {
          icon: 'TruckIcon',
          title: 'Извозване на отпадъци',
          text: 'Товарим и извозваме строителни и растителни отпадъци със собствен самосвал.',
        },
        {
          icon: 'CubeIcon',
          title: 'Остатъци след събаряне',
          text: 'Разчистваме и извозваме остатъците след събаряне на стари постройки.',
        },
        {
          icon: 'ScaleIcon',
          title: 'Подравняване на терена',
          text: 'След почистването подравняваме терена, готов за следващите работи.',
        },
        {
          icon: 'ClockIcon',
          title: 'Бързо и чисто',
          text: 'Работим всеки ден от 07:00 до 20:00 и оставяме обекта чист.',
        },
      ],
    },
    {
      type: 'gallery',
      badgeIcon: 'PhotoIcon',
      badge: 'Наши обекти',
      title: 'Разчистени дворове,',
      accent: 'реални обекти',
      items: [
        {
          image: '/assets/images/gallery/dvor-ihtiman.jpg',
          alt: 'Минибагер и камион при разчистване на двор в Ихтиман',
          title: 'Разчистване на двор',
          location: 'Ихтиман',
        },
        {
          image: '/assets/images/gallery/dvor-novi-han.jpg',
          alt: 'Скид-стий товарач при заравняване на двор в Нови хан',
          title: 'Заравняване на двор',
          location: 'Нови хан',
        },
        {
          image: '/assets/images/gallery/zaravnyavane.jpg',
          alt: 'Заравнен двор с минибагер при къща с оранжев покрив',
          title: 'Двор след разчистване и заравняване',
        },
      ],
    },
    {
      type: 'steps',
      badgeIcon: 'BriefcaseIcon',
      badge: 'Как работим',
      title: 'Как протича',
      accent: 'почистването',
      items: [
        { title: 'Оглед и оферта', text: 'Оглеждаме обекта и ви даваме безплатна оферта.' },
        { title: 'Разчистване', text: 'Премахваме растителност, камъни и отпадъци.' },
        { title: 'Товарене и извозване', text: 'Товарим с наша техника и извозваме със самосвал.' },
        { title: 'Предаване', text: 'Подравняваме терена и предаваме чист обект.' },
      ],
    },
    {
      type: 'faq',
      badgeIcon: 'QuestionMarkCircleIcon',
      badge: 'Въпроси',
      title: 'Често задавани',
      accent: 'въпроси',
      items: faqs,
    },
  ],
  cta: {
    title: 'Нужно ли ви е почистване?',
    text: 'Обадете се или поискайте безплатна оферта. Ще дойдем на оглед и ще ви кажем цена.',
  },
  jsonLdId: 'ld-json-site-cleaning',
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        serviceType: 'Почистване на обекти',
        name: 'Почистване на терени и строителни обекти',
        url: PAGE_URL,
        provider: {
          '@type': 'LocalBusiness',
          name: 'D&D Construction',
          telephone: '+359878827128',
          url: SITE_URL,
        },
        areaServed: ['София', 'Софийска област'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  },
};

export default function SiteCleaningServicesPage() {
  return <ServicePage config={config} />;
}
