import SearchForm from './components/search-form';
import SearchedList from './components/searched-list';

export default function SearchListPage() {
  return (
    <section>
      <h2 className="text-2xl font-medium text-react">카드 검색 리스트</h2>
      <SearchForm></SearchForm>
      <SearchedList />
    </section>
  );
}
