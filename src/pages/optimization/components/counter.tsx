import { useState } from 'react';
import Message from './message';

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);

  const messageElement = <Message greeting="요소 최적화가 필요해요! 😳" />;

  return (
    <div>
      <button
        type="button"
        onClick={increment}
        className="bg-react text-white py-2 px-4"
      >
        {count}
      </button>
      {/* <Message greeting="요소 최적화가 필요해요! 😳" /> */}
      {messageElement}
    </div>
  );
}
