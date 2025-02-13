import { tm } from '@/utils/tw-merge';
import { Redo } from '@mynaui/icons-react';
import { useState } from 'react';

export default function ReplayAnimation({
  children,
  className,
  ...restProps
}: React.ComponentProps<'div'>) {
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => {
    setReplayKey((r) => r + 1);
  };
  return (
    <div
      key={replayKey}
      className={tm('flex flex-col gap-6 items-start', className)}
      {...restProps}
    >
      <button
        type="button"
        onClick={handleReplay}
        className={tm(
          'cursor-pointer',
          'flex items-center gap-1.5 px-3.5 py-2 rounded-lg',
          'bg-react text-white text-sm font-semibold uppercase',
          '*:hover:animate-spin *:duration-100',
          'active:scale-95'
        )}
      >
        <Redo size={20} />
        RePlay
      </button>
      {children}
    </div>
  );
}
