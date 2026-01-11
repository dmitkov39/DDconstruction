import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import SiteCleaningInteractive from './components/SiteCleaningInteractive';

export const metadata: Metadata = {
  title: 'Почистване на строителни обекти - D&D Construction',
  description: 'Професионални услуги за почистване на строителни обекти, терени и площадки. Екологично управление на отпадъци, собствена техника и гарантирано качество. Бързо изпълнение 24-48 часа.',
};

export default function SiteCleaningServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SiteCleaningInteractive />
    </main>
  );
}