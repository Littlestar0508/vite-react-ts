import { useState } from 'react';
import type { MemoItem } from '../lib/supabase-client';
import CreateForm from './create-form';
import SearchedForm from './searched-form';
import SearchedList from './searched-list';

interface MemoListProps {
  items: MemoItem[];
}

function MemoList({ items }: MemoListProps) {
  const [search, setSearch] = useState('');

  return (
    <div>
      {/* CreateForm */}
      <CreateForm />
      <hr className="my-5 border-black/40" />
      {/* SearchedForm */}
      <SearchedForm setSearch={setSearch} />
      <hr className="my-5 border-black/40" />
      {/* SearchList */}
      <SearchedList items={items} search={search} />
    </div>
  );
}

export default MemoList;
