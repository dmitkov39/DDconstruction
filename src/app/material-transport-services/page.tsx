import type { Metadata } from 'next';
import ServicePage, { type ServicePageConfig } from '@/components/services/ServicePage';

const SITE_URL = 'https://www.ddconstructiongp.com';
const PAGE_URL = `${SITE_URL}/material-transport-services`;

export const metadata: Metadata = {
  title: 'Транспорт на материали и земни маси',
  description:
    'Превоз на земни маси, инертни материали и строителни отпадъци в София и Софийска област със самосвал Iveco Daily 35C15. Товарене с наша техника.',
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    q: 'Какво превозвате?',
    a: 'Превозваме земни маси, инертни материали (пясък, чакъл, баластра) и строителни отпадъци. Ако имате друг товар, обадете се и ще се разберем.',
  },
  {
    q: 'Товарите ли с ваша техника?',
    a: 'Да. Товарим със скид-стий товарач Gehl или с минибагер Takeuchi, затова не е нужно да търсите отделна машина.',
  },
  {
    q: 'Докъде превозвате?',
    a: 'Работим в София и Софийска област – Ихтиман, Нови хан, Елин Пелин, Самоков, Перник и околните населени места.',
  },
  {
    q: 'Превозвате ли малки количества?',
    a: 'Да. Самосвалът ни е подходящ и за малки обекти и дворове. Количеството и цената уточняваме по телефона.',
  },
  {
    q: 'Как се определя цената?',
    a: 'Цената зависи от вида на материала, количеството и разстоянието. Обадете се с адреса и ще ви кажем сума.',
  },
];

const config: ServicePageConfig = {
  hero: {
    title: 'Транспорт на материали и земни маси',
    accent: '– със собствен самосвал',
    description:
      'Превозваме земни маси, инертни материали и строителни отпадъци със самосвал Iveco Daily 35C15. Товарим с наша техника и работим в София и региона.',
    image: '/assets/images/iveco-daily-35c15.jpg',
    imageAlt: 'Самосвал Iveco Daily 35C15 на обект',
    badges: ['Собствен самосвал', 'Товарене с наша техника', 'Работим всеки ден'],
  },
  sections: [
    {
      type: 'features',
      badgeIcon: 'TruckIcon',
      badge: 'Транспорт',
      title: 'Какво',
      accent: 'превозваме',
      subtitle: 'Доставяме до обекта и извозваме излишното – с един телефонен разговор.',
      items: [
        {
          icon: 'CubeIcon',
          title: 'Земни маси',
          text: 'Извозваме излишната пръст от изкопи и донасяме нова за насипи.',
        },
        {
          icon: 'Square3Stack3DIcon',
          title: 'Инертни материали',
          text: 'Доставяме пясък, чакъл и баластра до вашия обект.',
        },
        {
          icon: 'WrenchScrewdriverIcon',
          title: 'Строителни отпадъци',
          text: 'Товарим и извозваме строителни отпадъци от ремонти, събаряне и разчистване.',
        },
        {
          icon: 'HomeModernIcon',
          title: 'Транспорт за двор и парцел',
          text: 'Подходящи сме за малки дворове и обекти с ограничен достъп.',
        },
        {
          icon: 'ClockIcon',
          title: 'Гъвкаво време',
          text: 'Работим всеки ден от 07:00 до 20:00 и уточняваме часа с вас.',
        },
        {
          icon: 'MapIcon',
          title: 'София и областта',
          text: 'Превозваме в София и Софийска област – Ихтиман, Нови хан, Елин Пелин, Самоков, Перник.',
        },
      ],
    },
    {
      type: 'gallery',
      badgeIcon: 'PhotoIcon',
      badge: 'Нашата техника',
      title: 'Самосвал и',
      accent: 'товарна техника',
      items: [
        {
          image: '/assets/images/iveco-daily-35c15.jpg',
          alt: 'Самосвал Iveco Daily 35C15',
          title: 'Самосвал Iveco Daily 35C15',
        },
        {
          image: '/assets/images/gehl-4240e-palety.jpg',
          alt: 'Скид-стий товарач Gehl 4240E с вилици',
          title: 'Скид-стий товарач Gehl 4240E',
        },
        {
          image: '/assets/images/gallery/dvor-ihtiman.jpg',
          alt: 'Минибагер и камион при разчистване на двор в Ихтиман',
          title: 'Товарене и извозване',
          location: 'Ихтиман',
        },
      ],
    },
    {
      type: 'steps',
      badgeIcon: 'BriefcaseIcon',
      badge: 'Как работим',
      title: 'Как се',
      accent: 'поръчва превоз',
      items: [
        { title: 'Обаждане', text: 'Казвате ни какво искате да превозим и откъде докъде.' },
        { title: 'Цена и час', text: 'Уточняваме количество, цена и удобен час.' },
        { title: 'Товарене и превоз', text: 'Товарим с наша техника и превозваме до адреса.' },
        { title: 'Разтоварване', text: 'Разтоварваме където покажете и оставяме обекта чист.' },
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
    title: 'Нужен ви е превоз?',
    text: 'Обадете се с адреса и материала и ще ви кажем цена и кога можем да дойдем.',
  },
  jsonLdId: 'ld-json-material-transport',
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        serviceType: 'Транспорт на материали',
        name: 'Транспорт на земни маси и инертни материали',
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

export default function MaterialTransportServicesPage() {
  return <ServicePage config={config} />;
}
