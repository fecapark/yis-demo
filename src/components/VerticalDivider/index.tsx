import { cn } from '@/utils/dom';

export const VerticalDivider = ({ className }: { className?: string }) => {
  return <div className={cn('bg-grey200 min-h-full w-px self-stretch', className)} />;
};
