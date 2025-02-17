import delay from '@/utils/delay';
import { useEffect, useState } from 'react';

// interface ResponseDataType {
//   id: number;
//   name: string;
//   ingredients: string[];
//   instructions: string[];
//   prepTimeMinutes: number;
//   cookTimeMinutes: number;
//   servings: number;
//   difficulty: string;
//   cuisine: string;
//   caloriesPerServing: number;
//   tags: string[];
//   userId: number;
//   image: string;
//   rating: number;
//   reviewCount: number;
//   mealType: string[];
// }

interface State {
  loading: boolean;
  error: null | Error;
  data: null;
}

export default function DataFetchingPage() {
  // 화면 업데이트를 관리할 상태
  // loading : boolean / status : 'idle' | 'pending' | 'loading' | 'fulfilled' | 'rejected'
  const [state, setState] = useState<State>({
    loading: false,
    error: null,
    data: null,
  });

  // 이펙트(외부 시스템과 동기화)
  // API : 서버 데이터베이스에서 데이터 가져오기(비동기)
  // 데이터 가져오기 이후, 상태 업데이트 요청 -> 화면 업데이트(동기화)
  useEffect(
    () => {
      // 데이터 쿼리(data query)
      // Fetch API 사용

      // 이펙트 함수 내부에 지역 변수 선언
      let ignore = false;

      // AbortController 인스턴스 생성
      const controller = new AbortController();

      // 로딩 상태로 전환
      setState((s) => ({ ...s, loading: true }));

      const fetchData = async () => {
        try {
          await delay(2000);

          // AbortController 인스턴스 시그널을 fetch() 함수를 옵션으로 실행
          const response = await fetch('https://dummyjson.com/recipes/9', {
            signal: controller.signal,
          });
          const jsonData = await response.json();

          if (!ignore) {
            setState({
              loading: false,
              data: jsonData,
              error: null,
            });
          }
        } catch (err) {
          // 요청 중단한 경우, 오류가 아니므로 함수 중단
          if ((err as Error).name.includes('AbortError')) {
            return;
          }

          if (!ignore) {
            setState({
              loading: false,
              data: null,
              error: err as Error,
            });
          }
        }
      };

      fetchData();

      // 클린업 함수
      return () => {
        // 지역 변수 변경
        ignore = true;

        // 중복 요청 취소
        controller.abort();
      };
    },
    // 서버 데이터 요청하는 것은 최초 1회
    // 종속성 배열을 비워두면 마운트 이후 1회 실행
    []
  );

  const { error } = state;

  return (
    <section className="flex flex-col gap-5 my-5">
      <h2 className="text-2xl font-medium">데이터 가져오기</h2>

      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium">Loading</h3>
        <p>로딩(loading)</p>
        <pre className="rounded p-6 overflow-auto bg-react text-[#169d31] text-sm">
          {state.loading.toString()}
        </pre>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium">Data</h3>
        <p>성취(fulfilled)</p>
        <pre className="rounded p-6 overflow-auto bg-react text-[#27a0cc] text-sm">
          {JSON.stringify(state.data)}
        </pre>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium">Error</h3>
        <p>거부(rejected)</p>
        <pre className="rounded p-6 overflow-auto bg-react text-[#f0439f] text-sm">
          {error ? error.message : 'ERROR'}
        </pre>
      </div>
    </section>
  );
}
