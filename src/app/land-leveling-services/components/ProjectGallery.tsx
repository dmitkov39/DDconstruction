'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: number;
  title: string;
  location: string;
  area: string;
  duration: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  description: string;
  challenges: string[];
  results: string[];
}

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'before' | 'after'>('before');

  const projects: Project[] = [
  {
    id: 1,
    title: 'Жилищен комплекс София',
    location: 'гр. София, кв. Младост',
    area: '3500 м²',
    duration: '12 дни',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_17cdad77b-1764767457211.png",
    beforeAlt: 'Uneven terrain with rocks and vegetation before leveling work',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_174a60d51-1764767455932.png",
    afterAlt: 'Perfectly leveled construction site with smooth compacted soil ready for building',
    description: 'Заравняване на неравен терен с наклон 15% за изграждане на жилищен комплекс',
    challenges: [
    'Висока разлика в нивата (до 4 м)',
    'Скалиста почва в северната част',
    'Необходимост от дренажна система'],

    results: [
    'Постигната прецизност ±1.5 см',
    'Изградена дренажна система 180 м',
    'Уплътняване 97% по Проктор']

  },
  {
    id: 2,
    title: 'Индустриален парк Пловдив',
    location: 'гр. Пловдив, Промишлена зона',
    area: '8000 м²',
    duration: '18 дни',
    beforeImage: "https://images.unsplash.com/photo-1675583116780-5d4740308a33",
    beforeAlt: 'Large industrial plot with uneven ground and debris scattered across area',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_174a60d51-1764767455932.png",
    afterAlt: 'Expansive leveled industrial site with precise grading and drainage channels',
    description: 'Подготовка на голяма площ за складова база с тежки товари',
    challenges: [
    'Голяма площ за обработка',
    'Високи изисквания за носимост',
    'Кратък срок за изпълнение'],

    results: [
    'Носимост 250 kN/m²',
    'Дренажна мрежа 450 м',
    'Завършено 2 дни преди срока']

  },
  {
    id: 3,
    title: 'Спортен комплекс Варна',
    location: 'гр. Варна, кв. Аспарухово',
    area: '5200 м²',
    duration: '15 дни',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1da3b8eed-1766580281508.png",
    beforeAlt: 'Sloped terrain with grass and uneven surface before sports facility preparation',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_165b435b8-1768053958367.png",
    afterAlt: 'Flat leveled sports ground with perfect grading and drainage system installed',
    description: 'Изравняване на терен за футболно игрище и лекоатлетическа писта',
    challenges: [
    'Прецизни изисквания за наклон',
    'Специална дренажна система',
    'Работа в близост до жилищни сгради'],

    results: [
    'Наклон 0.5% за отводняване',
    'Подпочвен дренаж 320 м',
    'Нулеви оплаквания от съседи']

  },
  {
    id: 4,
    title: 'Селскостопански терен Стара Загора',
    location: 'обл. Стара Загора, с. Малка Верея',
    area: '12000 м²',
    duration: '22 дни',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1da8d293d-1768053957877.png",
    beforeAlt: 'Agricultural land with irregular terrain and natural vegetation before leveling',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ea04dd74-1766337705639.png",
    afterAlt: 'Large agricultural field perfectly leveled with irrigation channels and smooth surface',
    description: 'Подготовка на земеделска земя за оранжерии с напоителна система',
    challenges: [
    'Много голяма площ',
    'Интеграция с напоителна система',
    'Запазване на плодороден слой'],

    results: [
    'Запазен плодороден слой 40 см',
    'Напоителни канали 680 м',
    'Оптимален наклон за напояване']

  }];


  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Реализирани проекти
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Преди и след - вижте трансформацията на терените с нашата работа
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) =>
          <div
            key={project.id}
            className="bg-card rounded-lg shadow-sm overflow-hidden border border-border hover:shadow-md transition-all duration-300">

              <div className="relative h-80 overflow-hidden group">
                <AppImage
                src={viewMode === 'before' ? project.beforeImage : project.afterImage}
                alt={viewMode === 'before' ? project.beforeAlt : project.afterAlt}
                className="w-full h-full object-cover" />

                
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  <div className="bg-card/95 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="text-sm font-bold text-foreground">{project.title}</p>
                  </div>
                  <button
                  onClick={() => setViewMode(viewMode === 'before' ? 'after' : 'before')}
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2">

                    <Icon name="ArrowPathIcon" size={16} />
                    <span>{viewMode === 'before' ? 'След' : 'Преди'}</span>
                  </button>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-xs font-semibold text-muted-foreground uppercase">
                    {viewMode === 'before' ? 'Преди' : 'След'}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Icon name="MapPinIcon" size={16} />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <button
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  className="text-primary hover:text-primary/80 transition-colors duration-300 flex items-center space-x-1">

                    <span className="text-sm font-semibold">
                      {selectedProject === project.id ? 'Скрий детайли' : 'Виж детайли'}
                    </span>
                    <Icon
                    name="ChevronDownIcon"
                    size={16}
                    className={`transition-transform duration-300 ${
                    selectedProject === project.id ? 'rotate-180' : ''}`
                    } />

                  </button>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Square3Stack3DIcon" size={16} className="text-primary" />
                    <span className="text-foreground font-semibold">{project.area}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="ClockIcon" size={16} className="text-primary" />
                    <span className="text-foreground font-semibold">{project.duration}</span>
                  </div>
                </div>
                
                {selectedProject === project.id &&
              <div className="mt-6 pt-6 border-t border-border space-y-4 animate-fade-in">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                        Предизвикателства
                      </h4>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, index) =>
                    <li key={index} className="flex items-start space-x-2">
                            <Icon name="ExclamationTriangleIcon" size={16} className="text-warning mt-1 flex-shrink-0" />
                            <span className="text-foreground text-sm">{challenge}</span>
                          </li>
                    )}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                        Постигнати резултати
                      </h4>
                      <ul className="space-y-2">
                        {project.results.map((result, index) =>
                    <li key={index} className="flex items-start space-x-2">
                            <Icon name="CheckCircleIcon" size={16} className="text-success mt-1 flex-shrink-0" />
                            <span className="text-foreground text-sm">{result}</span>
                          </li>
                    )}
                      </ul>
                    </div>
                  </div>
              }
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ProjectGallery;