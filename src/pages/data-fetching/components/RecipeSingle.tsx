import { useEffect, useState } from 'react';
import { getRecipeById } from '../lib/recipes';
import { ChevronLeft, ChevronRight, SpinnerOne } from '@mynaui/icons-react';
import { Recipe } from '../types';
import delay from '@/utils/delay';

interface State<T> {
  loading: boolean;
  error: null | Error;
  data: null | T;
}

export default function RecipeSingle() {
  const [dataId, setDataId] = useState(1);
  const [state, setState] = useState<State<Recipe>>({
    loading: false,
    error: null,
    data: null,
  });

  useEffect(
    () => {
      // 데이터 쿼리(data query)
      // Fetch API 사용

      // 이펙트 함수 내부에 지역 변수 선언
      let ignore = false;

      // AbortController 인스턴스 생성

      // 로딩 상태로 전환
      setState((s) => ({ ...s, loading: true }));

      getRecipeById(dataId)
        .then(async (recipe) => {
          if (!ignore) {
            await delay(2000);

            setState({
              loading: false,
              data: recipe,
              error: null,
            });
          }
        })
        .catch((error: Error) => {
          if (!ignore) {
            setState({
              loading: false,
              data: null,
              error,
            });
          }
        });

      // 클린업 함수
      return () => {
        // 지역 변수 변경
        ignore = true;

        // 중복 요청 취소
      };
    },
    // 서버 데이터 요청하는 것은 최초 1회
    // 종속성 배열을 비워두면 마운트 이후 1회 실행
    [dataId]
  );

  const { error } = state;

  return (
    <>
      <div className="flex gap-2">
        <button
          type="button"
          className="cursor-pointer bg-react text-white p-2"
          aria-label="이전 레시피"
          onClick={() => setDataId((i) => i - 1)}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          className="cursor-pointer bg-react text-white p-2"
          aria-label="다음 레시피"
          onClick={() => setDataId((i) => i + 1)}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex flex-col gap-1">
        {/* <h3 className="text-xl font-medium">Loading</h3>
        <p>로딩(loading)</p>
        <pre className="rounded p-6 overflow-auto bg-react text-[#169d31] text-sm">
          {state.loading.toString()}
        </pre> */}

        <div className="flex flex-col gap-1">
          <div role="alert">
            {state.loading && (
              <SpinnerOne size={24} className="animate-spin opacity-50" />
            )}
          </div>
        </div>
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
    </>
  );
}
