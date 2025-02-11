import Card from './card';
import { type ColorMoodItem } from '../types';
import { tm } from '@/utils/tw-merge';

interface SearchedListProps {
  list: ColorMoodItem[];
  onUpdate: (item: ColorMoodItem, isFavorited: boolean) => void;
}

export default function SearchedList({ list, onUpdate }: SearchedListProps) {
  return (
    <section>
      <h3 className="sr-only">검색된 리스트</h3>
      <ul className={tm('flex flex-col gap-12')}>
        {list.map((item) => (
          <Card item={item} key={item.id} onUpdate={onUpdate} />
        ))}
      </ul>
    </section>
  );
}
