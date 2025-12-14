import { useMemo } from 'react';
import { Outlet, ScrollRestoration, useParams } from 'react-router-dom';

import { Header } from '@/components/layouts/Header';
import { Sidebar } from '@/components/layouts/Sidebar';
import { demoMap, demoOrder } from '@/pages/DemoPage/route';

export const DemoPageLayout = () => {
  const { demo } = useParams<{ demo: string }>();

  const sidebarSections = useMemo(
    () =>
      demoOrder.map((section) => ({
        title: section,
        items: Object.keys(demoMap[section]).map((item) => ({
          label: item,
          href: `/demo/${item}`,
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
          <Sidebar activeItem={demo} sections={sidebarSections} />

          <main className="ml-64 flex min-h-[calc(100vh-3.5rem)] flex-1 flex-col p-12">
            <div className="mx-auto w-full max-w-300 min-w-250 flex-1">
              {demo && <h1 className="mb-8 text-3xl font-semibold">{demo}</h1>}
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
