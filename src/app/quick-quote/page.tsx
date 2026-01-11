import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import QuickQuoteInteractive from './components/QuickQuoteInteractive';

export const metadata: Metadata = {
  title: 'Бърза Оферта - D&D Construction',
  description:
    'Получете предварителна оценка за вашия строителен проект за секунди с нашия интерактивен калкулатор. Изкопни дейности, почистване, заравняване и транспорт на материали.',
};

export default function QuickQuotePage() {
  return (
    <>
      <Header />
      <QuickQuoteInteractive />
    </>
  );
}