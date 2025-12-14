import { useMemo } from 'react';
import { Outlet, ScrollRestoration, useParams } from 'react-router-dom';

import { Header } from '@/components/layouts/Header';
import { Sidebar } from '@/components/layouts/Sidebar';
import { componentMap, componentOrder } from '@/pages/ComponentsPage/type';

export const ComponentsPageLayout = () => {
  const { component } = useParams<{ component: string }>();

  const sidebarSections = useMemo(
    () =>
      componentOrder.map((section) => ({
        title: section,
        items: Object.keys(componentMap[section]).map((item) => ({
          label: item,
          href: `/components/${item}`,
        })),
      })),
    [],
  );

  return (
    <>
      <ScrollRestoration />
      <div className="flex min-h-screen w-full">
        <Header />

        <div className="flex w-full pt-14">
          <Sidebar activeItem={component} sections={sidebarSections} />

          <main className="ml-64 flex min-h-[calc(100vh-3.5rem)] flex-1 flex-col p-12">
            <div className="mx-auto w-full max-w-300 min-w-250 flex-1">
              <h1 className="mb-8 text-3xl font-semibold">{component}</h1>
              <div className="w-full">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
