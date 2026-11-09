import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';

const SITE_URL = 'https://www.ddconstructiongp.com';
const PAGE_URL = `${SITE_URL}/landscaping-services`;
const HERO_IMAGE = '/assets/images/ozelenyavane-hero.jpg';

export const metadata: Metadata = {
  title: 'Озеленяване и оформяне на дворове в София',
  description:
    'Оформяне на дворове и озеленяване в София и Софийска област: терасиране, подпорни стени, дренаж, поливни системи и подготовка за тревна площ. Изкопи и техника от един изпълнител.',
  keywords: [
    'озеленяване София',
    'оформяне на двор',
    'благоустрояване на двор',
    'терасиране на терен',
    'подпорни стени',
    'поливна система двор',
    'подготовка за тревна площ',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'Озеленяване и оформяне на дворове в София',
    description:
      'От изкопа и заравняването до подпорни стени, дренаж и поливна система – оформяме дворове в София и региона.',
    locale: 'bg_BG',
    images: [{ url: `${SITE_URL}${HERO_IMAGE}` }],
  },
};

const services = [
  {
    icon: 'ScaleIcon',
    title: 'Заравняване и нивелиране на двор',
    text: 'Изравняваме неравни дворове и парцели с правилни нива и наклони, така че водата да се оттича от къщата, а не към нея.',
  },
  {
    icon: 'Square3Stack3DIcon',
    title: 'Терасиране на наклонени терени',
    text: 'Превръщаме стръмен склон в равни площи на нива – за градина, място за сядане, паркинг или за следващо строителство.',
  },
  {
    icon: 'CubeIcon',
    title: 'Подпорни стени',
    text: 'Изграждаме подпорни стени от камък и бетон, които задържат земните маси при терасиране и промени в нивото на двора.',
  },
  {
    icon: 'ArrowTrendingDownIcon',
    title: 'Дренаж и отводняване',
    text: 'Правим дренаж и отводнителни канали, за да не заблатява дворът и да не прониква влага към основите.',
  },
  {
    icon: 'CloudIcon',
    title: 'Поливни системи',
    text: 'Полагаме тръбите за автоматична поливна система още при оформянето на терена, преди да се засади или затревява.',
  },
  {
    icon: 'SparklesIcon',
    title: 'Подготовка за тревна площ и насаждения',
    text: 'Почистваме терена, доставяме и разстиламе земни маси, чакъл и хумус, и го оставяме готов за затревяване и засаждане.',
  },
];

const reasons = [
  {
    icon: 'TruckIcon',
    title: 'Собствена техника',
    text: 'Работим с минибагер Takeuchi, скид-стий товарач Gehl и самосвал, затова влизаме и в малки, тесни дворове.',
  },
  {
    icon: 'ClockIcon',
    title: 'Един изпълнител вместо няколко',
    text: 'Изкопът, стените, дренажът и почистването минават през един екип. Няма чакане между фирмите и прехвърляне на вината.',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Отговорност за нивата',
    text: 'Основата на хубавия двор са правилните нива и наклони. Тях ги правим ние, не ги оставяме на случайността.',
  },
];

const steps = [
  {
    title: 'Оглед и оферта',
    text: 'Идваме на място, мерим терена и обсъждаме какво искате. Офертата е безплатна.',
  },
  {
    title: 'Изкопи и подготовка',
    text: 'Премахваме растителност и отпадъци, изкопаваме, заравняваме и терасираме терена.',
  },
  {
    title: 'Стени, дренаж, поливна система',
    text: 'Изграждаме подпорните стени, полагаме дренаж и тръби за поливна система.',
  },
  {
    title: 'Завършване и почистване',
    text: 'Разстиламе земните маси, чакъла и хумуса, извозваме излишното и предаваме чист терен.',
  },
];

