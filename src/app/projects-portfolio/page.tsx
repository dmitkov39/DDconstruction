import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PortfolioInteractive from './components/PortfolioInteractive';

export const metadata: Metadata = {
  title: 'Портфолио проекти - D&D Construction',
  description: 'Разгледайте нашето портфолио от успешно завършени строителни проекти включващи изкопни работи, почистване на обекти, заравняване на терени и транспорт на материали с реални отзиви от клиенти.',
};

export default function ProjectsPortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PortfolioInteractive />
      </main>
    </div>
  );
}