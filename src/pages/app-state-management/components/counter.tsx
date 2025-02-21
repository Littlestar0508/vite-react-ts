import { memo } from 'react';
import CountDisplay from './count-display';
import CountControllers from './count-controllers';
import { useCountStore } from '@/stores/count';

function Counter() {
  // 컴포넌트 상태 관리
  // const [count, setCount] = useState(0);
  // const increment = () => setCount((c) => c + 1);
  const { min, max, count, update } = useCountStore();

  // const update = useCountStore((s) => s.update);
  // const min = useCountStore((s) => s.min);
  // const max = useCountStore((s) => s.max);
  // const count = useCountStore((s) => s.count);

  return (
    <div className="flex flex-col gap-2 items-start">
      <CountDisplay />
      <input
        type="number"
        aria-label="카운트 값"
        className="border bg-white text-black pl-2"
        value={count}
        min={min}
        max={max}
        onChange={(e) => update(Number(e.currentTarget.value))}
      />
      <CountControllers />
    </div>
  );
}

export default memo(Counter);
