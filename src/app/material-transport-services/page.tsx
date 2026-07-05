import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import MaterialTransportInteractive from './components/MaterialTransportInteractive';

const SITE_URL = 'https://www.ddconstructiongp.com';

export const metadata: Metadata = {
  title: 'Транспорт на материали - D&D Construction',
  description:
    'Професионални транспортни услуги за строителни материали, земни маси и оборудване. Модерен автопарк, навременна доставка и пълна застраховка на товара.',
  alternates: { canonical: `${SITE_URL}/material-transport-services` },
};

export default function MaterialTransportServicesPage() {
  return (
    <>
      <Header />
      <MaterialTransportInteractive />
    </>
  );
}
