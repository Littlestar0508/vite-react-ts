import { Box } from '@mynaui/icons-react';
import AnimationBox from './components/animation-box';
import StaggerList from './components/stagger-list';
import ReplayAnimation from './components/replay-animation';

export default function AnimationWithMotionPage() {
  return (
    <section className="flex flex-col gap-7 items-start">
      <h2 className="text-2xl font-medium">
        애니메이션 - Motion 라이브러리 활용
      </h2>
      <ReplayAnimation>
        <AnimationBox>
          <Box size={64} />
        </AnimationBox>
      </ReplayAnimation>

      <ReplayAnimation>
        <StaggerList />
      </ReplayAnimation>
    </section>
  );
}
