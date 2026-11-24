import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

/**
 * Общ шаблон за страниците от "Услуги". Следва визията на началната страница:
 * тъмен hero със снимка, секции, които се редуват светло/тъмно, еднакви заглавия
 * със значка, карти, стъпки, въпроси и лента с призив за действие.
 * Всяка страница подава само съдържанието си през `ServicePageConfig`.
 */

export interface HeroConfig {
  title: string;
  accent: string;
  description: string;
  image: string;
  imageAlt: string;
  badges: string[];
}

interface SectionHead {
  badgeIcon: string;
  badge: string;
  title: string;
  accent?: string;
  subtitle?: string;
}

export interface FeaturesSection extends SectionHead {
  type: 'features';
  items: { icon: string; title: string; text: string; bullets?: string[] }[];
}
export interface StepsSection extends SectionHead {
  type: 'steps';
  items: { title: string; text: string }[];
}
export interface GallerySection extends SectionHead {
  type: 'gallery';
  items: { image: string; alt: string; title: string; location?: string }[];
}
export interface FaqSection extends SectionHead {
  type: 'faq';
  items: { q: string; a: string }[];
}
export type ServiceSection = FeaturesSection | StepsSection | GallerySection | FaqSection;

export interface ServicePageConfig {
  hero: HeroConfig;
  sections: ServiceSection[];
  cta: { title: string; text: string };
  /** Цветът на иконите и номерата в светлите секции. По подразбиране е синият. */
  accent?: 'primary' | 'success';
  jsonLd?: object;
  jsonLdId?: string;
}

const NAVY = 'bg-[#00101f]';
const YELLOW = 'text-[#ffd23f]';

const PhoneButton = ({ subtitle }: { subtitle?: string }) => (
  <a
    href="tel:+359878827128"
    className="inline-flex flex-col items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-cta font-bold shadow-[0_0_28px_rgba(25,118,210,0.55)] hover:bg-opacity-90 hover:scale-105 transition-all duration-300"
  >
    <span className="flex items-center space-x-3 text-xl lg:text-2xl">
      <Icon name="PhoneIcon" size={26} variant="solid" />
      <span>+359 878 827 128</span>
    </span>
    {subtitle && <span className="text-sm font-medium opacity-90 mt-1">{subtitle}</span>}
  </a>
);

