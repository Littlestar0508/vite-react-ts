import SearchForm from './components/search-form';
import SearchedList from './components/searched-list';
import colorMoodList from './data/color-mood-list';
import { type ColorMoodList } from './types';
import { useState } from 'react';

export default function SearchListPage() {
  const [list] = useState<ColorMoodList>(colorMoodList);

  return (
    <section>
      <h2 className="text-2xl font-medium text-react">카드 검색 리스트</h2>
      <SearchForm></SearchForm>
      <SearchedList list={list} />
    </section>
  );
}
