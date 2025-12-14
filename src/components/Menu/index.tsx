import type { PopoverContentProps, PopoverProps } from '@radix-ui/react-popover';

import { Popover } from '@/components/Popover';
import { cn } from '@/utils/dom';

const ButtonItem = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <Popover.Closeable asChild>
      <button
        className={cn(
          'hover:bg-grey200 active:hover:bg-grey200 focus-visible:bg-grey200 ease-ease w-full cursor-pointer transition-colors duration-200',
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </Popover.Closeable>
  );
};

const Content = ({ children, ...props }: PopoverContentProps) => {
  return (
    <Popover.Content
      {...props}
      onOpenAutoFocus={(e) => {
        e.preventDefault();
      }}
    >
      {children}
    </Popover.Content>
  );
};

export const Menu = ({ children, ...props }: React.PropsWithChildren<PopoverProps>) => {
  return <Popover {...props}>{children}</Popover>;
};

Menu.Target = Popover.Target;
Menu.Content = Content;
Menu.ButtonItem = ButtonItem;
