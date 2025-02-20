import { useTheme } from '@/contexts/theme';
import Child from './child';
import { tm } from '@/utils/tw-merge';

function Parent() {
  const { mode } = useTheme();
  const isDarkMode = mode.includes('dark');

  return (
    <div
      className={tm('flex-1 p-5 border-4 rounded-full flex justify-center', {
        'bg-black text-white': isDarkMode,
      })}
    >
      <Child />
    </div>
  );
}

export default Parent;
