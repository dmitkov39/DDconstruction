'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';
import Icon from '@/components/ui/AppIcon';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center">
        <Icon name="ShieldCheckIcon" size={28} className="text-primary mr-3" />
        {title}
      </h2>
      <div className="text-foreground/80 font-sans leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
};

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
                <Icon name="ShieldCheckIcon" size={40} className="text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Политика за поверителност
              </h1>
              <p className="text-xl text-white/80 font-sans">
                Вашата поверителност е важна за нас
              </p>
              <p className="text-sm text-white/60 font-sans mt-4">
                Последна актуализация: Декември 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="bg-primary/5 border-l-4 border-primary p-6 mb-12 rounded-r-lg">
                <p className="text-foreground/90 font-sans leading-relaxed">
                  D&D Construction се ангажира да защитава личните данни на своите клиенти и посетители. 
                  Тази политика за поверителност обяснява как събираме, използваме и защитаваме вашата информация 
                  в съответствие с българското законодателство и Общия регламент за защита на данните (GDPR).
                </p>
              </div>

              {/* Section 1 */}
              <Section title="1. Събиране на лични данни">
                <p>
                  Ние събираме лични данни, които ни предоставяте доброволно при използване на нашите услуги:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Контактна информация:</strong> име, телефонен номер, имейл адрес, адрес на обекта</li>
                  <li><strong>Информация за проекта:</strong> тип услуга, размер на терена, специфични изисквания</li>
                  <li><strong>Комуникация:</strong> съдържание на запитвания, оферти и кореспонденция</li>
                  <li><strong>Технически данни:</strong> IP адрес, тип браузър, операционна система (автоматично събрани)</li>
                </ul>
              </Section>

              {/* Section 2 */}
              <Section title="2. Цели на обработка на данните">
                <p>
                  Вашите лични данни се обработват за следните цели:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Предоставяне на строителни услуги и изпълнение на договорни задължения</li>
                  <li>Подготовка и изпращане на оферти за строителни проекти</li>
                  <li>Комуникация относно вашите запитвания и проекти</li>
                  <li>Подобряване на качеството на нашите услуги</li>
                  <li>Спазване на законови и регулаторни изисквания</li>
                  <li>Маркетингови цели (само с ваше изрично съгласие)</li>
                </ul>
              </Section>

              {/* Section 3 */}
              <Section title="3. Правно основание за обработка">
                <p>
                  Обработваме вашите лични данни на следните правни основания:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Изпълнение на договор:</strong> за предоставяне на заявените строителни услуги</li>
                  <li><strong>Законово задължение:</strong> за спазване на счетоводни и данъчни изисквания</li>
                  <li><strong>Законен интерес:</strong> за подобряване на услугите и бизнес операциите</li>
                  <li><strong>Съгласие:</strong> за маркетингови комуникации и бюлетини</li>
                </ul>
              </Section>

              {/* Section 4 */}
              <Section title="4. Споделяне на данни с трети страни">
                <p>
                  Ние не продаваме вашите лични данни. Споделяме информация само когато е необходимо:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Подизпълнители:</strong> специализирани строителни екипи, работещи по вашия проект</li>
                  <li><strong>Доставчици на услуги:</strong> счетоводни, правни и IT услуги</li>
                  <li><strong>Държавни органи:</strong> при законово изискване (НАП, общини, инспекции)</li>
                  <li><strong>Застрахователи:</strong> при необходимост за обработка на застрахователни претенции</li>
                </ul>
                <p className="mt-4">
                  Всички трети страни са задължени да защитават вашите данни в съответствие със закона.
                </p>
              </Section>

              {/* Section 5 */}
              <Section title="5. Използване на бисквитки (Cookies)">
                <p>
                  Нашият уебсайт използва бисквитки за подобряване на потребителското изживяване:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Необходими бисквитки:</strong> осигуряват основни функции на сайта</li>
                  <li><strong>Аналитични бисквитки:</strong> помагат ни да разберем как посетителите използват сайта</li>
                  <li><strong>Функционални бисквитки:</strong> запомнят вашите предпочитания</li>
                </ul>
                <p className="mt-4">
                  Можете да управлявате бисквитките чрез настройките на вашия браузър.
                </p>
              </Section>

              {/* Section 6 */}
              <Section title="6. Срок на съхранение на данните">
                <p>
                  Съхраняваме вашите лични данни само толкова дълго, колкото е необходимо:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Активни проекти:</strong> през целия период на изпълнение на проекта</li>
                  <li><strong>Завършени проекти:</strong> 5 години след приключване (счетоводни изисквания)</li>
                  <li><strong>Маркетингови данни:</strong> до оттегляне на съгласието</li>
                  <li><strong>Запитвания без договор:</strong> до 2 години</li>
                </ul>
              </Section>

              {/* Section 7 */}
              <Section title="7. Вашите права по GDPR">
                <p>
                  Имате следните права относно вашите лични данни:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Право на достъп:</strong> да получите копие от данните, които съхраняваме за вас</li>
                  <li><strong>Право на коригиране:</strong> да поискате корекция на неточни данни</li>
                  <li><strong>Право на изтриване:</strong> да поискате изтриване на вашите данни ("право да бъдеш забравен")</li>
                  <li><strong>Право на ограничаване:</strong> да ограничите обработката на вашите данни</li>
                  <li><strong>Право на преносимост:</strong> да получите данните си в структуриран формат</li>
                  <li><strong>Право на възражение:</strong> да възразите срещу обработката на данните</li>
                  <li><strong>Право на оттегляне на съгласие:</strong> по всяко време за маркетингови цели</li>
                </ul>
                <p className="mt-4">
                  За упражняване на вашите права, моля свържете се с нас на: <strong>ddconstruction988@gmail.com</strong>
                </p>
              </Section>

              {/* Section 8 */}
              <Section title="8. Сигурност на данните">
                <p>
                  Прилагаме подходящи технически и организационни мерки за защита на вашите данни:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Криптиране на данните при предаване (SSL/TLS)</li>
                  <li>Ограничен достъп до лични данни само за упълномощени служители</li>
                  <li>Редовни резервни копия и защита срещу загуба на данни</li>
                  <li>Защита срещу неоторизиран достъп и киберзаплахи</li>
                  <li>Обучение на персонала за защита на данните</li>
                </ul>
              </Section>

              {/* Section 9 */}
              <Section title="9. Права на непълнолетни">
                <p>
                  Нашите услуги са предназначени за лица над 18 години. Не събираме съзнателно лични данни от 
                  непълнолетни без съгласието на родител или настойник. Ако установим, че сме събрали данни от 
                  непълнолетно лице без подходящо съгласие, ще предприемем стъпки за изтриване на информацията.
                </p>
              </Section>

              {/* Section 10 */}
              <Section title="10. Промени в политиката за поверителност">
                <p>
                  Можем периодично да актуализираме тази политика за поверителност. Всички промени ще бъдат 
                  публикувани на тази страница с нова дата на актуализация. При съществени промени ще ви 
                  уведомим по имейл или чрез известие на нашия уебсайт.
                </p>
              </Section>

              {/* Section 11 */}
              <Section title="11. Контакт за въпроси относно поверителността">
                <div className="bg-foreground/5 p-6 rounded-lg">
                  <p className="mb-4">
                    За въпроси, коментари или искания относно тази политика за поверителност или обработката на 
                    вашите лични данни, моля свържете се с нас:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Icon name="BuildingOfficeIcon" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">D&D Construction</p>
                        <p className="text-sm text-foreground/70">1138 София, България</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="EnvelopeIcon" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Имейл:</p>
                        <a href="mailto:ddconstruction988@gmail.com" className="text-primary hover:underline">
                          ddconstruction988@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="PhoneIcon" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Телефон:</p>
                        <p className="text-sm">+359 878 827 128</p>
                        <p className="text-sm text-destructive">+359 885 078 098 (24/7)</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-foreground/70">
                    Имате право да подадете жалба до Комисията за защита на личните данни (КЗЛД) на адрес: 
                    София 1592, бул. "Проф. Цветан Лазаров" № 2
                  </p>
                </div>
              </Section>

              {/* Back to Home */}
              <div className="mt-12 text-center">
                <Link 
                  href="/homepage" 
                  className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  <Icon name="HomeIcon" size={20} />
                  <span>Към начална страница</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;