const QuoteButton = () => (
  <Link
    href="/quick-quote"
    className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-white text-[#00101f] rounded-xl font-cta font-bold text-lg lg:text-xl hover:bg-opacity-90 hover:scale-105 transition-all duration-300"
  >
    <Icon name="DocumentTextIcon" size={26} variant="solid" />
    <span>Заявка за оферта</span>
  </Link>
);

const ServiceHero = ({ hero }: { hero: HeroConfig }) => (
  <section className={`relative overflow-hidden ${NAVY} text-white pt-0 lg:pt-32 pb-12 lg:pb-20`}>
    <img
      src={hero.image}
      alt={hero.imageAlt}
      width={1600}
      height={900}
      fetchPriority="high"
      className="hidden lg:block absolute inset-0 w-full h-full object-cover"
    />
    <div className="hidden lg:block absolute inset-0 bg-gradient-to-b from-[#00101f]/80 via-[#00101f]/60 to-[#00101f]/85"></div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
        <div className="relative overflow-hidden -mx-4 px-4 py-14 sm:py-20 lg:m-0 lg:p-0 lg:overflow-visible">
          <img
            src={hero.image}
            alt={hero.imageAlt}
            width={1600}
            height={900}
            fetchPriority="high"
            className="lg:hidden absolute inset-0 w-full h-full object-cover blur-[2px] scale-105"
          />
          <div className="lg:hidden absolute inset-0 bg-[#00101f]/55"></div>
          <h1 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight">
            {hero.title} <span className={YELLOW}>{hero.accent}</span>
          </h1>
        </div>

        <p className="text-lg lg:text-xl text-white/90 font-sans leading-relaxed max-w-3xl mx-auto">
          {hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <PhoneButton subtitle="Безплатен оглед и оферта" />
          <QuoteButton />
        </div>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-2 text-base text-white/90 font-sans">
          {hero.badges.map((b) => (
            <li key={b} className="flex items-center space-x-2">
              <Icon name="CheckCircleIcon" size={20} className={YELLOW} variant="solid" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const SectionHeader = ({ head, dark }: { head: SectionHead; dark: boolean }) => (
  <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
    <div
      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6 ${
        dark ? 'bg-white/10' : 'bg-primary/10'
      }`}
    >
      <Icon
        name={head.badgeIcon}
        size={20}
        className={dark ? YELLOW : 'text-primary'}
        variant="solid"
      />
      <span
        className={`text-sm font-heading font-semibold ${dark ? 'text-white' : 'text-foreground'}`}
      >
        {head.badge}
      </span>
    </div>
    <h2
      className={`text-3xl lg:text-4xl xl:text-5xl font-heading font-bold mb-6 ${
        dark ? 'text-white' : 'text-foreground'
      }`}
    >
      {head.title}
      {head.accent && (
        <>
          {' '}
          <span className={dark ? YELLOW : 'text-primary'}>{head.accent}</span>
        </>
      )}
    </h2>
    {head.subtitle && (
      <p className={`text-lg font-sans ${dark ? 'text-white/75' : 'text-muted-foreground'}`}>
        {head.subtitle}
      </p>
    )}
  </div>
);

const FeaturesBlock = ({
  section,
  accent,
}: {
  section: FeaturesSection;
  accent: 'primary' | 'success';
}) => {
  const iconWrap = accent === 'success' ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary';
  const check = accent === 'success' ? 'text-success' : 'text-primary';
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {section.items.map((item) => (
        <div
          key={item.title}
          className="bg-card rounded-xl p-6 lg:p-8 shadow-md border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${iconWrap}`}>
            <Icon name={item.icon} size={28} />
          </div>
          <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
          <p className="text-muted-foreground font-sans leading-relaxed">{item.text}</p>
          {item.bullets && (
            <ul className="space-y-2 mt-4">
              {item.bullets.map((b) => (
                <li key={b} className="flex items-start space-x-2">
                  <Icon
                    name="CheckCircleIcon"
                    size={18}
                    className={`${check} mt-0.5 flex-shrink-0`}
                    variant="solid"
                  />
                  <span className="text-foreground font-sans">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

const StepsBlock = ({ section, dark }: { section: StepsSection; dark: boolean }) => (
  <div
    className={`grid md:grid-cols-2 gap-6 max-w-7xl mx-auto ${
      section.items.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
    }`}
  >
    {section.items.map((s, i) => (
      <div
        key={s.title}
        className={`rounded-xl p-6 lg:p-8 ${
          dark ? 'bg-white/5 border border-white/10' : 'bg-card border border-border shadow-md'
        }`}
      >
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg mb-5">
          <span className="text-2xl font-heading font-bold text-primary-foreground">{i + 1}</span>
        </div>
        <h3
          className={`text-xl font-heading font-bold mb-2 ${dark ? 'text-white' : 'text-foreground'}`}
        >
          {s.title}
        </h3>
        <p className={`font-sans leading-relaxed ${dark ? 'text-white/75' : 'text-muted-foreground'}`}>
          {s.text}
        </p>
      </div>
    ))}
  </div>
);

const GalleryBlock = ({ section }: { section: GallerySection }) => (
  <div
    className={`grid sm:grid-cols-2 gap-6 max-w-7xl mx-auto ${
      section.items.length % 3 === 0 ? 'lg:grid-cols-3' : ''
    }`}
  >
    {section.items.map((p) => (
      <figure key={p.image} className="bg-card rounded-xl overflow-hidden shadow-lg">
        <div className="aspect-[4/3] overflow-hidden">
          <AppImage src={p.image} alt={p.alt} className="w-full h-full object-cover" />
        </div>
        <figcaption className="px-4 py-3">
          <div className="font-heading font-semibold text-foreground">{p.title}</div>
          {p.location && (
            <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-1">
              <Icon name="MapPinIcon" size={14} className="text-primary" />
              <span>{p.location}</span>
            </div>
          )}
        </figcaption>
      </figure>
    ))}
  </div>
);

const FaqBlock = ({ section, dark }: { section: FaqSection; dark: boolean }) => (
  <div className="max-w-3xl mx-auto space-y-4">
    {section.items.map((f) => (
      <details
        key={f.q}
        className={`group rounded-xl p-5 ${
          dark ? 'bg-white/5 border border-white/10' : 'bg-card border border-border shadow-sm'
        }`}
      >
        <summary
          className={`cursor-pointer font-heading font-semibold text-lg flex items-center justify-between list-none ${
            dark ? 'text-white' : 'text-foreground'
          }`}
        >
          <span>{f.q}</span>
          <Icon
            name="ChevronDownIcon"
            size={20}
            className="flex-shrink-0 ml-4 transition-transform duration-300 group-open:rotate-180"
          />
        </summary>
        <p
          className={`leading-relaxed mt-4 font-sans ${dark ? 'text-white/75' : 'text-muted-foreground'}`}
        >
          {f.a}
        </p>
      </details>
    ))}
  </div>
);

const CtaBand = ({ cta, blue }: { cta: { title: string; text: string }; blue: boolean }) => (
  <section className={`py-16 lg:py-24 ${blue ? 'bg-primary' : NAVY}`}>
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-6">
        {cta.title}
      </h2>
      <p className="text-lg text-white/80 font-sans mb-10">{cta.text}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {blue ? (
          <a
            href="tel:+359878827128"
            className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#00101f] text-white rounded-xl font-cta font-bold text-xl hover:scale-105 transition-all duration-300"
          >
            <Icon name="PhoneIcon" size={26} variant="solid" />
            <span>+359 878 827 128</span>
          </a>
        ) : (
          <PhoneButton />
        )}
        <QuoteButton />
      </div>
      <p className="text-sm text-white/70 font-sans mt-8">Работим всеки ден от 07:00 до 20:00</p>
    </div>
  </section>
);

const ServicePage = ({ config }: { config: ServicePageConfig }) => {
  const accent = config.accent ?? 'primary';
  const count = config.sections.length;
  // Секциите се редуват светло/тъмно, като първата е светла (след тъмния hero).
  const isDark = (i: number) => i % 2 === 1;
  const lastIsDark = count > 0 && isDark(count - 1);

  return (
    <main className="min-h-screen">
      {config.jsonLd && (
        <Script
          id={config.jsonLdId ?? 'ld-json-service'}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(config.jsonLd) }}
        />
      )}
      <Header />
      <div className="pt-20">
        <ServiceHero hero={config.hero} />

        {config.sections.map((section, i) => {
          const dark = isDark(i);
          return (
            <section
              key={`${section.type}-${i}`}
              className={`py-16 lg:py-24 ${dark ? NAVY : 'bg-white'}`}
            >
              <div className="container mx-auto px-4">
                <SectionHeader head={section} dark={dark} />
                {section.type === 'features' && <FeaturesBlock section={section} accent={accent} />}
                {section.type === 'steps' && <StepsBlock section={section} dark={dark} />}
                {section.type === 'gallery' && <GalleryBlock section={section} />}
                {section.type === 'faq' && <FaqBlock section={section} dark={dark} />}
              </div>
            </section>
          );
        })}

        <CtaBand cta={config.cta} blue={lastIsDark} />
        <Footer />
      </div>
    </main>
  );
};

export default ServicePage;
