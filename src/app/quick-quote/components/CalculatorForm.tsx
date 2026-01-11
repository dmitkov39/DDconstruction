'use client';

import React from 'react';


interface FormField {
  id: string;
  label: string;
  type: 'number' | 'select' | 'text';
  unit?: string;
  options?: { value: string; label: string }[];
  placeholder?: string;
  min?: number;
  step?: number;
}

interface CalculatorFormProps {
  fields: FormField[];
  formData: Record<string, string>;
  onFieldChange: (fieldId: string, value: string) => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({
  fields,
  formData,
  onFieldChange,
}) => {
  return (
    <div className="space-y-6">
      {fields.map((field) => (
        <div key={field.id} className="space-y-2">
          <label
            htmlFor={field.id}
            className="block text-sm font-heading font-semibold text-foreground"
          >
            {field.label}
          </label>
          {field.type === 'select' ? (
            <select
              id={field.id}
              value={formData[field.id] || ''}
              onChange={(e) => onFieldChange(field.id, e.target.value)}
              className="w-full px-4 py-3 border-2 border-border rounded-lg bg-card text-foreground focus:border-primary focus:outline-none transition-colors duration-300"
            >
              <option value="">Изберете опция</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <div className="relative">
              <input
                type={field.type}
                id={field.id}
                value={formData[field.id] || ''}
                onChange={(e) => onFieldChange(field.id, e.target.value)}
                placeholder={field.placeholder}
                min={field.min}
                step={field.step}
                className="w-full px-4 py-3 border-2 border-border rounded-lg bg-card text-foreground focus:border-primary focus:outline-none transition-colors duration-300"
              />
              {field.unit && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-sans">
                  {field.unit}
                </span>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CalculatorForm;