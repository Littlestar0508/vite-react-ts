import { useState } from 'react';
import { memo } from 'react';

interface CounterProps {
  messageElement?: React.ReactElement;
}

function Counter({ messageElement }: CounterProps) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);

  // const messageElement = <Message greeting="요소 최적화가 필요해요! 😳" />;

  return (
    <div>
      <button
        type="button"
        onClick={increment}
        className="bg-react text-white py-2 px-4"
      >
        {count}
      </button>
      {messageElement}
    </div>
  );
}

export default memo(Counter);
