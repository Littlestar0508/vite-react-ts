import Card from './card';
import { type ColorMoodItem } from '../types';
import { tm } from '@/utils/tw-merge';

interface SearchedListProps {
  list: ColorMoodItem[];
  query: string;
  onUpdate: (item: ColorMoodItem, isFavorited: boolean) => void;
}

export default function SearchedList({
  list,
  onUpdate,
  query,
}: SearchedListProps) {
  // [상태 -> 속성(읽기 전용)] list
  // [파생된 상태] filteredList = query를 기반으로 하여 list를 순회한 후, 새 리스트를 반환
  const word = query.toLowerCase() ?? '';

  const filteredList = list.filter(
    (item) =>
      item.title.includes(word) ||
      item.description.includes(word) ||
      item.tags.includes(word)
  );
  const filteredCount = filteredList.length;
  const isEmpty = filteredCount === 0;

  return (
    <section>
      <h3 className="sr-only">검색된 리스트</h3>
      {isEmpty && (
        <p className="text-lg text-slate-700 mb-5">검색된 정보가 없습니다</p>
      )}
      {!isEmpty && (
        <>
          <p className="text-lg text-slate-700 text-center mb-5">
            {filteredCount}개 검색
          </p>
          <ul className={tm('flex flex-col gap-12')} aria-hidden={isEmpty}>
            {filteredList.map((item) => (
              <Card item={item} key={item.id} onUpdate={onUpdate} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
