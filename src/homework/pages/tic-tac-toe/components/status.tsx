import { tm } from '@/utils/tw-merge';

interface StatusProps {
  message: string;
  onReGame?: () => void;
}

function Status({ message, onReGame }: StatusProps) {
  // 파생된 상태
  const isComplete = !message.includes('넥스트 플레이어');

  const handleReGame = () => {
    onReGame?.();
  };

  return (
    <div className={tm('flex justify-between w-full px-5')}>
      <p>{message}</p>
      {isComplete && (
        <button
          type="button"
          onClick={handleReGame}
          className={tm(
            'cursor-pointer',
            'px-3 py-1 border-1 border-slate-400 rounded-sm text-xs',
            'text-xs font-semibold',
            'hover:bg-slate-800/10'
          )}
        >
          다시 하기
        </button>
      )}
    </div>
  );
}

export default Status;
