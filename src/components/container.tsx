import type { FC, PropsWithChildren } from 'react';

import { cn } from '@/shared/lib/css';

interface Props {
  className?: string;
}

export const Container: FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => (
  <div className={cn('container max-w-[1440px] mx-auto px-4', className)}>
    {children}
  </div>
);
