import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/common/Header';
import LandLevelingInteractive from './components/LandLevelingInteractive';

const SITE_URL = 'https://www.ddconstructiongp.com';

export const metadata: Metadata = {
  title: 'Заравняване на терени - D&D Construction',
  description:
    'Професионално заравняване на терени с фокус върху дренаж и стабилност. Прецизна подготовка на площи с модерна техника.',
  keywords: [
    'заравняване на терени София',
    'нивелиране на двор',
    'подготовка на терен за строеж',
    'заравняване парцел Софийска област',
    'вертикална планировка',
  ],
  alternates: { canonical: `${SITE_URL}/land-leveling-services` },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/land-leveling-services`,
    title: 'Заравняване на терени - D&D Construction',
    description:
      'Професионално заравняване на терени с фокус върху дренаж и стабилност в София и региона.',
    locale: 'bg_BG',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Заравняване на терени',
  name: 'Заравняване и нивелиране на терени',
  provider: {
    '@type': 'LocalBusiness',
    name: 'D&D Construction',
    telephone: '+359878827128',
  },
  areaServed: ['София', 'Софийска област'],
  description:
    'Прецизно заравняване и подготовка на терени с фокус върху дренаж и стабилност, с модерна техника.',
};

export default function LandLevelingServicesPage() {
  return (
    <>
      <Script
        id="ld-json-land-leveling"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <LandLevelingInteractive />
    </>
  );
}
