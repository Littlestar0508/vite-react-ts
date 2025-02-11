import debounce from '@/utils/debounce';
import throttle from '@/utils/throttle';
import { tm } from '@/utils/tw-merge';
import { useEffect, useId, useState } from 'react';

function SideEffectDemo() {
  const throttleTimeId = useId();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // 상태
  const [throttleTime, setThrottleTime] = useState(200); // min = 10s , max = 1000ms

  // 이벤트 핸들러 - 상태 업데이트 로직
  // JSX에 연결되는 이벤트 핸들러의 경우, Throttle과 Debounce를 사용해 이벤트 발생 빈도를 조절해야 한다면, value가 아닌 devaultValue 속성을 사용해야 한다
  const handleChangeThrottleTime = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextThrottleTime = Number(e.target.value);
      setThrottleTime(nextThrottleTime);
    },
    500
  );

  // 이펙트
  useEffect(() => {
    const handleMove = throttle((e: PointerEvent) => {
      const x = Number(e.clientX.toFixed(0));
      const y = Number(e.clientY.toFixed(0));

      setMouse({ x, y });
    }, throttleTime);

    globalThis.addEventListener('pointermove', handleMove);

    return () => {
      globalThis.removeEventListener('pointermove', handleMove);
    };
  }, [throttleTime]);

  return (
    <section className="flex flex-col items-start">
      <h2 className="text-2xl font-medium">마우스 포인터 움직임 조절</h2>

      <div className={tm('mt-5 mb-1')}>
        <label htmlFor={throttleTimeId}>이벤트 발생 빈도 조절</label>
        <div className={tm('flex gap-1')}>
          <input
            type="range"
            id={throttleTimeId}
            min={10}
            max={1000}
            defaultValue={throttleTime}
            step={50}
            className="accent-black"
            onChange={handleChangeThrottleTime}
          />
          <output>{throttleTime / 1000}s</output>
        </div>
      </div>
      <output
        className={tm(
          'inline-flex justify-center',
          'my-5 py-3 px-7 rounded-full',
          'bg-black text-white text-2xl'
        )}
      >
        x <span className="font-thin mx-3">=</span> {mouse.x}{' '}
        <span className="font-thin mx-3">/</span> y{' '}
        <span className="font-thin mx-3">=</span> {mouse.y}
      </output>
    </section>
  );
}

export default SideEffectDemo;
