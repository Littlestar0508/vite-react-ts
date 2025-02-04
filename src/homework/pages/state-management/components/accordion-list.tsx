import AccordionItem, { type AccordionItemType } from './accordion-item';
import { AccordionOpenedCount } from './accordion-opened-count';
import { tm } from '@/utils/tw-merge';
import { useState } from 'react';

interface AccordionListProps {
  title: string;
}

const INITIAL_ACCORDION_ITEMS: AccordionItemType[] = [
  {
    id: 'item-1',
    title: '인생이란 무엇인가...',
    children: (
      <>
        <p>현재는 오후 5시 44분..</p>
        <p>곧 수업이 끝나간다</p>
        <p>오늘은 어떤 내용을 복습할까</p>
        <p>운동도 가야지</p>
        <p>저녁도 먹어야지</p>
        <p>바쁘다 바빠 현대 사회</p>
      </>
    ),
  },
  {
    id: 'item-2',
    title: '현대사회',
    children: (
      <>
        <p>지금은 오후 5시 51분..</p>
        <p>곧 수업이 끝나간다</p>
        <p>오늘은 어떤 내용을 복습할까</p>
        <p>운동도 가야지</p>
        <p>저녁도 먹어야지</p>
        <p>바쁘다 바빠 현대 사회</p>
      </>
    ),
  },
];

export default function AccordionList({ title }: AccordionListProps) {
  // 하위 컴포넌트가 가진 상태를 제거하고 상위 컴포넌트로 끌어올린다
  // 다만, 하위 컴포넌트 개별 상태를 효과적으로 관리하려면 집합 형태로 관리가 필요하다
  const [items, setItems] = useState<AccordionItemType[]>(
    INITIAL_ACCORDION_ITEMS
  );

  // 상태 업데이트 함수
  // general function => 함수가 함수를 반환 (closure)
  const generateUpdateHandler = (index: number) => () => {
    // 상태 변수를 업데이트
    const nextItems = items.map((item, i) => {
      return index !== i ? item : { ...item, isOpen: !item.isOpen };
    });

    setItems(nextItems);
  };

  // 파생된 상태
  // items 배열의 원소(아이템 , 항목) 중 open 상태의 개수
  const openedItemsCount = items.reduce(
    (count, item) => count + (item.isOpen ? 1 : 0),
    0
  );

  return (
    <article className={tm('flex flex-col space-y-4 items-center', 'mt-10')}>
      <h3 className="sr-only">{title}</h3>
      <AccordionOpenedCount>{openedItemsCount}</AccordionOpenedCount>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          open={item.isOpen}
          onUpdate={generateUpdateHandler(index)}
        >
          {item.children}
        </AccordionItem>
      ))}
    </article>
  );
}
