import { useState } from 'react';
import { type AccordionItemType } from './components/accordion-item';
import { AccordionOpenedCount } from './components/accordion-opened-count';
import AccordionList from './components/accordion-list';

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
    isOpen: false,
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
    isOpen: false,
  },
];

function StateManagement() {
  // [상태]
  const [items, setItems] = useState<AccordionItemType[]>(
    INITIAL_ACCORDION_ITEMS
  );

  // [파생된 상태]
  const openedItemCount = items.reduce(
    (count, item) => count + (item.isOpen ? 1 : 0),
    0
  );

  // [이벤트 핸들러 생성 함수 -> 이벤트 핸들러 반환 -> 상태 업데이트 로직 포함]
  const generateUpdateHandler = (index: number) => () => {
    const nextItems = items.map((item, i) => {
      return index !== i ? item : { ...item, isOpen: !item.isOpen };
    });

    setItems(nextItems);
  };

  return (
    <section className="transform">
      <h2 className="sr-only">상태 관리</h2>
      <AccordionList
        title="넷플릭스 서비스"
        items={items}
        generateUpdateHandler={generateUpdateHandler}
      />
      <AccordionOpenedCount className="fixed -top-4 right-0">
        {openedItemCount}
      </AccordionOpenedCount>
    </section>
  );
}

export default StateManagement;
