import type { ReactNode } from 'react';

import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

interface SidebarSection {
  items: SidebarItem[];
  title: string;
}

interface SidebarItem {
  href: string;
  label: string;
}

interface SidebarProps {
  activeItem?: string;
  children?: ReactNode;
  sections: SidebarSection[];
}

export const Sidebar = ({ sections, activeItem, children }: SidebarProps) => {
  return (
    <aside className="scrollbar-thumb-grey200 hover:scrollbar-thumb-grey300 border-grey100 scrollbar-thin bg-background fixed top-14 bottom-0 left-0 z-100 w-64 overflow-y-auto border-r px-4 py-6">
      <div className="mb-8">
        {sections.map((section) => (
          <div className="mb-6" key={section.title}>
            <h2 className="text-neutralPlaceholder px-3.5 pt-5 pb-4 text-sm font-medium">
              {section.title}
            </h2>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.label}>
                  <Link
                    className={clsx(
                      'text-15 text-neutralMuted block w-full cursor-pointer rounded-lg px-3.5 py-2.5 text-left no-underline transition-all duration-200',
                      activeItem === item.label
                        ? 'bg-grey100 font-semibold text-white'
                        : 'hover:bg-grey50',
                    )}
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {children}
      </div>
    </aside>
  );
};
