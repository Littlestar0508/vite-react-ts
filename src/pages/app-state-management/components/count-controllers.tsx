import { useCountStore } from '@/stores/count';
import { tm } from '@/utils/tw-merge';
import { Minus, Plus, Redo } from '@mynaui/icons-react';
import { memo } from 'react';

function CountControllers() {
  const increment = useCountStore((s) => s.increment);
  const decrement = useCountStore((s) => s.decrement);
  const reset = useCountStore((s) => s.reset);
  const update = useCountStore((s) => s.update);

  // const [min, max] = useCountStore((s) => [s.min, s.max]);

  return (
    <div className="flex gap-1">
      <input
        type="number"
        aria-label="카운트 값"
        className="border bg-white text-black pl-2"
        defaultValue={1}
        min={1}
        max={10}
        onChange={(e) => update(Number(e.currentTarget.value))}
      />
      <button
        type="button"
        className={tm(
          'cursor-pointer',
          'size-10 rounded-full ',
          'bg-react text-white font-black',
          'flex justify-center items-center'
        )}
        onClick={increment}
      >
        <Plus size={24} />
      </button>
      <button
        type="button"
        className={tm(
          'cursor-pointer',
          'size-10 rounded-full ',
          'bg-react text-white font-black',
          'flex justify-center items-center'
        )}
        onClick={decrement}
      >
        <Minus size={24} />
      </button>
      <button
        type="button"
        className={tm(
          'cursor-pointer',
          'size-10 rounded-full ',
          'bg-react text-white font-black',
          'flex justify-center items-center'
        )}
        onClick={reset}
      >
        <Redo size={24} />
      </button>
    </div>
  );
}

export default memo(CountControllers);
