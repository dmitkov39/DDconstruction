import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Project {
  image: string;
  alt: string;
  title: string;
  location?: string;
}

const projects: Project[] = [
  {
    image: '/assets/images/gallery/dvor-ihtiman.jpg',
    alt: 'Минибагер и камион при разчистване на двор в Ихтиман',
    title: 'Разчистване на двор',
    location: 'Ихтиман',
  },
  {
    image: '/assets/images/gallery/dvor-novi-han.jpg',
    alt: 'Скид-стий товарач при заравняване на двор в Нови хан',
    title: 'Изкоп за кабели и заравняване на двор',
    location: 'Нови хан',
  },
  {
    image: '/assets/images/gallery/zaravnyavane.jpg',
    alt: 'Заравнен двор с минибагер при къща с оранжев покрив',
    title: 'Заравняване на двор',
  },
  {
    image: '/assets/images/gallery/kanali.jpg',
    alt: 'Монтиран отводнителен канал пред жилищна сграда',
    title: 'Отводнителни канали',
    location: 'София',
  },
  {
    image: '/assets/images/gallery/borika.jpg',
    alt: 'Изкоп за септична яма в село Борика',
    title: 'Изкопи за септични ями',
    location: 'село Борика',
  },
  {
    image: '/assets/images/gallery/nasip.jpg',
    alt: 'Обратен насип на строящ се ресторант в Ихтиман',
    title: 'Обратен насип на строящ се ресторант',
    location: 'Ихтиман',
  },
];

const ProjectsPreview = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#00101f]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <Icon name="PhotoIcon" size={20} className="text-[#ffd23f]" variant="solid" />
            <span className="text-sm font-heading font-semibold text-white">Наши обекти</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
            Реални дворове, <span className="text-[#ffd23f]">реална работа</span>
          </h2>
          <p className="text-lg text-white/75 font-sans">
            Реални обекти от София и региона – снимки от нашата работа.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((p) => (
            <figure
              key={p.image}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <figcaption className="px-4 py-3">
                <p className="font-heading font-semibold text-foreground">{p.title}</p>
                {p.location && (
                  <p className="text-sm text-muted-foreground mt-1 flex items-center space-x-1">
                    <Icon name="MapPinIcon" size={16} className="text-primary" />
                    <span>{p.location}</span>
                  </p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects-portfolio"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
          >
            <span>Всички проекти</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
