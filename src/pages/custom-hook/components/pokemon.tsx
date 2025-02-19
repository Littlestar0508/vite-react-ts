import Loading from '@/pages/memo-list/components/loading';
import { tm } from '@/utils/tw-merge';
import { useEffect, useState } from 'react';
import type { Pokemon } from '../type';

function Pokemon() {
  // 포켓몬 개별 정보 가져오기
  // 로딩, 에러, 데이터 상태 선언
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Pokemon | null>(null);
  // 상태 변경 후, 화면 업데이트
  // 이펙트를 사용해 외부 시스템과 동기화
  useEffect(() => {
    let ignore = false;

    const fetchPokemon = async () => {
      setLoading(true);

      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');

        if (!response.ok) {
          throw new Error(
            'Pokemon API를 사용해 포켓몬을 불러오는데 실패했습니다.'
          );
        }

        const data = (await response.json()) as Pokemon;

        if (!ignore) {
          setLoading(false);
          setError(null);
          setData(data);
        }
      } catch (error) {
        if (!ignore) {
          setLoading(false);
          setError(error as Error);
          setData(null);
        }
      }
    };

    fetchPokemon();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <figure
      className={tm(
        'flex gap-5 justify-center',
        'border-4 border-black/10',
        'rounded-full p-6',
        'transition-colors duration-250 ease-in-out',
        'hover:border-black'
      )}
    >
      {/* <Loading size={24} label="데이터 로딩 중..." className="text-black/50" /> */}
      {loading && <Loading size={48} label="포켓몬 데이터 로딩 중..." />}
      {error && <div role="alert">{error.message}</div>}
      {data && <pre>{JSON.stringify(data.cries, null, 2)}</pre>}
    </figure>
  );
}

export default Pokemon;
