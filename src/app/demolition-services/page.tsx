import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';

export const metadata: Metadata = {
  title: 'Събаряне на стари постройки София | D&D Construction',
  description:
    'Събаряне на стари къщи, навеси, гаражи и постройки в София и Софийска област. Извозване на отпадъци и почистване на терена.',
};

export default function DemolitionServicesPage() {
  return (
    <>
      <Header />

      <main className="pt-24">
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Събаряне на стари постройки
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            D&D Construction предлага събаряне на стари постройки в София и
            Софийска област – къщи, навеси, гаражи, стопански сгради и други
            конструкции. Извършваме услугата цялостно: оглед, събаряне,
            извозване на отпадъците и почистване на терена.
          </p>

          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Работим с подходяща техника според достъпа и състоянието на обекта.
            Подходящо решение е за имоти, които трябва да бъдат освободени за
            нов строеж, дворна площ или подготовка на терен.
          </p>

          <a
            href="tel:+359878827128"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold"
          >
            Обадете се за оглед
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
