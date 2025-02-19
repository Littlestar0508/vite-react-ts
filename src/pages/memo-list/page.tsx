import { useEffect, useState } from 'react';
import type { PostgrestError } from '@supabase/supabase-js';
import type { MemoItem } from './lib/supabase-client';
import MemoList from './components/memo-list';
import Loading from './components/loading';
import { getMemoList, subscribe } from './lib/api';
import useDocumentTitle from '@/hooks/use-document-title';

function MemoListPage() {
  useDocumentTitle('메모리스트 with Supabase');

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<null | MemoItem[]>(null);
  const [error, setError] = useState<null | PostgrestError>(null);

  useEffect(() => {
    let ignore = false;

    getMemoList()
      .then(({ error, data }) => {
        if (error) {
          throw error;
        }

        if (data && !ignore) {
          setData(data);
          setLoading(false);
        }
      })
      .catch((error: PostgrestError) => {
        setError(error);
        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    // 리얼타임 데이터베이스 변경을 구독
    const channel = subscribe((payload) => {
      console.log(payload);

      // 추가(INSERT), 수정(UPDATE), 삭제(DELETE)
      switch (payload.eventType) {
        case 'INSERT': {
          setData((data) => {
            const nextData = [...data!, payload.new];
            return nextData as MemoItem[];
          });
          break;
        }
        case 'UPDATE': {
          setData((data) => {
            const nextData = data!.map((item) =>
              item.id === payload.new.id ? payload.new : item
            );
            return nextData as MemoItem[];
          });
          break;
        }
        case 'DELETE': {
          setData((data) => {
            const nextData = data!.filter((item) => item.id !== payload.old.id);
            return nextData;
          });
        }
      }
    });

    return () => {
      // 리얼타임 데이터베이스 변경을 구독 취소
      channel.unsubscribe();
    };
  }, []);

  return (
    <>
      {/* useDocumentTitle 커스텀 훅을 사용하지 않고 페이지 별 title 지정 가능 */}
      {/* 만약 title 태그를 사용하려면 html문서에서 title을 제거해야한다 */}
      {/* <title>메모리스트 with Supabase | 리액트</title> */}
      <section>
        <h1 className="sr-only">메모 리스트 (with Supabase)</h1>
        {loading && <Loading />}
        {error && <div role="alert">{error.message}</div>}
        {data && <MemoList items={data} />}
      </section>
    </>
  );
}

export default MemoListPage;
