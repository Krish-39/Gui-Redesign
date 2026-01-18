import React, { useEffect, useRef } from 'react';
import { AlertTriangle, X, WifiOff, FileWarning, Clock } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';

export interface RecoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  errorType: 'network' | 'validation' | 'session' | 'generic';
  headline: string;
  reasons?: string[];
  primaryAction: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  supportLink?: string;
}

const ERROR_ICONS = {
  network: WifiOff,
  validation: FileWarning,
  session: Clock,
  generic: AlertTriangle
};

export function RecoveryModal({
  isOpen,
  onClose,
  errorType,
  headline,
  reasons = [],
  primaryAction,
  secondaryAction,
  supportLink
}: RecoveryModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const primaryButtonRef = useRef<HTMLButtonElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      // Focus the primary action button when modal opens
      primaryButtonRef.current?.focus();

      // Handle Escape key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const ErrorIcon = ERROR_ICONS[errorType];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={modalRef}
        className="relative bg-white rounded-xl shadow-2xl max-w-md w-full p-6 sm:p-8 animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
        role="alertdialog"
        aria-labelledby="modal-headline"
        aria-describedby="modal-description"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 transition-colors"
          style={{ color: '#666666' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#333333'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}
          aria-label="Close dialog"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(228, 4, 34, 0.1)' }}
          >
            <ErrorIcon className="w-8 h-8" style={{ color: '#E40422' }} aria-hidden="true" />
          </div>
        </div>

        {/* Headline - Using Berlin Black */}
        <h2
          id="modal-headline"
          className="text-2xl font-bold text-center mb-4"
          style={{ color: '#000000' }}
        >
          {headline}
        </h2>

        {/* Reasons List */}
        {reasons.length > 0 && (
          <div id="modal-description" className="mb-6">
            <p className="text-sm font-semibold mb-2" style={{ color: '#333333' }}>
              {t.errors.possibleCauses}
            </p>
            <ul className="space-y-2">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-2 text-sm" style={{ color: '#666666' }}>
                  <span style={{ color: '#E40422' }} className="mt-1">•</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons - Using Berlin Red for Primary */}
        <div className="flex flex-col gap-3">
          <button
            ref={primaryButtonRef}
            onClick={() => {
              primaryAction.onClick();
              onClose();
            }}
            className="w-full py-3 px-4 text-white font-semibold rounded transition-colors focus:ring-4"
            style={{ 
              backgroundColor: '#E40422',
              boxShadow: '0 2px 4px rgba(228, 4, 34, 0.2)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#CC0420'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E40422'}
          >
            {primaryAction.label}
          </button>

          {secondaryAction && (
            <button
              onClick={() => {
                secondaryAction.onClick();
                onClose();
              }}
              className="w-full py-3 px-4 font-semibold rounded transition-colors"
              style={{ 
                backgroundColor: '#F2F2F2',
                color: '#333333'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#CCCCCC'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F2F2F2'}
            >
              {secondaryAction.label}
            </button>
          )}

          {supportLink && (
            <a
              href={supportLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm hover:underline mt-2"
              style={{ color: '#004659' }}
            >
              {t.errors.contactSupport}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}