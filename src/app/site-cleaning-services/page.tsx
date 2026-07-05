import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/common/Header';
import SiteCleaningInteractive from './components/SiteCleaningInteractive';

const SITE_URL = 'https://www.ddconstructiongp.com';

export const metadata: Metadata = {
  title: 'Почистване на строителни обекти - D&D Construction',
  description:
    'Професионални услуги за почистване на строителни обекти, терени и площадки в София и Софийска област. Екологично управление на отпадъци, собствена техника и гарантирано качество.',
  keywords: [
    'почистване на обекти София',
    'почистване на терен след строеж',
    'извозване на строителни отпадъци',
    'почистване двор София',
    'почистване площадка Софийска област',
  ],
  alternates: { canonical: `${SITE_URL}/site-cleaning-services` },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/site-cleaning-services`,
    title: 'Почистване на строителни обекти - D&D Construction',
    description:
      'Почистване на строителни обекти, терени и площадки в София и региона.',
    locale: 'bg_BG',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Почистване на обекти',
  name: 'Почистване на строителни обекти и терени',
  provider: {
    '@type': 'LocalBusiness',
    name: 'D&D Construction',
    telephone: '+359878827128',
  },
  areaServed: ['София', 'Софийска област'],
  description:
    'Почистване на строителни обекти, терени и площадки с екологично управление на отпадъци.',
};

export default function SiteCleaningServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Script
        id="ld-json-site-cleaning"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <SiteCleaningInteractive />
    </main>
  );
}
