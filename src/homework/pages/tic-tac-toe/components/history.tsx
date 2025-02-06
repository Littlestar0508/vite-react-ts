import { tm } from '@/utils/tw-merge';
import HistoryItem from './history-item';

interface HistoryProps {
  count: number;
}

export default function History({ count }: HistoryProps) {
  const historyCount = Array(count).fill(null);

  return (
    <section className={tm('flex flex-col space-y-2 items-center', 'w-40')}>
      <h3>게임 히스토리</h3>
      <ol className={tm('flex flex-col space-y-1')}>
        {historyCount.map((_, index) => (
          <li key={index}>{index}</li>
        ))}
      </ol>
    </section>
  );
}
