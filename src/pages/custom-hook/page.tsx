import { useEffect, useState } from 'react';
import Loading from '../memo-list/components/loading';
import Pokemon from './components/pokemon';

interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: PokemonSimpleData[];
}

interface PokemonSimpleData {
  name: string;
  url: string;
}

function CustomHookPage() {
  // 포켓몬 집합 정보 가져오기
  // 'https://pokeapi.co/api/v2/pokemon?offset=3&limit=10'

  // 로딩, 에러, 데이터 상태 선언
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<PokemonList | null>(null);

  // 선언된 상태가 변경되면 화면 업데이트
  // 데이터를 가져오려면 이펙트가 필요 (외부 시스템과 동기화)
  useEffect(() => {
    let ignore = false;

    const fetchPokemonList = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?offset=3&limit=10'
        );

        if (!response.ok) {
          throw new Error(
            'Pokemon API를 사용해 포켓몬 리스트를 불러오는데 실패했습니다.'
          );
        }

        const data = (await response.json()) as PokemonList;

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

    fetchPokemonList();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <title>커스텀 훅</title>
      <section className="flex flex-col gap-2">
        <h2 className="font-medium text-2xl mb-6">
          사용자 정의 훅 함수(Custom Hook) 활용
        </h2>

        <h3 className="text-xl font-medium">
          페이지에서 데이터 요청/응답 후, 화면 업데이트
        </h3>
        {loading && (
          <Loading size={48} label="포켓몬 리스트 데이터 로딩 중..." />
        )}
        {error && <div role="alert">{error.message}</div>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

        <hr className="my-10" />

        <h3 className="text-xl font-medium mb-6">
          컴포넌트에서 데이터 요청/응답 후, 화면 업데이트
        </h3>
        <Pokemon />
      </section>
    </>
  );
}

export default CustomHookPage;
