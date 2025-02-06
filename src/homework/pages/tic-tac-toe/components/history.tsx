import { tm } from '@/utils/tw-merge';
import HistoryItem from './history-item';

interface HistoryProps {
  count: number;
  onReGame?: () => void;
  onTimeTravel?: (travelIndex: number) => void;
}

function History({ count, onReGame, onTimeTravel }: HistoryProps) {
  const historyCount = Array(count).fill(null);

  return (
    <section className={tm('flex flex-col space-y-2 items-center', 'w-40')}>
      <h3 className="sr-only">게임 히스토리</h3>
      <ol className={tm('flex flex-col space-y-1')}>
        <HistoryItem onClick={onReGame}>
          게임 {count > 0 ? '재' : ''}시작!
        </HistoryItem>

        {historyCount.map((_, index) => {
          const gameIndex = index + 1;
          const itemContent = `게임 #${gameIndex < 10 ? `0${gameIndex}` : gameIndex}`;

          const handleTimeTravel = (travelIndex: number) => {
            onTimeTravel?.(travelIndex);
          };

          return (
            <HistoryItem onClick={() => handleTimeTravel(index)} key={index}>
              {itemContent}
            </HistoryItem>
          );
        })}
      </ol>
    </section>
  );
}

export default History;
