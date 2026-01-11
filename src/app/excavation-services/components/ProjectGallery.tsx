'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  duration: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  description: string;
  challenges: string[];
  results: string[];
}

const projects: Project[] = [
{
  id: 1,
  title: 'Изкоп за жилищна сграда',
  category: 'Жилищно строителство',
  location: 'София, кв. Лозенец',
  duration: '12 дни',
  beforeImage: "https://images.unsplash.com/photo-1603734185526-2afdf9ceaffa",
  beforeAlt: 'Overgrown vacant lot with tall grass and scattered debris before excavation',
  afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1a0466f1c-1766580281839.png",
  afterAlt: 'Precisely excavated rectangular foundation pit with smooth walls and level bottom',
  description: 'Изкоп за основи на 4-етажна жилищна сграда с подземен паркинг',
  challenges: ['Тесен достъп', 'Близост до съседни сгради', 'Подземни води'],
  results: ['Завършен преди срок', 'Без инциденти', 'Перфектна геометрия']
},
{
  id: 2,
  title: 'Басейн с неправилна форма',
  category: 'Частни басейни',
  location: 'Варна, Евксиноград',
  duration: '8 дни',
  beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_17cdad77b-1764767457211.png",
  beforeAlt: 'Sloped backyard with uneven terrain and natural vegetation before pool excavation',
  afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11fdb1c3b-1766580280681.png",
  afterAlt: 'Completed curved pool excavation with smooth walls and integrated drainage system',
  description: 'Изкоп за луксозен басейн с органична форма и интегрирана джакузи зона',
  challenges: ['Сложна геометрия', 'Скален терен', 'Наклон 15°'],
  results: ['Точност ±1см', 'Идеален дренаж', 'Доволен клиент']
},
{
  id: 3,
  title: 'Търговски комплекс',
  category: 'Търговско строителство',
  location: 'Пловдив, Тракия',
  duration: '25 дни',
  beforeImage: "https://images.unsplash.com/photo-1642882178113-a7b008b6d454",
  beforeAlt: 'Large empty field with scattered rocks and uneven ground before commercial excavation',
  afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11d60f19c-1766580283589.png",
  afterAlt: 'Massive excavated area with terraced levels and reinforced retaining walls',
  description: 'Мащабен изкоп за търговски център с 2 подземни нива',
  challenges: ['Голям обем - 15000м³', 'Подпорни стени', 'Координация с други екипи'],
  results: ['Спазен график', '100% безопасност', 'Оптимизиран транспорт']
}];


const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showBefore, setShowBefore] = useState(true);

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-6">
            <Icon name="PhotoIcon" size={20} className="text-success" />
            <span className="text-sm font-heading font-semibold text-foreground">Нашите проекти</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Преди и <span className="text-success">след</span> нашата работа
          </h2>

          <p className="text-lg text-muted-foreground">
            Вижте реални примери от завършени проекти и качеството на нашата работа
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) =>
          <div
            key={project.id}
            className="bg-background rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl group cursor-pointer"
            onClick={() => setSelectedProject(project.id)}>

              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={project.afterImage}
                alt={project.afterAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-heading font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/80">{project.category}</p>
                </div>
                <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full">
                  <span className="text-xs font-heading font-bold text-primary-foreground">
                    {project.duration}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="MapPinIcon" size={16} />
                  <span>{project.location}</span>
                </div>

                <p className="text-sm text-foreground line-clamp-2">
                  {project.description}
                </p>

                <button className="flex items-center space-x-2 text-primary font-heading font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  <span>Виж детайли</span>
                  <Icon name="ArrowRightIcon" size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        {selectedProject &&
        <div
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}>

            <div
            className="bg-card rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>

              {projects.
            filter((p) => p.id === selectedProject).
            map((project) =>
            <div key={project.id} className="p-8">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-3xl font-heading font-bold text-foreground">
                        {project.title}
                      </h3>
                      <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors duration-300">

                        <Icon name="XMarkIcon" size={24} />
                      </button>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-heading font-semibold text-foreground">
                            {showBefore ? 'Преди' : 'След'}
                          </h4>
                          <button
                      onClick={() => setShowBefore(!showBefore)}
                      className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-sm hover:bg-opacity-90 transition-all duration-300">

                            <Icon name="ArrowPathIcon" size={16} />
                            <span>Превключи</span>
                          </button>
                        </div>
                        <div className="relative rounded-xl overflow-hidden">
                          <AppImage
                      src={showBefore ? project.beforeImage : project.afterImage}
                      alt={showBefore ? project.beforeAlt : project.afterAlt}
                      className="w-full h-[400px] object-cover" />

                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-heading font-semibold text-foreground mb-3">
                            Детайли за проекта
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <Icon name="TagIcon" size={20} className="text-primary" />
                              <span className="text-foreground">{project.category}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Icon name="MapPinIcon" size={20} className="text-primary" />
                              <span className="text-foreground">{project.location}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Icon name="ClockIcon" size={20} className="text-primary" />
                              <span className="text-foreground">{project.duration}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-heading font-semibold text-foreground mb-3">
                            Предизвикателства
                          </h4>
                          <ul className="space-y-2">
                            {project.challenges.map((challenge, idx) =>
                      <li key={idx} className="flex items-start space-x-2">
                                <Icon name="ExclamationTriangleIcon" size={20} className="text-warning flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">{challenge}</span>
                              </li>
                      )}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-heading font-semibold text-foreground mb-3">
                            Резултати
                          </h4>
                          <ul className="space-y-2">
                            {project.results.map((result, idx) =>
                      <li key={idx} className="flex items-start space-x-2">
                                <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" variant="solid" />
                                <span className="text-foreground">{result}</span>
                              </li>
                      )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted p-6 rounded-xl">
                      <p className="text-foreground leading-relaxed">{project.description}</p>
                    </div>
                  </div>
            )}
            </div>
          </div>
        }
      </div>
    </section>);

};

export default ProjectGallery;