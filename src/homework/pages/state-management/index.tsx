import { useState } from 'react';
import { tm } from '@/utils/tw-merge';

function StateManagement() {
  return (
    <section>
      <h2 className="sr-only">상태 관리</h2>
      <AccordionItem title="인생이란 무엇인가..">
        <p>현재는 오후 5시 44분..</p>
        <p>곧 수업이 끝나간다</p>
        <p>오늘은 어떤 내용을 복습할까</p>
        <p>운동도 가야지</p>
        <p>저녁도 먹어야지</p>
        <p>바쁘다 바빠 현대 사회</p>
      </AccordionItem>
      <AccordionItem title="현대 사회">
        <p>지금은 오후 5시 51분..</p>
        <p>곧 수업이 끝나간다</p>
        <p>오늘은 어떤 내용을 복습할까</p>
        <p>운동도 가야지</p>
        <p>저녁도 먹어야지</p>
        <p>바쁘다 바빠 현대 사회</p>
      </AccordionItem>
    </section>
  );
}

export default StateManagement;

function AccordionItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => setIsVisible((v) => !v);

  return (
    <div>
      <button type="button" onClick={handleToggle} className="flex mx-auto">
        {title}
      </button>
      <div className={tm({ hidden: !isVisible })}>{children}</div>
    </div>
  );
}
