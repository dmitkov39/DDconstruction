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
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in">
      <div className="bg-card rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-heading font-bold text-foreground">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-md transition-colors duration-200"
            aria-label="Затвори"
          >
            <Icon name="XMarkIcon" size={24} className="text-foreground" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-muted">
                <AppImage
                  src={project.afterImage}
                  alt={project.afterAlt}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {project.additionalImages && project.additionalImages.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">ДОПЪЛНИТЕЛНИ СНИМКИ ОТ ПРОЕКТА</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.additionalImages.map((img, index) => (
                  <div key={index} className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-muted">
                    <AppImage
                      src={img.image}
                      alt={img.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

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

          <div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-2">
              Описание на проекта
            </h3>
            <p className="text-foreground leading-relaxed">{project.description}</p>
          </div>

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