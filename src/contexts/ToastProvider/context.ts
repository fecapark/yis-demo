import { createContext, useContext } from 'react';

import type { ToastItem, ToastType } from '@/contexts/ToastProvider/type';

interface ToastContextProps {
  addToast: (props: { text: string; type: ToastType }) => void;
  toasts: ToastItem[];
}

export const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToastContext = () => {
  const toastContext = useContext(ToastContext);

  if (!toastContext) {
    throw new Error('useToastContext는 ToastProvider 하위에서만 사용할 수 있어요.');
  }

  return toastContext;
};
