import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import QuickQuoteInteractive from './components/QuickQuoteInteractive';

const SITE_URL = 'https://www.ddconstructiongp.com';

export const metadata: Metadata = {
  title: 'Бърза Оферта',
  description:
    'Получете безплатна предварителна оценка за изкопни дейности, заравняване на терени, почистване на обекти и транспорт на материали. Бързо и лесно онлайн.',
  keywords: [
    'оферта изкопни работи',
    'цена мини багер',
    'безплатна оферта строителство',
    'калкулатор изкопни услуги',
    'цена заравняване терен',
    'почистване обект цена',
  ],
  alternates: {
    canonical: `${SITE_URL}/quick-quote`,
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/quick-quote`,
    title: 'Бърза Оферта | D&D Construction',
    description:
      'Получете безплатна предварителна оценка за изкопни дейности, заравняване на терени и почистване на обекти.',
    locale: 'bg_BG',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function QuickQuotePage() {
  return (
    <>
      <Header />
      <QuickQuoteInteractive />
    </>
  );
}
