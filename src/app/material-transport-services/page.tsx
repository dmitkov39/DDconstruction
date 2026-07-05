import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/common/Header';
import MaterialTransportInteractive from './components/MaterialTransportInteractive';

const SITE_URL = 'https://www.ddconstructiongp.com';

export const metadata: Metadata = {
  title: 'Транспорт на материали - D&D Construction',
  description:
    'Професионални транспортни услуги за строителни материали, земни маси и оборудване в София и Софийска област. Модерен автопарк, навременна доставка и пълна застраховка на товара.',
  keywords: [
    'транспорт на материали София',
    'извозване на земни маси',
    'самосвал под наем София',
    'транспорт строителни отпадъци',
    'извозване баластра София',
  ],
  alternates: { canonical: `${SITE_URL}/material-transport-services` },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/material-transport-services`,
    title: 'Транспорт на материали - D&D Construction',
    description:
      'Транспорт на строителни материали и земни маси в София и региона с Mercedes самосвал.',
    locale: 'bg_BG',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Транспорт на материали',
  name: 'Транспорт на строителни материали',
  provider: {
    '@type': 'LocalBusiness',
    name: 'D&D Construction',
    telephone: '+359878827128',
  },
  areaServed: ['София', 'Софийска област'],
  description:
    'Извозване на строителни отпадъци и транспорт на материали и земни маси с Mercedes самосвал.',
};

export default function MaterialTransportServicesPage() {
  return (
    <>
      <Script
        id="ld-json-material-transport"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <MaterialTransportInteractive />
    </>
  );
}
