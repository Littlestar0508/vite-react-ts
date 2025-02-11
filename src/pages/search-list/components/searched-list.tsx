import Card from './card';
import { type ColorMoodItem } from '../types';
import { tm } from '@/utils/tw-merge';

interface SearchedListProps {
  list: ColorMoodItem[];
}

export default function SearchedList({ list }: SearchedListProps) {
  return (
    <section>
      <h3 className="sr-only">검색된 리스트</h3>
      <ul className={tm('flex flex-col gap-4 ')}>
        {list.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
}
