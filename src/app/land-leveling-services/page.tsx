import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import LandLevelingInteractive from './components/LandLevelingInteractive';

export const metadata: Metadata = {
  title: 'Заравняване на терени - D&D Construction',
  description: 'Професионално заравняване на терени с фокус върху дренаж и стабилност. Прецизна подготовка на площи с модерна техника и доказани методи за перфектно изравнени терени.',
};

export default function LandLevelingServicesPage() {
  return (
    <>
      <Header />
    </>
  );
}
