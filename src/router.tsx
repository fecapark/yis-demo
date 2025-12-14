import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ComponentsPageLayout } from '@/pages/ComponentsPage/Layout';
import { DemoPageLayout } from '@/pages/DemoPage/Layout';
import { LandingPage } from '@/pages/LandingPage';

import { ComponentViewer } from './pages/ComponentsPage/ComponentViewer';
import { DemoViewer } from './pages/DemoPage/DemoViewer';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/demo',
    element: <DemoPageLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to="/demo/내 정보" />,
      },
      {
        path: ':demo',
        element: <DemoViewer />,
      },
    ],
  },
  {
    path: '/components',
    element: <ComponentsPageLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to="/components/Button" />,
      },
      {
        path: ':component',
        element: <ComponentViewer />,
      },
    ],
  },
]);
