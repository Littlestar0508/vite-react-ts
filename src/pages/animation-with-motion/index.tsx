import { Box, Redo } from '@mynaui/icons-react';
import AnimationBox from './components/animation-box';

import { tm } from '@/utils/tw-merge';
import { useState } from 'react';
import StaggerList from './components/stagger-list';

export default function AnimationWithMotionPage() {
  // 화면 업데이트를 위한 상태 선언
  const [replayKey, setReplayKey] = useState(0);

  // 상태 업데이트 확인을 위한 useEffect
  // useEffect(() => {
  //   console.log({ replayKey });
  // }, [replayKey]);

  const handleReplay = () => {
    setReplayKey((r) => r + 1);
  };

  return (
    <section className="flex flex-col gap-7 items-start">
      <h2 className="text-2xl font-medium">
        애니메이션 - Motion 라이브러리 활용
      </h2>
      <button
        type="button"
        onClick={handleReplay}
        className={tm(
          'cursor-pointer',
          'flex items-center gap-1.5 px-3.5 py-2 rounded-lg',
          'bg-react text-white text-sm font-semibold uppercase',
          '*:hover:animate-spin *:duration-100',
          'active:scale-95'
        )}
      >
        <Redo size={20} />
        RePlay
      </button>

      <StaggerList />

      <AnimationBox key={replayKey}>
        <Box size={64} />
      </AnimationBox>
    </section>
  );
}
