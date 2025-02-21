import { memo } from 'react';
import CountDisplay from './count-display';
import CountControllers from './count-controllers';

function Counter() {
  // 컴포넌트 상태 관리
  // const [count, setCount] = useState(0);
  // const increment = () => setCount((c) => c + 1);

  return (
    <div className="flex flex-col gap-2 items-start">
      <CountDisplay />
      <CountControllers />
    </div>
  );
}

export default memo(Counter);
