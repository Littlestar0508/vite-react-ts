import { tm } from '@/utils/tw-merge';
import type { MemoItem } from '../lib/supabase-client';
import { EditOne, EditOneSolid, TrashOne } from '@mynaui/icons-react';

interface SearchedListProps {
  items: MemoItem[];
  search: string;
}

export default function SearchedList({ items, search }: SearchedListProps) {
  const searchedItems = items.filter((item) => {
    const query = search.toLowerCase();

    return (
      Boolean(item.title?.toLowerCase().includes(query)) ||
      item.content?.toLowerCase().includes(query)
    );
  });

  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-semibold text-xl">검색된 리스트</h2>
      <ul className={tm('grid xs:grid-cols-2 md:grid-cols-3 gap-2')}>
        {searchedItems.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-1.5 p-4 bg-react text-white rounded-sm"
          >
            <h3 className="font-light tracking-wide text-xl text-sky-300">
              {item.title}
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              {item.content}
            </p>
            <div role="group">
              <button
                type="button"
                aria-label="수정"
                title="수정"
                className={tm(
                  'cursor-pointer',
                  'size-6 opacity-75 hover:opacity-100'
                )}
              >
                <EditOne size={20} />
                {/* <EditOneSolid size={20} /> */}
              </button>
              <button
                type="button"
                aria-label="삭제"
                title="삭제"
                className={tm(
                  'cursor-pointer',
                  'size-6 opacity-75 hover:opacity-100'
                )}
              >
                <TrashOne size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
