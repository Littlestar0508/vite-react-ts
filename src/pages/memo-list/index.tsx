import { useEffect, useState } from 'react';
import MemoList from './components/memo-list';
import { supabase } from './lib/supabase-client';
import { PostgrestError } from '@supabase/supabase-js';
import type { MemoItem } from './types';
import delay from '@/utils/delay';
import { getMemoItemById, getMemoList } from './lib/memo-list';

export default function MemoListPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<null | MemoItem[]>(null);
  const [error, setError] = useState<null | PostgrestError>(null);

  useEffect(() => {
    let ignore = false;

    // getMemoList({ columns: 'id,title,content', from: 0, to: 1 })
    getMemoItemById(1)
      .then(({ error, data }) => {
        if (error) {
          throw error;
        }

        if (data && !ignore) {
          setData(data);
        }
      })
      .catch((error: PostgrestError) => {
        setError(error);
      })
      .finally(() => setLoading(false));

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section>
      <h1>MEMOLIST</h1>
      {loading && <div role="alert">로딩 중...</div>}
      {error && <div role="alert">{error.message}</div>}
      <MemoList items={data} />
    </section>
  );
}
