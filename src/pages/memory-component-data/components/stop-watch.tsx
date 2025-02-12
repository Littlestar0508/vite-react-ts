import { tm } from '@/utils/tw-merge';
import { useEffect, useRef, useState } from 'react';

// FPS
const FRAME = 1000 / 60;

// 함수 호출 시점의 현재 시간 값 반환 함수
const getTime = () => Date.now();

// 타임 포맷팅 함수(반환 값 : "HH:MM:SS:MS")
const formatTime = (time: number) => {
  // 밀리초(miliseconds)
  const miliseconds = parseInt(`${time % 100}`, 10);
  // 초(seconds) = 1000ms
  const seconds = parseInt(`${(time / 1000) % 60}`, 10);
  // 분(minutes) = 60s
  const minutes = parseInt(`${(time / (1000 * 60)) % 60}`, 10);
  // 시(hours) = 60m
  const hours = parseInt(`${(time / (1000 * 60 * 60)) % 60}`, 10);

  const [hh, mm, ss, ms] = [hours, minutes, seconds, miliseconds].map(
    (time) => {
      return time.toLocaleString('ko-KR', {
        minimumIntegerDigits: 2,
      });
    }
  );
  return `${hh}:${mm}:${ss}:${ms}`;
};

export default function StopWatch() {
  // 상태
  // 시작 시간
  const [startTime, setStartTime] = useState(getTime);

  // 현재 시간
  const [nowTime, setNowTime] = useState(getTime);

  // 기록 시간
  const [recordTime, setRecordTime] = useState(0);

  // 시작여부
  const [isStart, setIsStart] = useState(false);

  const resetTime = () => {
    setStartTime(getTime);
    setNowTime(getTime);
  };

  // 렌더링과 무관한 데이터 기억 (브라우저 API : 사이드 이펙트)
  const clearIntervalIdRef = useRef<ReturnType<typeof setInterval>>(undefined);

  // 이펙트 - 외부 시스템인 브라우저 API와 동기화
  useEffect(() => {
    if (isStart) {
      resetTime();
      clearIntervalIdRef.current = setInterval(() => {
        setNowTime(getTime);
      }, FRAME);
    } else {
      clearInterval(clearIntervalIdRef.current);
      // 기록 시간 업데이트
      setRecordTime((recordTime) => {
        return recordTime + nowTime - startTime;
      });
      resetTime();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStart]);

  // 이벤트 핸들러
  const handleStartOrPause = () => {
    setIsStart((s) => !s);
  };

  const handleStop = () => {
    setIsStart(false);
    setRecordTime(0);
    resetTime();
  };

  // 파생된 상태
  // 타임 포맷팅
  // "HH:MM:SS:MS"
  const timeInfo = formatTime(recordTime + nowTime - startTime);

  return (
    <article aria-label="스톱워치" className="flex flex-col gap-2">
      <time className="px-6 py-2 bg-black text-white text-2xl font-mono text-center w-80">
        {timeInfo}
      </time>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleStartOrPause}
          className={tm(
            'cursor-pointer opacity-90',
            'grid place-content-center',
            'bg-react text-white px-7 py-0.5 rounded-full font-semibold',
            'hover:opacity-100'
          )}
        >
          {isStart ? '일시정지' : '시작'}
        </button>
        <button
          type="button"
          onClick={handleStop}
          className={tm(
            'cursor-pointer opacity-90',
            'grid place-content-center',
            'bg-sky-600 text-white px-7 py-0.5 rounded-full font-semibold',
            'hover:opacity-100'
          )}
        >
          정지
        </button>
      </div>
    </article>
  );
}
