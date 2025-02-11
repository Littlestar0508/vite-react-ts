import { tm } from '@/utils/tw-merge';
import throttle from 'lodash-es/throttle';
import { useId } from 'react';
import { deleteQueryParam, setQueryParam } from '../utils/query-params';

interface SearchFormProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchForm({ query, setQuery }: SearchFormProps) {
  const searchInputId = useId();
  const nextQuery = query.trim();

  const handleQuery = throttle((e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value)
  );

  const handleSearch = () =>
    // formData: FormData
    {
      // console.log(Object.fromEntries(formData));
      if (nextQuery.length > 0) {
        // 브라우저에 쿼리 추가
        // ?view=search-list&query='검색어'
        setQueryParam(nextQuery);
      } else {
        deleteQueryParam();
      }
    };

  return (
    <form className={tm('mb-10')} action={handleSearch}>
      <label htmlFor={searchInputId} className="sr-only">
        카드 검색
      </label>
      <div className={tm('flex gap-2')}>
        <input
          type="search"
          name="query"
          id={searchInputId}
          defaultValue={query}
          onChange={handleQuery}
          className={tm(
            'bg-white text-react font-medium',
            'rounded-md px-2.5 py-1'
          )}
        />
        <button
          type="submit"
          className={tm(
            'cursor-pointer opacity-90',
            'grid place-content-center',
            'bg-react text-white',
            'px-4 py-2 rounded-sm',
            'hover:opacity-100'
          )}
        >
          검색
        </button>
      </div>
    </form>
  );
}
