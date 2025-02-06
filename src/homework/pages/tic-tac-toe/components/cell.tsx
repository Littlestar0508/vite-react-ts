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
  // 셀 버튼을 사용자가 더 이상 누르지 못하게 하려면?
  // [조건] 플레이어가 있는지 없는지
  // [파생된 상태] 외붸서 전달된 속성(prop)에 의존해 값이 계산
  // hasChildren, isDisabled
  const hasChildren = Boolean(children);

  const handlePlay = () => {
    if (hasChildren) return;
    onPlay?.();
  };

  return (
    <button
      type="button"
      aria-disabled={hasChildren}
      className={tm(
        'size-16 border rounded-md',
        'text-2xl font-semibold',
        'cursor-pointer',
        'border-black/50',
        {
          'hover:bg-zinc-500 hover:text-white hover:border-white': !hasChildren,
        },
        { 'cursor-not-allowed hover:bg-red-700/30': hasChildren },
        className
      )}
      onClick={handlePlay}
      {...restProps}
    >
      {children}
    </button>
  );
}
