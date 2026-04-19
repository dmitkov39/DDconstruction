'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProjectCardProps {
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
  };
  onViewDetails: (id: number) => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-56 overflow-hidden">
        <AppImage
          src={project.afterImage}
          alt={project.afterAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-bold shadow">
          {project.category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-heading font-bold text-foreground mb-2 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="space-y-1.5 mb-4">
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="MapPinIcon" size={14} className="text-accent flex-shrink-0" />
            <span className="text-foreground">{project.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="ClockIcon" size={14} className="text-accent flex-shrink-0" />
            <span className="text-foreground">{project.duration}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="CalendarIcon" size={14} className="text-accent flex-shrink-0" />
            <span className="text-foreground">{project.completionDate}</span>
          </div>
        </div>
        <button
          onClick={() => onViewDetails(project.id)}
          className="w-full bg-secondary text-secondary-foreground py-2 rounded-md font-cta font-bold text-sm hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <span>Виж детайли</span>
          <Icon name="ArrowRightIcon" size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
