import { useEffect, useState } from 'react';

// 브라우저 시스템(React의 외부 시스템)과 React앱 동기화(sync)

function SideEffectDemo() {
  // 반응성 데이터 : 상태 - 선언
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // 이펙트 - 이벤트 구독 / 취소
  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      setMouse({
        x: +e.clientX.toFixed(2),
        y: +e.clientY.toFixed(2),
      });
    };

    // 사이드 이펙트 처리
    // 브라우저 시스템(React의 외부 시스템)과 React 앱 동기화(sync)
    // 이벤트 구독
    globalThis.addEventListener('pointermove', handleMove);

    // 이벤트 구독 해지
    return () => {
      console.log('이벤트 구독 해지');
      globalThis.removeEventListener('pointermove', handleMove);
    };
  }, []);
  return (
    <section className="*:text-slate-800">
      <h2 className="text-2xl font-medium mb-2">React.useEffect 훅 함수</h2>
      <output className="inline-flex my-5 py-3 px-5 border-2 text-2xl">
        x={mouse.x} / y={mouse.y}
      </output>
    </section>
  );
}

export default SideEffectDemo;
