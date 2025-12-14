import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils/dom';

interface InlineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const InlineButton = ({ className, children, ...props }: InlineButtonProps) => {
  const Comp = props.asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(
        'hover:bg-grey100 focus-visible:bg-grey100 active:bg-grey100 ease-ease disabled:bg-grey200 disabled:text-neutralPlaceholder inline-block cursor-pointer rounded-md px-1.5 transition-colors duration-200 disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
