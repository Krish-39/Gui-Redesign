import React, { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Info, AlertTriangle, X } from 'lucide-react';

export interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  onDismiss?: () => void;
}

const TOAST_ICONS = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
  warning: AlertTriangle
};

const TOAST_STYLES = {
  success: {
    bg: '#007256',
    icon: 'white',
    text: 'white',
    progress: 'rgba(255, 255, 255, 0.3)'
  },
  error: {
    bg: '#E40422',
    icon: 'white',
    text: 'white',
    progress: 'rgba(255, 255, 255, 0.3)'
  },
  info: {
    bg: '#004659',
    icon: 'white',
    text: 'white',
    progress: 'rgba(255, 255, 255, 0.3)'
  },
  warning: {
    bg: '#FF6B00',
    icon: 'white',
    text: 'white',
    progress: 'rgba(255, 255, 255, 0.3)'
  }
};

export function Toast({
  id,
  type,
  message,
  description,
  duration = 4000,
  action,
  onDismiss
}: ToastProps) {
  const [progress, setProgress] = useState(100);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev - (100 / (duration / 50));
        if (newProgress <= 0) {
          clearInterval(interval);
          handleDismiss();
          return 0;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [duration]);

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => {
      onDismiss?.();
    }, 150);
  };

  const Icon = TOAST_ICONS[type];
  const styles = TOAST_STYLES[type];

  return (
    <div
      className={`
        relative w-full max-w-sm rounded-lg shadow-lg p-4
        transition-all duration-200
        ${isExiting ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'}
      `}
      style={{ backgroundColor: styles.bg }}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: styles.icon }} aria-hidden="true" />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold" style={{ color: styles.text }}>{message}</p>
          {description && (
            <p className="text-xs mt-1 opacity-90" style={{ color: styles.text }}>{description}</p>
          )}

          {/* Action Button */}
          {action && (
            <button
              onClick={action.onClick}
              className="text-xs font-medium underline hover:no-underline mt-2"
              style={{ color: styles.text }}
            >
              {action.label}
            </button>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="hover:opacity-70 transition-opacity flex-shrink-0"
          style={{ color: styles.icon }}
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-lg overflow-hidden" style={{ backgroundColor: styles.progress }}>
        <div
          className="h-full transition-all duration-50 ease-linear"
          style={{ width: `${progress}%`, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
        />
      </div>
    </div>
  );
}

export interface ToastContainerProps {
  position?: 'top-right' | 'top-center' | 'bottom-right' | 'bottom-center';
  toasts: ToastProps[];
  onDismiss: (id: string) => void;
}

export function ToastContainer({
  position = 'top-right',
  toasts,
  onDismiss
}: ToastContainerProps) {
  const positionStyles = {
    'top-right': 'top-4 right-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-right': 'bottom-4 right-4',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2'
  };

  return (
    <div
      className={`fixed ${positionStyles[position]} z-50 flex flex-col gap-3 pointer-events-none`}
      aria-live="polite"
      aria-atomic="true"
    >
      {toasts.slice(0, 3).map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast {...toast} onDismiss={() => onDismiss(toast.id)} />
        </div>
      ))}
    </div>
  );
}