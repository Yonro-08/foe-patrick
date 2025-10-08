import type { ComponentPropsWithoutRef, ElementType } from 'react';

import { cn } from '@/shared/lib/css';

type Props<T extends ElementType = 'button'> = {
  as?: T;
  variant?: 'accent' | 'transparent' | 'outline';
  size?: 'lg';
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = 'button'>({
  as,
  variant,
  size,
  className,
  ...props
}: Props<T>) => {
  const Component = as || 'button';

  const classNames = cn(
    'flex items-center justify-center w-full h-9 rounded-full text-sm font-normal transition-colors duration-200 cursor-pointer',
    {
      'bg-accent text-white hover:bg-accent/90': variant === 'accent',
      'text-white hover:bg-gray': variant === 'transparent',
      'text-white border border-gray-700 hover:bg-gray': variant === 'outline',
      'h-10': size === 'lg',
    },
    className,
  );

  return <Component className={classNames} {...props} />;
};
