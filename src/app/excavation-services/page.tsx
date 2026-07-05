import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ExcavationInteractive from './components/ExcavationInteractive';

const SITE_URL = 'https://www.ddconstructiongp.com';

export const metadata: Metadata = {
  title: 'Изкопни дейности - D&D Construction',
  description: 'Професионални изкопни услуги с модерна техника и опитен екип. Изкопи за основи, басейни, траншеи и терасиране на терени. Гарантирано качество и спазване на срокове.',
  alternates: { canonical: `${SITE_URL}/excavation-services` },
};

export default function ExcavationServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ExcavationInteractive />
      </main>
    </>
  );
}
