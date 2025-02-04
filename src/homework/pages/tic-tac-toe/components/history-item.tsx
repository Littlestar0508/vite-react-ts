import { tm } from '@/utils/tw-merge';

export default function HistoryItem() {
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
          'hover:bg-black'
        )}
      >
        게임 시작!
      </button>
    </li>
  );
}
