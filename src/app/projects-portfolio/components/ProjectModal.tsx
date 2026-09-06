'use client';

import React, { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProjectModalProps {
  project: {
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
  } | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      setActiveIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const allImages = [
    { src: project.afterImage, alt: project.afterAlt },
    { src: project.beforeImage, alt: project.beforeAlt },
    ...(project.additionalImages?.map((img) => ({ src: img.image, alt: img.alt })) ?? []),
  ];

  const activeImage = allImages[activeIndex] ?? allImages[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-card rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between z-10">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              {project.category}
            </span>
            <h2 className="text-xl font-heading font-bold text-foreground leading-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-md transition-colors duration-200 flex-shrink-0"
            aria-label="Затвори"
          >
            <Icon name="XMarkIcon" size={24} className="text-foreground" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Main image */}
          <div>
            <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-muted">
              <AppImage
                src={activeImage.src}
                alt={activeImage.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail strip */}
            {allImages.length > 1 && (
              <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Покажи снимка ${index + 1}`}
                    className={`relative h-16 w-24 rounded overflow-hidden flex-shrink-0 border-2 transition-all duration-200 ${
                      index === activeIndex
                        ? 'border-primary opacity-100'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <AppImage
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Stats row */}
          <div className="bg-muted rounded-lg p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <Icon name="MapPinIcon" size={16} className="text-accent" />
                  <span className="text-xs font-semibold text-muted-foreground">ЛОКАЦИЯ</span>
                </div>
                <p className="text-sm font-semibold text-foreground">{project.location}</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <Icon name="ClockIcon" size={16} className="text-accent" />
                  <span className="text-xs font-semibold text-muted-foreground">ПРОДЪЛЖИТЕЛНОСТ</span>
                </div>
                <p className="text-sm font-semibold text-foreground">{project.duration}</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <Icon name="CalendarIcon" size={16} className="text-accent" />
                  <span className="text-xs font-semibold text-muted-foreground">ЗАВЪРШЕН</span>
                </div>
                <p className="text-sm font-semibold text-foreground">{project.completionDate}</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <Icon name="UserGroupIcon" size={16} className="text-accent" />
                  <span className="text-xs font-semibold text-muted-foreground">ЕКИП</span>
                </div>
                <p className="text-sm font-semibold text-foreground">{project.teamSize}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-2">
              Описание на проекта
            </h3>
            <p className="text-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2 flex items-center space-x-2">
                <Icon name="ExclamationTriangleIcon" size={20} className="text-warning" />
                <span>Предизвикателство</span>
              </h3>
              <p className="text-foreground leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2 flex items-center space-x-2">
                <Icon name="CheckCircleIcon" size={20} className="text-success" />
                <span>Решение</span>
              </h3>
              <p className="text-foreground leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Equipment */}
          <div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-3 flex items-center space-x-2">
              <Icon name="WrenchScrewdriverIcon" size={20} className="text-accent" />
              <span>Използвана техника</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.equipment.map((item, index) => (
                <span
                  key={index}
                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Client testimonial */}
          {project.clientTestimonial && (
            <div className="bg-primary bg-opacity-10 border-l-4 border-primary rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon name="ChatBubbleLeftIcon" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    Отзив от клиента
                  </h3>
                  <p className="text-foreground italic leading-relaxed">
                    "{project.clientTestimonial}"
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <a
              href="tel:+359878827128"
              className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-destructive text-destructive-foreground rounded-md font-cta font-bold hover:bg-opacity-90 transition-all duration-300"
            >
              <Icon name="PhoneIcon" size={20} />
              <span>Обади се сега</span>
            </a>
            <a
              href="/quick-quote"
              className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-cta font-bold hover:bg-opacity-90 transition-all duration-300"
            >
              <Icon name="DocumentTextIcon" size={20} />
              <span>Поискай оферта</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
