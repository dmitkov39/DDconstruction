import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface CompanyStoryProps {
  story: string;
  milestones: Milestone[];
}

const CompanyStory = ({ story, milestones }: CompanyStoryProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <Icon name="BookOpenIcon" size={32} className="text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Нашата История
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 font-sans">
            {story}
          </p>
          
          <div className="space-y-8">
            {milestones?.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="flex-1 border-l-2 border-primary pl-6 pb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>);

};

export default CompanyStory;