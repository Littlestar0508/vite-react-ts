import { tm } from '@/utils/tw-merge';
import { Spinner } from '@mynaui/icons-react';

interface LoadingProps {
  size?: number;
  label?: string;
  className?: string;
}

export default function Loading({
  size = 24,
  label = '로딩 중...',
  className,
  ...restProps
}: LoadingProps) {
  return (
    <Spinner
      size={size}
      aira-label={label}
      className={tm('animate-spin opacity-75', className)}
      {...restProps}
    />
  );
}
