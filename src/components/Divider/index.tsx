import { cn } from '@/utils/dom';

export const Divider = ({ className }: { className?: string }) => {
  return <div className={cn('bg-grey200 h-px w-full', className)} />;
};
