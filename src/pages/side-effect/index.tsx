import { useEffect, useState } from 'react';

// const icon = '🦝';

// 순수성, 불변성, 투명성
export default function SideEffectDemo() {
  const [message, setMessage] = useState('안녕');

  // 순수성 망가짐
  // 사이드 이펙트
  // message += icon;
  // icon += '🦝';

  // 실제 ODM 노드 접근 시도
  // 사이드 이펙트 처리
  // const buttonElement = document.querySelector('button[lang="en"]');
  // console.log(buttonElement);

  // 위와 같이 순수성, 투명성을 깨는 코드는 함수 컴포넌트 몸체에 담기면 안됨
  // 이때 React.useEffect()를 사용해 사이드 이펙트 관리
  useEffect(() => {
    console.log(
      '이펙트 콜백 함수는 useEffect() 훅 함수의 첫 번째 인수로 전달된다'
    );
    console.log(
      '이펙트 콜백 함수 내부에서는 사이드 이펙트 코드 작성이 허용된다'
    );

    // 최초 렌더링 시 마운트 이후 실행되는 콜백 함수
    console.group('Class::ComponentDidMount');
    const buttonElement = document.querySelector('button[lang="en"]');
    console.log(buttonElement);
    console.groupEnd();
  });

  return (
    <div>
      <h2 className="sr-only">SideEffectDemo</h2>
      <p className="text-5xl mt-5">{message}</p>
      <button
        type="button"
        lang="en"
        // 이벤트 핸들러도 사용자에 의한 액션에 의해 처리
        // 사이드 이펙트 처리
        onClick={() => setMessage((m) => m + '🦊')}
        className="p-2 border mt-5"
      >
        add Animal
      </button>
    </div>
  );
}
