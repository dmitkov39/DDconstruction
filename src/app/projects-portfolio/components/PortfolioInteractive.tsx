'use client';

import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import TestimonialCard from './TestimonialCard';
import ProjectModal from './ProjectModal';
import StatsSection from './StatsSection';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: number;
  title: string;
  category: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  description: string;
  duration: string;
  location: string;
  completionDate: string;
  challenge: string;
  solution: string;
  equipment: string[];
  teamSize: string;
  clientTestimonial?: string;
  additionalImages?: { image: string; alt: string }[];
}

interface Testimonial {
  id: number;
  clientName: string;
  projectType: string;
  rating: number;
  comment: string;
  date: string;
}

interface Stats {
  totalProjects: number;
  satisfiedClients: number;
  yearsExperience: number;
  equipmentUnits: number;
}

const PortfolioInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Всички');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Заравняване на терен на спортна зала - Ихтиман',
      category: 'Заравняване терени',
      beforeImage: '/assets/images/0-02-05-4b18ad862ed72d7d72b0b82a60c4db558eae7e65e3cd0ee971d130a85fe983c4_502cfb22e5f88af2-1768123416161.jpg',
      beforeAlt: 'Проект за заравняване на терен на спортна зала в град Ихтиман',
      afterImage: '/assets/images/0-02-05-fabeb00c2da879cf097b215671fc4682bb4c8c66011d2054707219e8fe7146d5_4abf8e71e2c6ed11-1768123972893.jpg',
      afterAlt: 'Проект за заравняване на терен на спортна зала в град Ихтиман',
      description: 'Заравняване на терен за спортна зала в град Ихтиман. Включва подготовка на основа, изравняване на терена с чакълеста подложка и финално заравняване за последващо строителство на спортна зала.',
      duration: '5 дни',
      location: 'Ихтиман',
      completionDate: '09.01.2026',
      challenge: 'Прецизно заравняване на 300 кв.м терен в промишлена сграда със стоманена конструкция с необходимост от качествена подготовка на основата за спортна зала.',
      solution: 'Използвахме компактен минибагер Takeuchi TB016 за прецизни земни работи в стеснените условия на промишлената сграда. Подготвихме терена с чакълеста подложка и го заравнихме с точни нива за последващото строителство на спортната зала.',
      equipment: ['Минибагер Takeuchi TB016', 'Самосвал', 'Валяк', 'Измервателна техника'],
      teamSize: '3 специалисти',
      clientTestimonial: 'Отлична работа! Теренът беше заравнен перфектно за 5 дни. Екипът работи прецизно в стеснените условия на промишлената сграда.',
      additionalImages: [],
    },
    {
      id: 2,
      title: 'Почистване на дворна площ - Ихтиман',
      category: 'Почистване обекти',
      beforeImage: '/assets/images/545049544_24365191263140385_3919223684628122068_n-1767987421018.jpg',
      beforeAlt: 'Минибагер и камион при почистване на дворна площ с растителни отпадъци в град Ихтиман',
      afterImage: '/assets/images/544912948_24365192273140284_402264001163558884_n-1768122504921.jpg',
      afterAlt: 'Минибагер при демонтаж на бетонна конструкция в град Ихтиман',
      description: 'Цялостно почистване на дворна площ в град Ихтиман. Включва почистване на растителни отпадъци, демонтаж на стари бетонни конструкции и павета, и извозване на всички отпадъци.',
      duration: '2 дни',
      location: 'Ихтиман',
      completionDate: '09.08.2025',
      challenge: 'Бързо почистване на 100 кв.м дворна площ с необходимост от демонтаж на бетонни конструкции и ефективно извозване на растителни и строителни отпадъци.',
      solution: 'Използвахме компактен минибагер Takeuchi за демонтаж на бетонните конструкции и почистване на растителните отпадъци. Организирахме ефективна логистика за извозване с камион за завършване на проекта в кратък срок от 2 дни.',
      equipment: ['Минибагер Takeuchi', 'Самосвал', 'Ръчни инструменти', 'Контейнери за отпадъци'],
      teamSize: '2 специалисти',
      clientTestimonial: 'Бърза и качествена работа! Дворът беше почистен напълно за 2 дни. Екипът работи ефективно и извози всички отпадъци.',
      additionalImages: [],
    },
    {
      id: 3,
      title: 'Изкопи за канализация на вилна зона',
      category: 'Изкопни дейности',
      beforeImage: '/assets/images/viber_image_2025-10-24_19-56-54-378-1766601615826.jpg',
      beforeAlt: 'Минибагер Takeuchi при изкопни работи за канализация във вилна зона в Банкя',
      afterImage: '/assets/images/viber_image_2025-10-24_19-56-54-434-1766601626990.jpg',
      afterAlt: 'Изкопани траншеи с арматурна мрежа и бетонни стени при канализационни работи в Банкя',
      description: 'Изкопни работи за канализационна система на вилна зона в град Банкя. Включва изкопаване на траншеи, полагане на канализационни тръби и подготовка на терена.',
      duration: '10 дни',
      location: 'Банкя, вилна зона',
      completionDate: '24.05.2025',
      challenge: 'Работа във вилна зона с необходимост от прецизни изкопи за канализационна система при запазване на околната среда и съществуващи конструкции.',
      solution: 'Използвахме компактен минибагер Takeuchi за прецизни изкопни работи в стеснени условия. Траншеите бяха изкопани с точни размери за полагане на канализационни тръби с правилен наклон.',
      equipment: ['Минибагер Takeuchi', 'Самосвал', 'Ръчни инструменти', 'Измервателна техника'],
      teamSize: '3 специалисти',
      clientTestimonial: 'Професионална работа с минимално въздействие върху околната среда. Изкопите бяха направени прецизно и в срок.',
    },
    {
      id: 4,
      title: 'Изкоп за кабели и заравняване на двор',
      category: 'Изкопни дейности',
      beforeImage: '/assets/images/0-02-05-0d1ab128e413ba6b12dbd0c50d3ee2a4c9a4b0b2fcc9059ab7875dc6b6bef3d4_835e03738926b992-1766601970267.jpg',
      beforeAlt: 'Изкопани канали за кабели в двор в Нови хан преди заравняване',
      afterImage: '/assets/images/0-02-05-b720259af2452fa2f490ffcb09886d1126e4f80890c8f0481228f3ca637cceb8_649b9accf554154d-1766601999717.jpg',
      afterAlt: 'Gehl 4240E скид-стий товарач работещ в двор под лозова пергола при заравняване на терена в Нови хан',
      description: 'Изкопни работи за полагане на кабели и последващо заравняване на двор в град Нови хан. Включва изкопаване на канали за кабели, полагане на инсталации и финално заравняване и подравняване на двора.',
      duration: '8 дни',
      location: 'Нови хан',
      completionDate: '12.03.2025',
      challenge: 'Работа в частен двор с необходимост от прецизни изкопи за кабелни канали при запазване на съществуващи конструкции и лозова пергола.',
      solution: 'Използвахме компактна техника Gehl 4240E скид-стий товарач за прецизни работи в стеснени условия. Изкопахме канали за кабели с точни размери, положихме инсталациите и заравнихме терена с грижа за околната среда.',
      equipment: ['Gehl 4240E скид-стий товарач', 'Минибагер', 'Самосвал', 'Ръчни инструменти'],
      teamSize: '3 специалисти',
      clientTestimonial: 'Отлична работа! Изкопите за кабелите бяха направени прецизно, а дворът беше заравнен перфектно. Екипът работи внимателно около лозовата пергола.',
    },
    {
      id: 5,
      title: 'Почистване и изнасяне на строителни материали',
      category: 'Почистване обекти',
      beforeImage: '/assets/images/20251201_123557-1766602582373.jpg',
      beforeAlt: 'Gehl 4240E скид-стий товарач в подземното пространство в ж.к. Дианабад със строителни материали и дървени греди',
      afterImage: '/assets/images/4-1766603509182.jpg',
      afterAlt: 'Гледка от кабината на Gehl 4240E показваща голямото подземно пространство',
      additionalImages: [
        {
          image: '/assets/images/20251218_095050-1766603027797.jpg',
          alt: 'Gehl 4240E с вилици в подземното пространство',
        },
      ],
      description: 'Почистване и изнасяне на строителни материали от голямо подземно пространство в ж.к. Дианабад, София.',
      duration: '30 дни',
      location: 'ж.к. Дианабад, София',
      completionDate: '01.12.2025',
      challenge: 'Работа в голямо подземно пространство с бетонни колони и греди изискваше компактна техника и прецизна логистика.',
      solution: 'Използвахме Gehl 4240E скид-стий товарач с вилици за ефективно почистване и изнасяне на материалите в стеснените условия.',
      equipment: ['Gehl 4240E скид-стий товарач', 'Вилици', 'Самосвали', 'Контейнери за отпадъци'],
      teamSize: '4 специалисти',
      clientTestimonial: 'Отлична работа в трудни условия! Подземното пространство беше почистено професионално и в срок.',
    },
    {
      id: 6,
      title: 'Канален изкоп за хидроизолация на къща',
      category: 'Изкопни дейности',
      beforeImage: '/assets/images/Dani_ihtiman1.jpg',
      beforeAlt: 'Takeuchi TB016 копае канален изкоп за хидроизолация',
      afterImage: '/assets/images/Dani_Ihtiman2.jpg',
      afterAlt: 'Takeuchi TB016 в заден план копае под стълбище',
      additionalImages: [
        { image: '/assets/images/Dani_Ihtiman3.jpg', alt: 'Takeuchi TB016 в заден план копае под стълбище' },
      ],
      description: 'Изкоп около къща в град Ихтиман за поставяне на хидроизолация и ВиК.',
      duration: '1 ден',
      location: 'град Ихтиман, Област София',
      completionDate: '17.02.2026',
      challenge: 'Правилното пускане на нивата за канализационната система при тясно пространство.',
      solution: 'Използвахме Takeuchi TB016 мини багер с кофа 20см и 40см за максимална ефективност при запазване на конструкциите.',
      equipment: ['Takeuchi TB016', 'Кофа 20см.', 'Кофа 40см.'],
      teamSize: '2 специалисти',
      clientTestimonial: 'Нивата за канализация бяха направени перфектно. Изкопът за хидроизолацията беше направен без никакви нарушения на целостта на къщата.',
    },
    {
      id: 7,
      title: 'Премахване на излишен бетон около основна плоча на жилищна сграда',
      category: 'Къртене и изкоп',
      beforeImage: '/assets/images/beton 4.jpg',
      beforeAlt: 'Takeuchi TB016 кърти бетон',
      afterImage: '/assets/images/Beton 2.jpg',
      afterAlt: 'Takeuchi TB016 премахва бетона от изкъртената ивица',
      additionalImages: [
        { image: '/assets/images/Beton 1.jpg', alt: 'Takeuchi TB016 вдигнат с кран' },
        { image: '/assets/images/Beton 3.jpg', alt: 'POV от кабината на Takeuchi TB016' },
      ],
      description: 'Премахване на излишен бетон около жилищна сграда в ж.к. Дианабад, София.',
      duration: 'В ход на изпълнение',
      location: 'ж.к. Дианабад, София',
      completionDate: 'В ход',
      challenge: 'Премахване на излишно налетял бетон при ограничен достъп и товаримост на плочата.',
      solution: 'Използвахме Takeuchi TB016 с кофа 20см, 40см и хидравличен чук за максимална ефективност.',
      equipment: ['Takeuchi TB016', 'Кофа 20см.', 'Кофа 40см.', 'Хидравличен чук'],
      teamSize: '2 специалисти',
    },
    {
      id: 8 ,
      title: 'Направа на две септичми ями в село Борика',
      category: 'изкоп',
      beforeImage: '/assets/images/borika1 (2).jpg',
      beforeAlt: 'Takeuchi TB016',
      afterImage: '/assets/images/borika2.jpg',
      afterAlt: 'POV от кабината на Takeuchi TB016',
      additionalImages: [
        { image: '/assets/images/borika3.jpg', alt: 'Takeuchi TB016 вдигнат с кран' },
        { image: '/assets/images/borika4.jpg', alt: '' },
      ],
      description: '.',
      duration: ' 1 ДЕН',
      location: 'Село Борика',
      solution: 'Използвахме Takeuchi TB016 с кофа 20см, 40см.',
      equipment: ['Takeuchi TB016', 'Кофа 20см.', 'Кофа 40см.'],
      teamSize: '2 специалисти',
    },
    {
      id: 9,
      title: 'Обратен насип на новостроящ се ресторант',
      category: 'изкопни дейности',
      beforeImage: '/assets/images/обратен_насип_1.jpg',
      beforeAlt: 'Gehl 4240E скид-стий товарач прави обратен насип',
      afterImage: '/assets/images/обратен_насип_2.jpg',
      afterAlt: 'Гледка от кабината на Gehl 4240E показваща голямото празно пространство',
      additionalImages: [
        {
          image: '/assets/images/обратен_насип.jpg',
          alt: 'Gehl 4240E',
        },
      ],
      description: 'Извършване на обратен насип преди поставянето на основна плоча.',
      duration: '3 дни',
      location: 'град Ихтиман',
      completionDate: '15.07.2026,
      challenge: ' Излязите основи представляваха пречка поради тяхната височина и не позволяваха директно да се насипва земната маса.',
      solution: 'Използвахме Gehl 4240E скид-стий товарач и създадохме временни рампи за преминаване над основите.',
      equipment: ['Gehl 4240E скид-стий товарач', 'кофа', 'Самосвали', 'Контейнери за отпадъци'],
      teamSize: '2 специалисти',
      clientTestimonial: 'Обратният насип беше перфектно направен, с иделано пуснати нива за плочата! .',
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      clientName: 'Иван Кузманов',
      projectType: 'Изкопни работи за жилищна сграда',
      rating: 5,
      comment: 'Изключително професионален екип! Работата беше завършена в срок и с високо качество. Теренът беше подготвен перфектно за следващите етапи на строителството. Препоръчвам D&D Construction на всеки, който търси надеждни изпълнители.',
      date: '20.11.2024',
    },
    {
      id: 2,
      clientName: 'Мария Миткова',
      projectType: 'Почистване строителен обект',
      rating: 5,
      comment: 'Бързо и качествено обслужване. Обектът беше почистен до последния детайл. Екипът работи организирано и спазва всички срокове. Много съм доволна от резултата!',
      date: '02.11.2024',
    },
    {
      id: 3,
      clientName: 'Георги Делев',
      projectType: 'Заравняване терен за паркинг',
      rating: 5,
      comment: 'Отлична работа! Теренът беше заравнен перфектно с правилен наклон за отводняване. Използваха модерна техника и работата приключи дори по-рано от планираното. Силно препоръчвам!',
      date: '10.12.2025',
    },
    {
      id: 4,
      clientName: 'Стоян Иванов',
      projectType: 'Транспорт строителни материали',
      rating: 5,
      comment: 'Перфектна логистика и точност при доставките. Всички материали пристигнаха в отлично състояние и точно навреме. Комуникацията с екипа беше безпроблемна. Благодаря за професионализма!',
      date: '25.11.2025',
    },
  ];

  const stats: Stats = {
    totalProjects: 30,
    satisfiedClients: 30,
    yearsExperience: 5,
    equipmentUnits: 25,
  };

  // Derive unique categories from projects
  const categories = ['Всички', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    activeCategory === 'Всички'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleViewDetails = (id: number) => {
    if (!isHydrated) return;
    const project = projects.find((p) => p.id === id);
    setSelectedProject(project || null);
  };

  const handleCloseModal = () => {
    if (!isHydrated) return;
    setSelectedProject(null);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="pt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="animate-pulse space-y-8">
              <div className="h-12 bg-muted rounded w-1/3"></div>
              <div className="h-64 bg-muted rounded"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-96 bg-muted rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Нашите проекти
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Разгледайте нашето портфолио от успешно завършени проекти. Всеки проект е доказателство за нашия професионализъм, качество и отдаденост към клиентите.
          </p>
        </div>

        <StatsSection stats={stats} />

        {/* Category filter */}
        <div className="mt-12 mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-foreground border-border hover:border-primary/50'
              }`}
            >
              {cat}
              {cat !== 'Всички' && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({projects.filter((p) => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onViewDetails={handleViewDetails} />
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-3">
              Какво казват нашите клиенти
            </h2>
            <p className="text-muted-foreground">Реални отзиви от доволни клиенти</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-lg shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">
            Готови за вашия следващ проект?
          </h2>
          <p className="text-primary-foreground text-lg mb-6 max-w-2xl mx-auto">
            Свържете се с нас днес за безплатна консултация и оферта. Нашият екип е готов да превърне вашата визия в реалност!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+359878827128"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-destructive text-destructive-foreground rounded-md font-cta font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-md"
            >
              <Icon name="PhoneIcon" size={24} />
              <span>+359 878 827 128</span>
            </a>
            <a
              href="/quick-quote"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-card text-foreground rounded-md font-cta font-bold text-lg hover:bg-muted transition-all duration-300 shadow-md"
            >
              <Icon name="DocumentTextIcon" size={24} />
              <span>Поискай оферта</span>
            </a>
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
};

export default PortfolioInteractive;
