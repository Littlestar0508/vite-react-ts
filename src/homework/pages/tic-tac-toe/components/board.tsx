import { tm } from '@/utils/tw-merge';
import Grid from './grid';
import Status from './status';

export default function Board() {
  return (
    <section className={tm('flex flex-col space-y-2', 'w-50')}>
      <h3>게임 보드</h3>
      <Status />
      <Grid />
    </section>
  );
}
