import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';
import Icon from '@/components/ui/AppIcon';

const SITE_URL = 'https://www.ddconstructiongp.com';

export const metadata = {
  title: 'ВиК услуги София | Водопровод и канализация',
  description:
    'Изкопни ВиК услуги в София и Софийска област – полагане и ремонт на водопроводни и канализационни връзки, изкопи за отводняване. Собствена техника, бърз и коректен срок.',
  alternates: { canonical: `${SITE_URL}/vik-services` },
};

export default function VikServicesPage() {
  return (
    <>
      <Header />

      <main className="pt-24">
        <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Icon name="CheckBadgeIcon" size={18} className="text-primary" variant="solid" />
                <span className="text-sm font-heading font-semibold text-foreground">
                  Собствена техника и опитен екип
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
                ВиК услуги и <span className="text-primary">изкопи за водопровод и канализация</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Изпълняваме изкопни дейности за водопроводни и канализационни връзки в София
                и Софийска област – траншеи за нови връзки, разкопаване при аварии и ремонт,
                направа на септични ями и пречиствателни станции,
                както и заравняване и възстановяване на терена след приключване на работата.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-2">
                  <Icon name="CheckCircleIcon" size={20} className="text-primary mt-0.5 flex-shrink-0" variant="solid" />
                  <span>Изкопи за нови водопроводни връзки</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="CheckCircleIcon" size={20} className="text-primary mt-0.5 flex-shrink-0" variant="solid" />
                  <span>Изкопи за канализационни връзки и отводняване</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="CheckCircleIcon" size={20} className="text-primary mt-0.5 flex-shrink-0" variant="solid" />
                  <span>Разкопаване при аварии и последващо възстановяване на терена</span>
                </li>
              </ul>

              <div className="flex gap-4">
                <a href="tel:+359878827128"
                  className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold"
                >
                  Обадете се сега
                </a>

                <a href="/quick-quote"
                  className="bg-primary text-white px-6 py-3 rounded-md font-semibold"
                >
                  Безплатна оферта
                </a>
              </div>
            </div>

            <div className="relative max-w-md mx-auto lg:max-w-none">
              <Image
                src="/assets/images/20251201_123557-1766602582373.jpg"
                alt="Изкопана траншея за ВиК връзка"
                width={750}
                height={550}
                className="rounded-2xl shadow-lg object-cover w-full h-[550px] lg:h-[750px]"
                priority
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
