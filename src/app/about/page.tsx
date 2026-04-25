import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import CompanyStory from './components/CompanyStory';
import CompanyValues from './components/CompanyValues';
import CTASection from './components/CTASection';

const SITE_URL = 'https://www.ddconstructiongp.com';

export const metadata: Metadata = {
  title: 'За Нас',
  description:
    'D&D Construction е основана през 2018 г. Специализирани в изкопни работи, заравняване на терени и почистване на обекти в София и Софийска област. Надеждност, качество и спазване на срокове.',
  keywords: [
    'за нас D&D Construction',
    'изкопни услуги история',
    'строителна фирма София',
    'мини багер фирма Ихтиман',
    'строителни услуги Софийска област',
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/about`,
    title: 'За Нас | D&D Construction',
    description:
      'D&D Construction е основана през 2018 г. Специализирани в изкопни работи, заравняване на терени и почистване на обекти в София и Софийска област.',
    locale: 'bg_BG',
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface Value {
  id: number;
  title: string;
  description: string;
  iconName: keyof typeof import('@heroicons/react/24/outline');
}

const companyStory = `D&D Construction е основана през 2018 година с ясната цел да предлага надеждни и качествени строителни услуги. Започнахме с една машина и силна мотивация да вършим работата си правилно – без компромиси и без празни обещания.\n\nДнес компанията е специализирана в изкопни работи, почистване и подготовка на терени, вертикална планировка, подравняване на дворове и логистика на строителни материали. Работим както с частни клиенти, така и със строителни фирми.\n\nЗа нас всеки проект е лична отговорност. Залагаме на коректност, ефективна работа и спазване на срокове – качества, които ни носят дългосрочно доверие и стабилни партньорства.`;

const milestones: Milestone[] = [];

const values: Value[] = [
  {
    id: 1,
    title: 'Надеждност',
    description: 'Винаги изпълняваме обещанията си и спазваме сроковете. Вашият проект е наш приоритет.',
    iconName: 'HandThumbUpIcon',
  },
  {
    id: 2,
    title: 'Качество',
    description: 'Използваме най-добрата техника и материали. Всяка работа се извършва по най-високите стандарти.',
    iconName: 'StarIcon',
  },
  {
    id: 3,
    title: 'Безопасност',
    description: 'Безопасността на екипа и клиентите е на първо място. Спазваме всички норми и регулации.',
    iconName: 'ShieldCheckIcon',
  },
  {
    id: 4,
    title: 'Иновации',
    description: 'Инвестираме в модерна техника и технологии за по-ефективна и прецизна работа.',
    iconName: 'LightBulbIcon',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <HeroSection
          title="За D&D Construction"
          subtitle="Професионализъм, надеждност и качество в строителството от 2018 година"
          backgroundImage="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
          backgroundAlt="Строителна площадка с жълти багери и булдозери работещи на голям терен под ясно синьо небе"
        />
        <CompanyStory story={companyStory} milestones={milestones} />
        <CompanyValues values={values} />
        <CTASection />
      </main>
    </div>
  );
}
