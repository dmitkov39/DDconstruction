import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section
      className={`relative overflow-hidden bg-[#00101f] text-white pt-32 lg:pt-44 pb-16 lg:pb-24 ${className}`}
    >
      <img
        src="/assets/images/hero-bg.jpg"
        alt="Минибагер Takeuchi TB016 и скид-стий товарач Gehl 4240E на обект"
        width={1800}
        height={1013}
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#00101f]/80 via-[#00101f]/60 to-[#00101f]/85"></div>
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-muted"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight">
            Цялостно преобразяване на двора в София{' '}
            <span className="text-[#ffd23f]">– от първия изкоп до готов двор</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/90 font-sans leading-relaxed max-w-3xl mx-auto">
            Изкопи, заравняване, подпорни стени, дренаж, ВиК, настилки и засаждане на трева
            и растения – един изпълнител и една отговорност за целия двор.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+359878827128"
              className="flex flex-col items-center justify-center px-10 py-4 bg-primary text-primary-foreground rounded-xl font-cta shadow-[0_0_30px_rgba(20,184,240,0.45)] hover:bg-opacity-90 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="flex items-center space-x-3 text-xl lg:text-2xl font-bold">
                <Icon name="PhoneIcon" size={24} variant="solid" />
                <span>+359 878 827 128</span>
              </span>
              <span className="text-sm opacity-90">Безплатен оглед и оферта</span>
            </a>
            <Link
              href="/quick-quote"
              className="flex items-center justify-center space-x-3 px-8 py-4 bg-white text-[#00101f] rounded-xl font-cta font-bold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Icon name="DocumentTextIcon" size={24} variant="solid" />
              <span>Заявка за оферта</span>
            </Link>
          </div>

          <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-8 gap-y-3 pt-4 text-sm lg:text-base text-white/90">
            <li className="flex items-center justify-center space-x-2">
              <Icon name="CheckCircleIcon" size={20} className="text-[#ffd23f]" variant="solid" />
              <span>5.0 в Google · 13 отзива</span>
            </li>
            <li className="flex items-center justify-center space-x-2">
              <Icon name="CheckCircleIcon" size={20} className="text-[#ffd23f]" variant="solid" />
              <span>Над 5 години опит и собствена техника</span>
            </li>
            <li className="flex items-center justify-center space-x-2">
              <Icon name="CheckCircleIcon" size={20} className="text-[#ffd23f]" variant="solid" />
              <span>При забавяне по наша вина – без доплащане</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
