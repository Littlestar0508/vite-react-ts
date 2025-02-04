import { tm } from '@/utils/tw-merge';

type CellProps = Omit<React.ComponentProps<'button'>, 'onClick'> & {
  onPlay?: () => void;
};

export default function Cell({
  children,
  className = '',
  onPlay,
  ...restProps
}: CellProps) {
  const handlePlay = () => {
    onPlay?.();
  };

  return (
    <button
      type="button"
      className={tm(
        'size-16 border rounded-md',
        'text-2xl font-semibold',
        'cursor-pointer',
        'border-black/50',
        'hover:bg-zinc-500 hover:text-white hover:border-white',
        className
      )}
      onClick={handlePlay}
      {...restProps}
    >
      {children}
    </button>
  );
}
