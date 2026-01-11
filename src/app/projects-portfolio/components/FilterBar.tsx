'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterBar = ({ categories, selectedCategory, onCategoryChange }: FilterBarProps) => {
  return (
    <div className="bg-card rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center space-x-3 mb-4">
        <Icon name="FunnelIcon" size={24} className="text-primary" />
        <h2 className="text-xl font-heading font-bold text-foreground">
          Филтрирай проекти
        </h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-md font-semibold text-sm transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;