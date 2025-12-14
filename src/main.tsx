import { OverlayProvider } from 'overlay-kit';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { ToastProvider } from '@/contexts/ToastProvider';
import { router } from '@/router';

import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider duration={3000}>
      <OverlayProvider>
        <RouterProvider router={router} />
      </OverlayProvider>
    </ToastProvider>
  </StrictMode>,
);
