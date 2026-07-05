import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';

const SITE_URL = 'https://www.ddconstructiongp.com';

export const metadata: Metadata = {
  title: 'Събаряне на стари постройки София | D&D Construction',
  description:
    'Събаряне на стари къщи, навеси, гаражи и постройки в София и Софийска област. Извозване на отпадъци и почистване на терена.',
  keywords: [
    'събаряне на постройки София',
    'разбиване на стара къща',
    'събаряне на гараж',
    'разчистване след разрушаване',
    'събаряне навес Софийска област',
  ],
  alternates: { canonical: `${SITE_URL}/demolition-services` },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/demolition-services`,
    title: 'Събаряне на стари постройки София | D&D Construction',
    description:
      'Събаряне на стари къщи, навеси, гаражи и постройки в София и Софийска област.',
    locale: 'bg_BG',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Събаряне на постройки',
  name: 'Събаряне на стари постройки',
  provider: {
    '@type': 'LocalBusiness',
    name: 'D&D Construction',
    telephone: '+359878827128',
  },
  areaServed: ['София', 'Софийска област'],
  description:
    'Премахване на стари къщи, навеси, гаражи и стопански постройки, включително товарене, извозване и почистване на терена след работа.',
};

export default function DemolitionServicesPage() {
  return (
    <>
      <Script
        id="ld-json-demolition"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="pt-24">
        <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-semibold mb-6 text-sm">
                ✅ Опитен екип и собствена техника
              </p>

              <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
                Събаряне на <span className="text-primary">стари постройки</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Премахваме стари къщи, навеси, гаражи и стопански постройки.
                Извършваме цялата услуга — събаряне, товарене, извозване и
                почистване на терена след работа.
              </p>

              <div className="flex gap-4">
                
                  href="tel:+359878827128"
                  className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold"
                >
                  Обадете се сега
                </a>

                
                  href="/quick-quote"
                  className="bg-primary text-white px-6 py-3 rounded-md font-semibold"
                >
                  Безплатна оферта
                </a>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/assets/images/old-house-demolition.jpg"
                alt="Събаряне на стара постройка с мини багер"
                width={900}
                height={700}
                className="rounded-2xl shadow-xl object-cover"
                priority
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
