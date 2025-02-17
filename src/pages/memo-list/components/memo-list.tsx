import type { MemoItem } from '../types';

interface MemoListProps {
  items: MemoItem[];
}

export default function MemoList({ items }: MemoListProps) {
  return (
    <article>
      <h2>메모리스트</h2>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </article>
  );
}
