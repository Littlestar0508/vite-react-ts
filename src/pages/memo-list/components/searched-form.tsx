import { tm } from '@/utils/tw-merge';
import { useId } from 'react';

interface SearchFormProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchedForm({ setSearch }: SearchFormProps) {
  const searchId = useId();

  const handleSearch = (formData: FormData) => {
    const search = (formData.get('search') as string).trim();

    if (search.length === 0) {
      return alert('검색어를 입력해주세요!');
    }

    setSearch(search);
  };

  const handleReset = () => {
    setSearch('');
  };

  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-semibold text-xl">검색 폼</h2>
      <form
        action={handleSearch}
        onReset={handleReset}
        className={tm('flex gap-1 items-center')}
      >
        <label htmlFor={searchId} className="sr-only">
          검색
        </label>
        <input
          type="search"
          name="search"
          id={searchId}
          placeholder="제목 또는 내용 검색"
          className={tm(
            'bg-react text-sky-300 placeholder:text-sky-200',
            'px-2.5 py-1 rounded-sm'
          )}
        />
        <div role="group" className={tm('flex')}>
          <button
            type="submit"
            className={tm(
              'cursor-pointer px-2 py-1 bg-react text-white',
              'rounded-l-sm',
              'opacity-75 hover:opacity-100'
            )}
          >
            검색
          </button>
          <button
            type="reset"
            className={tm(
              'cursor-pointer px-2 py-1 bg-black/20 text-black',
              'rounded-r-sm',
              'opacity-75 hover:opacity-100'
            )}
          >
            초기화
          </button>
        </div>
      </form>
    </section>
  );
}
