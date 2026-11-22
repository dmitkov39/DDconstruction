import Link from 'next/link';

export default function ClientTypesBanner() {
  return (
    <section className="bg-white border-b border-border py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-lg md:text-xl text-muted-foreground font-medium">
          Строител, инвеститор или фирма, за които срокът е по-важен от най-ниската цена?{' '}
          <Link
            href="/excavation-services"
            className="font-bold text-foreground underline underline-offset-4 hover:text-primary transition-colors duration-300"
          >
            Изкопи, ВиК и транспорт за обекти →
          </Link>
        </p>
      </div>
    </section>
  );
}
