import { tm } from '@/utils/tw-merge';
import SearchForm from './components/search-form';
import SearchedList from './components/searched-list';
import colorMoodList from './data/color-mood-list';
import { type ColorMoodItem } from './types';
import { useState } from 'react';
import { getQueryParam } from './utils/search-params';

export default function SearchListPage() {
  const [list, setList] = useState<ColorMoodItem[]>(colorMoodList);
  const [query, setQuery] = useState(() => {
    // lazy initializer
    return getQueryParam() ?? '';
  });

  const handleUpdateList = (item: ColorMoodItem, isFavorited: boolean) => {
    const nextList = list.map((it) => {
      // 원본 아이템 id === 사용자가 클릭한 아이템 id
      return it.id === item.id ? { ...it, isFavorited } : it;
    });

    setList(nextList);
  };

  return (
    <section className={tm('flex flex-col gap-5 items-center')}>
      <h2 className="text-2xl font-medium text-react">카드 검색 리스트</h2>
      <SearchForm query={query} setQuery={setQuery} />
      <SearchedList list={list} query={query} onUpdate={handleUpdateList} />
    </section>
  );
}
