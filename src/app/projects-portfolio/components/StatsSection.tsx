import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface StatsSectionProps {
  stats: {
    totalProjects: number;
    satisfiedClients: number;
    yearsExperience: number;
    equipmentUnits: number;
  };
}

const StatsSection = ({ stats }: StatsSectionProps) => {
  const statItems = [
    {
      icon: 'CheckBadgeIcon',
      value: stats.totalProjects,
      label: 'Завършени проекти',
      color: 'text-primary',
    },
    {
      icon: 'FaceSmileIcon',
      value: stats.satisfiedClients,
      label: 'Доволни клиенти',
      color: 'text-success',
    },
    {
      icon: 'CalendarDaysIcon',
      value: stats.yearsExperience,
      label: 'Години опит',
      color: 'text-accent',
    },
  ];

  return (
    <div className="bg-secondary text-secondary-foreground rounded-lg shadow-md p-8">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {statItems.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-3">
              <div className="bg-card rounded-full p-4">
                <Icon name={stat.icon as any} size={32} className={stat.color} />
              </div>
            </div>
            <div className="text-4xl font-heading font-bold mb-2">
              {stat.value}+
            </div>
            <div className="text-sm font-semibold opacity-90">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;