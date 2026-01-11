import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  expertise: string[];
  experience: string;
  image: string;
  alt: string;
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

const TeamSection = ({ teamMembers }: TeamSectionProps) => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="UsersIcon" size={32} className="text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Нашият Екип
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Професионалисти с дългогодишен опит в строителството
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="relative h-80 overflow-hidden">
                <AppImage
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-heading font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-cta font-bold">
                    {member.role}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="BriefcaseIcon" size={18} className="text-primary" />
                    <span className="text-sm font-sans font-semibold text-foreground">
                      Опит: {member.experience}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-heading font-bold text-foreground mb-2">
                    Специализация:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-sans"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;