const faqs = [
  {
    q: 'Какво е озеленяване и какво включва оформянето на двор?',
    a: 'Оформянето (още благоустрояване) на двор е цялата работа по терена: заравняване или терасиране, подпорни стени, дренаж, поливна система, пътеки и подготовка за тревна площ и растения. Озеленяването е крайният етап – засаждането на трева, храсти и дървета. При нас ще получите подготвения терен, върху който се озеленява.',
  },
  {
    q: 'Работите ли само в София?',
    a: 'Работим в София и Софийска област – например Ихтиман, Банкя, Нови хан и околните населени места.',
  },
  {
    q: 'Трябва ли да имам готов проект?',
    a: 'Не е задължително. Можем да работим по ваш проект или по ваша идея. При оглед ще ви кажем какво е реалистично за вашия терен и от къде е най-разумно да се започне.',
  },
  {
    q: 'Колко струва оформянето на двор?',
    a: 'Цената зависи от площта, наклона на терена, вида на стените и обема на земните работи, затова няма единна цена на квадратен метър. Безплатната оферта ви дава конкретна сума след оглед.',
  },
  {
    q: 'Извозвате ли излишната пръст и отпадъците?',
    a: 'Да. Товарим и извозваме излишните земни маси, строителни и растителни отпадъци със собствен самосвал, а терена оставяме чист.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Оформяне на дворове и озеленяване',
      name: 'Озеленяване и оформяне на дворове',
      url: PAGE_URL,
      provider: {
        '@type': 'LocalBusiness',
        name: 'D&D Construction',
        telephone: '+359878827128',
        url: SITE_URL,
      },
      areaServed: ['София', 'Софийска област'],
      description:
        'Оформяне на дворове: заравняване, терасиране, подпорни стени, дренаж, поливни системи и подготовка за тревна площ.',
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
};

export default function LandscapingServicesPage() {
  return (
    <>
      <Script
        id="ld-json-landscaping"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 lg:py-24">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Icon name="CheckBadgeIcon" size={20} className="text-primary" variant="solid" />
                <span className="text-sm font-heading font-semibold text-foreground">
                  Собствена техника и опитен екип
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
                Озеленяване и <span className="text-primary">оформяне на дворове</span> в София
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                Правим целия двор от изкопа до готов терен: заравняване, терасиране,
                подпорни стени, дренаж и поливна система. Един изпълнител, една
                отговорност и терен, готов за трева и растения.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+359878827128"
                  className="flex items-center justify-center space-x-2 px-8 py-4 bg-destructive text-destructive-foreground rounded-lg font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
                >
                  <Icon name="PhoneIcon" size={20} variant="solid" />
                  <span>Обадете се сега</span>
                </a>
                <Link
                  href="/quick-quote"
                  className="flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
                >
                  <Icon name="DocumentTextIcon" size={20} />
                  <span>Безплатна оферта</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src={HERO_IMAGE}
                alt="Двор с терасирани лехи, подпорни стени от камък, каменни стъпала и чакълена пътека"
                width={900}
                height={900}
                className="rounded-2xl shadow-xl object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Какво правим в двора ви
              </h2>
              <p className="text-muted-foreground text-lg">
                Земните и строителните работи, върху които стои всеки добре оформен двор.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div key={s.title} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={s.icon} size={26} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="bg-muted/40 py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                От изкопа до готов двор – при един изпълнител
              </h2>
              <p className="text-muted-foreground text-lg">
                Повечето дворове се провалят на границата между фирмите. При нас тази граница не съществува.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reasons.map((r) => (
                <div key={r.title} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={r.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{r.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Как протича работата
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={s.title} className="relative bg-card border border-border rounded-xl p-6">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/40 py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10">
              Често задавани въпроси
            </h2>

            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="group bg-card border border-border rounded-xl p-5">
                  <summary className="cursor-pointer font-heading font-semibold text-lg flex items-center justify-between list-none">
                    <span>{f.q}</span>
                    <Icon
                      name="ChevronDownIcon"
                      size={20}
                      className="flex-shrink-0 ml-4 transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <p className="text-muted-foreground leading-relaxed mt-4">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Искате да оформите двора си?
              </h2>
              <p className="text-primary-foreground text-lg mb-8 max-w-2xl mx-auto">
                Обадете се или поискайте безплатна оферта. Ще дойдем на оглед и ще ви кажем какво и как може да се направи.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+359878827128"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-destructive text-destructive-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-md"
                >
                  <Icon name="PhoneIcon" size={24} variant="solid" />
                  <span>+359 878 827 128</span>
                </a>
                <Link
                  href="/quick-quote"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-card text-foreground rounded-lg font-cta font-bold text-lg hover:bg-muted transition-all duration-300 shadow-md"
                >
                  <Icon name="DocumentTextIcon" size={24} />
                  <span>Поискай оферта</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
