import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ExcavationInteractive from './components/ExcavationInteractive';

export const metadata: Metadata = {
  title: 'Изкопни дейности - D&D Construction',
  description: 'Професионални изкопни услуги с модерна техника и опитен екип. Изкопи за основи, басейни, траншеи и терасиране на терени. Гарантирано качество и спазване на срокове.',
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