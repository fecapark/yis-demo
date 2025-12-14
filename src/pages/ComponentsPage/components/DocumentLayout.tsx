import type { ReactNode } from 'react';

import clsx from 'clsx';
import ShikiHighlighter from 'react-shiki';

import { cn } from '@/utils/dom';

interface DocumentPageProps {
  children: ReactNode;
  className?: string;
}

export const DocumentPage = ({ children, className }: DocumentPageProps) => {
  return <div className={cn('flex flex-col gap-10', className)}>{children}</div>;
};

interface DocumentSectionProps {
  children: ReactNode;
  className?: string;
  description?: string;
  title?: string;
}

export const DocumentSection = ({
  children,
  title,
  description,
  className,
}: DocumentSectionProps) => {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {title && (
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {description && <p className="text-neutralMuted mt-1">{description}</p>}
        </div>
      )}
      {children}
    </div>
  );
};

interface DocumentBlockProps {
  children: ReactNode;
  className?: string;
}

export const DocumentBlock = ({ children, className }: DocumentBlockProps) => {
  return (
    <div className={cn('border-grey200 flex flex-col gap-4 rounded-lg border p-8', className)}>
      {children}
    </div>
  );
};

interface CodeBlockProps {
  children: string;
}

export const CodeBlock = ({ children }: CodeBlockProps) => {
  return (
    <ShikiHighlighter
      className="border-grey100 bg-greyBackground mb-8 rounded-xl border"
      language="tsx"
      rootStyle={false}
      theme="github-dark"
    >
      {children}
    </ShikiHighlighter>
  );
};

interface PropsTableRow {
  defaultValue?: string;
  description: string;
  name: string;
  required: boolean;
  type: string;
}

interface PropsTableProps {
  props: PropsTableRow[];
}

export const PropsTable = ({ props }: PropsTableProps) => {
  return (
    <div className="mb-8 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-grey200 border-b">
            <th className="text-neutralMuted px-4 py-3 text-left font-medium">이름</th>
            <th className="text-neutralMuted px-4 py-3 text-left font-medium">타입</th>
            <th className="text-neutralMuted px-4 py-3 text-left font-medium">필수</th>
            <th className="text-neutralMuted px-4 py-3 text-left font-medium">기본값</th>
            <th className="text-neutralMuted px-4 py-3 text-left font-medium">설명</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr className="border-grey200 border-b" key={prop.name}>
              <td className="px-4 py-3 font-mono">{prop.name}</td>
              <td className="text-green500 px-4 py-3 font-mono text-xs">{prop.type}</td>
              <td
                className={clsx(
                  `px-4 py-3 text-lg`,
                  prop.required ? 'text-red500' : 'text-neutralSubtle',
                )}
              >
                {prop.required ? '✓' : '-'}
              </td>
              <td className="text-neutralSubtle px-4 py-3 font-mono text-xs">
                {prop.defaultValue ?? '-'}
              </td>
              <td className="text-neutralMuted px-4 py-3">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
