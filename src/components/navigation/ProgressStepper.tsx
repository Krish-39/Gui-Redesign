import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';

export interface Step {
  id: string;
  label: string;
  status: 'incomplete' | 'active' | 'completed';
  screenRoute?: string;
}

export interface ProgressStepperProps {
  steps: Step[];
  currentStep: number;
  orientation?: 'horizontal' | 'vertical';
  onStepClick?: (stepIndex: number) => void;
  allowClickableCompleted?: boolean;
}

export function ProgressStepper({
  steps,
  currentStep,
  orientation = 'horizontal',
  onStepClick,
  allowClickableCompleted = true
}: ProgressStepperProps) {
  const { t } = useLanguage();

  const handleStepClick = (index: number, step: Step) => {
    if (!onStepClick) return;
    
    // Allow clicking on completed steps or current step
    if (allowClickableCompleted && (step.status === 'completed' || index === currentStep)) {
      onStepClick(index);
    }
  };

  return (
    <nav
      role="progressbar"
      aria-valuenow={currentStep + 1}
      aria-valuemin={1}
      aria-valuemax={steps.length}
      aria-label="Registration progress"
      className={`${
        orientation === 'horizontal'
          ? 'flex items-center justify-between'
          : 'flex flex-col space-y-4'
      }`}
    >
      {steps.map((step, index) => {
        const isActive = step.status === 'active';
        const isCompleted = step.status === 'completed';
        const isClickable = allowClickableCompleted && (isCompleted || index === currentStep);
        const isLast = index === steps.length - 1;

        return (
          <div
            key={step.id}
            className={`flex ${
              orientation === 'horizontal' ? 'flex-1 items-center' : 'items-start'
            }`}
          >
            {/* Step Circle and Label */}
            <button
              onClick={() => handleStepClick(index, step)}
              disabled={!isClickable}
              className={`flex items-center gap-3 ${
                isClickable ? 'cursor-pointer' : 'cursor-default'
              } group`}
              aria-current={isActive ? 'step' : undefined}
            >
              {/* Circle - Using Official Berlin Colors */}
              <div
                className={`
                  relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200
                  ${
                    isCompleted
                      ? 'text-white'
                      : isActive
                      ? 'text-white ring-4'
                      : 'text-medium-grey'
                  }
                  ${isClickable ? 'group-hover:shadow-md' : ''}
                `}
                style={{
                  backgroundColor: isCompleted 
                    ? '#007256' 
                    : isActive 
                    ? '#E40422' 
                    : '#CCCCCC',
                  ...(isActive && { boxShadow: '0 0 0 4px rgba(228, 4, 34, 0.2)' })
                }}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <span className="font-semibold text-sm">{index + 1}</span>
                )}
              </div>

              {/* Label - Using Berlin Black */}
              <div
                className={`
                  ${orientation === 'horizontal' ? 'hidden sm:block' : 'block'}
                  text-left
                `}
              >
                <div
                  className={`
                    text-sm font-semibold transition-colors
                  `}
                  style={{
                    color: isCompleted 
                      ? '#007256' 
                      : isActive 
                      ? '#000000' 
                      : '#666666'
                  }}
                >
                  {step.label}
                </div>
                {isActive && (
                  <div className="text-xs mt-0.5" style={{ color: '#666666' }}>
                    {t.progressStepper.inProgress}
                  </div>
                )}
              </div>
            </button>

            {/* Connector Line - Using Official Colors */}
            {!isLast && orientation === 'horizontal' && (
              <div
                className={`
                  flex-1 h-0.5 mx-2 sm:mx-4 transition-all duration-300
                  ${isCompleted || steps[index + 1]?.status === 'completed' ? '' : isActive ? '' : 'border-t-2 border-dashed'}
                `}
                style={{
                  backgroundColor: isCompleted || steps[index + 1]?.status === 'completed'
                    ? '#007256'
                    : isActive
                    ? '#CCCCCC'
                    : 'transparent',
                  ...((!isCompleted && !isActive && steps[index + 1]?.status !== 'completed') && { 
                    borderColor: '#CCCCCC' 
                  })
                }}
                aria-hidden="true"
              />
            )}

            {orientation === 'vertical' && !isLast && (
              <div
                className={`
                  w-0.5 h-12 ml-5 transition-all duration-300
                `}
                style={{
                  backgroundColor: isCompleted || steps[index + 1]?.status === 'completed'
                    ? '#007256'
                    : '#CCCCCC'
                }}
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}