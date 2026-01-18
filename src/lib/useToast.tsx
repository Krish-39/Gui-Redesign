import { useState, useCallback } from 'react';
import { ToastProps } from '../components/feedback/Toast';

let toastId = 0;

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = useCallback((
    toast: Omit<ToastProps, 'id' | 'onDismiss'>
  ) => {
    const id = `toast-${toastId++}`;
    setToasts((prev) => [...prev, { ...toast, id }]);
    return id;
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const success = useCallback((message: string, description?: string) => {
    return addToast({ type: 'success', message, description });
  }, [addToast]);

  const error = useCallback((message: string, description?: string) => {
    return addToast({ type: 'error', message, description });
  }, [addToast]);

  const info = useCallback((message: string, description?: string) => {
    return addToast({ type: 'info', message, description });
  }, [addToast]);

  const warning = useCallback((message: string, description?: string) => {
    return addToast({ type: 'warning', message, description });
  }, [addToast]);

  return {
    toasts,
    addToast,
    dismissToast,
    success,
    error,
    info,
    warning
  };
}
