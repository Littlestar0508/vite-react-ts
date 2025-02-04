import { tm } from '@/utils/tw-merge';

export default function Cell() {
  return (
    <button type="button" className={tm('size-12 border rounded-md')}>
      셀
    </button>
  );
}
