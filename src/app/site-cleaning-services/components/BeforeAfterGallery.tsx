'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: number;
  title: string;
  location: string;
  duration: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  description: string;
  wasteRemoved: string;
}

const BeforeAfterGallery = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const projects: Project[] = [
  {
    id: 1,
    title: 'Почистване на жилищен комплекс',
    location: 'София, кв. Младост',
    duration: '3 дни',
    beforeImage: "https://images.unsplash.com/photo-1641892238173-a28daf26c776",
    beforeAlt: 'Строителна площадка с разхвърляни материали, дървени палети и строителни отпадъци',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_16f1cf65a-1766508893153.png",
    afterAlt: 'Чиста строителна площадка с подредени материали и почистена повърхност',
    description: 'Комплексно почистване след завършване на груб строеж на жилищен комплекс',
    wasteRemoved: '15 тона'
  },
  {
    id: 2,
    title: 'Изчистване на промишлен терен',
    location: 'Пловдив, Индустриална зона',
    duration: '5 дни',
    beforeImage: "https://images.unsplash.com/photo-1686340520100-a6a5f676b265",
    beforeAlt: 'Изоставен промишлен терен с ръждясали метални конструкции и растителност',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_174a60d51-1764767455932.png",
    afterAlt: 'Изчистен промишлен терен с равна повърхност готова за ново строителство',
    description: 'Демонтаж на стари конструкции и пълно изчистване на промишлен терен',
    wasteRemoved: '28 тона'
  },
  {
    id: 3,
    title: 'Почистване след ремонт',
    location: 'Варна, Бизнес сграда',
    duration: '2 дни',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd4e1ad9-1766580281830.png",
    beforeAlt: 'Офисно помещение с прах от ремонт, строителни материали и защитни найлони',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1659b2d3d-1766600560768.png",
    afterAlt: 'Чисто офисно помещение с блестящи подове и измити прозорци',
    description: 'Финално почистване на офис сграда след основен ремонт',
    wasteRemoved: '4 тона'
  },
  {
    id: 4,
    title: 'Изчистване на строителна площадка',
    location: 'Бургас, Морска градина',
    duration: '4 дни',
    beforeImage: "https://images.unsplash.com/photo-1629197773386-9c3df58462af",
    beforeAlt: 'Строителна площадка с купчини пясък, бетонови блокове и строителни отпадъци',
    afterImage: "https://images.unsplash.com/photo-1689596312367-39a4461504c1",
    afterAlt: 'Чиста строителна площадка с равна повърхност и подредени материали',
    description: 'Почистване на строителна площадка и подготовка за следващ етап',
    wasteRemoved: '12 тона'
  }];


  const currentProject = projects[activeProject];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Преди и след почистване
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Вижте трансформацията на нашите проекти - от замърсени площадки до перфектно почистени обекти
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
            <div className="relative aspect-video bg-muted overflow-hidden">
              <AppImage
                src={showBefore ? currentProject.beforeImage : currentProject.afterImage}
                alt={showBefore ? currentProject.beforeAlt : currentProject.afterAlt}
                className="w-full h-full object-cover" />

              
              <div className="absolute top-4 left-4 bg-foreground/90 text-background px-4 py-2 rounded-lg font-heading font-bold text-sm">
                {showBefore ? 'ПРЕДИ' : 'СЛЕД'}
              </div>

              <button
                onClick={() => setShowBefore(!showBefore)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="Toggle before/after view">

                <Icon name="ArrowsRightLeftIcon" size={28} />
              </button>
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {currentProject.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPinIcon" size={16} />
                      <span>{currentProject.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="ClockIcon" size={16} />
                      <span>{currentProject.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="TrashIcon" size={16} />
                      <span>{currentProject.wasteRemoved} отпадъци</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                {currentProject.description}
              </p>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setActiveProject((prev) => prev > 0 ? prev - 1 : projects.length - 1)}
                  className="flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors duration-300"
                  aria-label="Previous project">

                  <Icon name="ChevronLeftIcon" size={20} />
                  <span className="text-sm font-heading font-semibold">Предишен</span>
                </button>

                <div className="flex items-center space-x-2">
                  {projects.map((_, index) =>
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeProject ? 'bg-primary w-8' : 'bg-muted-foreground/30'}`
                    }
                    aria-label={`Go to project ${index + 1}`} />

                  )}
                </div>

                <button
                  onClick={() => setActiveProject((prev) => prev < projects.length - 1 ? prev + 1 : 0)}
                  className="flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors duration-300"
                  aria-label="Next project">

                  <span className="text-sm font-heading font-semibold">Следващ</span>
                  <Icon name="ChevronRightIcon" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default BeforeAfterGallery;