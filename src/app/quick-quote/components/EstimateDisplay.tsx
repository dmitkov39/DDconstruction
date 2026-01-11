'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface EstimateDisplayProps {
  estimate: number | null;
  timeline: string;
  isCalculating: boolean;
}

const EstimateDisplay: React.FC<EstimateDisplayProps> = ({
  estimate,
  timeline,
  isCalculating,
}) => {
  return (
    <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-lg shadow-lg">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Icon name="CalculatorIcon" size={32} className="text-primary-foreground" />
          <h3 className="text-2xl font-heading font-bold text-primary-foreground">
            Предварителна Оценка
          </h3>
        </div>

        {isCalculating ? (
          <div className="py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-foreground border-t-transparent mx-auto"></div>
            <p className="mt-4 text-primary-foreground font-sans">Изчисляване...</p>
          </div>
        ) : estimate !== null ? (
          <>
            <div className="py-6">
              <p className="text-sm text-primary-foreground opacity-90 font-sans mb-2">
                Ориентировъчна цена
              </p>
              <p className="text-5xl font-heading font-bold text-primary-foreground">
                {estimate.toLocaleString('bg-BG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
              </p>
            </div>

            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Icon name="ClockIcon" size={20} className="text-primary-foreground" />
                <p className="text-sm font-heading font-semibold text-primary-foreground">
                  Очакван срок
                </p>
              </div>
              <p className="text-lg font-sans text-primary-foreground">{timeline}</p>
            </div>

            <div className="mt-6 p-4 bg-white bg-opacity-10 rounded-lg">
              <p className="text-xs text-primary-foreground font-sans leading-relaxed">
                * Това е предварителна оценка. Окончателната цена ще бъде определена след
                оглед на обекта и консултация с нашия екип.
              </p>
            </div>
          </>
        ) : (
          <div className="py-8">
            <Icon
              name="DocumentTextIcon"
              size={48}
              className="text-primary-foreground mx-auto mb-4"
            />
            <p className="text-primary-foreground font-sans">
              Попълнете формата за да получите оценка
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EstimateDisplay;