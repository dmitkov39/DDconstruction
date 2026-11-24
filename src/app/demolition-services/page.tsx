import type { Metadata } from 'next';
import ServicePage, { type ServicePageConfig } from '@/components/services/ServicePage';

const SITE_URL = 'https://www.ddconstructiongp.com';
const PAGE_URL = `${SITE_URL}/demolition-services`;

export const metadata: Metadata = {
  title: 'Събаряне на стари постройки София',
  description:
    'Събаряне на стари къщи, навеси, гаражи и постройки в София и Софийска област. Товарене, извозване на отпадъци и почистване на терена.',
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    q: 'Какво събаряте?',
    a: 'Стари къщи, навеси, гаражи, бараки и стопански постройки.',
  },
  {
    q: 'Извозвате ли отпадъците?',
    a: 'Да. Товарим и извозваме отпадъците със собствения си самосвал и оставяме терена чист.',
  },
  {
    q: 'Нужни ли са документи или разрешение за събаряне?',
    a: 'Зависи от вида и големината на постройката. Уточняваме го на огледа и ви ориентираме какво е нужно.',
  },
  {
    q: 'Можете ли да заравните терена след събарянето?',
    a: 'Да. След разчистването подравняваме терена и го оставяме готов за ново строителство или оформяне на двор.',
  },
];

const config: ServicePageConfig = {
  hero: {
    title: 'Събаряне на',
    accent: 'стари постройки',
    description:
      'Премахваме стари къщи, навеси, гаражи и стопански постройки. Извършваме цялата услуга – събаряне, товарене, извозване и почистване на терена след работа.',
    image: '/assets/images/hero-demolition.jpg',
    imageAlt: 'Събаряне на стара постройка с мини багер',
    badges: ['Опитен екип', 'Собствена техника', 'Безплатен оглед и оферта'],
  },
  sections: [
    {
      type: 'features',
      badgeIcon: 'HomeModernIcon',
      badge: 'Събаряне',
      title: 'Какво',
      accent: 'събаряме',
      subtitle: 'От стара барака до цяла къща – с техника, подходяща за размера на постройката.',
      items: [
        {
          icon: 'HomeModernIcon',
          title: 'Стари къщи',
          text: 'Събаряме стари жилищни и селски къщи, включително в тесни дворове.',
        },
        {
          icon: 'BuildingOffice2Icon',
          title: 'Навеси и гаражи',
          text: 'Премахваме навеси, гаражи и допълнителни постройки.',
        },
        {
          icon: 'CubeIcon',
          title: 'Стопански постройки',
          text: 'Бараки, обори, складове и други стопански сгради.',
        },
        {
          icon: 'TruckIcon',
          title: 'Товарене и извозване',
          text: 'Товарим и извозваме отпадъците със собствен самосвал.',
        },
        {
          icon: 'WrenchScrewdriverIcon',
          title: 'Основи и бетон',
          text: 'Премахваме стари основи и бетонни настилки, когато е нужно.',
        },
        {
          icon: 'ScaleIcon',
          title: 'Почистване и заравняване',
          text: 'След работа почистваме и подравняваме терена за следващата стъпка.',
        },
      ],
    },
    {
      type: 'steps',
      badgeIcon: 'BriefcaseIcon',
      badge: 'Как работим',
      title: 'Как протича',
      accent: 'събарянето',
      items: [
        { title: 'Оглед и оферта', text: 'Оглеждаме постройката и ви даваме безплатна оферта.' },
        { title: 'Събаряне', text: 'Събаряме контролирано с мини багер, като пазим съседните постройки.' },
        { title: 'Товарене и извозване', text: 'Товарим и извозваме отпадъците със собствен самосвал.' },
        { title: 'Почистване', text: 'Подравняваме терена и го предаваме чист.' },
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
    title: 'Нужно ли ви е събаряне?',
    text: 'Обадете се или поискайте безплатна оферта. Ще дойдем на оглед и ще ви кажем цена и срок.',
  },
  jsonLdId: 'ld-json-demolition',
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        serviceType: 'Събаряне на постройки',
        name: 'Събаряне на стари постройки',
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

export default function DemolitionServicesPage() {
  return <ServicePage config={config} />;
}
