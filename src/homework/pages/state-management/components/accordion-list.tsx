import AccordionItem from './accordion-item';
import { AccordionOpenedCount } from './accordion-opened-count';
import { tm } from '@/utils/tw-merge';

interface AccordionListProps {
  title: string;
}

export default function AccordionList({ title }: AccordionListProps) {
  return (
    <article className={tm('flex flex-col space-y-4 items-center', 'mt-10')}>
      <h3 className="sr-only">{title}</h3>
      <AccordionOpenedCount />
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
    </article>
  );
}
