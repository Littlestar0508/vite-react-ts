import Card from './card';
import { type ColorMoodItem } from '../types';

interface SearchedListProps {
  list: ColorMoodItem[];
}

export default function SearchedList({ list }: SearchedListProps) {
  return (
    <section>
      <h3>검색리스트</h3>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <Card item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
