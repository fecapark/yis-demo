import clsx from 'clsx';
import { useMemo } from 'react';

import { cn } from '@/utils/dom';

type ProfileAvatarProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'src'> & {
  avatarId: number;
  containerClassName?: string;
  rounded?: boolean;
  size?: 'full' | number;
};

export const ProfileAvatar = ({
  className,
  rounded,
  size,
  avatarId,
  containerClassName,
  ...props
}: ProfileAvatarProps) => {
  const src = useMemo(() => {
    return `/profiles/${(avatarId % 12) + 1}.webp`;
  }, [avatarId]);

  return (
    <div
      className={clsx(containerClassName, rounded && 'overflow-hidden rounded-full')}
      style={{
        width: size === 'full' ? '100%' : size,
        height: size === 'full' ? '100%' : size,
      }}
    >
      <img
        alt="profile"
        className={cn('size-full object-contain', className)}
        src={src}
        {...props}
      />
    </div>
  );
};
