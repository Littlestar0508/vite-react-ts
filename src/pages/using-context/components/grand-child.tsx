import { useContext } from 'react';
import { GreetingContext } from '../page';
import { useTheme } from '@/contexts/theme';
import { tm } from '@/utils/tw-merge';

function GrandChild() {
  const { message, setMessage } = useContext(GreetingContext);

  const { mode } = useTheme();
  const isDarkMode = mode.includes('dark');

  return (
    <div className="flex-1 flex flex-col gap-3 p-5 border-4 rounded-full justify-center items-center text-center">
      {message}
      <button
        type="button"
        className={tm('bg-react text-white p-2 text-sm rounded-full w-50', {
          'bg-black text-white': isDarkMode,
        })}
        onClick={() => {
          setMessage('반갑습니다. Mr. 페이지!');
        }}
      >
        Page 컴포넌트에게 인사하기
      </button>
    </div>
  );
}

export default GrandChild;
