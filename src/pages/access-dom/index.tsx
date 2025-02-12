import { useEffect, useRef, useState } from 'react';

function AccessDOMPage() {
  // 컴포넌트 바디(body)
  // 렌더링 프로세스
  // 순수성(purity)
  // 상태 선언, 업데이트
  // 리액트 자동 화면 변경

  const [isParse, setIsParse] = useState(false);

  // 사이드 이펙트 처리
  // 리액트돔의 노드가 아닌, 실제 DOM 노드에 접근
  // - 이벤트 핸들러
  // - 이펙트 함수
  // - ref 콜백 함수

  // const sectionRefCallback = () => {
  //   const clearID = setInterval(() => console.log(Date.now()), 1000);

  //   return () => {
  //     clearInterval(clearID);
  //     console.log('cleanup 실행');
  //   };
  // };

  // useRef 훅 함수 DOM 노드 접근 함수 참조 객체 생성
  const abbrRef = useRef<HTMLElement>(null); // {current : null} -> {current : abbr태그}

  // 이펙트
  useEffect(() => {
    // 컴포넌트 DOM 노드 접근/조작
    if (abbrRef.current) {
      console.log(abbrRef.current);
    }
  }, []);

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  // 마크업(markup) 생성
  return (
    <section>
      <h2 className="text-2xl text-react font-medium">
        <abbr
          ref={abbrRef}
          title="Document Object Model"
          className="cursor-help no-underline"
        >
          {isParse ? 'Document Object Model' : 'DOM'}
        </abbr>{' '}
        접근/조작
      </h2>
      <button
        type="button"
        onClick={() => {
          setIsParse((p) => !p);
        }}
      >
        DOM 용어 풀이
      </button>
      <form className="my-10">
        <div>
          <label htmlFor="like-a-book" className="sr-only">
            선호 도서
          </label>
          <input
            ref={searchInputRef}
            type="search"
            id="like-a-book"
            placeholder="좋아하는 도서는?"
            className="bg-white text-react px-3 py-1.5"
          />
        </div>
        <button type="submit" className="bg-cyan-700 text-white w-20 py-2">
          저장
        </button>
      </form>
    </section>
  );
}

export default AccessDOMPage;
