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
        <Icon name="DocumentTextIcon" size={28} className="text-primary mr-3" />
        {title}
      </h2>
      <div className="text-foreground/80 font-sans leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
};

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
                <Icon name="DocumentTextIcon" size={40} className="text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Общи условия
              </h1>
              <p className="text-xl text-white/80 font-sans">
                Условия за ползване на услугите на D&D Construction
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
                  Добре дошли в D&D Construction. Използвайки нашите услуги, вие се съгласявате с настоящите 
                  общи условия. Моля, прочетете внимателно тези условия преди да използвате нашите строителни услуги. 
                  Ако не сте съгласни с някое от условията, моля не използвайте нашите услуги.
                </p>
              </div>

              {/* Section 1 */}
              <Section title="1. Определения и обхват">
                <p>
                  <strong>1.1.</strong> "Изпълнител" означава D&D Construction, регистрирана строителна компания в България.
                </p>
                <p>
                  <strong>1.2.</strong> "Клиент" означава физическо или юридическо лице, което заявява или ползва нашите услуги.
                </p>
                <p>
                  <strong>1.3.</strong> "Услуги" включват изкопни дейности, почистване на обекти, заравняване на терени, 
                  транспорт на материали и други строителни услуги, предлагани от Изпълнителя.
                </p>
                <p>
                  <strong>1.4.</strong> Тези общи условия се прилагат за всички договори и услуги, предоставяни от D&D Construction.
                </p>
              </Section>

              {/* Section 2 */}
              <Section title="2. Заявяване на услуги и оферти">
                <p>
                  <strong>2.1.</strong> Клиентът може да заяви услуга чрез телефон, имейл или формата за контакт на уебсайта.
                </p>
                <p>
                  <strong>2.2.</strong> Всички оферти са валидни 30 дни от датата на издаване, освен ако не е посочено друго.
                </p>
                <p>
                  <strong>2.3.</strong> Офертите са ориентировъчни и могат да бъдат коригирани след оглед на обекта.
                </p>
                <p>
                  <strong>2.4.</strong> Договорът влиза в сила след писмено потвърждение от двете страни или при започване на работата.
                </p>
                <p>
                  <strong>2.5.</strong> Изпълнителят си запазва правото да откаже заявка без обяснение.
                </p>
              </Section>

              {/* Section 3 */}
              <Section title="3. Цени и плащания">
                <p>
                  <strong>3.1.</strong> Всички цени са в български лева (BGN) и евро (EU), освен ако не е посочено друго.
                </p>
                <p>
                  <strong>3.2.</strong> Цените се определят въз основа на обем работа, тип услуга, местоположение и достъпност на обекта.
                </p>
                <p>
                  <strong>3.3.</strong> При промяна в обхвата на работата, цената може да бъде коригирана след съгласие с Клиента.
                </p>
                <p>
                  <strong>3.4.</strong> <strong>Условия за плащане:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Аванс от 30-50% при подписване на договора (в зависимост от проекта)</li>
                  <li>Междинни плащания според етапите на изпълнение</li>
                  <li>Окончателно плащане след приемане на работата</li>
                </ul>
                <p>
                  <strong>3.5.</strong> Приемаме плащания в брой, банков превод или по банкова сметка.
                </p>
                <p>
                  <strong>3.6.</strong> При забава на плащане над 7 дни, Изпълнителят има право да спре работата и да начисли лихва за забава.
                </p>
              </Section>

              {/* Section 4 */}
              <Section title="4. Изпълнение на услугите">
                <p>
                  <strong>4.1.</strong> Изпълнителят се задължава да извърши услугите качествено, професионално и в договорените срокове.
                </p>
                <p>
                  <strong>4.2.</strong> Сроковете за изпълнение са ориентировъчни и могат да бъдат удължени при:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Неблагоприятни метеорологични условия (проливен дъжд, сняг, замръзване)</li>
                  <li>Непредвидени обстоятелства на обекта (скали, подземни комуникации)</li>
                  <li>Забавяне на плащанията от страна на Клиента</li>
                  <li>Форсмажорни обстоятелства</li>
                </ul>
                <p>
                  <strong>4.3.</strong> Клиентът се задължава да осигури свободен достъп до обекта и необходимите разрешителни.
                </p>
                <p>
                  <strong>4.4.</strong> Изпълнителят използва собствена техника и оборудване, освен ако не е договорено друго.
                </p>
              </Section>

              {/* Section 5 */}
              <Section title="5. Отговорности на Клиента">
                <p>
                  <strong>5.1.</strong> Клиентът се задължава да предоставя точна информация за обекта и изискванията.
                </p>
                <p>
                  <strong>5.2.</strong> Клиентът носи отговорност за наличието на необходимите разрешителни и документи.
                </p>
                <p>
                  <strong>5.3.</strong> Клиентът трябва да уведоми Изпълнителя за подземни комуникации, кабели и тръбопроводи.
                </p>
                <p>
                  <strong>5.4.</strong> Клиентът осигурява достъп до вода и електричество, ако е необходимо.
                </p>
                <p>
                  <strong>5.5.</strong> При работа на частен имот, Клиентът отговаря за уведомяване на съседи при необходимост.
                </p>
              </Section>

              {/* Section 6 */}
              <Section title="6. Отговорности на Изпълнителя">
                <p>
                  <strong>6.1.</strong> Изпълнителят носи отговорност за качеството на извършената работа.
                </p>
                <p>
                  <strong>6.2.</strong> Изпълнителят осигурява застраховка "Гражданска отговорност" за своята дейност.
                </p>
                <p>
                  <strong>6.3.</strong> Изпълнителят спазва всички приложими норми за безопасност и опазване на околната среда.
                </p>
                <p>
                  <strong>6.4.</strong> Изпълнителят не носи отговорност за:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Щети, причинени от неправилна информация, предоставена от Клиента</li>
                  <li>Повреди на скрити подземни комуникации, за които не е уведомен</li>
                  <li>Забавяне поради метеорологични условия или форсмажорни обстоятелства</li>
                  <li>Косвени щети или пропуснати ползи</li>
                </ul>
              </Section>

              {/* Section 7 */}
              <Section title="7. Гаранции и рекламации">
                <p>
                  <strong>7.1.</strong> Изпълнителят предоставя гаранция от 6 месеца за извършената работа при нормални условия на експлоатация.
                </p>
                <p>
                  <strong>7.2.</strong> Гаранцията не покрива:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Естествено износване и стареене</li>
                  <li>Щети от неправилна експлоатация или поддръжка</li>
                  <li>Промени, извършени от трети лица след приемане на работата</li>
                  <li>Природни бедствия и форсмажорни обстоятелства</li>
                </ul>
                <p>
                  <strong>7.3.</strong> Рекламациите се приемат в писмен вид в рамките на гаранционния срок.
                </p>
                <p>
                  <strong>7.4.</strong> Изпълнителят се задължава да отстрани основателни рекламации в разумен срок.
                </p>
              </Section>

              {/* Section 8 */}
              <Section title="8. Анулиране и промени">
                <p>
                  <strong>8.1.</strong> Клиентът може да анулира заявка до 48 часа преди началото на работата без санкции.
                </p>
                <p>
                  <strong>8.2.</strong> При анулиране по-късно от 48 часа, Клиентът дължи 30% от стойността на договора.
                </p>
                <p>
                  <strong>8.3.</strong> При анулиране след започване на работата, Клиентът заплаща извършената работа плюс 50% от остатъка.
                </p>
                <p>
                  <strong>8.4.</strong> Изпълнителят може да анулира договор при неплащане или невъзможност за изпълнение.
                </p>
                <p>
                  <strong>8.5.</strong> Промени в обхвата на работата се договарят писмено и могат да променят цената и срока.
                </p>
              </Section>

              {/* Section 9 */}
              <Section title="9. Използване на техника и оборудване">
                <p>
                  <strong>9.1.</strong> Изпълнителят използва модерна и сертифицирана строителна техника.
                </p>
                <p>
                  <strong>9.2.</strong> Всички машини се обслужват от квалифицирани оператори.
                </p>
                <p>
                  <strong>9.3.</strong> Техниката се използва в съответствие с техническите изисквания и норми за безопасност.
                </p>
                <p>
                  <strong>9.4.</strong> При повреда на техника, Изпълнителят осигурява резервна машина в най-кратък срок.
                </p>
              </Section>

              {/* Section 10 */}
              <Section title="10. Безопасност и околна среда">
                <p>
                  <strong>10.1.</strong> Изпълнителят спазва всички изисквания за безопасност при строителни работи.
                </p>
                <p>
                  <strong>10.2.</strong> Работният персонал използва лични предпазни средства.
                </p>
                <p>
                  <strong>10.3.</strong> Строителните отпадъци се извозват и депонират на законни места.
                </p>
                <p>
                  <strong>10.4.</strong> При работа в населено място се спазват изискванията за шум и работно време.
                </p>
                <p>
                  <strong>10.5.</strong> Изпълнителят предприема мерки за минимизиране на прах и замърсяване.
                </p>
              </Section>

              {/* Section 11 */}
              <Section title="11. Спешни услуги">
                <p>
                  <strong>11.1.</strong> D&D Construction предлага 24/7 спешни услуги на телефон +359 885 078 098.
                </p>
                <p>
                  <strong>11.2.</strong> Спешните услуги включват аварийни изкопи, почистване след бедствия и неотложни ремонти.
                </p>
                <p>
                  <strong>11.3.</strong> Цените за спешни услуги могат да бъдат с надценка спрямо стандартните тарифи.
                </p>
                <p>
                  <strong>11.4.</strong> Времето за реакция при спешни случаи е до 2 часа в рамките на София и областта.
                </p>
              </Section>

              {/* Section 12 */}
              <Section title="12. Сезонни особености">
                <p>
                  <strong>12.1.</strong> Някои услуги са сезонно зависими и могат да бъдат ограничени през зимата.
                </p>
                <p>
                  <strong>12.2.</strong> При неблагоприятни метеорологични условия работата може да бъде отложена за безопасност.
                </p>
                <p>
                  <strong>12.3.</strong> Заравняване на терени и изкопи се препоръчват през пролетта и лятото.
                </p>
                <p>
                  <strong>12.4.</strong> Клиентът се уведомява своевременно за евентуални отлагания поради времето.
                </p>
              </Section>

              {/* Section 13 */}
              <Section title="13. Поверителност и защита на данните">
                <p>
                  <strong>13.1.</strong> Изпълнителят се задължава да пази поверителността на информацията за Клиента.
                </p>
                <p>
                  <strong>13.2.</strong> Личните данни се обработват в съответствие с Политиката за поверителност и GDPR.
                </p>
                <p>
                  <strong>13.3.</strong> Снимки и информация за проекти могат да се използват за маркетинг само със съгласие на Клиента.
                </p>
              </Section>

              {/* Section 14 */}
              <Section title="14. Разрешаване на спорове">
                <p>
                  <strong>14.1.</strong> Страните се задължават да решават спорове чрез преговори и добра воля.
                </p>
                <p>
                  <strong>14.2.</strong> При невъзможност за споразумение, спорът се отнася до компетентния съд в София.
                </p>
                <p>
                  <strong>14.3.</strong> Приложимо е българското законодателство.
                </p>
              </Section>

              {/* Section 15 */}
              <Section title="15. Заключителни разпоредби">
                <p>
                  <strong>15.1.</strong> Тези общи условия могат да бъдат променяни от Изпълнителя с предизвестие на уебсайта.
                </p>
                <p>
                  <strong>15.2.</strong> Промените влизат в сила 7 дни след публикуване.
                </p>
                <p>
                  <strong>15.3.</strong> При противоречие между общите условия и индивидуален договор, договорът има предимство.
                </p>
                <p>
                  <strong>15.4.</strong> Ако някоя разпоредба е невалидна, останалите условия остават в сила.
                </p>
                <p>
                  <strong>15.5.</strong> За неуредени въпроси се прилага българското законодателство.
                </p>
              </Section>

              {/* Contact Section */}
              <Section title="16. Контакти за въпроси">
                <div className="bg-foreground/5 p-6 rounded-lg">
                  <p className="mb-4">
                    За въпроси относно тези общи условия или нашите услуги, моля свържете се с нас:
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
                        <p className="text-sm text-destructive">+359 885 078 098 (24/7 Спешни услуги)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>

              {/* Acceptance Notice */}
              <div className="bg-primary/10 border border-primary/30 p-6 rounded-lg mt-8">
                <div className="flex items-start space-x-3">
                  <Icon name="InformationCircleIcon" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Приемане на условията</p>
                    <p className="text-sm text-foreground/80">
                      Използвайки услугите на D&D Construction, вие потвърждавате, че сте прочели, разбрали и 
                      приели тези общи условия. Ако не сте съгласни с някое от условията, моля не използвайте нашите услуги.
                    </p>
                  </div>
                </div>
              </div>

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

export default TermsAndConditionsPage;