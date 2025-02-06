import { tm } from '@/utils/tw-merge';

type HistoryItemProps = React.ComponentProps<'button'>;

export default function HistoryItem({
  children,
  className = '',
  ...restProps
}: HistoryItemProps) {
  return (
    <li>
      <button
        type="button"
        className={tm(
          'flex place-items-center px-2.5 py-2',
          'bg-slate-600 text-white',
          'rounded-md',
          'cursor-pointer',
          'text-xs',
          'hover:bg-black',
          className
        )}
        {...restProps}
      >
        {children}
      </button>
    </li>
  );
}
