'use client';

import React, { useState } from 'react';
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
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-72 overflow-hidden group">
        <div className="relative w-full h-full">
          <AppImage
            src={showAfter ? project.afterImage : project.beforeImage}
            alt={showAfter ? project.afterAlt : project.beforeAlt}
            className="w-full h-full object-contain bg-gray-100 transition-opacity duration-500"
          />
        </div>
        
        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-bold">
          {project.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-foreground mb-2">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="MapPinIcon" size={16} className="text-accent" />
            <span className="text-foreground">{project.location}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="ClockIcon" size={16} className="text-accent" />
            <span className="text-foreground">{project.duration}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="CalendarIcon" size={16} className="text-accent" />
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