import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import MaterialTransportInteractive from './components/MaterialTransportInteractive';

export const metadata: Metadata = {
  title: 'Транспорт на материали - D&D Construction',
  description:
    'Професионални транспортни услуги за строителни материали, земни маси и оборудване. Модерен автопарк, навременна доставка и пълна застраховка на товара.',
};

export default function MaterialTransportServicesPage() {
  return (
    <>
      <Header />
      <MaterialTransportInteractive />
    </>
  );
}